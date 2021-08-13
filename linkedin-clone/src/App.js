import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__body">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default App;
