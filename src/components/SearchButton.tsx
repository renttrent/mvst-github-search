import { MouseEventHandler } from "react"

export const SearchButton: React.FC<{onClick: MouseEventHandler<HTMLButtonElement>}> = ({onClick}) => {
  return (
    <button 
      className="bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded-md w-full"
      onClick={onClick}
    >
      Search
    </button>
  )
}