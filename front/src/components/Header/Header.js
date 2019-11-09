import React, {useState, useEffect} from 'react';
import human from '../../image/human.svg';
import logo_return from '../../image/logo_return.svg';
import { Link } from 'react-router-dom';
import './Header.css';
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";

const Header = ( props ) => {
    const [flag, setFlag] = useState(true);
    const LogoReturn = props.displayLogoReturn ? <img src={logo_return} className="logo-return" alt="logo" /> : <></>;
    const DisplayColor = props.displayColor === "gray" ? "gray" : "black";
    const MyPageLogo = props.MyPageLogo ? <img src={human} className={"Header-logo-" + DisplayColor} alt="logo" /> : <></>;
    let title = props.title;
    const date = new Date();
    const dispatch = useDispatch();
    const savedTime = useMovieComments()["movieComments"].savedTime;
    const saveTime = (date) => {
        // 一度だけ保存する（初めの0は初期値）
        if (savedTime === 0) {
            dispatch(movieCommentsModule.actions.saveTime(date));
        };
    };
    if (props.LifeTime){
        saveTime(date.getTime());
    };
    let lifeTime;
    const limitTime = 24;
    const [time, setTime] = useState(limitTime);
    const [unit, setUnit] = useState("h");

    const useTimer = () => {
        useEffect(() => {
            let timerID = 0;
            if (props.LifeTime) {
                timerID = setInterval(tick(), 1000);
            }
            return () => clearInterval(timerID);
        }, [time]);

        const tick = () => {
            // 1秒ごとに更新する
            const d = new Date();
            // diff : 経過秒数(s)
            const diff = Math.floor((d.getTime() - savedTime) / 1000); // ms -> s
            let elapsedTime = limitTime * 60 * 60 - Math.floor(diff); // limitTimeはh -> s，diffはs
            // デバック用（後で消す）
            // console.log(elapsedTime);

            if (elapsedTime > 3599) {
                elapsedTime = Math.floor(elapsedTime / 60 / 60); // s -> h
                setUnit("h");
            } else if (elapsedTime > 59) {
                elapsedTime = Math.floor(elapsedTime / 60); // s -> m
                setUnit("m");
            } else {
                setUnit("s");
            };

            setTime(elapsedTime);
            // デバック用（後で消す）
            // console.log(`残り: ${elapsedTime} ${unit}`);
            return tick;
        };
        return time < 0 ? 0 : time;
    };

    const timer = useTimer();

    if (props.LifeTime) {
        lifeTime =
            <p className="test">
                <span className="Rest">残り </span>
                <span className="LifeTime">{timer} {unit}</span>
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
