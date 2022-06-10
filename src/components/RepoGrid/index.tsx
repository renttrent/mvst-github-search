import { Repo } from "../../types/general"
import { Card } from "../Card"
import styled from "@emotion/styled"

const Grid = styled('div')`
  
`
const RepoGrid: React.FC<{repoList: Array<Repo>}> = ({repoList}) => {

  return (
    <div className="grid overflow-y-auto mt-4 shadow-lg">
      {repoList.map((repo) => (
        <Card key={repo.id} title={repo.name} desc={repo.description} 
        forks={repo.forks_count} stars={repo.stargazers_count} 
        language={repo.language} license={repo.license} 
        lastUpdated={repo.updated_at} url={repo.html_url}/>))}
    </div>
  )
}

export default RepoGrid;