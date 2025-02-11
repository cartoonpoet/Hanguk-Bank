import ShinHan from '/public/bank/shinhan.svg'
import KbStar from '/public/bank/kbstar.svg'
import KaKaoBank from '/public/bank/kakaobank.svg'
import WoriBank from '/public/bank/wori.svg'
import React from 'react'
import { BillIcon, HouseUser, HyundaiIcon, MoneyIcon } from '@/_assets/icons'

export const getBankIcon = (accountType: string) => {
  switch (accountType) {
    case '신한':
      return <ShinHan />
    case '국민':
      return <KbStar />
    case '카카오뱅크':
      return <KaKaoBank />
    case '우리':
      return <WoriBank />
    case '한국':
      return <div className="flex w-10 h-10 bg-Brand-Default justify-center items-center rounded-full"><MoneyIcon /></div>
    case '관리비':
      return <div className="flex w-10 h-10 bg-[#FF8C00] justify-center items-center rounded-full"><HouseUser/></div>
    case '환급금':
      return <div className="flex w-10 h-10 bg-Neutral-Default justify-center items-center rounded-full"><BillIcon/></div>
    case '현대':
      return <HyundaiIcon/>
  }
}

export const numberToKorean = (number: number) => {
  const inputNumber = number
  const unitWords = ['', '만', '억', '조', '경']
  const splitUnit = 10000
  const splitCount = unitWords.length
  const resultArray = []
  let resultString = ''

  for (let i = 0; i < splitCount; i++) {
    let unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i)
    unitResult = Math.floor(unitResult)
    if (unitResult > 0) {
      resultArray[i] = unitResult
    }
  }

  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue
    resultString = String(resultArray[i]) + unitWords[i] + resultString
  }

  return resultString
}