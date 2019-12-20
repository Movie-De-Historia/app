import React from "react";
import './RegisterPage.scss'
import Fab from '@material-ui/core/Fab';

const RegisterPage = () => {
    return(
        <>
            <div className="back_ground"></div>
            <div className="login_form"></div>
            <div className="mail_address">メールアドレス</div>
            <form>
                <input className="mail_address_form" type="text" defaultValue="" />
            </form>
            <div className="password">パスワード</div>
            <form>
                <input className="password_form" type="password" defaultValue="" />
            </form>
            <Fab variant="extended" className="login_button">
                登録
            </Fab>
        </>

    );
};

export default RegisterPage;