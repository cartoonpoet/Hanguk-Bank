import styles from './style.module.scss'
import cx from 'classnames'
import Link from 'next/link'

type ButtonProps = {
  name: string
  type: 'Soft' | 'Fill' | 'Outline'
  status: 'Default' | 'Disabled'
  size: 'Small' | 'Medium' | 'Large'
  href: string
}
const Button = ({ name, type, status, size, href = '' }: ButtonProps) => {
  return <Link
    href={href}
    className={cx(styles.common, styles[type.toLowerCase()], styles[status.toLowerCase()], styles[size.toLowerCase()])}>
    {name}
  </Link>
}

export default Button