import React from 'react'

interface VoiceTextProps {
  text: string
}
const VoiceText = ({ text }: VoiceTextProps) => {
  return (
    <div style={{ padding: '20px', color: '#4e5968' }}>
      <span>{text}</span>
    </div>
  )
}

export default VoiceText
