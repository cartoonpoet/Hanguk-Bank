import Title from '@/_components/common/BottomSheet/components/title'
import TransferContainer from '@/_components/common/BottomSheet/components/transfer-container'

const CounselList = () => {
  const data = [
    {
      id: 1,
      title: '전화 상담',
      description: '전화로 상담받기',
    },
    {
      id: 2,
      title: '챗봇 상담',
      description: '채팅으로 즉시 상담받기',
    },
  ]
  return (
    <>
      <Title title='상담 방법을 선택해 주세요.' />
      {data.map((item) => {
        return (
          <TransferContainer className='flex flex-col gap-2 p-5 mb-3 rounded-2xl'>
            <div className='flex gap-2 text-lg'>
              <strong className='text-[#007BFF]'>{`0${item.id}`}</strong>
              <strong className='text-black'>{item.title}</strong>
            </div>
            <div className='flex text-base'>
              <span className='text-[#6B7684]'>{item.description}</span>
            </div>
          </TransferContainer>
        )
      })}
    </>
  )
}

export default CounselList
