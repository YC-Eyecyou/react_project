import React,{Component} from 'react';
import a2 from '../../assets/img/a2.jpg';
import a3 from '../../assets/img/a3.jpg';
import './Detail.css';
import querystring from 'query-string';

class Detail extends Component{
	state={
		detail:{}
	};
	componentDidMount(){
		let id=this.props.match.params.id-0;
		console.log(id);
		let dataName=querystring.parse(this.props.location.search).dataName;
		console.log(dataName);
		fetch(
			`/data/article_${dataName}.data`
		).then(
			res=>res.json()
		).then(
			data=>this.setState({
				detail:data[id-1]
			})
		)
	}
	render(){
		let detail = this.state.detail;
		console.log(detail);
		return(
			<div className="pet_content">
				<div className="pet_content_block">
					<article className="am-paragraph am-paragraph-default pet_content_article">
						<h1 className="pet_article_title">{detail.title}</h1>
						<div className="pet_article_user_time">{detail.time}</div>
						<img src={a2} />
						<div dangerouslySetInnerHTML={{__html:detail.content}}>
						</div>
					</article>
					<ul className="like_share_block">
						<li><a className="link_share_button" href="###"><i className="iconfont share_ico_link">&#xe62f;</i>1460</a></li>
						<li><a className="link_share_button" href="###"><i className="iconfont share_ico_wx">&#xe630;</i>微信</a></li>
						<li><a className="link_share_button" href="###"><i className="iconfont share_ico_pyq">&#xe62e;</i>朋友圈</a></li>
					</ul>
				</div>
			</div>
		)
	}
}
export default Detail;