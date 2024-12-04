import Image from 'next/image'
import style from './style.module.scss'

interface MenuProps {
    imageSrc: string
    name: string
}

const Menu = ({imageSrc, name}: MenuProps) => {
    return (
        <div className={style.wrapper}>
            <Image src={imageSrc} alt='Home' width={24} height={24}/>
            <div className={style.name}>{name}</div>
        </div>
    )
};

export default Menu;