import Image from 'next/image'
import style from './style.module.scss'

export type MenuProps = {
  alt: string;
  src: string;
  name: string;

}

const Menu = ({ src, name, alt }: MenuProps) => {
  return (
    <div className={style.wrapper}>
      <Image src={src} alt={alt} width={24} height={24} />
      <div className={style.name}>{name}</div>
    </div>
  )
}


export default Menu