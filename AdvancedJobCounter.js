import React, { useState } from 'react';

const AdvancedJobCounter = () => {
  // 1. Initialize state
  const [jobCount, setJobCount] = useState(0);

  // 2. Add job (increment)
  const handleAddJob = () => {
    setJobCount(prevCount => prevCount + 1);
  };

  // 3. Remove job (decrement, not below 0)
  const handleRemoveJob = () => {
    setJobCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // 4. Reset jobs
  const handleResetJobs = () => {
    setJobCount(0);
  };

  // 6. Display different messages based on jobCount
  const getMessage = () => {
    if (jobCount === 0) return "No jobs available";
    if (jobCount > 0 && jobCount <= 5) return "Few jobs available";
    return "Many jobs available";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Advanced Job Counter</h1>
      
      {/* Display current job count */}
      <p>Current Jobs: {jobCount}</p>

      {/* Buttons for actions */}
      <button onClick={handleAddJob} style={{ margin: "5px" }}>Add Job</button>
      <button onClick={handleRemoveJob} style={{ margin: "5px" }}>Remove Job</button>
      <button onClick={handleResetJobs} style={{ margin: "5px" }}>Reset Jobs</button>

      {/* Display message */}
      <p>{getMessage()}</p>
    </div>
  );
};

export default AdvancedJobCounter;
