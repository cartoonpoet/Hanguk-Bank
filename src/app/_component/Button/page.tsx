import styles from './style.module.scss'
import cx from 'classnames'

type ButtonProps = {
  name: string
  type: 'Soft' | 'Fill' | 'Outline'
  status: 'Default' | 'Disabled'
  size: 'Small' | 'Medium' | 'Large'
}
const Button = ({ name, type, status, size }: ButtonProps) => {
  return <button
    className={cx(styles.common, styles[type.toLowerCase()], styles[status.toLowerCase()], styles[size.toLowerCase()])}>{name}</button>
}

export default Button