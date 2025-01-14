'use client'

import styles from './style.module.scss'
import FloatingButton from '@/app/home/components/floating-button'
import Mic from '/public/icon/icon-mic.svg'
import React, {useContext} from 'react'
import {AiContext} from "@/app/ai/_hooks/useAiContext";
import {getBankIcon} from '@/utils/Bank'

const Page = () => {
    const { scene, selectedTo } = useContext(AiContext)

    if (!scene) return null
    return <div className={styles.container}>
        <div className={styles.wrapper}>
            <section className={styles.workSection}>
                <div className={styles.header}>김손자에게 100,000원 보냈어요.</div>
                <button className={styles.account}>
                    {getBankIcon(selectedTo.accountType)}
                    <div className={styles.accountInfo}>
                        <div className={styles.name}>{selectedTo.name}</div>
                        <div className={styles.info}>{selectedTo.accountType} {selectedTo.accountNumber}</div>
                    </div>
                </button>
            </section>
            <FloatingButton>
                <Mic/>
            </FloatingButton>
        </div>
    </div>
}

export default Page