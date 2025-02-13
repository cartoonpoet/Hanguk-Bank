'use client'

import { Wrapper, Item } from './style.css'
import { useState } from 'react'

const menus = [
  '상품안내',
  '금리안내',
  '유의사항',
  '리뷰',
]

const TabSection = () => {
  const [activeTab, setActiveTab] = useState(menus[0])
  return <Wrapper>
    {menus.map((item) => (
      <Item onClick={() => setActiveTab(item)} key={item} selected={activeTab === item}>{item}</Item>))}
  </Wrapper>
}

export default TabSection