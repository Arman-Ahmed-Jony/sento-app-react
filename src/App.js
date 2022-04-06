import logo from './logo.svg';
import './App.css';
import React from 'react';
import ContentIndex from './modules/content';

function App() {
  return (
    <div className="m-4">
      <h1 className="text-3xl text-center font-bold">Sinto Shinu Content Manager</h1>
      <ContentIndex />
    </div>
  );
}

export default App;
