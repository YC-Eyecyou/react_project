import React,{Component} from 'react'
import './Reg.css';

class Reg extends Component{
  render(){
    return (
			<div className="container">
				<div className="cart-panel">
					<form className="am-form">
						<div className="am-form-group am-form-icon">
								<i className="am-icon-user"></i>
								<input type="text" className="am-form-field  my-radius" placeholder="请输入您的用户名" />
						</div>
						<div className="am-form-group am-form-icon">
								<i className="am-icon-lock"></i>
								<input type="password" className="am-form-field  my-radius" placeholder="请输入您的密码" />
						</div>
						<div className="am-form-group am-form-icon">
								<i className="am-icon-lock check"></i>
								<input type="password" className="am-form-field  my-radius" placeholder="请重复输入一次密码" />
						</div>
						<div className="am-form-group am-form-icon">
								<i className="am-icon-envelope"></i>
								<input type="text" className="am-form-field  my-radius" placeholder="请输入邮箱号码" />
						</div>
						<div className="am-form-group am-form-icon">
								<i className="am-icon-phone"></i>
								<input type="text" className="am-form-field  my-radius" placeholder="请输入联系电话" />
						</div>
						<div className="am-checkbox">
							<label>
								<input type="checkbox" /> 我已阅读并同意<a href="#">《协议》</a>
							</label>
						</div>
						<p className="am-text-center"><button type="submit" className="am-btn am-btn-danger am-radius am-btn-block">立即注册</button></p>
					</form>
				</div>
			</div>
    )
  }
}
export default Reg;