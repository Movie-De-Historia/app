import React, {useState, useEffect} from 'react';
import human from '../../image/human.svg';
import logo_return from '../../image/logo_return.svg';
import { Link } from 'react-router-dom';
import './Header.css';
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";

const Header = ( props ) => {
    let title = props.title;
    let lifeTime;

    const useTimer = (currentDate) => {
        const [time, setTime] = useState(0);
        const dispatch = useDispatch();
        const savedTime = useMovieComments()["movieComments"].savedTime;
        const saveTime = (date) => {
            // 一度だけ保存する（0は初期値）
            if (savedTime === 0) {
                dispatch(movieCommentsModule.actions.saveTime(date));
            };
        };

        useEffect(() => {
            let timerID;
            // tick()を即時実行
            if (props.LifeTime) {
                timerID = setInterval(tick(), 1000);
            }
            return () => clearInterval(timerID);
        }, [time]);

        const tick = () => {
            const data = new Date();
            // デバックしやすいように「時」ではなく「分」で計算（あとで戻す）
            // ミリ秒を分に変換して計算するため1000x60で割る
            const limitTime = 24;
            const elapsedTime = limitTime - Math.floor(( data.getTime() - savedTime ) / (1000 * 60));
            // デバック用（後で消す）
            console.log(elapsedTime)
            // 初めて保存した時間をreduxに一度だけ追加
            saveTime(currentDate.getTime());
            // 一定時間ごとに更新
            setTime(elapsedTime);
            return tick;
        };

        return time;
    };

    const timer = useTimer(new Date());
    const LogoReturn = props.displayLogoReturn ? <img src={logo_return} className="logo-return" alt="logo" /> : <></>;
    const DisplayColor = props.displayColor === "gray" ? "gray" : "black";
    const MyPageLogo = props.MyPageLogo ? <img src={human} className={"Header-logo-" + DisplayColor} alt="logo" /> : <></>;

    if (props.LifeTime) {
        lifeTime =
            <p className="test">
                <span className="Rest">残り </span>
                <span className="LifeTime">{timer}分</span>
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
