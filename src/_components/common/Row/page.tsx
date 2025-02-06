
interface RowProps {
  children: React.ReactNode
}

const Row = ({children}: RowProps) => {
  return <div className="flex flex-row items-center">{children}</div>
}

export default Row