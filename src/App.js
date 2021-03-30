import logo from './logo.svg';
import './App.css';
import { Button } from 'antd';
import { DatePicker, message } from 'antd';
import MyHeader from './view/header/index'
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
        <MyHeader></MyHeader>
      </div>
    );
  }
  
}

export default App;
