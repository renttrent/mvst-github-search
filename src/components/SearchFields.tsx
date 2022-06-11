import { ChangeEventHandler, RefObject } from "react"

interface SearchFieldsProps {
  findRepo: RefObject<HTMLInputElement> | null
  findUser: RefObject<HTMLInputElement> | null
  onChange: ChangeEventHandler<HTMLInputElement>
}

/**
 * Search fields for finding Repo and User
 * 
 * @param findRepo Ref object for finding repo input passed by parent
 * @param findUser Ref object for finding user input passed by parent
 * 
 * @returns 
 */
export const SearchFields = ({ findRepo, findUser, onChange }: SearchFieldsProps) => {

  return (
    <div className="flex flex-col md:flex-row gap-2 mt-2 mb-2">
      <input ref={findRepo} type="text" placeholder="Find a repo..." onChange={onChange}
        className="w-full md:w-1/2 lg:w-full p-2 outline-none border-2 border-indigo-200 bg-indigo-100 text-indigo-800 rounded focus:border-indigo-500 focus:shadow-md focus:shadow-indigo-100 " />
      <input ref={findUser} type="text" placeholder="Whose repos are you looking for?"
        className="w-full md:w-1/2 lg:w-1/2 p-2 outline-none border-2 border-gray-200 rounded focus:border-gray-600" />
    </div>
  )
}