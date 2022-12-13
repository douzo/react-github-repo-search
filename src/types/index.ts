export interface ItemProps {
  item: Item;
}

export interface RepoProps {
  total_count:        number;
  incomplete_results: boolean;
  items:              Item[];
}

export interface Item {
  id:                number;
  node_id:           string;
  name:              string;
  full_name:         string;
  owner:             Owner;
  private:           boolean;
  html_url:          string;
  description:       string;
  fork:              boolean;
  url:               string;
  created_at:        Date;
  updated_at:        Date;
  pushed_at:         Date;
  homepage:          string;
  size:              number;
  stargazers_count:  number;
  watchers_count:    number;
  language:          string;
  forks_count:       number;
  open_issues_count: number;
  master_branch:     string;
  default_branch:    string;
  score:             number;
  archive_url:       string;
  assignees_url:     string;
  blobs_url:         string;
  branches_url:      string;
  collaborators_url: string;
  comments_url:      string;
  commits_url:       string;
  compare_url:       string;
  contents_url:      string;
  contributors_url:  string;
  deployments_url:   string;
  downloads_url:     string;
  events_url:        string;
  forks_url:         string;
  git_commits_url:   string;
  git_refs_url:      string;
  git_tags_url:      string;
  git_url:           string;
  issue_comment_url: string;
  issue_events_url:  string;
  issues_url:        string;
  keys_url:          string;
  labels_url:        string;
  languages_url:     string;
  merges_url:        string;
  milestones_url:    string;
  notifications_url: string;
  pulls_url:         string;
  releases_url:      string;
  ssh_url:           string;
  stargazers_url:    string;
  statuses_url:      string;
  subscribers_url:   string;
  subscription_url:  string;
  tags_url:          string;
  teams_url:         string;
  trees_url:         string;
  clone_url:         string;
  mirror_url:        string;
  hooks_url:         string;
  svn_url:           string;
  forks:             number;
  open_issues:       number;
  watchers:          number;
  has_issues:        boolean;
  has_projects:      boolean;
  has_pages:         boolean;
  has_wiki:          boolean;
  has_downloads:     boolean;
  archived:          boolean;
  disabled:          boolean;
  visibility:        string;
  license:           License;
}

export interface License {
  key:      string;
  name:     string;
  url:      string;
  spdx_id:  string;
  node_id:  string;
  html_url: string;
}

export interface Owner {
  login:               string;
  id:                  number;
  node_id:             string;
  avatar_url:          string;
  gravatar_id:         string;
  url:                 string;
  received_events_url: string;
  type:                string;
  html_url:            string;
  followers_url:       string;
  following_url:       string;
  gists_url:           string;
  starred_url:         string;
  subscriptions_url:   string;
  organizations_url:   string;
  repos_url:           string;
  events_url:          string;
  site_admin:          boolean;
}


export interface RepoDataProps {
  repo: RepoProps
}

export interface TopAreaProps {
  setRepo: (repo: RepoProps | null) => void;
  page: number;
  setLoading: (loader: boolean) => void;
  setPage: (page: number) => void;
}