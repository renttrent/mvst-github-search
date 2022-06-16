import { useContext, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Navigate, useLocation } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import AuthContext, { AuthOptions } from "../context/auth";
import axios from "axios";

export const Login = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [feedback, setFeedback] = useState<{
    isLoading: boolean;
    help: string;
  }>({ isLoading: false, help: "" });
  const location = useLocation();

  useEffect(() => {
    // if github has successfully redirect the user
    if (location.search.includes("?code=")) {
      const code = location.search.split("=")[1];
      // start the loading
      setFeedback({ isLoading: true, help: "" });

      try {
        // try calling the proxy, fallback to localhost
        axios
          .post(state.proxy_url || "http://localhost:5000/auth", { code: code })
          .then((res) => {
            // oauth object (access token and token type)
            const oauth = res.data;

            // request to github api for getting user
            axios
              .get("https://api.github.com/user", {
                headers: {
                  Authorization: `token ${oauth.access_token}`,
                },
              })
              .then((res) => {
                dispatch({
                  type: AuthOptions.LOGIN,
                  payload: {
                    ...state,
                    user: { oauth, ...res.data },
                    isLoggedIn: true,
                  },
                });
              })
              .catch((err) => {
                setFeedback({ isLoading: true, help: `Error! ${err.message}` });
              })
              .finally(() => {
                setFeedback({ isLoading: false, help: "" });
              });
          });
      } catch (err: any) {
        setFeedback({ isLoading: false, help: `Error! ${err.message}` });
      }
    } else {
      setFeedback({
        isLoading: false,
        help: "Login with Github has failed. Please try again later.",
      });
    }
  }, []);

  // if the user is logged in redirect to home
  if (state.isLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div>
      <a
        href="/"
        className="text-neutral-700 underline underline-offset-2 font-semibold flex flex-row gap-1 items-center"
      >
        {" "}
        <FaArrowLeft className="text-xs" /> Go back
      </a>
      {feedback.isLoading && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ClipLoader loading={feedback.isLoading} size={100} />
        </div>
      )}
      {feedback.help !== "" && (
        <div className="mt-4 text-xl text-center font-bold bg-red-500 text-white p-4 rounded-md">
          {feedback.help}
        </div>
      )}
    </div>
  );
};
