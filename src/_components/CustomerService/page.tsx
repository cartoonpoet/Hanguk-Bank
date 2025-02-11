'use client'
import { CustomerServiceSteps } from '@/_constants/mode'
import React, { use } from 'react'
import CustomerServiceContextProvider, { CustomerServiceContext } from '@/_contexts/useCustomerService'
import HelpCenter from '@/_components/CustomerService/HelpCenter/page'
import Image from 'next/image'
import CallingImage from '@/_assets/images/calling.png'
import ChatBot from '@/_components/ChatBot/page'

const CustomerService = () => {
  const { Funnel, Step } = use(CustomerServiceContext)
  return <Funnel>
    <Step name={CustomerServiceSteps[0]}><HelpCenter /></Step>
    <Step name={CustomerServiceSteps[1]}><Image src={CallingImage} alt="이미지" /></Step>
    <Step name={CustomerServiceSteps[2]}><ChatBot/></Step>
  </Funnel>

}

const Page = () => {
  return <CustomerServiceContextProvider><CustomerService /></CustomerServiceContextProvider>
}

export default Page