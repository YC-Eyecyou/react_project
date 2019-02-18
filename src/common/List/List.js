import React from 'react';
import './List.css';
import {Link} from 'react-router-dom';

const List = ({list,dataName}) => (
	<div className="pet_content_main">
	  <div data-am-widget="list_news" className="am-list-news am-list-news-default" >
			<div className="am-list-news-bd">
				<ul className="am-list">
					{
						list.map(item=>(
							<li className="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block" key={item.id}>
								<div className="pet_list_one_info">
										<div className="pet_list_one_info_l">
											<Link to={{pathname:'/user'}}>
												<div className="pet_list_one_info_ico"><img src={item.userIco} alt=""/></div>
												<div className="pet_list_one_info_name">{item.userName}</div>
											</Link>
										</div>
										<div className="pet_list_one_info_r">
											<Link to={{pathname:'/column'}}>
												<div className={item.className}>{item.typeName}</div>
											</Link>
										</div>
								</div>
								<div className=" am-u-sm-8 am-list-main pet_list_one_nr">
									
										<h3 className="am-list-item-hd pet_list_one_bt"><Link to={{pathname:'/detail/'+item.id,search:'?dataName='+dataName}}>{item.title}</Link></h3>
										<div className="am-list-item-text pet_list_one_text">{item.text}</div>
									
								</div>
								<div className="am-u-sm-4 am-list-thumb">
									<Link to={{pathname:'/detail/'+item.id,search:'?dataName='+dataName}} className="">
										<img src={item.img} className="pet_list_one_img" alt=""/>
									</Link>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		</div>
	</div>
);
export default List;