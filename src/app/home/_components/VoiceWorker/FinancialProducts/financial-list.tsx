import Title from '@/_components/common/BottomSheet/components/title'
import TransferContainer from '@/_components/common/BottomSheet/components/transfer-container'
import VoiceText from '@/_components/common/BottomSheet/components/voiceText'

const FinancialList = () => {
  const data = [
    {
      id: 1,
      title: '스마트적금',
      description: '신규 및 장기미거래 고객님께 우대 이율 제공',
      rate: '8.0',
    },
    {
      id: 2,
      title: '특별한적금',
      description: '내가 원하는 날을 만기일로 지정하고 변경 가능',
      rate: '6.0',
    },
    {
      id: 3,
      title: '내맘대로적금',
      description: '상품에 관한 다양한 옵션 제공, 상품 요건 설계',
      rate: '3.5',
    },
  ]
  return (
    <>
      <Title title='고객님께 적합한 자유적립식 적금 상품을 추천해 드릴게요' />
      {data.map((item) => {
        return (
          <TransferContainer
            key={item.id}
            className='flex flex-col gap-4 p-5 mb-3 rounded-2xl'
          >
            <div className='flex justify-between gap-2 text-lg'>
              <div className='flex gap-2'>
                <strong className='text-[#007BFF]'>{`0${item.id}`}</strong>
                <strong className='text-black'>{item.title}</strong>
              </div>
              <div>
                <strong className='text-[#007BFF]'>{`최고 연 ${item.rate}%`}</strong>
              </div>
            </div>
            <div className='flex text-base'>
              <span className='text-[#6B7684]'>{item.description}</span>
            </div>
          </TransferContainer>
        )
      })}
      {/* {speechText && <VoiceText text={speechText ? `"${speechText}"` : ''} />} */}
    </>
  )
}

export default FinancialList
