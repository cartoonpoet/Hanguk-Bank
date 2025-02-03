import Badge from '@/_components/common/Badge/page'
import BadgeGroup from '@/_components/common/BadgeGroup/page'
import React from 'react'

interface WorkBadgeGroupProps {
  data: Array<string>
}

const WorkBadgeGroup = ({ data }: WorkBadgeGroupProps) => {
  return (
    <BadgeGroup>
      {data.map((item) => (
        <Badge key={item} text={item} />
      ))}
    </BadgeGroup>
  )
}

export default WorkBadgeGroup
