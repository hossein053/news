import { NextRequest, NextResponse } from 'next/server'
import dbConnect from '@/app/api/library/db'
import { INews, News } from '@/app/api/models/News'
import path from 'path'
import fs from 'fs'

export async function POST (req: NextRequest) {
  await dbConnect()

  try {
    const formData = await req.formData()
    const body = Object.fromEntries(formData)

    const title = body.title as string
    const description = body.description as string
    const lable = body.lable as string
    const image = formData.get('image') as File

    let imageUrl = null

    if (image && image instanceof File) {
      const uploadDir = path.join(process.cwd(), 'public/uploads')
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true })
      }

      const safeFileName = `${Date.now()}-${image.name.replace(
        /[^a-zA-Z0-9.]/g,
        '_'
      )}`
      const filePath = path.join(uploadDir, safeFileName)
      const buffer = Buffer.from(await image.arrayBuffer())

      fs.writeFileSync(filePath, buffer)
      imageUrl = `/uploads/${safeFileName}`
    }

    const newNews: INews = new News({
      title,
      description,
      lable,
      image: imageUrl
    })

    await newNews.save()

    return NextResponse.json(
      { message: 'ثبت خبر با موفقیت انجام شد', news: newNews },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error uploading image or saving data:', error)
    return NextResponse.json(
      { message: 'مشکلی در ثبت خبر وجود دارد' },
      { status: 500 }
    )
  }
}

export async function GET (req: NextRequest) {
  await dbConnect()
  try {
    const news = await News.find({}).lean()

    const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}`

    const updatedNews = news.map(item => ({
      ...item,
      image: item.image ? `${baseUrl}${item.image}` : null
    }))

    return NextResponse.json(updatedNews, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: 'خطا در دریافت لیست اخبار' },
      { status: 500 }
    )
  }
}

export async function DELETE (req: NextRequest) {
  await dbConnect()

  try {
    const { id } = await req.json()

    const news = await News.findById(id)

    if (!news) {
      return NextResponse.json(
        { message: 'خبر مورد نظر پیدا نشد' },
        { status: 404 }
      )
    }

    if (news.image) {
      const imagePath = path.join(process.cwd(), 'public', news.image)
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath)
      }
    }

    await News.findByIdAndDelete(id)

    return NextResponse.json(
      { message: 'خبر با موفقیت حذف شد' },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: 'مشکلی در حذف خبر وجود دارد' },
      { status: 500 }
    )
  }
}

export async function PUT(req: NextRequest) {
  await dbConnect();

  try {
    const formData = await req.formData();
    const body = Object.fromEntries(formData);

    const id = body.id as string;
    const title = body.title as string;
    const description = body.description as string;
    const lable = body.lable as string;
    const image = formData.get('image') as File;

    const existingNews = await News.findById(id);
    if (!existingNews) {
      return NextResponse.json(
        { message: 'خبر یافت نشد' },
        { status: 404 }
      );
    }

    let imageUrl = existingNews.image;
    if (image && image instanceof File) {
      if (existingNews.image) {
        const oldImagePath = path.join(process.cwd(), 'public', existingNews.image);
        if (fs.existsSync(oldImagePath)) {
          fs.unlinkSync(oldImagePath);
        }
      }

      const uploadDir = path.join(process.cwd(), 'public/uploads');
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }

      const safeFileName = `${Date.now()}-${image.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const filePath = path.join(uploadDir, safeFileName);
      const buffer = Buffer.from(await image.arrayBuffer());

      fs.writeFileSync(filePath, buffer);
      imageUrl = `/uploads/${safeFileName}`;
    }

    existingNews.title = title || existingNews.title;
    existingNews.description = description || existingNews.description;
    existingNews.lable = lable || existingNews.lable;
    existingNews.image = imageUrl;

    await existingNews.save();

    return NextResponse.json(
      { message: 'خبر با موفقیت ویرایش شد', news: existingNews },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating news:', error);
    return NextResponse.json(
      { message: 'خطایی در ویرایش خبر رخ داد' },
      { status: 500 }
    );
  }
}