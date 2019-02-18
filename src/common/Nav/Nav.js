import React from 'react';
import More from '../More/More';
import './Nav.css';
import {NavLink} from 'react-router-dom';

import QueueAnim from 'rc-queue-anim';
console.log(window.bl)
const Error = (props) => (
	<div className="pet_circle_nav">
	    <ul className="pet_circle_nav_list">
	        <li><NavLink to={{pathname:'/column'}} className="iconfont pet_nav_xinxianshi ">&#xe61e;</NavLink><span>新鲜事</span></li>
	        <li><NavLink to={{pathname:'/column'}} className="iconfont pet_nav_zhangzhishi ">&#xe607;</NavLink><span>趣闻</span></li>
	        <li><NavLink to={{pathname:'/column'}} className="iconfont pet_nav_kantuya ">&#xe62c;</NavLink><span>阅读</span></li>
	        <li><NavLink to={{pathname:'/column'}} className="iconfont pet_nav_mengzhuanti ">&#xe622;</NavLink><span>专题</span></li>
	        <li><NavLink to={{pathname:'/login'}} className="iconfont pet_nav_meirong ">&#xe629;</NavLink><span>登录</span></li>
	        <li><NavLink to={{pathname:'/reg'}} className="iconfont pet_nav_yiyuan ">&#xe602;</NavLink><span>注册</span></li>
	        <li><NavLink to={{pathname:'/user'}} className="iconfont pet_nav_dianpu ">&#xe604;</NavLink><span>用户</span></li>
	        <li onClick={()=>{window.bl = !window.bl}}><div className="iconfont pet_nav_gengduo ">&#xe600;</div><span>更多</span></li>
	    </ul>
	    <QueueAnim type={['bottom','bottom']}>
	    	{window.bl && <More key="1"/>}
	    </QueueAnim>
	</div>
);



export default Error