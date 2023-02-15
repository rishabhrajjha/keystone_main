import React, { useState, useEffect } from 'react';
import { fetchCommits } from './GithubApi';

const CommitDashboard = ({ owner, repo }) => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      const count = await fetchCommits(owner, repo);
      setCommitCount(count);
    }, 2000);

    return () => clearInterval(interval);
  }, [owner, repo]);

  return (
    <div>
      <h1>Commits in {owner}/{repo}</h1>
      <h2>{commitCount}</h2>
    </div>
  );
};

export default CommitDashboard;

