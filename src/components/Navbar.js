import React from 'react';
import { Link } from 'react-router-dom';
import styles from '.././styles/Navbar.scss';

const Navbar = () => {
    return (
        <div className="homeCard">
            <img src="https://i.imgur.com/naq72ZU.png"></img>
            <ul class="animet-text">
                <li><span>avaVision</span></li>
            </ul>
                <Link to="/CV">
                    <span className="cardOption">
                        > CV
                    </span>
                </Link>
                <Link to="/Portfolio">
                    <span className="cardOption">
                        > Portfolio
                    </span>
                </Link>
                <Link to="/AboutMe">
                    <span className="cardOption">
                        > About me
                    </span>
                </Link>
        </div>
    );
};

export default Navbar;
