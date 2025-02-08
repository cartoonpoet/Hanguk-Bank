import React from 'react'
import Cell from '@/_components/common/Cell/page'
import Row from '@/_components/common/Row/page'

interface KeyboardNumberProps {
  children?: React.ReactNode
  onClick?: () => void
  onClickNumber?: (number: number) => void
}

const KEYPAD = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

const KeyboardNumber = ({ children, onClick, onClickNumber }: KeyboardNumberProps) => {
  return <div className="text-3xl font-normal cursor-pointer">
    {KEYPAD.map((item, i) => {
      return (
        <Row key={i}>
          <Cell onClick={() => (onClickNumber?.(item[0]))}>{item[0]}</Cell>
          <Cell onClick={() => (onClickNumber?.(item[1]))}>{item[1]}</Cell>
          <Cell onClick={() => (onClickNumber?.(item[2]))}>{item[2]}</Cell>
        </Row>
      )
    })}
    <Row>
      <Cell>←</Cell>
      <Cell>0</Cell>
      <Cell onClick={onClick}>{children}</Cell>
    </Row>
  </div>
}

export default KeyboardNumber