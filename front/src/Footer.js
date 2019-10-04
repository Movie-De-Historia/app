import React from 'react';
import unknown from './footer_unknown.svg'
import plane from './footer_plane.svg'
import gear from './footer_gear.svg'

function Footer() {
    return (
        <footer className="App-footer">
            <img src={unknown} className="Footer-unknown" alt="logo" />
            <img src={plane} className="Footer-plane" alt="logo" />
            <img src={gear} className="Footer-gear" alt="logo" />
        </footer>
    );
}

export default Footer;