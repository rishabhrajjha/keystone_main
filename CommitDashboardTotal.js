import React, { useState, useEffect } from 'react';
import { fetchCommits } from './GithubApi';

const CommitDashboard = ({ owner }) => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      const count = await fetchCommits(owner);
      setCommitCount(count);
    }, 2000);

    return () => clearInterval(interval);
  }, [owner]);

  return (
    <div>
      <h1>Commits in {owner}</h1>
      <h2>{commitCount}</h2>
    </div>
  );
};

export default CommitDashboard;

