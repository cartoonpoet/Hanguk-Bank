import style from './style.module.scss'
import Menu from "@/app/_component/Menu/page";

type menu = {
    src:string,
    name:string
}
const TabBar = () => {
    const Menus: menu[] = [
        {
            src: '/icon/icon-home.svg',
            name: '홈'
        },
        {
            src: '/icon/icon-coin.svg',
            name: '자산관리'
        },
        {
            src: '/icon/icon-cart.svg',
            name: '상품'
        },
        {
            src: '/icon/icon-gift.png',
            name: '혜택'
        },
        {
            src: '/icon/icon-line-three.svg',
            name: '전체'
        },
    ]

    return <div className={style.wrapper}>
        {Menus.map(menu => <Menu key={menu.src} name={menu.name} src={menu.src} alt={menu.name}/>)}
    </div>
};

export default TabBar