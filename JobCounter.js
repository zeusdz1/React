import React, { useState } from 'react';

const JobCounter = () => {
  const [jobCount, setJobCount] = useState(0);

  const handleAddJob = () => {
    setJobCount(jobCount + 1); // triggers re-render
    console.log("New job count:", jobCount + 1);
  };

  return (
    <div>
      <h1>Job Counter</h1>
      <p>Current Jobs: {jobCount}</p>
      <button onClick={handleAddJob}>Add Job</button>
    </div>
  );
};

export default JobCounter;
