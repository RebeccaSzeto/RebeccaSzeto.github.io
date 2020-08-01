import React, { Component } from 'react'
class Sidebar extends Component {
render() {
    return (
        <nav>
            <h3>REBECCA SZETO</h3>
            <ul>
                <li>Web Applications Developer</li>
                <li>Toronto, ON</li>
                <li><a
                    className="App-link"
                    href="https://github.com/RebeccaSzeto"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Github
                    </a></li>
                <li><a
                    className="App-link"
                    href="https://www.linkedin.com/in/rebecca-szeto-a0854893/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Linkedin
                    </a></li>
            </ul><br />
            <h3>SKILLS</h3>
            <ul>
                <li>Critical thinking</li>
                <li>Time management</li>
                <li>Web language: nodejs + reactjs</li>
                <li>Web DevOps: containers</li>
                <li>Cloud: Azure + GCP</li>
                <li>App Language: C#</li>
                <li>Mobile Language: Xamarin</li>
            </ul>
        </nav>
        )
    }
}
export default Sidebar