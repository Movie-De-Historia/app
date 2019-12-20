import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './MyPage.scss'
import axios from 'axios';
import { useDispatch } from "react-redux";
import movieCommentsModule, { useMovieComments } from "../../modules/movieCommentsModule";

import Chart from 'react-apexcharts'
// import ReactApexCharts from 'react-apexcharts'


function compareFunc(a, b) {
    return b - a;
}

const Donut = (series) => {
    const genre = {
        "1":"アクション",
        "2":"SF",
        "3":"コメディ",
        "4":"サスペンス",
        "5":"時代劇",
        "6":"児童",
        "7":"ミステリー",
        "8":"ホラー",
        "9":"探偵",
        "10":"スペクタル",
        "11":"スポーツ",
        "12":"青春",
        "13":"ノスタルジー",
        "14":"西部劇",
        "15":"パニック",
        "16":"ファミリー",
        "17":"プロパガンダ",
        "18":"音楽",
        "19":"恋愛",
        "20":"連続活劇",
        "21":"剣戟",
        "22":"ロードムービー",
        "23":"成人",
        "24":"レズビアン・ゲイ"
    }
    const lab = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
    const genre_label = lab.map((v)=>genre[v])
    console.log(genre_label);
    series.series.sort(compareFunc)
    console.log(series);

    const state = {
        options: {
            labels: genre_label,
            responsive: [{
                breakpoint: 480,
                options: {
                // chart: {
                //     width: 200
                // },
                // legend: {
                //     position: 'bottom'
                // }
            }
            }]
        },
        // series: [44, 55, 41, 17, 15],
        // labels: ['A', 'B', 'C', 'D', 'E']
        series: series,
        // labels: genre_label
        // series: [0, 0, 0, 2, 1, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]
    }

    // console.log("DLKJFSLDKJFSLDKF");
    // console.log(state.series.series)
    // console.log(state.labels)

    return (
        <div className="didDonut">
            <Chart options={state.options} series={state.series.series} type="pie" width="390"/>
        </div>
    );
}
let circleDid = <></>

// import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts'
// import { Circle } from "./Circle";

function MyPage() {

    const did_genre_count = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0,
        "11": 0,
        "12": 0,
        "13": 0,
        "14": 0,
        "15": 0,
        "16": 0,
        "17": 0,
        "18": 0,
        "19": 0,
        "20": 0,
        "21": 0,
        "22": 0,
        "23": 0,
        "24": 0
    }
    const did_genre_count_keys = []
    const did_genre_count_values = []
    const dispatch = useDispatch();
    // const [numberOfLikes, setNumberOfLikes] = useState(136);
    const numberOfLikes = useMovieComments()["movieComments"].countLikes;
    const [colorState, setColorState] = useState("left");
    // Logが入ってるやーつ
    const logState = useMovieComments()["movieComments"].log;
    const reviewState = useMovieComments()["movieComments"].review;
    const didValuesState = useMovieComments()["movieComments"].didValues;
    const didKeysState = useMovieComments()["movieComments"].didKeys;


    // console.log(colorState);
    const leftColor = colorState === "left" ? "PostHistoryGroupGray" : "PostHistoryGroup";
    const centerColor = colorState === "center" ? "IineSitaReviewGroupGray" : "IineSitaReviewGroup";
    const rightColor = colorState === "right" ? "IineSaretaReviewGroupGray" : "IineSaretaReviewGroup";
    // console.log(leftColor, centerColor, rightColor);


    const getLog = (dispatch) => {
        return async () => {
            return (
                axios.get(`http://localhost:3000/log`)
                .then(res => dispatch(movieCommentsModule.actions.getLog(res)))
                .then(() => dispatch(movieCommentsModule.actions.countNbLikes()))
            );
        };
    };

    const getReview = (dispatch) => {
        return async () => {
            return (
                axios.get(`http://localhost:3000/reviews_all`)
                .then(res => dispatch(movieCommentsModule.actions.getReview(res)))
            );
        };
    };

    //　真ん中のときにいいねした数のサークルを出す
    circleDid = ((colorState === "center") && (didValuesState != []) && (didKeysState != [])) ? <Donut className="didDonut" series={didValuesState}></Donut> : <div>何もないです</div> ;


    useEffect(() => {
        // いいねされた総数のAPIを叩く
        // いいね数を初期化する
        const initializeCountLikes = () => dispatch(movieCommentsModule.actions.initializeNbLikes());
        const saveDidValues = (values) => dispatch(movieCommentsModule.actions.saveDidValues(values));
        const saveDidKeys = (keys) => dispatch(movieCommentsModule.actions.saveDidKeys(keys));
        initializeCountLikes();

        // logをGetAPIで収集する
        async function fetchLog() {
            const logs = getLog(dispatch);
            await logs();
        }
        fetchLog();

        // reviewをGetAPIで収集する
        async function fetchReview() {
            const reviews = getReview(dispatch);
            await reviews();
        }
        fetchReview();

        // console.log(logState);
        // console.log(reviewState);
        // console.log(numberOfLikes);
        // console.log(genre);
        logState.data.forEach((x) => {
            // ※ 現在，user_idは1の人(自分=いいねした人)としています
            if (x.user_id === 1) {
                if (x.like === true) {
                    did_genre_count[reviewState.data[x.review_id - 1].genre_id] += 1;
                }
            }
        });
        // console.log(did_genre_count)
        // console.log("---------")
        {
            Object.keys(did_genre_count).forEach(key => {
                did_genre_count_keys.push(key);
                did_genre_count_values.push(did_genre_count[key])
            });
        }
        // console.log(did_genre_count_keys);
        // console.log(did_genre_count_values);

        saveDidValues(did_genre_count_values);
        saveDidKeys(did_genre_count_keys);

        console.log(didValuesState);
        console.log(didKeysState);
    }, []);


    return (
        <>
            <Header displayLogoReturn={false} title="My page"/>
            <Footer/>
            <div className="displayNumberOfLikes">{numberOfLikes}</div>
            <div className="Text_NumberOfLikes">いいねされた数</div>
            <div className="Line"></div>

            <div className={leftColor} onClick={() => setColorState("left")}>
                <div className="PostHistory">投稿履歴</div>
            </div>
            <div className={centerColor} onClick={() => setColorState("center")}>
                <div className="IineSitaReview">いいねしたレビュー</div>
            </div>
            <div className={rightColor} onClick={() => setColorState("right")}>
                <div className="IineSaretaReview">いいねされたレビュー</div>
            </div>

            {/* <Circle did_genre_count={did_genre_count}></Circle> */}
            {/* {circleDid}<Donut></Donut> */}
            {circleDid}
        </>
    );
}


