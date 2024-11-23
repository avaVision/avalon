import React from 'react';
import styles from './../styles/CV.scss'
import { LiaGithubAlt } from "react-icons/lia";
import { LiaLinkedinIn } from "react-icons/lia";
import { TiSocialInstagramCircular } from "react-icons/ti";

const CV = () => {
    return (
        <div>
            <div className="header">
                <div className="left">
                    <h2>Ava Nipper</h2>
                    <div className="socials">
                        < LiaGithubAlt />
                        < LiaLinkedinIn />
                        < TiSocialInstagramCircular />
                    </div>
                </div>

                <div className="right">
                    <p>919-418-8022</p>
                    <br></br>
                    <p>avanipper85@gmail.com</p>
                    <br></br>
                    <p>Raleigh, North Carolina</p>
                </div>
            </div>
            <div className="container">
                <div className="containerOne">
                    <h1 className="containerHeader">Certificates</h1>
                    <h3>> Meta Front-End</h3>
                    <br></br>
                    <h3>> Meta Back-End</h3>
                    <br></br>
                    <h3>> Javascript Algorithms and Data Structures</h3>
                    <br></br>
                    <h3>> Google UX Design Certificate</h3>
                    <br></br>
                    <h3>> AWS Certified Developer</h3>
                    <br></br>
                    <h3>> Node.js Certification</h3>
                    <br></br>
                    <h3>> React.js Certification</h3>
                    <br></br>
                    <h1 className="containerHeader">Projects</h1>
                    <h2>1maginary.online</h2>
                    <h4>> Full-stack Developer, Producer, System Administrator, Management</h4>
                    <ul>
                        <li>
                        Developed and maintained a comprehensive digital radio platform featuring live streaming, 
                        chat functionality, a robust backend server, user authorization, and gamification elements 
                        such as experience points (XP) and items. Hosted and managed all components to ensure 
                        seamless operation.
                        </li>
                    </ul>
                    <br></br>
                    <h2>Dead Internet Archive</h2>
                    <h4>> Full-stack Developer & System Administrator</h4>
                    <ul>
                        <li>
                        Developed and maintained a digital store that features authentication, archival, and purchases.
                        </li>
                    </ul>
                    <br></br>
                </div>

                <div className="containerTwo">
                    <h1 className="containerHeader">Skills</h1>
                    <p>
                        HTML / JS / CSS
                    </p>
                    <br></br>
                    <p>
                        React.js / Bootstrap
                    </p>
                    <br></br>
                    <p>
                        MySQL / Firebase / Node.js
                    </p>
                    <br></br>
                    <p>
                        AWS / Git
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                    <h1 className="containerHeader">Education</h1>
                    <p>Liberty University Online Academy</p>
                    <br></br>
                    <p>2019-2024</p>
                    <p>
                    /
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                    <p>
                    /
                    </p>
                    <br></br>
                </div>

            </div>
            <div className="footer">
                <span>
                [ Made with 💙 by Ava Nipper. ]
                </span>
            </div>
        </div>
    );
};

export default CV;
