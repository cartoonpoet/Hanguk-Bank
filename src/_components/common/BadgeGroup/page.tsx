import React, { ReactNode } from 'react'
import cx from 'classnames'
import styles from './style.module.scss'

interface BadgeGroupProps {
  children: ReactNode
}

const BadgeGroup = ({ children }: BadgeGroupProps) => {
  return <div className={cx(styles.badgeGroup)}>{children}</div>
}

export default BadgeGroup
