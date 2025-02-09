import React from 'react'
import styles from '../../_style/page.module.scss'
import AI from '/public/icon/icon-ai.svg'

interface AiButtonProps {
  onClick: () => void
}
const AiButton = ({ onClick }: AiButtonProps) => {
  return (
    <div className={styles.voiceButton} onClick={onClick}>
      <AI />
      <span>AI 은행원</span>
    </div>
  )
}

export default AiButton
