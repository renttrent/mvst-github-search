import { useContext } from "react"
import AuthContext, { AuthOptions } from "../context/auth"

export const LogOutButton: React.FC<{}> = () => {
  const { state, dispatch } = useContext(AuthContext)
  return (
    <button className="bg-rose-400 hover:bg-rose-600 hover:shadow-sm hover:shadow-rose-100 text-white px-4 py-2 rounded-md" onClick={() => dispatch({
      type: AuthOptions.LOGOUT,
      payload: { ...state, isLoggedIn: false}
    })}>Log Out</button>
  )
}