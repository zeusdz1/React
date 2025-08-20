import React from 'react';

const TicketInfo = ({ result, image, children, count }) => {
    return (
        <div className={`ticket-info ${result}`}>
            <img src={image} alt={result} className="ticket-image" />
            <div className="ticket-details">
                {children}
                {count !== undefined && <h3>{count}</h3>}
            </div>
        </div>
    );
};

export default TicketInfo;