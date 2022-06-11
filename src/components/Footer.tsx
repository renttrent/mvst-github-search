import { useContext } from "react"
import AuthContext from "../context/auth"
import { GithubSignInButton } from "./GithubSignInButton"
import { LogOutButton } from "./LogOutButton"

export const Footer: React.FC<{}> = () => {

  const { state } = useContext(AuthContext)
  const { isLoggedIn, user } = state
  
  if(isLoggedIn) {
    return (
      <>
      <div className="lg:flex hidden flex-col md:flex-row gap-4 items-start md:items-center">
        {/* @ts-ignore */}
        <div className="flex flex-row gap-2 bg-gray-200 border-2 border-gray-800 text-gray-900 items-center px-3 py-2 rounded-md">
          <img className="rounded-full w-10" src={user?.avatar_url || ""} alt="profile-pic" />
          <a href={user?.html_url}>{user?.login}</a>
          <LogOutButton />
        </div>
      </div>
      <div className="flex lg:hidden gap-4 mb-4">
        <div className="w-full flex flex-row gap-2 justify-between bg-gray-200 border-2 border-gray-800 text-gray-900 items-center p-3 rounded-md">
          <div className="flex flex-row gap-2 items-center">
            <img className="rounded-full w-10" src={user?.avatar_url || ""} alt="profile-pic" />
            <a href={user?.html_url}>{user?.login}</a>
          </div>
          <LogOutButton />
        </div>
      </div>
      </>
    )
  }
  return (
    <>
    <div className="lg:flex hidden flex-col md:flex-row gap-4 items-start md:items-center">
      <span>Search your own public & private repos?</span> 
      <GithubSignInButton />
    </div>
    <div className="flex lg:hidden flex-col items-center gap-2 relative mb-4">
      <span>Search your own public & private repos?</span> 
      <GithubSignInButton />
    </div>
    </>
 ) 
}