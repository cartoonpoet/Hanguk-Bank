import style from './style.module.scss'
import Menu from "@/app/_component/Menu/page";

const Menus = [
    {
        imageSrc: '/icon/icon-home.svg',
        name: '홈'
    },
    {
        imageSrc: '/icon/icon-coin.svg',
        name: '자산관리'
    },
    {
        imageSrc: '/icon/icon-cart.svg',
        name: '상품'
    },
    {
        imageSrc: '/icon/icon-gift.png',
        name: '혜택'
    },
    {
        imageSrc: '/icon/icon-line-three.svg',
        name: '전체'
    },
]

const TabBar = () => {
    return <div className={style.wrapper}>
        {Menus.map(menu => <Menu name={menu.name} imageSrc={menu.imageSrc} key={menu.imageSrc}/>)}
    </div>
};

export default TabBar