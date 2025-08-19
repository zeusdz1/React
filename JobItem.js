import React from 'react';
const JobItem = ({ job}) => {
    return (
        <div
        style={{
            ...StyleSheet.item,
            backgroundColor: job.status === 'completed' ? '#d4edda' : '#fff3cd',
            borderColor: job.status === 'completed' ? '#28a745' : '#ffc107'
        }}
        >
            <h3>{job.name}</h3>
            <p>
                Status: <strong>{job.status}</strong>
            </p>
        </div>
    );
};

const styles = {
    item: {
        border: '2px solid',
        borderRadius: '8px',
        padding: '1rem',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }
};

export default JobItem;