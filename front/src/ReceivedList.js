import React from 'react';
import Header from './Header';
import Footer from './Footer';
import kachinko_open from './image/kachinko_large_open.svg';
import kachinko_close from './image/kachinko_large_close.svg';
import { Link } from 'react-router-dom';
import { useMovieComments } from "./modules/movieCommentsModule";


// class ReceivedList extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = [
//             {
//                 id: 1,
//                 title: "タイトル1",
//                 genre: "ジャンル1",
//                 onePhrase: "ひとこと1",
//                 text:"コメント１コメント１コメント１コメント１コメント１",
//                 isLikeState: false,
//                 isSaved: false,
//                 imgType: "kachinko_open",
//             },
//             {
//                 id: 2,
//                 title: "タイトル2",
//                 genre: "ジャンル2",
//                 onePhrase: "ひとこと2",
//                 text: "コメント２コメント２コメント２コメント２コメント２",
//                 isLikeState: false,
//                 isSaved: false,
//                 imgType: "kachinko_close",
//             },
//             {
//                 id: 3,
//                 title: "タイトル3",
//                 genre: "ジャンル3",
//                 onePhrase: "ひとこと3",
//                 text: "コメント３コメント３コメント３コメント３コメント３",
//                 isLikeState: false,
//                 isSaved: false,
//                 imgType: "kachinko_close",
//             },
//         ];
//     }

//     changeLikeState(id) {
//         this.setState(this.state[id].isLikeState, !this.state[id].isLikeState);
//     }

//     render() {
//         // this.state = useMovieComments();
//         // const aaa = useMovieComments();
//         // console.log(aaa);
//         return (
//             <div>
//                 <Header title="受信一覧" MyPageLogo={true}/>
//                 <Footer/>
//                 <div className="App-body">
//                     {this.state.map(review =>(
                        
//                         <Link to="/ReceivedBox">
//                             <div className="Content-kachinko">
//                                 <DisplayKachinko review={review} />
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

function ReceivedList() {
    const state = useMovieComments().list;
    console.log(state);

    return (
        <div>
            <Header title="受信一覧" MyPageLogo={true}/>
            <Footer/>
            <div className="App-body">
                {state.map(review =>(
                    <Link to="/ReceivedBox">
                        <div className="Content-kachinko">
                            <DisplayKachinko review={review} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

class DisplayKachinko extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const review = this.props.review;
        const kachinkoType = (review.id===1) ? kachinko_open : kachinko_close;
        const className1 = "App-logo" + review.id;
        const className2 = (review.id===1) ? "kachinko-open-title" : "kachinko-close-title";

        return(
            <>
                <img src={kachinkoType} className={className1} alt="kachinko-logo" />
                <p className={className2}>
                    <h3>
                        {review.title}<br/>
                        {review.genre}<br/>
                        {review.onePhrase}<br/>
                    </h3>
                </p>
            </>
        );
    }
}


export default ReceivedList;