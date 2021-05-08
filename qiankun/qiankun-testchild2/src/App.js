import './App.css';
import actions from "./shared/action";
import { withRouter } from "react-router-dom";
import {createBrowserHistory} from "history";
import React, { Component } from 'react';
class App extends Component {
  state = {
    msg: ''
  } 
  componentDidMount () {
    // 這裡共享數據, 加上判斷, 便於獨立啟動
    if (window.__POWERED_BY_QIANKUN__) {
      actions.onGlobalStateChange(state => {
        const { token } = state;
        // 未登录 - 返回主页
        this.setState({
          msg: token
        })
      }, true);
    }
  }
  toChild1() {
   let history =  createBrowserHistory({
      forceRefresh: false, // 是否强制刷新整个页面
    })
    history.push('/qiankun-testchild1/test1');
  }
  render () {
    return (
      <div className="App">
        <header className="App-header">
          購物車系列 {this.state.msg}
          <button onClick={this.toChild1}>點擊我跳轉</button>  
        </header>
      </div>
    );
  }
  
}

export default withRouter(App);
