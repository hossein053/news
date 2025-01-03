import { SVGProps } from 'react'

const Delete = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    viewBox='0 0 1.5 1.5'
    data-name='Flat Color'
    xmlns='http://www.w3.org/2000/svg'
    className='icon flat-color'
    {...props}
  >
    <path
      d='M1 .5A.06.06 0 0 1 .938.438V.25H.563v.188a.062.062 0 0 1-.125 0V.25A.125.125 0 0 1 .563.125h.375a.125.125 0 0 1 .125.125v.188A.06.06 0 0 1 1 .5'
      style={{
        fill: '#2ca9bc'
      }}
    />
    <path
      d='M1.25.375h-1A.062.062 0 0 0 .25.5h.062v.75a.125.125 0 0 0 .125.125h.625a.125.125 0 0 0 .126-.125V.5h.062a.062.062 0 0 0 0-.125'
      style={{
        fill: '#fff'
      }}
    />
    <path
      data-name='secondary'
      d='M.625 1.125a.06.06 0 0 1-.062-.062V.688a.062.062 0 0 1 .125 0v.375a.06.06 0 0 1-.063.062m.313-.062V.688a.062.062 0 0 0-.125 0v.375a.062.062 0 0 0 .125 0'
      style={{
        fill: '#2ca9bc'
      }}
    />
  </svg>
)

const Edit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={45}
    height={45}
    viewBox='0 0 45 45'
    fill='none'
    stroke='#fff'
    strokeWidth={4}
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M20.625 7.5H7.5A3.75 3.75 0 0 0 3.749 11.25v26.25a3.75 3.75 0 0 0 3.75 3.75H33.75a3.75 3.75 0 0 0 3.75 -3.75V24.376' />
    <path d='M34.688 4.687a3.977 3.977 0 0 1 5.625 5.625L22.5 28.125l-7.5 1.875L16.875 22.5z' />
  </svg>
)
const More = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={45}
    height={45}
    viewBox='0 0 57.6 57.6'
    className='icon'
    xmlns='http://www.w3.org/2000/svg'
    transform='rotate(180)'
    {...props}
  >
    <path
      d='M28.8 57.6C12.921 57.6 0 44.679 0 28.8S12.921 0 28.8 0s28.8 12.921 28.8 28.8-12.921 28.8-28.8 28.8m0-52.802C15.564 4.798 4.798 15.564 4.798 28.8S15.564 52.802 28.8 52.802 52.802 42.036 52.802 28.8 42.036 4.798 28.8 4.798'
      fill='#fff'
    />
    <path
      d='M26.398 39.6a2.4 2.4 0 0 1-1.699-.703 2.394 2.394 0 0 1 0-3.392l6.705-6.705-6.699-6.705a2.394 2.394 0 0 1 0-3.392 2.394 2.394 0 0 1 3.392 0l8.398 8.398a2.394 2.394 0 0 1 0 3.392l-8.398 8.404a2.4 2.4 0 0 1-1.699.703'
      fill='#fff'
    />
  </svg>
)
export const Svg = {
  Delete,
  Edit,
  More
}
