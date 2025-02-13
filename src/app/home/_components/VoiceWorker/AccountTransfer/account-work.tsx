'use client'

import Title from '@/_components/common/BottomSheet/components/title'
import AccountList from './account-list'

const AccountWork = () => {
  // const { scene, selectedTo, work } = useContext(AiContext)

  // useEffect(() => {
  //   if (!scene) return

  //   setTimeout(() => {
  //     handleSpeak(scene, '김손자에게 십만원 돈 보내줘.', work)
  //   }, DELAY)
  // }, [])

  return (
    <>
      <Title title='누구에게 보낼까요?' />
      <div className='flex mb-1'>
        <span className='text-black text-lg'>최근 이체 계좌</span>
      </div>
      <AccountList />
    </>
  )
}

export default AccountWork
