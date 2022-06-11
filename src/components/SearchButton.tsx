import { MouseEventHandler } from "react"

interface SearchButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>
}

/**
 * Search button
 * 
 * @param onClick Search click handler, set by parent component
 * @returns JSX elemnt 
 */
export const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <button
      className="bg-indigo-500 hover:bg-indigo-700 text-white p-2 rounded-md w-full font-semibold"
      onClick={onClick}
    >
      Search
    </button>
  )
}