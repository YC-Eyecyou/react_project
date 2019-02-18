import React,{Component} from 'react'
import Header from "../common/Header/Header";
import Home from "./Home/Home";
import Detail from './Detail/Detail';
import Column from './Column/Column';
import User from './User/User';
import Login from './Login/Login';
import Reg from './Reg/Reg';
import Footer from '../common/Footer/Footer';
import Error from '../common/Error/Error';

import {Route,Redirect,Switch} from 'react-router-dom';
import Auth from '../guard/Auth'
import Loading from '../common/Loading/Loading'

import pubsub from 'pubsub-js';

class App extends Component{
	
	constructor() {
	    super();
		
		this.state={
			bHeader:true,
			bFooter:true,
			bLoading:false,
			bMore:false
		}
		
		//订阅loading请求
		pubsub.subscribe('view_loading',(mess,bl)=>{
			// console.log('app_loading',bl);
			this.setState({bLoading:bl});
		})
	}
	
	componentWillReceiveProps(nextProps){
		//监听路由
		let path = nextProps.location.pathname;
		
		if(/home/.test(path)){
			this.setState({bHeader:false,bFooter:true})
		}
		if(/column|detail|login|reg|user/.test(path)){
			this.setState({bHeader:true,bFooter:true})
		}
	}
	
	render(){
		return(
			<>
				{/*window.rc_root不是响应式数据*/}
				{this.state.bHeader && <Header/>}
				{this.state.bLoading && <Loading/>}
				
				<Switch>
					<Route path="/home" component={Home} />
					<Route path="/column" component={Column} />
					<Route path="/detail/:id" component={Detail} />
					{/*<Route path="/user" component={User} />*/}
					<Auth path="/user" component={User} />
					<Route path="/login" component={Login} />
					<Route path="/reg" component={Reg} />
					<Redirect exact from="/" to="/home" />
					<Route path='/error' component={Error} />
				</Switch>
				
				{this.state.bFooter && <Footer/>}
			</>
		)
	}
}
export default App;