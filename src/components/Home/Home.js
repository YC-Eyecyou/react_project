import React,{Component} from 'react'
import List from '../../common/List/List';
import Nav from '../../common/Nav/Nav';
import ReactSwipe from 'react-swipe';
import './Home.css';

import pubsub from 'pubsub-js';

class Home extends Component{
	state={
		list:[]
	};
	componentDidMount(){
		
		pubsub.publish('view_loading',true);
		
		fetch(
			`/data/list.data`
		).then(
			res=>res.json()
		).then(
			data=>{
				setTimeout(()=>{
					
					pubsub.publish('view_loading',false);
					this.setState({list:data});
				},1000)
			}
		)
	}
	render(){
		let list = this.state.list;
		return(
			<div className="pet_mian" id="top">
				<ReactSwipe
					className="carousel"
					swipeOptions={{
					continuous: true,
					auto: 2000,
			
					}}
					>
					  <div className="banner pane1">
						<img src="./img/fl01.png"/>
						<div className="pet_slider_font">
							<span className="pet_slider_emoji"> (╭￣3￣)╭♡   </span>
							<span>“大白”有望成为现实：充气机器人研究取得进展</span>
						</div>
						<div className="pet_slider_shadow"></div>
					  </div>
					  <div className="banner pane2">
						<img src="./img/fl02.png"/>
						<div className="pet_slider_font">
							<span className="pet_slider_emoji"> []~(￣▽￣)~*　</span>
							<span>已然魔性的雪橇犬哈士奇 —《雪地狂奔》</span>
						</div>
					    <div className="pet_slider_shadow"></div>
					  </div>
					  <div className="banner pane3">
						<img src="./img/fl03.png"/>
						<div className="pet_slider_font">
								<span className="pet_slider_emoji"> (｡・`ω´･)　</span>
								<span>《星际争霸2:虚空之遗》国服过审!</span>
						</div>
						<div className="pet_slider_shadow"></div>
					  </div>
					</ReactSwipe>
				<Nav/>
				<List list={this.state.list} dataName="home"/>
			</div>
		)
	}
}
export default Home;