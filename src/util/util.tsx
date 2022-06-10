import axios from "axios"

interface OAuth {
  access_token: string
  token_type: string
}

export const getUser = (data: OAuth) => {
  axios.get("https://api.github.com/user")
}