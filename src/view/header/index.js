import React from 'react'
import logo from '../../logo.svg';
import './index.css'

class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        let list=[
            {
                title:'文档'
            },
            {
                title:'教程'
            },
            {
                title:'博客'
            },
            {
                title:'社区'
            },
        ]
        return (
            <header className="App-header">
                <div className="header-box">
                    <div>
                       <img src={logo} className="App-logo" alt="logo" />
                       <span className="title">React</span>
                    </div>
                    <div>
                        {
                           list.map(item=>{
                               return (
                                   <span>{item.title}</span>
                                  )
                               })
                        }
                    </div>
                    <div></div>
                    <div></div>
                
                </div>
            </header>
        )
    }
}
export default Header