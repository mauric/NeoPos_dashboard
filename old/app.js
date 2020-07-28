import React from 'react';
import logo from './logo.svg';
import './app.css';
import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";



function App() {
    return (
      <div className="App">
      	<div id="wrapper">
        <SideBar />
        <TopBar />
        <Footer />
      </div>
      </div>
    );
}

export default App;


