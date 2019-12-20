import React, {useState, useEffect} from 'react';
import human from '../../image/human.svg';
import logo_return from '../../image/logo_return.svg';
import { Link } from 'react-router-dom';
import './Header.css';
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";

const Header = ( props ) => {
    const LogoReturn = props.displayLogoReturn ? <img src={logo_return} className="logo-return" alt="logo" /> : <></>;
    const DisplayColor = props.displayColor === "gray" ? "gray" : "black";
    const MyPageLogo = props.MyPageLogo ? <img src={human} className={"Header-logo-" + DisplayColor} alt="logo" /> : <></>;
    let title = props.title;
    const date = new Date();
    const dispatch = useDispatch();
    const savedTime = useMovieComments()["movieComments"].savedTime;
    const isSelected = useMovieComments()["movieComments"].isSelected;
    const save = () => dispatch(movieCommentsModule.actions.saveTime(date));
    const savingTime = (d) => dispatch(movieCommentsModule.actions.saveTime(d));

    // console.log(state);

    const saveTime = () => {
        if (isSelected) {
            if (savedTime===0) {
                save();
            }
        }
    };
    if (props.LifeTime){
        saveTime(date.getTime());
    };
    let lifeTime;
    const limitTime = 0.005   // 本来は24(h)だが，デバックのため数秒になるよう設定してある(後でもとに戻す)
    const [time, setTime] = useState(limitTime);
    const [unit, setUnit] = useState("h");
    const setOnUpdateState = () => dispatch(movieCommentsModule.actions.setOnMustUpdateState());
    const setOffIsSelectedState = () => dispatch(movieCommentsModule.actions.setOffIsSelected());

    const useTimer = () => {
        useEffect(() => {
            let timerID = 0;
            timerID = setInterval(tick(), 1000);
            return () => clearInterval(timerID);
        }, [time]);

        const tick = () => {
            if (isSelected === false) {
                // カチンコが選択されていなかったら，新しい時刻をsavedTimeにセット
                savingTime(date.getTime());
            }
            // 1秒ごとに更新する
            const d = new Date();
            // diff : 経過秒数(ms -> s)
            const diff = Math.floor((d.getTime() - savedTime) / 1000);
            // limitTimeはh -> s，diffはs
            let elapsedTime = limitTime * 60 * 60 - Math.floor(diff);

            if (elapsedTime > 3599) {
                elapsedTime = Math.floor(elapsedTime / 60 / 60); // s -> h
                setUnit("h");
            } else if (elapsedTime > 59) {
                elapsedTime = Math.floor(elapsedTime / 60); // s -> m
                setUnit("m");
            } else {
                setUnit("s");
            };

            // 残り時間が0秒になったときの処理
            if (elapsedTime <= 0){
                if (isSelected){
                    console.log("0秒になったよ");
                    setOffIsSelectedState(); // isSelected=>false
                    setOnUpdateState(); // updateFlag=>true
                    // 0秒になった瞬間(100ms後)，Inbox中のどこかにページにいれば
                    // 「/」のInboxページに移動する(戻る)
                    // console.log(window.location.pathname);
                    if (window.location.pathname === "/ReceivedBox" || window.location.pathname === "/AfterSaving"){
                        setTimeout(function(){
                            window.location.href = "/ReceivedList";
                        }, 100);
                    }
                }
            }

            setTime(elapsedTime);
            return tick;
        };
        return time < 0 ? 0 : time;
    };

    const timer = useTimer();
    console.log(timer);

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
