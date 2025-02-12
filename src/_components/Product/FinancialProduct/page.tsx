'use client'

import NavBar from '@/_components/common/NavBar/page'
import { URL } from '@/_constants/url'
import React from 'react'
import { useRouter } from 'next/navigation'
import SearchBar from '@/_components/Product/FinancialProduct/_components/SearchBar'
import Tags from '@/_components/Product/FinancialProduct/_components/Tags'
import Banner from '@/_components/Product/FinancialProduct/_components/Banner'
import PaginationDots from '@/_components/Product/FinancialProduct/_components/PaginationDots'
import Banners from '@/_components/Product/FinancialProduct/_components/Banners'
import TopSection from '@/_components/Product/FinancialProduct/_components/TopSection'
import BottomBanner from '@/_components/Product/FinancialProduct/_components/BottomBanner'

const FinancialProduct = () => {
  const router = useRouter()

  return <main className="h-dvh flex flex-col">
    <div className="flex flex-col px-5">
      <NavBar leftControl="icon" rightControl="icon" title="금융상품" onClickBack={() => router.replace(URL.home)} />
    </div>
    <section className="p-5">
      <SearchBar />
    </section>
    <Tags />
    <Banner />
    <PaginationDots />
    <Banners />
    <TopSection />
    <BottomBanner />
  </main>
}

export default FinancialProduct