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
        // 一度だけ保存する（0は初期値）
        if (savedTime === 0) {
            dispatch(movieCommentsModule.actions.saveTime(date));
        };
    };
    if (props.LifeTime){
        saveTime(date.getTime());
    };
    let lifeTime;
    const limitTime = 24;
    const latestDate = new Date();
    const elapsedTime = limitTime - Math.floor(( latestDate.getTime() - savedTime ) / (1000 * 60));
    const [time, setTime] = useState(24);
    console.log(useMovieComments()["movieComments"]);
    // if (flag === props.LifeTime) {
        // console.log(latestDate.getTime(), date.getTime());
        // console.log(elapsedTime);
        // setFlag(false);
        // setTime(limitTime);
    // };

    const useTimer = (currentDate) => {
        useEffect(() => {
            let timerID = 0;
            if (props.LifeTime) {
                // 初めて保存したときの時間をreduxに一度だけ追加
                // saveTime(currentDate.getTime());
                if (time <= 0) {
                    clearInterval(timerID);
                } else {
                    timerID = setInterval(tick(), 1000);
                }
            }
            return () => clearInterval(timerID);
        }, [time]);

        const tick = () => {
            // デバック用（後で消す）
            console.log(`残り時間: ${elapsedTime} 分`)
            // 一定時間ごとに更新
            setTime(elapsedTime);
            return tick;
        };
        return time;
    };

    const timer = useTimer(new Date());

    if (props.LifeTime) {
        lifeTime =
            <p className="test">
                <span className="Rest">残り </span>
                <span className="LifeTime">{timer} 分</span>
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
