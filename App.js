import React, { useState } from 'react';
import JobColumn from './components/JobColumn';
import JobForm from './components/JobForm';



const App = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Parse Emails', status: 'Need to Start'},
    { id: 2, title: 'SAP Extraction', status: 'In Progress'},
    { id:3, title: 'Generate Report', status: 'Completed'},
  ]);

  const deleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const updateJobStatus = (id, newStatus) => {
    setJobs (
      jobs.map(job =>
        job.id === id ? {...job, status: newStatus } : job
      )
    );
  };

  const addNewJob = (title) => {
    if (!title.trim()) return;
    const newJob = {
      id: Date.now(),
      title,
      status: 'Need to Start'
    };
    setJobs([...jobs, newJob]);
  };

  const toDoJobs = jobs.filter(job => job.status === 'Need to Start');
  const inProgressJobs = jobs.filter(job => job.status === 'In Progress');
  const completedJobs = jobs.filter(job => job.status === 'Completed');

  return (
    <div className="app">
      <h1 className="app-title">Job Manager</h1>
      <JobForm addNewJob={addNewJob} />
      <div className="job-columns">
        <JobColumn
        title="Need to Start"
        deleteJob={deleteJob}
        updateJobStatus={updateJobStatus}
        jobs={toDoJobs}
        />
        <JobColumn
        title="In Progress"
        deleteJob={deleteJob}
        updateJobStatus={updateJobStatus}
        jobs={inProgressJobs}
        />
        <JobColumn
        title="Completed"
        deleteJob={deleteJob}
        updateJobStatus={updateJobStatus}
        jobs={completedJobs}
        />
      </div>
    </div>
  );
};

export default App;
