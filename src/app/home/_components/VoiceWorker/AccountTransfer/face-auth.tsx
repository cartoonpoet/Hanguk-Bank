'use client'

import Image from 'next/image'
import faceImg from '../../../../../_assets/images/face-auth.webp'

const FaceAuth = () => {
  return (
    <Image
      src={faceImg}
      alt='Face auth'
      style={{
        position: 'absolute',
        zIndex: 999,
        //top: '100px',
        //left: '0',
        //width: '100%',
        //height: '100%',
        // objectFit: 'cover',
      }}
    />
  )
}

export default FaceAuth
