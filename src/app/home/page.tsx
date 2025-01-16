'use client'

import styles from './_style/page.module.scss'
import Card from '@/_components/common/Card/Page'
import List from '@/_components/common/List/page'
import BottomSheet from '@/_components/common/BottomSheet/page'
import VoiceWorkStepper from './components/voice-work-stepper'
import VoiceButton from './components/voice-button'
import {useState} from 'react'
import useCommonStore from "@/_hooks/useCommonStore";
import AiButton from "@/app/home/components/ai-button";
import { useRouter } from "next/navigation";
import {URL} from "@/_constants/url";

const Home = () => {
    const {mode} = useCommonStore();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const open = () => setIsOpen(true)
    const close = () => setIsOpen(false)
    return (
        <>
            <div className={styles.container}>
                <header className={styles.user}>
                    <div>김금융 님</div>
                    {mode === 'voice' && <VoiceButton onClick={open}/>}
                    {mode === 'ai' && <AiButton onClick={() => router.push(URL.ai)}/>}
                </header>
                <Card/>
                <section className={styles.listContainer}>
                    <List/>
                </section>
            </div>
            <BottomSheet isOpen={isOpen} onClose={close}>
                <VoiceWorkStepper step='ACCOUNT_LIST'/>
            </BottomSheet>
        </>
    )
}
export default Home
