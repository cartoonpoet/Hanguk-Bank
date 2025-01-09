'use client'

import styles from './style.module.scss'
import ShinHan from '/public/bank/shinhan.svg'
import KbStar from '/public/bank/kbstar.svg'
import KaKaoBank from '/public/bank/kakaobank.svg'
import Star from '/public/icon/star.svg'
import cx from 'classnames'
import {useState} from "react";
import StarBG from '/public/icon/star-bg.svg'

type AccountRowProps = {
    accountType: string
    name: string
    accountNumber: string
    selected?: boolean
    onClick?: () => void
}

const getBankIcon = (accountType: string) => {
    switch (accountType) {
        case '신한':
            return <ShinHan/>
        case '국민':
            return <KbStar/>
        case '카카오뱅크':
            return <KaKaoBank/>
    }
}


const AccountRow = ({accountType, name, accountNumber, selected, onClick}: AccountRowProps) => {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)

    const onClickFavorite = (): void => {
        setIsFavorite(prevState => !prevState)
    }

    return <section className={cx(styles.wrapper, selected && styles.selected)} onClick={onClick}>
        {getBankIcon(accountType)}
        <div className={styles.info}>
            <div className={styles.name}>{name}</div>
            <div className={styles.account}>{accountType} {accountNumber}</div>
        </div>
        {isFavorite ? <StarBG onClickCapture={onClickFavorite}/> : <Star onClickCapture={onClickFavorite}/>}
    </section>
}

export default AccountRow