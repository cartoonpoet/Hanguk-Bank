import { MagnifierIcon } from '@/_assets/icons'

const SearchBar = () => {
  return <main
    className="flex flex-row justify-center items-center gap-2 p-4 rounded-3xl bg-Neutral-On font-medium text-base">
    <MagnifierIcon />
    <input id="search" type="text" placeholder="금융상품을 검색해 보세요." className="focus:outline-none flex-1 bg-Neutral-On" />
  </main>
}

export default SearchBar