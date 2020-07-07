<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP -->
		<view class="mp-search-box">
			<input class="ser-input" type="text" value="输入关键字搜索" disabled />
		</view>
		<!-- #endif -->
		<!-- 头部轮播 -->
		<view class="carousel-wrap">
			<view class="carousel-background" :style="{background:carouselBackground}"></view>
			<!-- header栏占位 -->
			<view class="header-palcing"></view>
			<swiper class="carousel" circular :autoplay="true" @change="swiperChange">
				<swiper-item class="carousel-item" v-for="(item,index) in carouselList" :key="index">
					<image :src="item.src"></image>
				</swiper-item>
			</swiper>
			<!-- 自定义指示器 -->
			<view class="swiper-dots">
				<view class="num">{{swiperCurrent + 1}}</view>
				<view class="sign">/</view>
				<view class="num">{{swiperLength}}</view>
			</view>
		</view>
		<!-- 分类 -->
		<view class="cate-wrap">
			<view class="cate-item">
				<image src="/static/temp/c3.png"></image>
				<text>环球美食</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c5.png"></image>
				<text>个护美妆</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c6.png"></image>
				<text>营养保健</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c7.png"></image>
				<text>家居厨卫</text>
			</view>
			<view class="cate-item">
				<image src="/static/temp/c8.png"></image>
				<text>速食生鲜</text>
			</view>
		</view>
		<view class="ad-1">
			<image src="/static/temp/ad1.jpg" mode="scaleToFill"></image>
		</view>
		<!-- 限时秒杀 -->
		<view class="seckill-wrap">
			<view class="seckill-header">
				<image class="s-img" src="/static/temp/secskill-img.jpg" mode="widthFix"></image>
				<text class="tip">8点场</text>
				<text class="hour timer">06</text>
				<text class="minute timer">20</text>
				<text class="second timer">52</text>
				<text class="yticon icon-you"></text>
			</view>
			<floor-list :list="goodsList" :width=75> </floor-list>
		</view>
		<!-- 团购 -->
		<view class="bulk-wrap">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">精品团购</text>
				<text class="tit2">Boutique Group Buying</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="bulk-swiper-wrap">
			<swiper class="swiper-section" circular :autoplay="true">
				<swiper-item class="swiper-item" v-for="(item,index) in goodsList" :key="index" v-if="index%2 === 0">
					<view class="item-box left" @click="goProductDetail">
						<image :src="item.image" mode="aspectFill"></image>
						<view class="info-box">
							<text class="title clamp">{{item.title}}</text>
							<view class="price-box">
								<text class="price">￥{{item.price}}</text> 
								<text class="m-price">￥188</text> 
							</view>
							<view class="pro-box">
								<view class="progress-box">
									<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
								</view>
								<text>6人成团</text>
							</view>
						</view>
					</view>	
					<view class="item-box right" @click="goProductDetail">
						<view class="info-box">
							<text class="title clamp">{{goodsList[index+1].title}}</text>
							<view class="price-box">
								<text class="price">￥{{goodsList[index+1].price}}</text> 
								<text class="m-price">￥188</text> 
							</view>
							<view class="pro-box">
								<view class="progress-box">
									<progress percent="72" activeColor="#fa436a" active stroke-width="6" />
								</view>
								<text>10人成团</text>
							</view>
						</view>
						<image :src="goodsList[index+1].image" mode="aspectFill"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 分类精选 -->
		<view class="bulk-wrap">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">分类精选</text>
				<text class="tit2">Competitive Products For You</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="hot-wrap">
			<view class="hot-img-box">
				<image class="hot-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409398864&di=4a12763adccf229133fb85193b7cc08f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201703%2F19%2F20170319150032_MNwmn.jpeg" mode="scaleToFill"></image>
			</view>
			<view class="hot-list">
				<floor-list :list="goodsList" :width=90> </floor-list>
			</view>
		</view>
		
		<view class="hot-wrap mt">
			<view class="hot-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409984228&di=dee176242038c2d545b7690b303d65ea&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F5ef4da9f17faaf4612f0d5046f4161e556e9bbcfdb5b-rHjf00_fw658" mode="scaleToFill"></image>
			</view>
			<view class="hot-list">
				<floor-list :list="goodsList" :width=90> </floor-list>
			</view>
		</view>
		
		<view class="hot-wrap mt">
			<view class="hot-img-box">
				<image class="floor-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1553409794730&di=12b840ec4f5748ef06880b85ff63e34e&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01dc03589ed568a8012060c82ac03c.jpg%40900w_1l_2o_100sh.jpg" mode="scaleToFill"></image>
			</view>
			<view class="hot-list">
				<floor-list :list="goodsList" :width=90> </floor-list>
			</view>
		</view>
		
		<!-- 猜你喜欢 -->
		<view class="bulk-wrap">
			<image src="/static/temp/h1.png"></image>
			<view class="tit-box">
				<text class="tit">猜你喜欢</text>
				<text class="tit2">Guess You Like It</text>
			</view>
			<text class="yticon icon-you"></text>
		</view>
		<view class="guess-wrap">
			<view class="guess-item" v-for="(item,index) in goodsList" :key="index" @click="goProductDetail">
				<image :src="item.image" mode="aspectFill"></image>
				<text class="title clamp">{{item.title}}</text>
				<text class="price">￥{{item.price}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	import floorList from '../../components/custom-components/floor-list'
	export default {
		components: {
			'floor-list': floorList
		},
		data() {
			return {
				carouselBackground: '',
				carouselList: [],
				swiperCurrent: 0,
				swiperLength: 0,
				goodsList: [],
			}
		},
		onLoad() {
			this.loadData();
		},
		methods: {
			async loadData() {
				this.carouselList = await this.$api.json('carouselList')
				this.swiperLength = this.carouselList.length
				this.carouselBackground = this.carouselList[0].background
				this.goodsList = await this.$api.json('goodsList') || [];
			},
			swiperChange(e) {
				let index = e.target.current
				this.swiperCurrent = index
				this.carouselBackground = this.carouselList[index].background
			},
			goProductDetail(){
				uni.navigateTo({
					url:'/pages/product/productDetail'
				})
			}
		}
	}
</script>

<style scoped lang="scss">

	@import '../../style/mixin.scss';
	/* #ifdef MP */
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30rpx;
		z-index: 9999;
		width: 100%;
		padding: 0 80rpx;
		.ser-input{
			flex:1;
			height: 56rpx;
			line-height: 56rpx;
			text-align: center;
			font-size: 28rpx;
			color:$uni-text-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-wrap{
			position:relative;
			z-index:5;
			border-radius:16rpx 16rpx 0 0;
			margin-top:-20rpx;
		}
		.carousel-wrap{
			padding: 0 !important;
			.header-palcing {
				padding-top: 0 !important;
				height: 0 !important;
			}
			.carousel{
				.carousel-item{
					padding: 0 !important;
				}
			}
			.swiper-dots{
				left:45rpx !important;
				bottom:40rpx !important;
			}
		}
	}
	/* #endif */
	page{
		background-color: #f5f5f5;
	}
	.container {
		.mt{
			margin-top: 16rpx;
		}
		.carousel-wrap {
			position: relative;
			padding-top: 10px;

			.carousel-background {
				position: absolute;
				left: 0;
				top: 0;
				width: 100%;
				height: 426rpx;
				//background-color: rgb(203, 87, 60);
			}

			.header-palcing {
				height: var(--status-bar-height);
				padding-top: 44px;
				box-sizing: content-box;
			}

			.carousel {
				width: 100%;
				height: 350rpx;

				.carousel-item {
					width: 100%;
					height: 100%;
					padding: 0 14px;
					overflow: hidden;
				}

				image {
					width: 100%;
					height: 100%;
					border-radius: 10rpx;
				}
			}

			.swiper-dots {
				@include flex();
				position: absolute;
				left: 60upx;
				bottom: 15upx;
				width: 72upx;
				height: 36upx;
				background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABkCAYAAADDhn8LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTk4MzlBNjE0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTk4MzlBNjA0NjU1MTFFOUExNjRFQ0I3RTQ0NEExQjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0E3RUNERkE0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0E3RUNERkI0NjExMTFFOTg5NzI4MTM2Rjg0OUQwOEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Gh5BPAAACTUlEQVR42uzcQW7jQAwFUdN306l1uWwNww5kqdsmm6/2MwtVCp8CosQtP9vg/2+/gY+DRAMBgqnjIp2PaCxCLLldpPARRIiFj1yBbMV+cHZh9PURRLQNhY8kgWyL/WDtwujjI8hoE8rKLqb5CDJaRMJHokC6yKgSCR9JAukmokIknCQJpLOIrJFwMsBJELFcKHwM9BFkLBMKFxNcBCHlQ+FhoocgpVwwnv0Xn30QBJGMC0QcaBVJiAMiec/dcwKuL4j1QMsVCXFAJE4s4NQA3K/8Y6DzO4g40P7UcmIBJxbEesCKWBDg8wWxHrAiFgT4fEGsB/CwIhYE+AeBAAdPLOcV8HRmWRDAiQVcO7GcV8CLM8uCAE4sQCDAlHcQ7x+ABQEEAggEEAggEEAggEAAgQACASAQQCCAQACBAAIBBAIIBBAIIBBAIABe4e9iAe/xd7EAJxYgEGDeO4j3EODp/cOCAE4sYMyJ5cwCHs4rCwI4sYBxJ5YzC84rCwKcXxArAuthQYDzC2JF0H49LAhwYUGsCFqvx5EF2T07dMaJBetx4cRyaqFtHJ8EIhK0i8OJBQxcECuCVutxJhCRoE0cZwMRyRcFefa/ffZBVPogePihhyCnbBhcfMFFEFM+DD4m+ghSlgmDkwlOgpAl4+BkkJMgZdk4+EgaSCcpVX7bmY9kgXQQU+1TgE0c+QJZUUz1b2T4SBbIKmJW+3iMj2SBVBWz+leVfCQLpIqYbp8b85EskIxyfIOfK5Sf+wiCRJEsllQ+oqEkQfBxmD8BBgA5hVjXyrBNUQAAAABJRU5ErkJggg==);
				background-size: 100% 100%;

				.num {
					width: 36upx;
					height: 36upx;
					border-radius: 50px;
					font-size: 24upx;
					color: #fff;
					text-align: center;
					line-height: 36upx;
				}

				.sign {

					font-size: 12upx;
					color: #fff;

				}
			}
		}

		.cate-wrap {
			@include flex(row, space-around, center);
			padding: 30rpx 20rpx;
			background: #fff;

			.cate-item {
				@include flex(column, center, center);
				font-size: $uni-font-size-sm + 2rpx;
				color: $uni-color-subtitle;
			}

			image {
				width: 88upx;
				height: 88upx;
				margin-bottom: 14upx;
				border-radius: 50%;
				opacity: .7;
				box-shadow: 4upx 4upx 20upx rgba(250, 67, 106, 0.3);
			}
		}

		.ad-1 {
			width: 100%;
			height: 210rpx;
			padding: 10rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.seckill-wrap {
			margin-top: 16rpx;
			padding: 4upx 30upx 24upx;
			background: #fff;

			.seckill-header {
				height: 92rpx;

				@include flex(row, fllex-start, center) image {
					width: 140rpx;
				}

				.tip {
					font-size: $uni-font-size-base;
					color: $uni-text-color;
					margin: 0 20upx 0 40upx;
				}

				.timer {
					display: inline-block;
					width: 40upx;
					height: 36upx;
					text-align: center;
					line-height: 36upx;
					margin-right: 14upx;
					font-size: $uni-font-size-sm + 2rpx;
					color: #fff;
					border-radius: 2px;
					background: rgba(0, 0, 0, .8);
				}

				.icon-you {
					font-size: $uni-font-size-lg;
					color: $uni-text-color-grey;
					flex: 1;
					text-align: right;
				}
			}
		}

		.bulk-wrap {
			@include flex();
			margin-top: 16rpx;
			height: 70px;
			padding: 3px 15px 4px;
			background: #fff;
			image{
				width: 80rpx;
				height: 80rpx;
				margin-right: 20rpx;
			}
			.tit-box{
				@include flex(column,center,flex-start)
				flex: 1;
				.tit{
					font-size: $uni-font-size-lg;
					color: $uni-text-color;
					font-weight: 500;
				}
				.tit2{
					font-size: $uni-font-size-sm + 2rpx;
					color: $uni-text-color-base;
				}
			}
			.yticon{
				font-size: $uni-font-size-base;
				color: $uni-text-color-grey;
			}
		}
		.bulk-swiper-wrap{
			background-color: #FFF;
			.swiper-section{
				height: 650rpx;
				padding-bottom: 30rpx;
				.swiper-item{
					display: flex;
					padding: 0 30rpx;
					.left{
						flex: 3;
						margin-right: 24rpx;
						.info-box{
							padding-top: 20rpx;
						}
					}
					.right{
						flex: 2;
						.info-box{
							padding-bottom: 20rpx;
						}
					}
					.item-box{
						@include flex(column,flex-start,flex-start);
						overflow: hidden;
						image{
							width: 100%;
							height: 460rpx;
							border-radius: 8rpx;
						}
						.info-box{
							width: 100%;
							color: $uni-text-color-base;
							.title{
								font-size: $uni-font-size-base;
							}
							.clamp{
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
								display: block;
							}
							.price-box{
								.price{
									font-size: $uni-font-size-base;
									color: $uni-color-base;
								}
								.m-price{
									font-size: $uni-font-size-sm;
									color: $uni-text-color-grey;
									text-decoration: line-through;
								}
							}
							.pro-box{
								@include flex(row,flex-start,center);
								margin-top: 5px;
								font-size: $uni-font-size-sm;
								color: $uni-text-color-grey;
								padding-right: 5px;
								.progress-box{
									border-radius: 10px;
									overflow: hidden;
									margin-right: 4px;
									flex: 1;
								}
							}
						}
					}
				}
			}
		}
		.hot-wrap{
			.hot-img-box{
				position: relative;
				width: 100%;
				height: 320rpx;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.hot-img-box ::after{
				position: absolute;
				content: '';
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				background :linear-gradient(rgba(255, 255, 255, 0.06) 30%, #f8f8f8);
			}
			.hot-list{
				position: relative;
				z-index: 1;
				background-color: #FFF;
				margin-left: 30rpx;
				box-sizing: border-box;
				margin-top: -140rpx;
				padding: 20rpx;
				box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
				border-radius: 6rpx;
			}
		}
		.guess-wrap{
			width: 100%;
			box-sizing: border-box;
			padding: 0 30rpx;
			display: flex;
			flex-wrap: wrap;
			.guess-item{
				@include flex(column,center,flex-start)
				width:48%;
				padding-bottom: 40rpx;
				box-sizing: border-box;
				display: block;
				image{
					width: 100%;
					border-radius: 6upx;
				}
				.title{
					font-size: $uni-font-size-sm + 2rpx;
					color: $uni-text-color;
				}
				.clamp{
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					display: block;
				}
				.price{
					font-size: $uni-font-size-sm + 2rpx;
					color: $uni-color-base;
				}
				&:nth-child(2n+1){
					margin-right: 4%;
				}
			}
		}
	}
</style>
