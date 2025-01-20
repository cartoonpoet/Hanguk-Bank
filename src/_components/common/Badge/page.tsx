import styles from './style.module.scss'
import cx from 'classnames'

interface BadgeProps {
  text: string
  onClick?: () => void
}

const Badge = ({ text, onClick }: BadgeProps) => {
  return (
    <div className={cx(styles.badge)} onClick={onClick}>
      <span>{text}</span>
    </div>
  )
}

export default Badge
