'use client'

import {useRef} from 'react'
import styles from '../../_style/page.module.scss'
import useScene from '@/app/ai/_hooks/useScene'

const Page = () => {
    const videoRef = useRef(null) // 비디오 요소 참조
    const {} = useScene(videoRef)

    return (
        <div className={styles.container}>
            <video ref={videoRef} id="sm-video" width="100%" height="100%" playsInline/>
        </div>
    )
}

export default Page
