import React,{Component} from 'react';
import "./User.css";

class User extends Component{
	render(){
		return(
			<div className="pet_grzx">
				<div className="pet_grzx_nr">
					<div className="pet_grzx_ico">
						<img src="./img/qq1.png" alt="" />
					</div>
					<div className="pet_grzx_name">{this.props.data.username}</div>
					<div className="pet_grzx_map">美国</div>
					<div className="pet_grzx_num_font">
						我坐在水屋下边的平台看着大海，吹着海风，真的是太喜欢了。夜晚有好多小白鲨鱼，好多种鱼。
					</div>
					<div className="pet_grzx_num">
						<span>653<i>喜欢</i></span>
						<span>234<i>关注</i></span>
						<span>34<i>文章</i></span>
					</div>

				</div>

				<div className="pet_grzx_list">
					<div className="pet_content_main pet_article_like_delete">
						<div data-am-widget="list_news" className="am-list-news am-list-news-default am-no-layout">
							<div className="am-list-news-bd">
								<ul className="am-list">
									{/*缩略图在标题右边*/}
									<li className="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block">

										<div className=" am-u-sm-8 am-list-main pet_list_one_nr">
											<h3 className="am-list-item-hd pet_list_one_bt"><a href="###" className="">十一长假哪也不去，宅在家里看电影！</a></h3>
											<div className="am-list-item-text pet_list_one_text">每逢长假，总有那么一群人选择远离人山人海，静静地呆在家，坐在电脑电视前。长时间的工作学习让他们感觉很疲惫，对什么都提不起劲，打开电脑却不知道干什么好…</div>

										</div>
										<div className="am-u-sm-4 am-list-thumb">
											<a href="###" className="">
												<img src="./img/q1.jpg" className="pet_list_one_img" alt="" />
											</a>
										</div>
									</li>
									<li className="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block">

										<div className=" am-u-sm-8 am-list-main pet_list_one_nr">
											<h3 className="am-list-item-hd pet_list_one_bt"><a href="###" className="">不是说好做彼此的天使吗？连最后一口汉堡也不给我</a></h3>
											<div className="am-list-item-text pet_list_one_text">国外网友waxiestapple在论坛Reddit贴出爱犬照片，指出“我的狗狗好像瘦了点”“因为我刚刚把最后一口汉堡吃掉”，只见这只哈士奇一脸惨遭背叛的样子，对主人露出相当不可思议的表情。</div>

										</div>
										<div className="am-u-sm-4 am-list-thumb pet_video_info">
											<div className="pet_video_info_tag"><i className="iconfont">&#xe62d;</i>03:50</div>
											<a href="###" className="">
												<img src="./img/q4.jpg" className="pet_list_one_img" alt="我很囧，你保重....晒晒旅行中的那些囧！" />
											</a>
										</div>
									</li>
									<li className="am-g am-list-item-desced am-list-item-thumbed am-list-item-thumb-right pet_list_one_block">

										<div className=" am-u-sm-8 am-list-main pet_list_one_nr">
											<h3 className="am-list-item-hd pet_list_one_bt"><a href="###" className="">怦然心动！澳洲大眼宝宝逆天睫毛萌翻全球！</a></h3>
											<div className="am-list-item-text pet_list_one_text">来自澳大利亚布里斯班的十个月大的萌宝Egypt拥有一双修长的睫毛、清澈的眼眸，可爱的模样让她在社交网站上爆红。</div>

										</div>
										<div className="am-u-sm-4 am-list-thumb">
											<a href="###" className="">
												<img src="./img/q5.jpg" className="pet_list_one_img" alt="我很囧，你保重....晒晒旅行中的那些囧！" />
											</a>
										</div>
									</li>

									<li className="am-g am-list-item-desced pet_list_one_block">

										<div className=" am-list-main">
											<h3 className="am-list-item-hd pet_list_one_bt"><a href="###" className="">浣熊孤儿掉到树下，被一家人收养之后……</a></h3>
											<ul data-am-widget="gallery" className="am-gallery am-avg-sm-3 am-avg-md-3 am-avg-lg-3 am-gallery-default pet_list_one_list">
												<li>
													<div className="am-gallery-item">
														<a href="###" className="">
															<img src="./img/qq1.jpg" alt="某天 也许会相遇 相遇在这个好地方" />
														</a>
													</div>
												</li>
												<li>
													<div className="am-gallery-item">
														<a href="###" className="">
															<img src="./img/qq2.jpg" alt="不要太担心 只因为我相信" />
														</a>
													</div>
												</li>
												<li>
													<div className="am-gallery-item">
														<a href="###" className="">
															<img src="./img/qq3.jpg" alt="终会走过这条遥远的道路" />
														</a>
													</div>
												</li>
											</ul>
											<div className="am-list-item-text pet_list_two_text">巴哈马拿骚的居民Rosie
												Kemp发现一个刚出生的浣熊，掉在了树下。因为找不到小浣熊的妈妈了，Rosie和她的女儿Laura Young决定收养这只小东西，并给她取名“小南瓜”。</div>
										</div>
									</li>

									<li className="am-g am-list-item-desced pet_list_one_block">

										<div className=" am-list-main">
											<h3 className="am-list-item-hd pet_list_one_bt"><a href="###" className="">“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！</a></h3>


											<div className="am-list-item-text pet_list_two_text">狗狗会天天的跟着我们生活在一起，它们的一切都会影响着主人，尤其是狗狗身上散发的味道，会无时无刻的对主人有影响，如果狗狗身体有异味，主人就会用过于香喷喷的洗漱品帮狗狗洗澡，这样不仅对狗狗身体有伤害，还会容易患上皮肤病，其实，我们知道一些小技巧，就会改善狗狗身上存在的味道。</div>

										</div>
									</li>


								</ul>
							</div>

						</div>

					</div>

				</div>
			</div>
		)
	}
}
export default User;