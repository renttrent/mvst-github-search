import { useContext, useEffect, useRef, useState } from "react"
import RepoGrid from "../components/RepoGrid"
import { SearchButton } from "../components/SearchButton"
import { SearchFields } from "../components/SearchFields"
import AuthContext from "../context/auth"
import { getPublicRepo, getUserRepos } from "../util/util"

export const Welcome: React.FC<{}> = () => {

  const { state } = useContext(AuthContext)

  const findRepo = useRef<HTMLInputElement>(null)
  const findUser = useRef<HTMLInputElement>(null)

  const [help, setHelp] = useState<string | null>(null)
  const [repoList, setRepoList] = useState([])

  const updateRepos = () => {
    if(findUser.current?.value) {
      fetch(`https://api.github.com/users/${findUser.current?.value}`)
      .then((res) => res.json())
      .then(data => {
        if(data.message) {
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

  const handleSearch = () => {
    if(findUser.current?.value === "") {
      findUser.current.focus()
      setHelp("Please add a github profile!")
      return
    }
    updateRepos()
  }

  useEffect(() => {

    if(state.user) {
      getUserRepos(state.user)
      .then(res => {
        if(typeof res === 'string') {
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

  return (
    <div>
      <div className="text-2xl font-bold">Welcome to Repo Search</div> 
      <div>Find a public repo here</div>
      {help && <div className="bg-lime-200 text-lime-900 p-3 text-center rounded-md">{help}</div>}
      <SearchFields findRepo={findRepo} findUser={findUser}/> 
      <SearchButton onClick={handleSearch} />
      <RepoGrid repoList={repoList}/>
    </div>
       
  )
}