import React,{Component} from 'react';
import './Column.css';
import {Link} from 'react-router-dom';
import querystring from 'query-string';

class Column extends Component{
	state={
		column:[]
	};
	componentDidMount(){
		fetch(
			`/data/column.data`
		).then(
			res=>res.json()
		).then(
			data=>this.setState({column:data})
		)
	}
	render(){
		let column = this.state.column;
		let dataName = 'column';
		return(
			<div className="pet_content pet_content_list">
			  <div className="pet_article_like">
				<div className="pet_content_main pet_article_like_delete">
				  <div data-am-widget="list_news" className="am-list-news am-list-news-default am-no-layout">
					<div className="am-list-news-bd">
					  <ul className="am-list">
							{
								column.map(item=>(
									<li className="am-g am-list-item-desced pet_list_one_block" key={item.id}>
										<div className="pet_list_one_info">
											<div className="pet_list_one_info_l">
												<div className="pet_list_one_info_ico"><img src={item.header} alt="" /></div>
												<div className="pet_list_one_info_name">{item.name}</div>
											</div>
											<div className="pet_list_one_info_r">
												<div className={item.typeClassName}>{item.typeName}</div>
											</div>
										</div>
										<div className=" am-list-main">
											<h3 className="am-list-item-hd pet_list_one_bt">
												<Link to={{pathname:'/detail/'+item.id,search:'?dataName='+dataName}} className="">{item.title}</Link>
											</h3>
											<Link to={{pathname:'/detail/'+item.id,search:'?dataName='+dataName}}>
												<div className="pet_list_zt_img"><img src={item.img} alt="" /></div>
												<div className="am-list-item-text pet_list_two_text">{item.text}</div>
											</Link>
										</div>
									</li>
								))
							}
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
		)
	}
}
export default Column;