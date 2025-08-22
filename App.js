import React, { useState } from 'react';
import JobColumn from './components/JobColumn';
import toDoIcon from './images/to-do-icon.png';
import inProgressIcon from './images/in-progress-icon.png';
import doneIcon from './images/done-icon.png';
import './App.css';

const App = () => {
  const [jobs] = useState([
    { id: 1, title: 'Design homepage', status: 'todo'},
    { id: 2, title: 'Set up database', stauts: 'in-progress'},
    { id:3, title: 'Deploy to server', status: 'done'},
    { id: 4, title: 'Write documentation', status: 'todo'},
    { id: 5, title: 'Create login system', status: 'in-progress'},
  ]);

  const toDoJobs = jobs.filter((job) => job.status === 'todo');
  const inProgressJobs = jobs.filter((job) => job.status === 'in-progress');
  const doneJobs = jobs.filter((job) => job.status === 'done');

  return (
    <div className="app">
      <h1 className="app-title">Job Manager</h1>
      <div className="job-columns">
        <JobColumn
        title="Need to Start"
        image={toDoIcon}
        alt="To-do icon"
        jobs={toDoJobs}
        />
        <JobColumn
        title="In Progress"
        image={inProgressIcon}
        alt="In-progress icon"
        jobs={inProgressJobs}
        />
        <JobColumn
        title="Completed"
        image={doneIcon}
        alt="Done icon"
        jobs={doneJobs}
        />
      </div>
    </div>
  );
};

export default App;
