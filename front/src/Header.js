import React from 'react';
import human from './human.svg';
import logo_return from './logo_return.svg';
import { Link } from 'react-router-dom'

function Header(props) {
    let LogoReturn;
    let DisplayColor;

    if (props.displayLogoReturn) {
        LogoReturn = <img src={logo_return} className="logo-return" alt="logo" />
    } else {
        LogoReturn = <></>
    }

    if (props.displayColor === "gray") {
        DisplayColor = "gray";
    } else {
        DisplayColor = "black";
    }
    
    return (
        <header className={"App-header-" + DisplayColor}>
            <h1>受信一覧</h1>
            <Link to='/Content1'> {LogoReturn} </Link>
            <img src={human} className={"Header-logo-" + DisplayColor} alt="logo" />
        </header>
    );
}

Header.defaultProps = {
    displayLogoReturn: false,
    displayColor: "black",
};

export default Header;