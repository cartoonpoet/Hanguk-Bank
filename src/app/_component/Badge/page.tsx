import styles from './style.module.scss'
import cx from 'classnames'

const Badge = ({ text }: { text: string }) => {
  return (
    <div className={cx(styles.badge)}>
      <span>{text}</span>
    </div>
  )
}

export default Badge
