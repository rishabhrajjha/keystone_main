import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export const fetchCommits = async (owner, repo) => {
  const response = await octokit.repos.listCommits({
    owner: owner,
    repo: repo,
  });

  return response.data.length;
};
