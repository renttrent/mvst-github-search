import { useContext } from "react"
import AuthContext from "../context/auth"
import { GithubSignInButton } from "./GithubSignInButton"
import { LogOutButton } from "./LogOutButton"

export const Footer: React.FC<{}> = () => {

  const { state } = useContext(AuthContext)
  const { isLoggedIn, user } = state

  if(isLoggedIn) {
    return (
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center absolute bottom-2">
        {/* @ts-ignore */}
        <span>Hey {state.user?.login}! You are still logged in.</span>
        <LogOutButton />
      </div>
    )
  }
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center absolute bottom-2">
      <span>Search your own public & private repos?</span> 
      <GithubSignInButton />
    </div>
 ) 
}