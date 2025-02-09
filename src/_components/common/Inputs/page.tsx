import React from 'react'

interface InputsProps {
  total: string
  description: string
}

const Inputs = ({description, total}: InputsProps) => {
  return <section className="flex flex-col justify-center items-center py-5 gap-2.5 flex-1">
    <div className="text-3xl font-bold">{total}</div>
    <div className="text-base font-medium color-Neutral-Default">{description}</div>
  </section>
}

export default Inputs