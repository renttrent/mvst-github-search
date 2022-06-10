export interface Repo {
  allow_forking: boolean
  archive_url: string
  archived: boolean
  assignees_url: string
  blobs_url: string
  branches_url: string
  clone_url: string
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  default_branch: string
  deployments_url: string
  description: null
  disabled: boolean
  downloads_url: string
  events_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string | null
  hooks_url: string
  html_url: string
  id: number
  is_template: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  license: License | null
  merges_url: string
  milestones_url: string
  mirror_url: string | null
  name: string
  node_id: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  owner: GithubUser,
  private: boolean
  pulls_url: string
  pushed_at: string
  releases_url: string
  size: number
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  statuses_url: string
  subscribers_url: string
  subscription_url: string
  svn_url: string
  tags_url: string
  teams_url: string
  topics: Array<string | any>
  trees_url: string
  updated_at: string
  url: string
  visibility: string
  watchers: number
  watchers_count: number
}

interface GithubUser {
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
}

export interface License {
  key: string
  name: string
  node_id: string
  spdx_id: string
  url: string
}


export interface User {
  avatar_url: string | null
  bio: string | null
  blog: string | null
  collaborators: number | null
  company: string | null
  created_at: string | null
  disk_usage: number | null 
  email: string | null 
  events_url: string | null 
  followers: number 
  followers_url: string | null 
  following: number 
  following_url: string | null 
  gists_url: string | null 
  gravatar_id: string | null 
  hireable: boolean 
  html_url: string 
  id: number 
  location: string | null
  login: string 
  name: string | null
  node_id: string
  oauth: { access_token: string, token_type: string }
  organizations_url: string| null 
  owned_private_repos: number 
  plan: { name: string, space: number, collaborators: number, private_repos: number}
  private_gists: number 
  public_gists: number 
  public_repos: number
  received_events_url: string | null 
  repos_url: string | null 
  site_admin: string | null 
  starred_url: string | null 
  subscriptions_url: string | null 
  total_private_repos: number 
  twitter_username: string | null
  two_factor_authentication: boolean 
  type: string
  updated_at: string 
  url: string 
}