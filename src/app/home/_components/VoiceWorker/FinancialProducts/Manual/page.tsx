'use client'

import styles from './style.module.scss'
import FloatingButton from '@/app/home/_components/VoiceWorker/AccountTransfer/floating-button'
import DownloadIcon from '/public/icon/download.svg'
import CloseIcon from '/public/icon/nav-close.svg'
import { useState, useRef } from 'react'
import { usePdf } from '@mikecousins/react-pdf'
import ArrowUp from '/public/icon/arrow-up.svg'
import ArrowDown from '/public/icon/arrow-down.svg'
import Button from '@/_components/common/Button/page'

interface ManualProps {
  onClickClose?: () => void
  isShowMic: boolean
  isShowButton: boolean
}

const Manual = ({ onClickClose, isShowMic, isShowButton }: ManualProps) => {
  const [page, setPage] = useState(1)
  const canvasRef = useRef(null)

  usePdf({
    file: '/Document.Sample.pdf',
    page,
    canvasRef,
  })

  return (
    <div
      style={{
        width: '100%',
        padding: '12px',
        color: 'black',
        height: '76dvh',
      }}
      className='mb-3'
    >
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        className={styles.navSection}
      >
        <div className={styles.title}>상품설명서</div>
        <div className={styles.icons}>
          <DownloadIcon />
        </div>
      </section>
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '16px',
          background: 'var(--Neutral-Tertiary, #F2F4F6)',
          borderRadius: '12px',
          padding: '16px 20px',
        }}
        className={styles.viewNav}
      >
        <div>가입안내</div>
        <div>1/4</div>
      </section>

      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          padding: '4px',
          background: 'var(--Border-Default, #D6DBE1)',
        }}
        className={styles.viewer}
      />
      <div
        style={{
          position: 'fixed',
          bottom: '3%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '335px',
          width: '100%',
          padding: '0 20px',
        }}
      >
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            paddingLeft: '16px',
            background: 'var(--Black-Default, #000)',
            color: 'var(--White-Default, #FFF)',
            fontSize: '14px',
            fontStyle: 'normal',
            fontWeight: 500,
            borderRadius: '8px',
            height: '48px',
          }}
        >
          <div className={styles.comment}>설명서를 꼼꼼히 읽어주세요</div>
          <div style={{ display: 'flex' }} className={styles.pageBtnGroup}>
            <button
              style={{ fill: 'white', padding: '12px' }}
              className={styles.pageBtn}
            >
              <ArrowUp />
            </button>
            <button
              style={{ fill: 'white', padding: '12px' }}
              className={styles.pageBtn}
            >
              <ArrowDown />
            </button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Manual
