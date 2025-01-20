import React from 'react'

interface TitleProps {
  title: string
  description?: string
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className='flex flex-col p-5 text-lg '>
      <strong className='text-black mb-2'>{title}</strong>
      {description ? <span>{description}</span> : null}
    </div>
  )
}

export default Title
