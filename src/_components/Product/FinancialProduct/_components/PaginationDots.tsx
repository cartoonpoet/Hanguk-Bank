const dots = [
  { current: true },
  { current: false },
  { current: false },
  { current: false },
  { current: false },
]

const PaginationDot = () => {
  return <main className="flex flex-row gap-2 justify-center items-center">
    {dots.map((dot, idx) => {
      if(dot.current) return <div className="w-2 h-2 rounded-full bg-Neutral-Default" key={idx}/>
      return <div className="w-2 h-2 rounded-full bg-Neutral-Dark-Darkest opacity-10" key={idx}/>
    })}
  </main>
}

export default PaginationDot