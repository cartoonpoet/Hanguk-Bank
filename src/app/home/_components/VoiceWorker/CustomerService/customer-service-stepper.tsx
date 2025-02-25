import ConsultationType from './consultation-type'
import CounselList from './counsel-list'

const CustomerServicetepper = ({
  mode,
  close,
  handleImgType,
}: {
  mode: string
  close: () => void
  handleImgType: (type: string) => void
}) => {
  return (
    <div className='mb-4'>
      {mode === 'ConsultationType' && <CounselList />}
      {mode === 'ApplicationType' && (
        <ConsultationType close={close} handleImgType={handleImgType} />
      )}
    </div>
  )
}

export default CustomerServicetepper
