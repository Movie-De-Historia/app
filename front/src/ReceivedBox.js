import React from 'react';
import Header from './Header';
import Footer from './Footer';
import image_film from './image_film_short.svg';
import logo_botton from './logo_botton.svg';
import send_botton from './send_botton.svg';
import { Link } from 'react-router-dom';

class ReceivedBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        isLikeState: false,
                        likeCount: 0,
                    };

        this.handleClickLike = this.handleClickLike.bind(this);
        {/*console.log(this.props.state);*/}
    }

    handleClickLike(event) {
        this.setState(prevState => ({
            isLikeState: !prevState.isLikeState,
        }));
        console.log(this.state.isLikeState);
    }
    
    render() {
        return (
            <>
            <Header displayLogoReturn={true} MyPageLogo={true} title="受信箱"/>
            <Footer/>
                
                <body className="App-body">
                    <div>
                        <img src={image_film} className="Content-film-short" alt="logo" />
                    </div>

                    <div className="Button">
                        <button onClick={this.handleClickLike} className="btn-square-left">
                            { this.state.isLikeState? "いいね♡" : "いいね" }
                        </button>
                        <Link to="AfterSaving">
                            <button href="AfterSaving" className="btn-square-center">保存</button>
                        </Link>
                        <button className="btn-square-right">報告</button>
                    </div>
                </body>
            </>
        );
    }
}

export default ReceivedBox;