'use client'

import {useRef} from 'react'
import useScene from '@/_hooks/useScene'

const Page = () => {
    const videoRef = useRef(null) // 비디오 요소 참조
    const {} = useScene(videoRef)

    return (
        <video ref={videoRef} id="sm-video" width="100%" height="100%" playsInline className="h-dvh"/>
    )
}

export default Page
