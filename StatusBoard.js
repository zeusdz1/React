import React from 'react';
import TicketInfo from './TicketInfo';
import completedImage from '../images/completed.png';
import inProgressImage from '../images/in-progress.png';
import failedImage from '../images/failed.png';

const StatusBoard = () => {
    return (
        <div className="status-board">
            <TicketInfo result="completed" image={completedImage} count={12}>
                <p>Tickets completed</p>
                </TicketInfo>

                <TicketInfo result="in-progress" image={inProgressImage} count={5}>
                    <p>Tickets In Progress</p>
                </TicketInfo>

                <TicketInfo result="failed" image={failedImage} count={3}>
                    <p>Tickets Failed</p>
                </TicketInfo>
        </div>
    );
};

export default StatusBoard;