import React from 'react';
import CommitDashboard from './CommitDashboard';
import CommitDashboardTotal from './CommitDashboardTotal';
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
	
	<div className="commit-dashboard">
      <CommitDashboard owner="rishabhrajjha" repo="keystone_main" />
    </div>
	
	<div className="commit-dashboard">
      <CommitDashboardTotal owner="rishabhrajjha" />
    </div>
  </>
  );
};

export default App;
