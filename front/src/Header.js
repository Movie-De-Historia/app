import React from 'react';
import human from './human.svg';

function Header() {
    return (
        <header className="App-header">
            <h1>受信一覧</h1>
            <img src={human} className="Header-logo" alt="logo"/>
        </header>
    );
}

export default Header;