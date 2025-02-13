'use client'

import NavBar from '@/_components/common/NavBar/page'
import { ProductSteps } from '@/_constants/mode'
import React, { use } from 'react'
import { ProductContext } from '@/_contexts/useProduct'
import TextField from '@/_components/Product/SavingsSignUp/TextField/page'
import Header from '@/_components/Product/SavingsSignUp/Header/page'
import Accordion from '@/_components/Product/SavingsSignUp/Accordion/page'
import ButtonSection from '@/_components/Product/SavingsSignUp/ButtonSection/page'
import Manual from '@/_components/Manual/page'

const SavingsSignUp = () => {
  const { setStep, setIsShowManual, isShowManual } = use(ProductContext)

  const onClickClose = () => setIsShowManual(false)

  if (isShowManual) return <Manual onClickClose={onClickClose} isShowMic={false} isShowButton/>
  return <main className="h-dvh flex flex-col">
    <div className="flex flex-col px-5">
      <NavBar leftControl="icon" rightControl="icon" title="적금 가입" onClickBack={() => setStep(ProductSteps[1])} />
    </div>
    <TextField />
    <Header />
    <Accordion />
    <ButtonSection />
  </main>
}

export default SavingsSignUp