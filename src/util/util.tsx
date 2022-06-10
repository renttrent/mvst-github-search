import axios from "axios"
import { User } from "../types/general"

export const getUserRepos = (user: User) => {
  axios.get(user.repos_url || "", {
    headers: {
      "Authorization": `token ${user.oauth.access_token}`
    }
  })
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    return err
  })
} 