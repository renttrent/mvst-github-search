export const SearchFields: React.FC<{}> = () => {
  return (
    <div className="flex flex-row gap-2 mt-2 mb-2">
      <input type="text" placeholder="Find a repo..." className="w-full p-2 outline-none border-2 border-indigo-200 rounded focus:border-indigo-500"/>
      <input type="text" placeholder="Whose repos are you looking for?" className="w-1/2 p-2 outline-none border-2 border-gray-200 rounded focus:border-gray-600"/>
    </div>
  )
}