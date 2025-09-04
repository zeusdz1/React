import {useState, React} from 'react';
import Header from './components/Header';
import './App.css';
import Movies from './components/Movies';

function App() {
  return (
    <div>
      <Header />
      <main className="main-content">
        <h1>Movie Review App</h1>
        <p>This is the main content area for our movie review application.</p>
        <Movies/>
      </main>
    </div>
  );
}

export default App;
