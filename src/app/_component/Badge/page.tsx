import styles from './style.module.scss'
import cx from 'classnames'

interface BadgeProps {
  text: string
}

const Badge = ({ text }: BadgeProps) => {
  return (
    <div className={cx(styles.badge)}>
      <span>{text}</span>
    </div>
  )
}

export default Badge
