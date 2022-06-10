import { createContext, useReducer } from "react";
import { User } from "../types/general";

export enum AuthOptions {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

export interface UserState {
  isLoggedIn: boolean,
  user: User | null,
  client_id: string | undefined,
  redirect_uri: string | undefined,
  client_secret: string | undefined,
  proxy_url: string | undefined
}

interface ReducerAction {
  type: AuthOptions,
  payload: UserState
}

const initialState: UserState = {
  // @ts-ignore
  isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
  // @ts-ignore
  user: JSON.parse(localStorage.getItem("user")) || null,
  client_id: process.env.REACT_APP_CLIENT_ID,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
  redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  proxy_url: process.env.REACT_APP_PROXY_URL
}

export const reducer = (state: UserState, action: ReducerAction) => {
  switch (action.type) {
    case AuthOptions.LOGIN: {
      localStorage.setItem("isLoggedIn", JSON.stringify(action.payload.isLoggedIn))
      localStorage.setItem("user", JSON.stringify(action.payload.user))
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        user: action.payload.user
      }
    } 
    case AuthOptions.LOGOUT: {
      localStorage.clear()
      return {
        ...state,
        isLoggedIn: false,
        user: null
      }
    }
    default: {
      return state
    }
  }
}

const AuthContext = createContext<{state: UserState, dispatch: Function}>({ state: initialState, dispatch: () => {} })
AuthContext.displayName = "Github AUTH"


export const AuthProvider: React.FC<any> = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  
  return (
    <AuthContext.Provider value={{state, dispatch}} {...props}/>
  )
}

  export default AuthContext;