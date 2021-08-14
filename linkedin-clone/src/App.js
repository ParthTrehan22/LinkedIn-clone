import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice"

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header></Header>
      {!user ? <Login></Login> :
        <div className="app__body">
          <Sidebar></Sidebar>
          <Feed></Feed>
        </div>
      }
    </div>
  );
}

export default App;
