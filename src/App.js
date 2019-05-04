import React from 'react';
import logo from './edge_logo.png';
import './App.css';
import { QRForm } from './QRForm.js';
import { Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className='edge-logo' alt="logo" />
      </header>
      <div className='qrForm'>
        <h3>Add-Token QR Encoder</h3>
        <QRForm />
      </div>
    </div>
  );
}

export default App;
