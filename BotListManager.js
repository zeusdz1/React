import React, { useState } from 'react';
import './BotListManager.css'; // Import CSS for styling

const BotListManager = () => {
  const [bots, setBots] = useState([
    { id: 1, name: "Email Extractor", status: "Running", task: "Extracting emails" },
    { id: 2, name: "Notification Sender", status: "Completed", task: "Sending notifications" },
    { id: 3, name: "Data Analyzer", status: "Stopped", task: "Analyzing data" }
  ]);

  // 4. Trigger job: toggle status for demo purposes
  const triggerJob = (id) => {
    setBots(prevBots =>
      prevBots.map(bot =>
        bot.id === id
          ? {
              ...bot,
              status:
                bot.status === "Running"
                  ? "Stopped"
                  : bot.status === "Stopped"
                  ? "Running"
                  : "Running", // Restart completed bots
            }
          : bot
      )
    );
  };

  // Helper function for status color
  const getStatusClass = (status) => {
    if (status === "Running") return "status-running";
    if (status === "Stopped") return "status-stopped";
    if (status === "Completed") return "status-completed";
    return "";
  };

  return (
    <div className="bot-list-manager">
      <h1>Bot List Manager</h1>
      <ul>
        {bots.map((bot) => (
          <li key={bot.id} className="bot-item">
            <div className="bot-info">
              <p><strong>ID:</strong> {bot.id}</p>
              <p><strong>Name:</strong> {bot.name}</p>
              <p>
                <strong>Status:</strong>{" "}
                <span className={getStatusClass(bot.status)}>{bot.status}</span>
              </p>
              <p><strong>Task:</strong> {bot.task}</p>
            </div>
            <button onClick={() => triggerJob(bot.id)}>Trigger Job</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BotListManager;
