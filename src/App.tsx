import React from 'react';
import './App.scss';
import Dashboard from './components/partials/Dashboard/Dashboard';
import Header from './components/partials/Header/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;
