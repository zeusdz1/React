import React from 'react';
import './JobColumn.css';

const JobColumn = ({ title, image, alt, jobs }) => {
    return (
        <div className="job-column">
            <div className="job-column-header">
                <h2 className="heading-status">{title}</h2>
                <img src={image} alt={alt} className="status-image" />
            </div>

            <ul className="job-list">
                {jobs.length > 0 ? (
                    jobs.map((job) => (
                        <li key={job.id} className="job-item">
                            {job.title}
                        </li>
                    ))
                ) : (
                    <li className="job-item empty">No jobs here</li>
                )}
            </ul>
        </div>
    );
};

export default JobColumn;