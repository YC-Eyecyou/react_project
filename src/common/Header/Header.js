import React from 'react';
import './Header.css';
import More from '../More/More';
import '../More/More.css';
// import {NavLink} from 'react-router-dom';

import QueueAnim from 'rc-queue-anim';

// window.bl = false;
console.log(window.bl);
const Header = (props) => (
	<>
		<div className="pet_head">
			<header data-am-widget="header" className="am-header am-header-default pet_head_block">
				<div className="am-header-left am-header-nav ">
					<a href="javascript:window.history.go(-1);" className="iconfont pet_head_jt_ico" >&#xe601;</a>
				</div>
				<div className="am-header-right am-header-nav" onClick={()=>{
					window.bl = !window.bl;
				}}>
					<a className="iconfont pet_head_gd_ico">&#xe600;</a>
				</div>
			</header>
		</div>
		<QueueAnim type={['bottom','bottom']}>
			{window.bl && <More key="1"/>}
		</QueueAnim>
	</>	
);
console.log(!window.bl);

export default Header