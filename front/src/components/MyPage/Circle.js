import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

export default class Circle extends React.Component {
    render() {
      //表示させたいデータ群
      const dataGendar = [
        // { name: '男性', value: 532 },
        // { name: '女性', value: 232 },

      ];
      //円グラフの各領域の色を定義
      const COLORS = [
        '#2250A2',
        '#da50a2',
        '#008b8b',
        '#ff7f7f',
        '#ff7fbf',
        '#ff7fff',
        '#bf7fff',
        '#7f7fff',
        '#7fbfff',
        '#7fffff',
        '#7fffbf',
        '#7fff7f',
        '#bfff7f',
        '#ffff7f',
        '#ffbf7f',
        '#ea5550',
        '#fff3b8',
        '#00947a',
        '#a4a8d4',
        '#e6c0c0',
        '#4d4398',
        '#4169e1',
        '#556b2f',
        '#ff0000',
      ];
      //円グラフのラベルの内容や表示場所を定義
      const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
          <text
            x={x} //ラベルを表示させる場所を指定
            y={y} //ラベルを表示させる場所を指定
            fill="white" //ラベルの色を指定
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
              //ラベルで表示するテキストを指定
            {/* {`${(percent * 100).toFixed(0)}%`} */}
          </text>
        );
    };

    return (
      <ResponsiveContainer>
        <PieChart //円グラフのhoverの設定などをする
          onMouseEnter={this.onPieEnter} //hoverした時に。。。
        >
          <Pie //円グラフの位置や大きさ、データやラベルの内容を指定
            data={this.props.data}  //Array型のデータを指定
            nameKey="name" //データで表示させるタイトルを指定
            dataKey="value" //データで表示させる値(数値)を指定
            cx="50%"  //要素の左を基準に全体の50%移動
            cy="50%"  //要素の上を基準に全体の50%移動
            labelLine={false}  //ラベルの線の表示を消す
            label={renderCustomizedLabel} //ラベルの中身を指定。何も指定しなければパラメーターの値が表示される
          >
            { //円グラフの色を各領域ごとに分けるように指定
            this.props.data.map((entry, index) =>
              <Cell fill={COLORS[index % COLORS.length]} />)
            }
          </Pie>
          <Tooltip /> //hoverさせた時に具体的な値を表示させるように指定
        </PieChart>
      </ResponsiveContainer>
    );
    }
}

// export defaut Circle;
