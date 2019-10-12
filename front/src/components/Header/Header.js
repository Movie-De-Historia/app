import React from 'react';
import human from '../../image/human.svg';
import logo_return from '../../image/logo_return.svg';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(props) {
    let LogoReturn;
    let DisplayColor;
    let title = props.title;
    let MyPageLogo;
    let lifeTime = 24;

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

    if (props.MyPageLogo) {
        MyPageLogo = <img src={human} className={"Header-logo-" + DisplayColor} alt="logo" />
    } else {
        MyPageLogo = <></>
    }

    if (props.LifeTime) {
        lifeTime = <p className="test">
                    <span className="Rest">残り </span>
                    <span className="LifeTime">24h</span>
                    </p>
    } else {
        lifeTime = <span />
    }
    
    return (
        <header className={"App-header-" + DisplayColor}>
            <h1>{title}</h1>
            <Link to='/ReceivedList'> {LogoReturn} </Link>
            <Link to='/MyPage'> {MyPageLogo} </Link>
            {lifeTime}
        </header>
    );
}

Header.defaultProps = {
    displayLogoReturn: false,
    displayColor: "black",
    title: "None",
    MyPageLogo: false,
    LifeTime: false,
};

export default Header;
