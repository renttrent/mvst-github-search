import { useContext } from "react"
import { FaGithub } from "react-icons/fa"
import AuthContext, { AuthOptions } from "../context/auth"

/**
 * Github Sign In Button
 * No props | Just include in your project
 * Make sure to have AuthProvider around your app
 * @returns React Functional Component
 */
export const GithubSignInButton: React.FC<{}> = () => {

  const { state } = useContext(AuthContext)
  const { client_id, redirect_uri } = state

  return (
    <a 
      className="flex flex-row gap-1 items-center bg-neutral-800 text-white p-2 hover:bg-white hover:text-neutral-800 border-2 border-neutral-800 rounded-md"
      href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
    > 
      <FaGithub /> <span>Sign in with Github</span>
    </a>
  )
}