<template>
	<view class="container">
		<view class="user-warp">
			<image src="/static/user-bg.jpg" class="user-bg"></image>
			<view class="user-info">
				<view class="user-avatr">
					<image class="avatr" :src="userInfo.portrait || '/static/missing-face.png'"></image>
				</view>
				<view class="info-box">
					<text class="username">{{userInfo.nickname || '游客'}}</text>
				</view>
			</view>
			<view class="vip-card">
				<image class="card-bg" src="/static/vip-card-bg.png" mode="aspectFill"></image>
				<view class="vip-btn">立即开通</view>
				<view class="vip-text">
					<text class="yticon icon-iLinkapp-">Sean 会员</text>
				</view>
				<text class="vip-title">Sean Union</text>
				<text class="vip-desc">霸王特权，拥有众多VIP特权</text>
			</view>
		</view>
		
		<view class="cover-list"
			  :style="{
				  transform: coverTransform,
				  transition: coverTransition
				  }"
				@touchstart="coverTouchStart"
				@touchmove="coverTouchMove"
				@touchend="coverTouchEnd"
			>
			<image class="arc" src="/static/arc.png"></image>
			<view class="perfer-sction">
				<view class="perfer-item">
					<text class="num">256.3</text>
					<text>余额</text>
				</view>
				<view class="perfer-item">
					<text class="num">0</text>
					<text>优惠券</text>
				</view>
				<view class="perfer-item">
					<text class="num">26</text>
					<text>积分</text>
				</view>
			</view>
			<!-- 订单 -->
			<view class="order-section">
				<view class="order-item" @click="navTo('/pages/order/order?state=0')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouye"></text>
					<text>全部订单</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=1')"  hover-class="common-hover" :hover-stay-time="50">
					<text class="yticon icon-daifukuan"></text>
					<text>待付款</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=2')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-yishouhuo"></text>
					<text>待收货</text>
				</view>
				<view class="order-item" @click="navTo('/pages/order/order?state=4')" hover-class="common-hover"  :hover-stay-time="50">
					<text class="yticon icon-shouhoutuikuan"></text>
					<text>退款/售后</text>
				</view>
			</view>
			
			<!-- 浏览历史 -->
			<view class="history-section icon">
				<view class="sec-header">
					<text class="yticon icon-lishijilu"></text>
					<text>浏览历史</text>
				</view>
				<scroll-view scroll-x class="h-list">
					<image @click="navTo('/pages/product/product')" src="https://gd1.alicdn.com/imgextra/i4/1757621211/O1CN01AI44wO1KogEtyzmN3_!!1757621211.jpg" mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://gd2.alicdn.com/imgextra/i2/0/O1CN01eWtf1x1LYTqjIOjwQ_!!0-item_pic.jpg" mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://gd4.alicdn.com/imgextra/i3/2/O1CN01pCHWOj266LSJQ4ywP_!!2-item_pic.png" mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://gd3.alicdn.com/imgextra/i1/192707956/O1CN01Aeop6v28dtgpXbZQs_!!192707956.jpg" mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://gd4.alicdn.com/imgextra/i2/0/O1CN01Y5CdaZ1Tmh3dYJ9Cx_!!0-item_pic.jpg" mode="aspectFill"></image>
					<image @click="navTo('/pages/product/product')" src="https://gd4.alicdn.com/imgextra/i2/591532322/O1CN01J9AYj01T1WGppkTPF_!!591532322.jpg" mode="aspectFill"></image>
				</scroll-view>
				<list-cell icon="icon-iconfontweixin" iconColor="#e07472" title="我的钱包" tips="您的会员还有3天过期"></list-cell>
				<list-cell icon="icon-dizhi" iconColor="#5fcda2" title="地址管理"></list-cell>
				<list-cell icon="icon-share" iconColor="#9789f7" title="分享" tips="邀请好友赢10万大礼"></list-cell>
				<list-cell icon="icon-pinglun-copy" iconColor="#ee883b" title="晒单" tips="晒单抢红包"></list-cell>
				<list-cell icon="icon-shoucang_xuanzhongzhuangtai" iconColor="#54b4ef" title="我的收藏"></list-cell>
				<list-cell icon="icon-shezhi1" iconColor="#e07472" title="设置" border="" @eventClick="navTo('/pages/me/set')"></list-cell>
			</view>
		</view>
	</view>
</template>

