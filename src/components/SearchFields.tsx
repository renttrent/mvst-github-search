import { ChangeEventHandler, RefObject } from "react"

export const SearchFields: React.FC<{findRepo: RefObject<HTMLInputElement>, findUser: RefObject<HTMLInputElement>, onChange: ChangeEventHandler<HTMLInputElement>}> = ({findRepo, findUser, onChange}) => {

  return (
    <div className="flex flex-col md:flex-row gap-2 mt-2 mb-2">
      <input ref={findRepo} type="text" placeholder="Find a repo..." onChange={onChange}
        className="w-full md:w-1/2 lg:w-full p-2 outline-none border-2 border-indigo-200 bg-indigo-100 text-indigo-800 rounded focus:border-indigo-500 focus:shadow-md focus:shadow-indigo-100 "/>
      <input ref={findUser} type="text" placeholder="Whose repos are you looking for?"
        className="w-full md:w-1/2 lg:w-1/2 p-2 outline-none border-2 border-gray-200 rounded focus:border-gray-600"/>
    </div>
  )
}