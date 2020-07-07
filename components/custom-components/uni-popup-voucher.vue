<template>
	<view class="voucher-content">
		<view class="coupon-item" v-for="(item,index) in couponList" :key="index">
			<view class="con">
				<view class="left">
					<text class="title">{{item.title}}</text>
					<text class="time">有效期至2020-06-30</text>
				</view>
				<view class="right">
					<text class="price">{{item.price}}</text>
					<text>满30可用</text>
				</view>

				<view class="circle l"></view>
				<view class="circle r"></view>
			</view>
			<text class="tips">限新用户使用</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				couponList: [{
						title: '新用户专享优惠券',
						price: 5,
					},
					{
						title: '庆五一发一波优惠券',
						price: 10,
					},
					{
						title: '优惠券优惠券优惠券优惠券',
						price: 15,
					}
				],
			};
		}
	}
</script>

<style scoped lang="scss">
	.voucher-content {
		width: 100%;
		min-height: 30vh;
		max-height: 70vh;
		background: #f3f3f3;
		transition: .3s;
		overflow-y: scroll;
		/* 优惠券列表 */
		.coupon-item{
			display: flex;
			flex-direction: column;
			margin: 20rpx 24rpx;
			background: #fff;
			.con{
				display: flex;
				align-items: center;
				position: relative;
				height: 120rpx;
				padding: 0 30rpx;
				&:after{
					position: absolute;
					left: 0;
					bottom: 0;
					content: '';
					width: 100%;
					height: 0;
					border-bottom: 1px dashed #f3f3f3;
					transform: scaleY(50%);
				}
			}
			.left{
				display: flex;
				flex-direction: column;
				justify-content: center;
				flex: 1;
				overflow: hidden;
				height: 100rpx;
			}
			.title{
				font-size: 32rpx;
				color: $uni-text-color;
				margin-bottom: 10rpx;
			}
			.time{
				font-size: 24rpx;
				color: $uni-text-color-base;
			}
			.right{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				font-size: 26rpx;
				color: $uni-text-color-base;
				height: 100rpx;
			}
			.price{
				font-size: 44upx;
				color: $uni-color-base;
				&:before{
					content: '￥';
					font-size: 34rpx;
				}
			}
			.tips{
				font-size: 24rpx;
				color: $uni-text-color-base;
				line-height: 60rpx;
				padding-left: 30rpx;
			}
			.circle{
				position: absolute;
				left: -6rpx;
				bottom: -10rpx;
				z-index: 10;
				width: 20rpx;
				height: 20rpx;
				background: #f3f3f3;
				border-radius: 100px;
				&.r{
					left: auto;
					right: -6rpx;
				}
			}
		}
		
	}
</style>
