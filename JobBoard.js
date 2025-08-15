import React from 'react';

const JobBoard = () => {
  const companyName = "TechCorp";
  const jobCount = 5; // You can change this value to test different scenarios

  const getJobMessage = () => {
    if (jobCount === 0) {
      return "No jobs to schedule today";
    }
    return `Jobs running today from bot: ${jobCount}`;
  };

  return (
    <div>
      <h1>{companyName}</h1>
      <p>{getJobMessage()}</p>
    </div>
  );
};

export default JobBoard;
