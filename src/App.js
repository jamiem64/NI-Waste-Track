import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import MainView from './components/views/MainView';
import Layout from "./components/views/Layout";
import Navigation from "./components/views/Navigation";
import Home from './components/views/Home';

function App() {
  return (
    <BrowserRouter>
        <div>
          <MainView />
            <Routes>
             <Route path="/" component={MainView} exact/>
             <Route path="/home" component={Home}/>
             {/* <Route path="/contact" component={Contact}/> */}
            {/* <Route component={Error}/> */}
           </Routes>
        </div> 
      </BrowserRouter>
  );
}
export default App;
