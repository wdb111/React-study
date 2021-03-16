import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { DatePicker, message } from 'antd';
import React from 'react'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      date: '',
    };
  }
  handleChange(date) {
    message.info('您选择的日期是: ' + date.toString());
    this.setState({ date });
  }
  render(){
    return (
      <div className="App">
        <header>
          <h1>
              React项目从这里开始
          </h1>
          <div style={{ width: 400, margin: '100px auto' }}>
          <DatePicker onChange={value => this.handleChange(value)} />
          <div style={{ marginTop: 20 }}>当前日期：{this.state.date.toString()}</div>
        </div>
          <Button>这是anta按钮</Button>
        </header>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
  
}

export default App;
