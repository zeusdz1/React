import React from 'react';
import ProfileCard from './ProfileCard.js';

const App = () => {
  const profiles = [
    {
      image: "https://example.com/image1.jpg",
      name: "John Doe",
      jobTitle: "Frontend Developer",
      bio: "Passionate about creating user-friendly web applications."
    },
    // Add at least 2 more profile objects here
  ];

  return (
    <div className="app">
      <h1>Team Profiles</h1>
      <p>Name: John Doe<br></br>
        jobTitle: Frontend Developer<br></br>
        Bio: Passionate about creating user-friendly web applications<br></br>
      </p>
      {/* Use the map function here to render ProfileCard components */}
    </div>
  );
};

export default App;