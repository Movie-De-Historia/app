  
import React, { Component } from 'react';
import './Form.css';

export default class Form extends Component {

  render() {
    return (
      <div className="Form">
        <form name="todoform" onSubmit={this.props.onSubmit}>
          <input name="title" type="text" placeholder="タイトルを入力" defaultValue="" /><br/>
          <select className="Select">
            <option value="" hidden>ジャンルを選択</option>
            <option value="1">アニメ</option>
            <option value="2">ドラマ</option>
            <option value="3">恋愛</option>
            <option value="4">ホラー</option>
            <option value="5">SF</option>
            <option value="6">アクション</option>
            <option value="7">コメディー</option>
          </select>
          <textarea id="onef" name="onef" placeholder="ひとこと" defaultValue=""></textarea><br/>
          <textarea id="desc" name="desc" placeholder="本文" defaultValue=""></textarea><br/>
          <button type="submit">投稿</button>
        </form>
      </div>
    );
  }
}