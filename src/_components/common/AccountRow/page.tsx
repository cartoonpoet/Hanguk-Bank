'use client'

import styles from './style.module.scss'
import Star from '/public/icon/star.svg'
import cx from 'classnames'
import { useState } from 'react'
import StarBG from '/public/icon/star-bg.svg'
import { getBankIcon } from '@/_utils/Bank'
import { CopyIcon } from '@/_assets/icons'

type AccountRowProps = {
  accountType: string
  name: string
  accountNumber: string
  selected?: boolean
  onClick?: () => void
  isUseFavorite: boolean
  isUseCopy: boolean
}

const AccountRow = ({
                      accountType,
                      name,
                      accountNumber,
                      selected,
                      onClick,
                      isUseFavorite,
                      isUseCopy,
                    }: AccountRowProps) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)

  const onClickFavorite = (): void => {
    setIsFavorite((prevState) => !prevState)
  }

  return (
    <section
      className={cx(styles.wrapper, selected && styles.selected)}
      onClick={onClick}
    >
      {getBankIcon(accountType)}
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.account}>
          {accountType} {accountNumber} {isUseCopy && <CopyIcon />}
        </div>
      </div>
      {isUseFavorite && <div>
        {isFavorite ? (
          <StarBG onClickCapture={onClickFavorite} />
        ) : (
          <Star onClickCapture={onClickFavorite} />
        )}
      </div>}
    </section>
  )
}

export default AccountRow
