import React from 'react';
import Navbar from './../components/Navbar';
import styles from './../styles/AboutMe.scss';


const AboutMe = () => {
    return (
        <div>
            <h1 className="containerHeader">About Me</h1>
            <p>I am enthusiastic about graphic design and sound design. I spend most of my freetime making 
                visuals for my projects and preparing audio for my radio station.
            </p>
            <br></br>
            <div className="footer">
                <span>
                [ Made with 💙 by Ava Nipper. ]
                </span>
            </div>
        </div>
    );
};

export default AboutMe;
