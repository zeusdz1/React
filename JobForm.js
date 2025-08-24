import { useState } from "react";


const JobForm = ()  => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    status: 'To Start',
    categories: []
  });
  

  const categoryOptions = ['Read Emails', 'Web Parsing', 'Send Emails'];
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails(prev => ({...prev, [name]: value}));
  };

  const handleCategoryToggle = (category) => {
    setJobDetails(prev => {
      if (prev.categories.includes(category)) {
        return {...prev, categories: prev.categories.filter(c => c !== category) };
      } else {
        return {...prev, categories: [...prev.categories, category] };
      }
    });
  };

  const handleClearCategories = () => {
    setJobDetails(prev => ({ ...prev, categories: [] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (jobDetails.categories.length === 0) {
      setError('Please select at least one category');
      return;
    }
    setError('');
    console.log('Submitted job details:', jobDetails);
    setJobDetails({ title: '', status: 'To Start', categories: [] });
  };
    

  return (
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '300px' }}>
        <input
        type="text"
        name="title"
        value={jobDetails.title}
        onChange={handleInputChange}
        placeholder="Enter job title"
        />

        <select
        name="status"
        value={jobDetails.status}
        onChange={handleInputChange}
        >

        <option value="To Start">To Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
        </select>

        <div Style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {categoryOptions.map(category => {
          const isSelected = jobDetails.categories.includes(category);
          return (
            <button
            key={category}
            type="button"
            onClick={() => handleCategoryToggle(category)}
            style={{
              padding: '5px 10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              backgroundColor: isSelected ? '#4caf50' : '#f0f0f0',
              color: isSelected ? 'white' : 'black',
              cursor: 'pointer'
            }}
          >
            {category}
          </button>
          );
        })}
          </div>
        
          <div>
          <strong>Selected Categories:</strong>
          {jobDetails.categories.length > 0 ? (
            <ul>
            {jobDetails.categories.map(c=> <li key={c}>{c}</li>)}
            </ul>
          ) : (
            <p>None</p>
          )}
          </div>

          <button type="button" onClick={handleClearCategories}>Clear Categories</button>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit">Add Job</button>
      </form>
  );
};

export default JobForm;
