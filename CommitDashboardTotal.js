import React, { useState, useEffect } from 'react';
import { fetchCommitsTotal } from './GithubApiTotal';

const CommitDashboardTotal = ({ owner }) => {
  const [commitCount, setCommitCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(async () => {
      const count = await fetchCommitsTotal(owner);
      setCommitCount(count);
    }, 2000);

    return () => clearInterval(interval);
  }, [owner]);

  return (
    <div>
      <h1>Total Commits by {owner}</h1>
      <h2>{commitCount}</h2>
    </div>
  );
};

export default CommitDashboardTotal;

