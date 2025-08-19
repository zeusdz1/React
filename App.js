import React, { useState } from 'react';
import Header from './components/Header';
import JobList from './components/JobList';
import Footer from './components/Footer';

const App = () => {
  const [jobs, setJobs] = useState([
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ]);

  const [showJobs, setShowJobs] = useState(true);

  // Add a new job (just a sample with random ID/status)
  const addJob = () => {
    const newJob = {
      id: jobs.length + 1,
      name: `New Job ${jobs.length + 1}`,
      status: Math.random() > 0.5 ? 'running' : 'completed'
    };
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="app">
      <Header />

      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <button onClick={() => setShowJobs(!showJobs)}>
          {showJobs ? 'Hide Jobs' : 'Show Jobs'}
        </button>
        <button onClick={addJob} style={{ marginLeft: '10px' }}>
          Add Job
        </button>
      </div>

      {showJobs && <JobList jobs={jobs} />}

      <Footer />
    </div>
  );
};

export default App;
