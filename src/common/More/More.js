import React from 'react';
import './More.css';

window.bl=false;
const More = (props) => (
		<div className="pet_more_list">
			<div className="pet_more_list_block">
		<div className="iconfont pet_more_close" onClick={()=>{
					window.bl = false
				}}>×</div>
		<div className="pet_more_list_block">
			<div className="pet_more_list_block_name">
				<div className="pet_more_list_block_name_title">阅读 Read</div>
				<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_xinxianshi pet_more_list_block_line_ico">&#xe61e;</i>
					<div className="pet_more_list_block_line_font">新鲜事</div>
				</a>
							<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_zhangzhishi pet_more_list_block_line_ico">&#xe607;</i>
					<div className="pet_more_list_block_line_font">趣闻</div>
				</a>
							<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_kantuya pet_more_list_block_line_ico">&#xe62c;</i>
					<div className="pet_more_list_block_line_font">阅读</div>
				</a>
							<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_mengzhuanti pet_more_list_block_line_ico">&#xe622;</i>
					<div className="pet_more_list_block_line_font">专题</div>
				</a>
										<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_bk pet_more_list_block_line_ico">&#xe629;</i>
					<div className="pet_more_list_block_line_font">订阅</div>
				</a>
										<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_wd pet_more_list_block_line_ico">&#xe602;</i>
					<div className="pet_more_list_block_line_font">专栏</div>
				</a>
	<div className="pet_more_list_block_name_title pet_more_list_block_line_height">服务 Service</div>
				<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_xinxianshi pet_more_list_block_line_ico">&#xe61e;</i>
					<div className="pet_more_list_block_line_font">新鲜事</div>
				</a>
							<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_zhangzhishi pet_more_list_block_line_ico">&#xe607;</i>
					<div className="pet_more_list_block_line_font">趣闻</div>
				</a>
							<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_kantuya pet_more_list_block_line_ico">&#xe62c;</i>
					<div className="pet_more_list_block_line_font">阅读</div>
				</a>
							<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_mengzhuanti pet_more_list_block_line_ico">&#xe622;</i>
					<div className="pet_more_list_block_line_font">专题</div>
				</a>
										<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_bk pet_more_list_block_line_ico">&#xe629;</i>
					<div className="pet_more_list_block_line_font">订阅</div>
				</a>
										<a className="pet_more_list_block_line">
					<i className="iconfont pet_nav_wd pet_more_list_block_line_ico">&#xe602;</i>
					<div className="pet_more_list_block_line_font">专栏</div>
				</a>
			</div>
		</div>
	
		</div>
			</div>
);
console.log(window.bl)
export default More;