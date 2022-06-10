import { useContext, useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { Navigate, useLocation, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import AuthContext from "../context/auth"

export const Login: React.FC<{}> = () => {

  const { state, dispatch } = useContext(AuthContext)
  const [feedback, setFeedback] = useState<{isLoading: boolean, help: string}>({ isLoading: false, help: "" })
  const location = useLocation()

  useEffect(() => {
    
    if(location.search.includes("?code=")){
      const code = location.search.split("=")[1]
      console.log(code)
      setFeedback({isLoading: true, help: ""})
      
      fetch(state.proxy_url || "https://localhost:5000/auth", {
        method: "POST",
        body: JSON.stringify({code: code})
      })
      .then(res => res.json())
      .then(data => {
        dispatch({
          type: "LOGIN",
          payload: { ...state, user: data, isLoggedIn: true}
        })
      })
      .catch(err => {
        setFeedback({ isLoading: false, help: "Login failed. Please Login again." })
      })
      
    }
  }, [state])

  // if(!state.isLoggedIn) {
  //   return <Navigate to="/"/>
  // }

  return (
    <div>
      <a href="/" className="text-neutral-700 underline underline-offset-2 font-semibold flex flex-row gap-1 items-center"> <FaArrowLeft className="text-xs"/> Go back</a>
      {feedback.isLoading && <ClipLoader />}
      {feedback.help !== "" && <div className="mt-4 text-xl text-center font-bold bg-red-500 text-white p-4 rounded-md">{feedback.help}</div>}
    </div>
  )
}