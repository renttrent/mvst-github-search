import { FaGithub } from "react-icons/fa"

export const GithubSignInButton: React.FC<{}> = () => {
  return (
    <button 
      className="flex flex-row gap-1 items-center bg-neutral-800 text-white p-2 hover:bg-white hover:text-neutral-800 border-2 border-neutral-800 rounded-md"
      onClick={() => fetch("https://github.com/login/oauth/authorize")}
    > 
      <FaGithub /> <span>Sign in with Github</span>
    </button>
  )
}