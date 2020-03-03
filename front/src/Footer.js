import React from 'react';
import unknown from './footer_unknown.svg'
import plane from './footer_plane.svg'
import gear from './footer_gear.svg'
import { Link } from 'react-router-dom'


function Footer(props) {
    let DisplayColor;
    
    if (props.displayColor === "gray") {
        DisplayColor = "gray";
    } else {
        DisplayColor = "black";
    }

    return (
        <footer className={"App-footer-" + DisplayColor}>
            <Link to='/Content1'> <img src={unknown} className={"Footer-unknown-" + DisplayColor} alt="logo" /></Link>
            <Link to='/Content2'><img src={plane} className={"Footer-plane-" + DisplayColor} alt="logo" /></Link>
            <Link to='/Content5'><img src={gear} className={"Footer-gear-" + DisplayColor} alt="logo" /></Link>
        </footer>
    );
}

export default Footer;