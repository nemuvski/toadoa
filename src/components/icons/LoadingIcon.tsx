import React from 'react'

const LoadingIcon: React.FC<React.HTMLAttributes<SVGElement>> = (props) => (
  <svg width='38' height='38' viewBox='0 0 38 38' {...props}>
    <defs>
      <linearGradient id='a' x1='8.042%' x2='65.682%' y1='0%' y2='23.865%'>
        <stop offset='0%' stopColor='currentColor' stopOpacity='0' />
        <stop offset='63.146%' stopColor='currentColor' stopOpacity='0.631' />
        <stop offset='100%' stopColor='currentColor' />
      </linearGradient>
    </defs>
    <g fill='none' fillRule='evenodd' transform='translate(1 1)'>
      <path stroke='url(#a)' strokeWidth='2' d='M36 18c0-9.94-8.06-18-18-18'>
        <animateTransform
          attributeName='transform'
          dur='0.9s'
          from='0 18 18'
          repeatCount='indefinite'
          to='360 18 18'
          type='rotate'
        />
      </path>
      <circle cx='36' cy='18' r='1' fill='currentColor'>
        <animateTransform
          attributeName='transform'
          dur='0.9s'
          from='0 18 18'
          repeatCount='indefinite'
          to='360 18 18'
          type='rotate'
        />
      </circle>
    </g>
  </svg>
)

export default LoadingIcon
