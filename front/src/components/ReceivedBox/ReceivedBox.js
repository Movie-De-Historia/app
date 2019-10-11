import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import image_film from '../../image/image_film_short.svg';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { useMovieComments } from "../../modules/movieCommentsModule";

// class版（正常に動作するがreduxのhookは使えないので後々関数に変更する）
class ReceivedBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        isLikeState: false,
                        likeCount: 0,
                    };

        this.handleClickLike = this.handleClickLike.bind(this);
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
                            { this.state.isLikeState? "いいね💕" : "いいね" }
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

// 関数版（reduxのデータの更新がまだできていない，データの永続化orバックエンドの目処が立てばこちらに変更予定ßß）
// const handleClickLike = (event) => {
//     this.setState(prevState => ({
//         isLikeState: !prevState.isLikeState,
//     }));
//     console.log(this.state.isLikeState);
// }

// function ReceivedBox() {
//     const state = { isLikeState: false, likeCount: 0, };

//     const state2 = useMovieComments();
//     console.log(state2);

//     const dispatch = useDispatch();
//     const changeLikeState = (id) => {
//         dispatch(useMovieComments.actions.changeLikeState(id));
//     }
    
//     return (
//         <>
//         <Header displayLogoReturn={true} MyPageLogo={true} title="受信箱"/>
//         <Footer/>
            
//             <div className="App-body">
//                 <div>
//                     <img src={image_film} className="Content-film-short" alt="logo" />
//                 </div>

//                 <div className="Button">
//                     <button onClick={handleClickLike} className="btn-square-left">
//                         { state.isLikeState? "いいね♡" : "いいね" }
//                     </button>
//                     <Link to="AfterSaving">
//                         <button href="AfterSaving" className="btn-square-center">保存</button>
//                     </Link>
//                     <button className="btn-square-right">報告</button>
//                 </div>
//             </div>
//         </>
//     );
// };

export default ReceivedBox;