'use client'

import styles from './style.module.scss'
import FloatingButton from '@/app/home/_components/VoiceWorker/AccountTransfer/floating-button'
import DownloadIcon from '/public/icon/download.svg'
import CloseIcon from '/public/icon/nav-close.svg'
import { useState, useRef } from 'react'
import { usePdf } from '@mikecousins/react-pdf'
import ArrowUp from '/public/icon/arrow-up.svg'
import ArrowDown from '/public/icon/arrow-down.svg'

interface ManualProps {
  onClickClose?: () => void
  isShowMic: boolean
}

const Manual = ({ onClickClose, isShowMic }: ManualProps) => {
  const [page, setPage] = useState(1)
  const canvasRef = useRef(null)

  usePdf({
    file: '/Document.Sample.pdf',
    page,
    canvasRef,
  })

  return (
    <main className={styles.container}>
      <section className={styles.navSection}>
        <div className={styles.title}>상품설명서</div>
        <div className={styles.icons}>
          <DownloadIcon />
          <CloseIcon onClick={onClickClose} />
        </div>
      </section>
      <section className={styles.viewNav}>
        <div>가입안내</div>
        <div>1/4</div>
      </section>
      <canvas ref={canvasRef} className={styles.viewer} />
      <div className={styles.btn}>
        <nav className={styles.pageNav}>
          <div className={styles.comment}>설명서를 꼼꼼히 읽어주세요</div>
          <div className={styles.pageBtnGroup}>
            <button className={styles.pageBtn}>
              <ArrowUp />
            </button>
            <button className={styles.pageBtn}>
              <ArrowDown />
            </button>
          </div>
        </nav>
        {isShowMic && <FloatingButton />}
      </div>
    </main>
  )
}

export default Manual
