import { ArrowDown } from '@/_assets/icons'

interface MenuProps {
  title: string
}

const Menu = ({title}: MenuProps) => {
  return <main className="p-5 flex flex-row justify-between font-medium text-lg items-center">
    {title}
    <ArrowDown width="15" height="15" fill="#8B95A1" className="-rotate-90"/>
  </main>
}

export default Menu