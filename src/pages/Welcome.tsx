import { GithubSignInButton } from "../components/GithubSignInButton"
import { SearchButton } from "../components/SearchButton"
import { SearchFields } from "../components/SearchFields"

export const Welcome: React.FC<{}> = () => {
  return (
    <div>
      <div className="text-2xl font-bold">Welcome to Repo Search</div> 
      <div>Find a public repo here</div>
      <SearchFields /> 
      <SearchButton />
      <div className="flex flex-row gap-4 items-center">Search your own public & private repos? <GithubSignInButton /></div>
    </div>
       
  )
}