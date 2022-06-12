import { useContext, useEffect, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { Navigate, useLocation, useParams } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import AuthContext, { AuthOptions } from "../context/auth"
import axios from "axios"

export const Login = () => {

  const { state, dispatch } = useContext(AuthContext)
  const [feedback, setFeedback] = useState<{ isLoading: boolean, help: string }>({ isLoading: false, help: "" })
  const location = useLocation()

  useEffect(() => {
    console.log("Proxy: ", state.proxy_url)

    if (location.search.includes("?code=")) {
      const code = location.search.split("=")[1]
      setFeedback({ isLoading: true, help: "" })

      try {
        axios.post(state.proxy_url || "", { code: code })
          .then((res) => {
            const oauth = res.data

            axios.get("https://api.github.com/user", {
              headers: {
                "Authorization": `token ${oauth.access_token}`
              }
            })
              .then((res) => {
                dispatch({
                  type: AuthOptions.LOGIN,
                  payload: { ...state, user: { oauth, ...res.data }, isLoggedIn: true }
                })
              })
              .catch((err) => {
                setFeedback({ isLoading: true, help: `Error! ${err.message}` })
              })
              .finally(() => {
                setFeedback({ isLoading: false, help: "" })
              })
          })
      } catch (err) {
        // @ts-ignore
        setFeedback({ isLoading: false, help: `Error! ${err.message}` })
      }
    }
  }, [])

  if (state.isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <div>
      <a href="/" className="text-neutral-700 underline underline-offset-2 font-semibold flex flex-row gap-1 items-center"> <FaArrowLeft className="text-xs" /> Go back</a>
      {feedback.isLoading && <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><ClipLoader loading={feedback.isLoading} size={100} /></div>}
      {feedback.help !== "" && <div className="mt-4 text-xl text-center font-bold bg-red-500 text-white p-4 rounded-md">{feedback.help}</div>}
    </div>
  )
}