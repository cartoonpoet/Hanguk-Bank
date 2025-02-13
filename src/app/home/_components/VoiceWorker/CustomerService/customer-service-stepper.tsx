import { useState } from 'react'

import ConsultationType from './consultation-type'
import CounselList from './counsel-list'

const CustomerServicetepper = ({ mode }: { mode: string }) => {
  return (
    <div className='mb-4'>
      {mode === 'ConsultationType' && <CounselList />}
      {mode === 'ApplicationType' && <ConsultationType />}
    </div>
  )
}

export default CustomerServicetepper
