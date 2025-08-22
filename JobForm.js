import React, { useState } from 'react';
import './JobForm.css';

const JobForm = ({ addNewJob }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewJob(title);
    setTitle('');
  };

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Enter job title..." 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default JobForm;
