import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import './App.css';
import Routes from './routes'

export default class App extends Component {
  render() {
    console.log('Hello from laptop :)');
    return (
      <div className="app-container">
        {/* <header className="app-header">
          <h1 className="header-title">GitHub Issues Scraper</h1>
          <p>This application retrieves issues from a given GitHub repository</p>
        </header> */}
        <main className="app-content">
          <Routes />
        </main>
      </div>
    );
  };
};