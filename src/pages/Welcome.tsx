import { useContext, useEffect, useRef, useState } from "react"
import { Card } from "../components/Card"
import { Grid } from "../components/Grid"
import { SearchButton } from "../components/SearchButton"
import { SearchFields } from "../components/SearchFields"
import AuthContext from "../context/auth"
import { Repo } from "../types/general"
import { getPublicRepo, getUserRepos } from "../util/util"

export const Welcome = () => {

  const { state } = useContext(AuthContext)

  const findRepo = useRef<HTMLInputElement>(null)
  const findUser = useRef<HTMLInputElement>(null)

  const [help, setHelp] = useState<string | null>(null)
  const [repoList, setRepoList] = useState([])
  const [showRepo, setShowRepo] = useState([])

  const updateRepos = () => {
    if (findUser.current?.value) {
      fetch(`https://api.github.com/users/${findUser.current?.value}`)
        .then((res) => res.json())
        .then(data => {
          if (data.message) {
            setHelp(data.message)
            return
          }
          getPublicRepo(`https://api.github.com/users/${findUser.current?.value}/repos`)
            .then((res) => {
              setRepoList(res)
            })
        })
    }
  }

  const handleSearchUser = () => {
    if (findUser.current?.value === "") {
      findUser.current.focus()
      setHelp("Please add a github profile!")
      return
    }
    updateRepos()
  }

  const handleSearchRepo = () => {
    setShowRepo(repoList.filter((repo: Repo) => repo.name.toLowerCase().includes(findRepo.current?.value.toLowerCase() || "")))
    //@ts-ignore
    if (findRepo.current?.value.match(/\s*/)[0]) {
      setShowRepo(repoList)
    }
  }

  useEffect(() => {

    if (state.user) {
      getUserRepos(state.user)
        .then(res => {
          if (typeof res === 'string') {
            setHelp(res)
            return
          } else {
            setHelp(null)
            setRepoList(res)
          }
        })
    }

    const handleChange = () => {
      setHelp(null)
    }

    window.addEventListener("change", handleChange)

    return () => window.removeEventListener("change", handleChange)
  }, [findRepo, findUser, state])

  useEffect(() => {
    setShowRepo(repoList)
  }, [repoList])

  return (
    <div>
      <div className="text-2xl font-bold">Welcome to Repo Search</div>
      <div className="text-lg">Find a public repo here</div>
      {help && <div className="border-2 border-orange-900 bg-orange-200 text-orange-900 font-semibold p-3 text-center rounded-md">{help}</div>}
      <SearchFields findRepo={findRepo} findUser={findUser} onChange={handleSearchRepo} />
      <SearchButton onClick={handleSearchUser} />
      <Grid items={showRepo} renderItem={(item: Repo) => <Card key={item.id} {...item} />} />
    </div>

  )
}