<script>
	import listCell from '@/components/custom-components/mix-list-cell.vue';
	import {
	    mapState 
	} from 'vuex';  
	export default{
		components: {
			listCell
		},
		data(){
			return{
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				startY: 0,
				moveY: 0,
			}
		},
		onLoad() {
			
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/me/set');
			}else if(index === 1){
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		// #endif
		computed: {
			...mapState(['hasLogin','userInfo'])
		},
		methods:{
			/**
			 * 统一跳转接口,拦截未登录路由
			 */
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/login/login';
				}
				uni.navigateTo({  
					url
				})  
			}, 
			coverTouchStart(e){
				this.startY = e.touches[0].clientY
				this.coverTransition = `transfrom .1s linear`
			},
			coverTouchMove(e){
				this.moveY = e.touches[0].clientY
				let distance = this.moveY - this.startY
				if(distance <= 0){
					this.moving = false
					return
				}
				this.moving = true
				if(distance >= 80){
					distance = 80
				}
				if(distance > 0 && distance <= 80){
					this.coverTransform = `translateY(${distance}px)`
				}
			},
			coverTouchEnd(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../style/mixin.scss';
	page{
		background-color: $background;
	}
	.user-warp{
		height: 520rpx;
		padding: 100rpx 30rpx 0;
		position: relative;
		.user-bg{
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			opacity: .7;
		}
		.user-info{
			height: 180rpx;
			display: flex;
			align-items: center;
			position: relative;
			z-index: 1;
			.user-avatr{
				.avatr{
					width: 130rpx;
					height: 130rpx;
					border: 1px solid #FFF;
					border-radius: 50%;
				}
			}
			.info-box{
				.username{
					margin-left: 20rpx;
					color: #303133;
					font-size: 38rpx;
				}
			}
		}
		.vip-card{
			display:flex;
			flex-direction: column;
			color: #f7d680;
			height: 240rpx;
			background: linear-gradient(left, rgba(0,0,0,.7), rgba(0,0,0,.8));
			border-radius: 16rpx 16rpx 0 0;
			position: relative;
			padding: 20rpx 24rpx;
			overflow: hidden;
			.card-bg{
				position: absolute;
				top: 20rpx;
				right: 0;
				width: 380rpx;
				height: 260rpx;
			}
			.vip-btn{
				position: absolute;
				right: 20rpx;
				top: 16rpx;
				width: 132rpx;
				height: 40rpx;
				text-align: center;
				line-height: 40rpx;
				font-size: 22rpx;
				color: #36343c;
				border-radius: 20px;
				background: linear-gradient(left, #f9e6af, #ffd465);
				z-index: 1;
			}
			.vip-text{
				font-size: $uni-font-size-base+2rpx;
				color: #f7d680;
				margin-bottom: 28rpx;
				.yticon{
					color: #f6e5a3;
					margin-right: 16rpx;
				}
			}
			.vip-desc{
				font-size: $uni-font-size-sm;
				color: #d8cba9;
				margin-top: 10rpx;
			}
		}
	}
	.cover-list{
		    margin-top: -150rpx;
		    padding: 0 30rpx;
		    position: relative;
		    background: #f5f5f5;
		    padding-bottom: 20rpx;
		.arc{
			width: 100%;
			height: 36rpx;
			position: absolute;
			left: 0;
			top: -34rpx;
		}
		.perfer-sction{
			@include flex(row,space-around,center)
			background: #fff;
			border-radius: 10rpx;
			.perfer-item{
				@include flex(column,center,center)
				height: 140rpx;
				font-size: $uni-font-size-sm;
				color: #75787d;
			}
			.num{
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				margin-bottom: 8rpx;
			}
		}
		.order-section{
			@include flex(row,space-around,center)
			background: #fff;
			border-radius: 10rpx;
			padding: 28rpx 0;
			margin-top: 20rpx;
			.order-item{
				@include flex(column,center,center)
				width: 120rpx;
				height: 120rpx;
				border-radius: 10rpx;
				font-size: $uni-font-size-sm;
				color: $uni-text-color;
			}
			.yticon{
				font-size: 48rpx;
				margin-bottom: 18rpx;
				color: #fa436a;
			}
			.icon-shouhoutuikuan{
				font-size:44rpx;
			}
		}
		.history-section{
			padding: 30rpx 0 0;
			margin-top: 20rpx;
			background: #fff;
			border-radius:10rpx;
			.sec-header{
				display:flex;
				align-items: center;
				font-size: $uni-font-size-base;
				color: $uni-text-color;
				line-height: 40rpx;
				margin-left: 30rpx;
				.yticon{
					font-size: 44rpx;
					color: #5eba8f;
					margin-right: 16rpx;
					line-height: 40rpx;
				}
			}
		.h-list{
			white-space: nowrap;
			padding: 30rpx 30rpx 0;
			image{
				display:inline-block;
				width: 160rpx;
				height: 160rpx;
				margin-right: 20rpx;
				border-radius: 10rpx;
			}
		}
		}
		
	}
</style>