// class Donut extends React.Component {

//     constructor(props) {
//       super(props);

//       this.state = {
//         options: {},
//         series: [44, 55, 41, 17, 15],
//         labels: ['A', 'B', 'C', 'D', 'E']
//       }
//     }

//     render() {

//       return (
//         <div className="donut">
//           <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
//         </div>
//       );
//     }
//   }
// const Circle = (props) => {
//     //表示させたいデータ群
//     const dataGendar = [props.did_genre_count];
//     // [
//     // { name: '男性', value: 532 },
//     // { name: '女性', value: 232 },

//     // ];
//     //円グラフの各領域の色を定義
//     const COLORS = [
//     '#2250A2',
//     '#da50a2',
//     '#008b8b',
//     '#ff7f7f',
//     '#ff7fbf',
//     '#ff7fff',
//     '#bf7fff',
//     '#7f7fff',
//     '#7fbfff',
//     '#7fffff',
//     '#7fffbf',
//     '#7fff7f',
//     '#bfff7f',
//     '#ffff7f',
//     '#ffbf7f',
//     '#ea5550',
//     '#fff3b8',
//     '#00947a',
//     '#a4a8d4',
//     '#e6c0c0',
//     '#4d4398',
//     '#4169e1',
//     '#556b2f',
//     '#ff0000',
//     ];
//     //円グラフのラベルの内容や表示場所を定義
//     const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
//     const RADIAN = Math.PI / 180;
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);
//     return (
//         <text
//         x={x} //ラベルを表示させる場所を指定
//         y={y} //ラベルを表示させる場所を指定
//         fill="white" //ラベルの色を指定
//         textAnchor={x > cx ? 'start' : 'end'}
//         dominantBaseline="central"
//         >
//             //ラベルで表示するテキストを指定
//         {/* {`${(percent * 100).toFixed(0)}%`} */}
//         </text>
//     );

//     return (
//       <ResponsiveContainer>
//         <PieChart //円グラフのhoverの設定などをする
//           onMouseEnter={this.onPieEnter} //hoverした時に。。。
//         >
//           <Pie //円グラフの位置や大きさ、データやラベルの内容を指定
//             data={this.props.data}  //Array型のデータを指定
//             nameKey="name" //データで表示させるタイトルを指定
//             dataKey="value" //データで表示させる値(数値)を指定
//             cx="50%"  //要素の左を基準に全体の50%移動
//             cy="50%"  //要素の上を基準に全体の50%移動
//             labelLine={false}  //ラベルの線の表示を消す
//             label={renderCustomizedLabel} //ラベルの中身を指定。何も指定しなければパラメーターの値が表示される
//           >
//             { //円グラフの色を各領域ごとに分けるように指定
//             this.props.data.map((entry, index) =>
//               <Cell fill={COLORS[index % COLORS.length]} />)
//             }
//           </Pie>
//           <Tooltip /> //hoverさせた時に具体的な値を表示させるように指定
//         </PieChart>
//       </ResponsiveContainer>
//     );
//     }
// }


export default MyPage;