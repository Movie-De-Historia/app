  
import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {

  render() {
    return (
      <div className="form">
        <form name="todoform" onSubmit={this.props.onSubmit}>
          <input name="title" type="text" placeholder="タイトルを入力" defaultValue="" /><br/>
          <textarea id="onef" name="onef" placeholder="ひとこと" defaultValue=""></textarea><br/>
          <textarea id="desc" name="desc" placeholder="本文" defaultValue=""></textarea><br/>
          <button type="submit">投稿</button>
        </form>
      </div>
    );
  }
}