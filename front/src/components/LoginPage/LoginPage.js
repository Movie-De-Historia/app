import React from "react";
import historia from "../../image/historia.svg";
import './LoginPage.scss'
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return(
        <>
            <div className="back_ground"></div>
            <img src={historia} className="historia" alt="historia-logo" />
            <div className="login_form"></div>
            <div className="mail_address">メールアドレス</div>
            <form>
                <input className="mail_address_form" type="text" defaultValue="" />
            </form>
            <div className="password">パスワード</div>
            <form>
                <input className="password_form" type="text" defaultValue="" />
            </form>
            <Link to="/ReceivedList">
                <Fab variant="extended" className="login_button">
                        ログイン
                </Fab>
            </Link>
            <div className="new_register">新規会員登録はこちら</div>
            <div className="line"></div>
        </>

    );
};

export default LoginPage;