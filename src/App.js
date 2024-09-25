import React from 'react';
import ArticleList from './components/ArticlesList';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <ArticleList />
      </header>
    </div>
  );
}

export default App;
