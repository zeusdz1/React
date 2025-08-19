import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs}) => {
    return (
        <div style={StyleSheet.list}>
            {jobs.map((job) => (
                <JobItem key={job.id} job={job} />
            ))}
        </div>
    );
};

const styles ={
    list: {
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    }
};

export default JobList;