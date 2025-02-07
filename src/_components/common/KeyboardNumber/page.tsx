import React from 'react'
import Cell from '@/_components/common/Cell/page'
import Row from '@/_components/common/Row/page'

interface KeyboardNumberProps {
  children?: React.ReactNode
  onClick?: () => void
}

const KeyboardNumber = ({ children, onClick }: KeyboardNumberProps) => {
  return <div className="text-3xl font-normal cursor-pointer">
    <Row>
      <Cell>1</Cell>
      <Cell>2</Cell>
      <Cell>3</Cell>
    </Row>
    <Row>
      <Cell>4</Cell>
      <Cell>5</Cell>
      <Cell>6</Cell>
    </Row>
    <Row>
      <Cell>7</Cell>
      <Cell>8</Cell>
      <Cell>9</Cell>
    </Row>
    <Row>
      <Cell>←</Cell>
      <Cell>0</Cell>
      <Cell onClick={onClick}>{children}</Cell>
    </Row>
  </div>
}

export default KeyboardNumber