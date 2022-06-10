import { Repo } from "../../types/general"
import { Card } from "../Card"
import styled from "@emotion/styled"

const Grid = styled('div')`
  display: grid;
  max-height: 60vh;
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f2f2f2;
  } 
  &::-webkit-scrollbar-thumb{
    background-color: #8f9ea8;
    border-radius: 100px;
  }
`
const RepoGrid: React.FC<{repoList: Array<Repo>}> = ({repoList}) => {

  return (
    <Grid className="grid overflow-y-auto mt-4 shadow-lg">
      {repoList.map((repo) => (
        <Card key={repo.id} title={repo.name} desc={repo.description} 
        forks={repo.forks_count} stars={repo.stargazers_count} 
        language={repo.language} license={repo.license} 
        lastUpdated={repo.updated_at} url={repo.html_url}/>))}
    </Grid>
  )
}

export default RepoGrid;