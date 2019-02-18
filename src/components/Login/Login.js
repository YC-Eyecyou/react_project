import React,{Component} from 'react'
import './Login.css'
import {Link} from 'react-router-dom';

class Login extends Component{
  render(){
    return (
			<div className="container">
				<div className="cart-panel">
					<form className="am-form">
						<div className="am-form-group am-form-icon">
								<i className="am-icon-user"></i>
								<input type="text" className="am-form-field  my-radius" placeholder="请输入您的用户名" name="username" value={this.state.username} onChange={this.changeIpt.bind(this)} />
						</div>
						<div className="am-form-group am-form-icon">
								<i className="am-icon-lock"></i>
								<input type="password" className="am-form-field  my-radius" placeholder="请输入您的密码" name="password" value={this.state.password} onChange={(ev)=>this.changeIpt(ev)}  />
						</div>
						<div className="am-checkbox">
							<label>
								<input type="checkbox" /> 记住密码
							</label>
						</div>
						<p className="am-text-center"><button type="submit" className="am-btn am-btn-danger am-radius am-btn-block" onClick={this.login.bind(this)}>立即登录</button></p>
					</form>
				</div>
			</div>
    )
  }
	state={
		username:'',
		password:'',
	};
	changeIpt(ev){
		this.setState({
			[ev.target.name]:ev.target.value
		})
	}
	login(){

		console.log('login',this.state.username,this.state.password);

		fetch(
			// `/data/user.json?username=${this.state.username}&password=${this.state.password}`
			`/data/user.json`
		).then(
			res=>res.json()
		).then(
			data=>{
				if (data.auth){
					this.props.history.push({pathname:'/user'})
				} else {
					this.props.history.push({pathname:'/error'})
				}
			}
		)
	}
}
export default Login;