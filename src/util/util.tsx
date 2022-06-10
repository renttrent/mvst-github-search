import axios from "axios"
import { Repo, User } from "../types/general"

export const getUserRepos = (user: User) => {
  return axios.get(`https://api.github.com/search/repositories?q=user:${user.login}`, {
    headers: {
      "Authorization": `token ${user.oauth.access_token}`
    }
  })
  .then((res) => {
    const rv = res.data.items.sort(
      (prev: Repo, current: Repo) => {
        //@ts-ignore
        return new Date(current.updated_at) - new Date(prev.updated_at)
      }
    )
    return rv
  })
  .catch((err) => {
    return `Error! ${err.message}`
  })
} 

export const getPublicRepo = (url: string) => {
  return axios.get(url)
  .then((res) => {
    const rv = res.data.sort(
      (prev: Repo, current: Repo) => {
        //@ts-ignore
        return new Date(current.updated_at) - new Date(prev.updated_at)
      }
    )
    return rv
  })
  .catch((err) => {
    return `Error! ${err.message}`
  })
} 

