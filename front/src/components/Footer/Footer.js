import React from 'react';
import unknown from '../../image/footer_unknown.svg'
import plane from '../../image/footer_plane.svg'
import human from '../../image/human.svg';
import { Link, useLocation } from 'react-router-dom'
import './Footer.css';
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";

function Footer(props) {
    const isSelected = useMovieComments()["movieComments"].isSelected;
    let DisplayColor;
    let InboxPathLink = "/ReceivedList";

    if (props.displayColor === "gray") {
        DisplayColor = "gray";
    } else {
        DisplayColor = "black";
    }

    // location.pathnameで今どのディレクトリにいるかが分かる
    const location = useLocation();
    // console.log(location.pathname);
    const InboxPath = useMovieComments()["movieComments"].InboxPath;
    if (isSelected) {
        InboxPathLink = "/AfterSaving";
    } else if (InboxPath === "/AfterSaving") {
        InboxPathLink = "/ReceivedList";
    } else {
        if (location.pathname === "/ReceivedBox") {
            InboxPathLink = "/ReceivedList";
        } else {
            InboxPathLink = (InboxPath === "/AfterSaving") ? "/AfterSaving" : '/ReceivedList';
        }
    }

    return (
        <footer className={"App-footer-" + DisplayColor}>
            <Link to={InboxPathLink}> <img src={unknown} className={"Footer-unknown-" + DisplayColor} alt="logo" /></Link>
            <Link to='/OutBox'><img src={plane} className={"Footer-plane-" + DisplayColor} alt="logo" /></Link>
            <Link to='/MyPage'><img src={human} className={"Footer-gear-" + DisplayColor} alt="logo" /></Link>
        </footer>
    );
}

export default Footer;
