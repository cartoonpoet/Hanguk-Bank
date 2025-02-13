import { CopyIcon } from '@/_assets/icons'
import Buttons from '@/_components/Inquiry/SelectAccountDetail/_components/Buttons'
import React from 'react'

const AccountInfo = () => {
  return <main className="flex flex-col p-5">
    <section className="flex flex-row gap-1 items-center text-base font-medium text-Neutral-Default">한국은행
      123456-78-910112 <CopyIcon />
    </section>
    <section className="text-[32px] font-bold">
      12,345,600원
    </section>
    <Buttons/>
  </main>
}

export default AccountInfo