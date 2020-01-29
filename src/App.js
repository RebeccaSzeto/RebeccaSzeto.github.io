import React from 'react';
import logo from './logo.svg';
import cors from 'cors';
import './App.css';
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import { Button, Card, Elevation, FormGroup, InputGroup, TextArea } from "@blueprintjs/core";

function App() {
  return (
    <div className="App">
        <ul class="navigation">
        <li>
              <a
                className="App-link"
                href="#title"
                rel="noopener noreferrer"
              >
                Home
              </a></li>
        <li>
              <a
                className="App-link"
                href="#about"
                rel="noopener noreferrer"
              >
                About
              </a></li>
        <li>
              <a
                className="App-link"
                href="#contact"
                rel="noopener noreferrer"
              >
                Contact
              </a></li>
      </ul>
      <header id="title" className="App-header">
      <svg viewbox="0 0 200 100">
  <defs>
    <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
      <stop offset="45%" stop-color="#326384"/>
      <stop offset="55%" stop-color="#1a5078"/>
    </linearGradient>
    <pattern id="wave" x="0" y="-5" width="220" height="100" patternUnits="userSpaceOnUse">
      <path id="wavePath" d="M-40 13 Q-30 7 -20 9 T0 13 T20 9 T40 9 T60 9 T80 9 T100 9 T120 9 T150 9 T190 9 T220 9 T230 9 T250 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)"> 
      {/* <path id="wavePath" d="M-80 9 M-70 9 M-60 9 M-50 9 M-40 9 Q-30 7 -20 15 T0 15 T20 15 T40 15 T60 15 T80 15 T110 13 T130 13 T140 13 T150 9 T160 9 T170 9 T150 9 V20 H-40z" mask="url(#mask)" fill="url(#gradient)">  */}
        <animateTransform
            attributeName="transform"
            begin="0s"
            dur="1.5s"
            type="translate"
            from="0,0"
            to="10,0"
            repeatCount="indefinite" />
      </path>
    </pattern>
  </defs>
  <text text-anchor="middle" x="150" y="115" font-size="105" fill="url(#wave)"  fill-opacity="0.9">WASZ</text>
  <text text-anchor="middle" x="150" y="115" font-size="105" fill="url(#gradient)" fill-opacity="0.4">WASZ</text>
</svg>
      </header>
      <div id="about" className="App-about">
        <div>
          <h2>About</h2>
          <div className="flex-container">
            <Card elevation={Elevation.TWO} className="wrapper">
              <h5><a href="#">Consulting</a></h5>
              <p>Plan for the future and build your dreams right.</p>
              <ul class="bp3-list">
                <li>Business to Business</li>
                <li>Finance</li>
                <li>Healthcare</li>
                <li>Technology</li>
              </ul>
            </Card>
            <Card elevation={Elevation.TWO} className="wrapper">
              <h5><a href="#">Execution</a></h5>
              <p>Seeing your dreams come to fruition is our goal.</p>
              <ul class="bp3-list">
                <li>Requirements</li>
                <li>Analysis</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
      <div className="App-contact">
        <div id="contact">
        <h2>Contact</h2>
          <div>Do you wish to speak with us?</div>
          <FormGroup pt-grid-size
              label="Name"
              labelFor="text-input"
              labelInfo="(required)"
          >
              <InputGroup id="text-input" placeholder="Name" disabled />
          </FormGroup>
          <FormGroup
              label="Email"
              labelInfo="(required)"
          >
              <InputGroup id="text-input" placeholder="Email" disabled />
          </FormGroup>
          <FormGroup
              label="Question"
              labelInfo="(required)">
              <TextArea className="bp3-fill" placeholder="Reason for contact" disabled />
          </FormGroup>
            <Button className="flex-item">Submit</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
