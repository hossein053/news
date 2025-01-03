import { NextRequest, NextResponse } from 'next/server'

const authPaths = ['/']

export function middleware (request: NextRequest) {
  const url = request.nextUrl.pathname

  if (url === '/' || !authPaths.some(path => url.startsWith(path))) {
    return NextResponse.redirect(new URL('/news', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', '/']
}
