import React from 'react'
import styles from '../../_style/page.module.scss'
import Mic from '/public/icon/icon-reverse-mic.svg'

interface VoiceButtonProps {
  onClick: () => void
}

const VoiceButton = ({ onClick }: VoiceButtonProps) => {
  return (
    <div className={styles.voiceButton} onClick={onClick}>
      <Mic />
      <span>음성</span>
    </div>
  )
}

export default VoiceButton
