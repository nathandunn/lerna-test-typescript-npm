import React from 'react';
import logo from './logo.svg';
import Doctor from '@lerna-test-typescript-npm/doctor'
import Patient from '@lerna-test-typescript-npm/patient/dist/patient.esm'
import Scheduler from '@lerna-test-typescript-npm/scheduler/dist/scheduler.esm'
import './App.css';

function App() {
  console.log(new Doctor());
  // console.log(new Patient());
  // console.log(new Scheduler());
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
