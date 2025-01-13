import styles from './style.module.scss'
import cx from 'classnames'

type ContentSwitcherSectionProps = {
  selected: boolean
  title: string
  onClick?: () => void
}

const ContentSwitcherSection = ({
  selected,
  title,
  onClick,
}: ContentSwitcherSectionProps) => {
  return (
    <div
      className={cx(styles.wrapper, selected && styles.selected)}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default ContentSwitcherSection
