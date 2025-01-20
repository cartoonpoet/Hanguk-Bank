import React from 'react'

interface TitleProps {
  title: string
  description?: string
}

const Title = ({ title, description }: TitleProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '20px',
        fontSize: '18px',
      }}
    >
      <strong style={{ color: 'black', marginBottom: '8px' }}>{title}</strong>
      {description ? <span>{description}</span> : null}
    </div>
  )
}

export default Title
