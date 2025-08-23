import { useState } from "react";
import JobList from './JobList';

const JobForm = ()  => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    category: '',
    status: 'To Start'
  });
  
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const categories = ['Read Emails', 'Web Parsing', 'Send Emails'];
  const statuses = ['To Start', 'In Progress', 'Completed'];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setJobDetails({
      title: '',
      category: '',
      status: 'To Start'
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobDetails.title || !jobDetails.category || !jobDetails.status) {
      setError('Please fill in all fields.');
      setSuccessMessage('');
      return;
    }
    
    setJobs((prevJobs) => [...prevJobs, jobDetails]);

    console.log('Job Added:', jobDetails);

    resetForm();
    setError('');
    setSuccessMessage('Job added successfully!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        name="title"
        value={jobDetails.title}
        onChange={handleInputChange}
        placeholder="Enter job title"
        />

        <select
        name="category"
        value={jobDetails.category}
        onChange={handleInputChange}
        >

        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}

        </select>

        <select
        name="status"
        value={jobDetails.status}
        onChange={handleInputChange}
        >
         {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
         ))} 
        </select>

        <button
        type="submit"
        disabled={!jobDetails.title || !jobDetails.category || !jobDetails.status}
        >
          Add Job
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

      <JobList jobs={jobs} />
    </div>
  );
};

export default JobForm;
