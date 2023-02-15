import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

export const fetchCommitsTotal = async (username) => {
  let commitCount = 0;
  let page = 1;
  const perPage = 100;

  while (true) {
    const response = await octokit.repos.listForUser({
      username: username,
      per_page: perPage,
      page: page,
    });

    if (response.data.length === 0) {
      // All repositories have been fetched
      break;
    }

    for (const repo of response.data) {
      const commitsResponse = await octokit.repos.listCommits({
        owner: username,
        repo: repo.name,
      });

      commitCount += commitsResponse.data.length;
    }

    page += 1;
  }

  return commitCount;
};