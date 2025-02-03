import React from 'react'

interface TitleProps {
  title: string
  description?: string
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className='flex flex-col p-5 text-lg text-black'>
      <strong className='mb-2 font-bold'>{title}</strong>
      {description ? <span>{description}</span> : null}
    </div>
  )
}

export default Title
