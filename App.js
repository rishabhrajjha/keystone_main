import React from 'react';
import CommitDashboard from './CommitDashboard';
import './CommitDashboard.css';

const App = () => {
  return (
  <>
    <div className="commit-dashboard">
      <CommitDashboard owner="rishabhrajjha" repo="keystone" />
    </div>
	
	<div className="commit-dashboard">
      <CommitDashboard owner="rishabhrajjha" repo="keystonesecond" />
    </div>
	
  </>
  );
};

export default App;