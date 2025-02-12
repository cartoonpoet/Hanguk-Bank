import Tag from '@/_components/common/Tag/page'

const tags = [
  '#재태크',
  '#첫거래',
  '#직장인',
  '#어린이',
]

const Tags = () => {
  return <main className="flex flex-row gap-2 text-sm font-semibold px-5 mb-2.5">
    {tags.map((tag) => (<Tag type="Secondary" key={tag}><span className="text-black">{tag}</span></Tag>))}
  </main>
}
export default Tags