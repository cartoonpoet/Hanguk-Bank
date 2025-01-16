import React from 'react'

interface TitleProps {
  title: string
}

const Title = ({ title }: TitleProps) => {
  return (
    <div style={{ padding: '20px', fontSize: '18px' }}>
      <strong style={{ color: 'black' }}>{title}</strong>
    </div>
  )
}

export default Title
