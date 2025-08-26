import React, { useState } from 'react';
import './JobManager.css'; // optional styling

function JobManager() {
  const [jobs, setJobs] = useState([]);
  const [activity, setActivity] = useState('');
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('Need to Complete');

  const categoryOptions = ['Read Emails', 'Send Emails', 'Web Parsing'];

  const addJob = (e) => {
    e.preventDefault();
    if (!activity.trim()) return;

    const newJob = {
      activity,
      categories,
      status,
    };

    setJobs([...jobs, newJob]);

    // Reset form fields
    setActivity('');
    setCategories([]);
    setStatus('Need to Complete');
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (categories.includes(value)) {
      setCategories(categories.filter((c) => c !== value));
    } else {
      setCategories([...categories, value]);
    }
  };

  return (
    <div className="job-manager">
      <h1>Job Manager</h1>

      {/* Form to add jobs */}
      <form className="job-form" onSubmit={addJob}>
        <div>
          <label>Job Activity:</label>
          <input
            type="text"
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            placeholder="Enter job activity..."
          />
        </div>

        <div>
          <label>Categories:</label>
          <div className="category-options">
            {categoryOptions.map((cat) => (
              <label key={cat}>
                <input
                  type="checkbox"
                  value={cat}
                  checked={categories.includes(cat)}
                  onChange={handleCategoryChange}
                />
                {cat}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label>Status:</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Need to Complete">Need to Complete</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <button type="submit">Add Job</button>
      </form>

      {/* Columns */}
      <div className="job-columns">
        <JobColumn title="Need to Complete" status="Need to Complete" jobs={jobs} />
        <JobColumn title="In Progress" status="In Progress" jobs={jobs} />
        <JobColumn title="Completed" status="Completed" jobs={jobs} />
      </div>
    </div>
  );
}

function JobColumn({ title, status, jobs }) {
  const filteredJobs = jobs.filter((job) => job.status === status);

  return (
    <div className="job-column">
      <h2>{title}</h2>
      {filteredJobs.length === 0 ? (
        <p className="empty">No jobs here yet</p>
      ) : (
        filteredJobs.map((job, index) => (
          <JobCard key={index} job={job} />
        ))
      )}
    </div>
  );
}

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.activity}</h3>
      <div className="categories">
        {job.categories.map((category, index) => (
          <span key={index} className="category">
            {category}
          </span>
        ))}
      </div>
    </div>
  );
}

export default JobManager;
