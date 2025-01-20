import ShinHan from '/public/bank/shinhan.svg'
import KbStar from '/public/bank/kbstar.svg'
import KaKaoBank from '/public/bank/kakaobank.svg'
import WoriBank from '/public/bank/wori.svg'
import React from "react";

export const getBankIcon = (accountType: string) => {
    switch (accountType) {
        case '신한':
            return <ShinHan/>
        case '국민':
            return <KbStar/>
        case '카카오뱅크':
            return <KaKaoBank/>
        case '우리':
            return <WoriBank/>
    }
}