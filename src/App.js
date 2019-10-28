import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import AppPreview from './components/AppPreview';

function App() {
  return (
    <div id="layout">
      <Header/>
      <Main/>
      <AppPreview/>
    </div>
  );
}

export default App;
