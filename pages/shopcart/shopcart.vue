<template>
	<view class="container">
		<view v-if="!hasLogin || empty === true" class="empty">
			<image src="../../static/emptyCart.jpg"></image>
			<view v-if="hasLogin" class="empty-tips">
				空空如也
				<navigator class="navigator" url="../index/index" open-type="switchTab">随便逛逛</navigator>
			</view>
			<view v-else class="empty-tips">
				空空如也
				<view class="navigator" @click="goLogin">去登录></view>
			</view>
		</view>
		<view v-else>
			<!-- //列表 -->
			<view class="cart-list">
				<block v-for="(item,index) in cartList" :key="index">
					<view class="cart-item vue-1px-b">
						<view class="image-wrap">
							<image :src="item.image" mode="aspectFill"></image>
							<view
								class="yticon icon-xuanzhong2 checkbox"
								:class="{checked: item.checked}"
								@click="check('item', index)"
							></view>
						</view>
						<view class="info-wrap">
							<text class="title">{{item.title}}</text>
							<text class="type">{{item.attr_val}}</text>
							<text class="price">¥{{item.price}}</text>
							<uni-number-box
								class="step"
								:min="1" 
								:max="item.stock"
								:value="item.number>item.stock?item.stock:item.number"
								:index="index"
								@change="numberChange"
							></uni-number-box>
						</view>
						<text class="del-btn yticon icon-fork" @click="deleteCartItem(index)"></text>
					</view>
				</block>
			</view>
			<view class="action-section">
				<view class="checkbox">
					<image :src="allChecked ? '/static/selected.png' : '/static/select.png'"
					mode="aspectFill" @click="check('all')"></image>
					<view class="clear-btn" :class="{show:allChecked}" @click="clearCart">清空</view>
				</view>
				<view class="total-box">
					<text class="price">¥{{total}}</text>
					<text class="coupon">已优惠<text>56.34</text>元</text>
				</view>
				<button type="primary" class="calc-btn" @click="creatOrder">去结算</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				empty: false, //空白页现实  true|false
				cartList: [],
				hasLogin: false,
				allChecked: false, //全选状态  true|false
				total: 0,
			}
		},
		
		onLoad() {
			
			this.load()
		},
		onShow() {
			uni.getStorage({
				key: 'hasLogin',
				success: (res) => {
					this.hasLogin = res.data
				}
			});
		},
		watch: {
			cartList(e) {
				let empty = e.length === 0 ? true : false;
				if (this.empty !== empty) {
					this.empty = empty
				}
			}
		},
		methods: {
			goLogin() {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			async load() {
				let list = await this.$api.json('cartList')
				this.cartList = list.map(item => {
					item.checked = true
					return item
				})
				//计算总价
				this.calcTotal()
			},
			calcTotal(){
				if(this.cartList.length === 0){
					this.empty = true
					return
				}else{
					let total = 0
					let checked = true;
					this.cartList.forEach(item => {
						if(item.checked){
							total += item.price * item.number
						}else if(checked === true){
						checked = false;
					}
					})
					this.allChecked = checked
					this.total = Number(total.toFixed(2))
				}
			},
			//改变数量
			numberChange(data){
				this.cartList[data.index].number = data.number;
				this.calcTotal();
			},
			//删除商品
			deleteCartItem(index){
				this.cartList.splice(index,1)
				this.calcTotal()
			},
			check(type,index){
				if(type  === 'item'){
					this.cartList[index].checked = !this.cartList[index].checked
				}else{
					const check = !this.allChecked
					this.cartList.forEach(item => {
						item.checked = check
					})
					this.allChecked = check
				}
				this.calcTotal(type)
			},
			clearCart(){
				uni.showModal({
					content: '清空购物车？',
					success: (e)=>{
						if(e.confirm){
							this.cartList = [];
						}
					}
				})	
			},
			creatOrder(){
				uni.navigateTo({
					url:'/pages/order/creatOrder'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../../style/mixin.scss';

	page,
	.container {
		background-color: #FFF;
		padding-bottom: 67rpx;
	}

	.container {
		.empty {
			position: absolute;
			top: 36%;
			left: 34%;
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;

			.empty-tips {
				display: flex;
				font-size: $uni-font-size-sm+2rpx;
				color: $uni-text-color-grey;

				.navigator {
					color: $uni-color-base;
					margin-left: 16rpx;
				}
			}

			image {
				width: 240rpx;
				height: 160rpx;
				margin-bottom: 30rpx;
			}
		}

		.cart-list {
			.cart-item {
				padding: 30rpx 40rpx;
				position: relative;
				display: flex;
		
				.image-wrap {
					width: 230rpx;
					height: 230rpx;
					position: relative;

					image {
						width: 100%;
						height: 100%;
						border-radius: 8rpx;
					}
					.checkbox{
						position:absolute;
						left:-16rpx;
						top: -16rpx;
						z-index: 8;
						font-size: 44rpx;
						line-height: 1;
						padding: 4rpx;
						color: $uni-text-color-disable;
						background:#fff;
						border-radius: 50px;
					}
				}
				.info-wrap{
					//@include flex(column,flex-start,flex-start)
					display: flex;
					flex-direction: column;
					flex:1;
					padding-left: 30rpx;
					position: relative;
					overflow: hidden;
					.title{
						font-size: $uni-font-size-base + 2rpx;
						color: $uni-text-color;
						line-height: 40rpx;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
						display: block;
					}
					.type{
						font-size: $uni-font-size-sm + 2rpx;
						color: $uni-text-color-grey;
						line-height: 50rpx;
					}
					.price{
						font-size: $uni-font-size-base + 2rpx;
						color: $uni-text-color;
						line-height: 50rpx;
					}
					.step{
						position: absolute;
						left:30rpx;
						bottom: 0;
					}
				}
				.del-btn{
					padding:4rpx 10rpx;
					font-size:34rpx; 
					height: 50rpx;
					color: $uni-text-color-grey;
				}
			}
		}
		
		.action-section{
			/* #ifdef H5 */
			margin-bottom: 100rpx;
			/* #endif */
			position: fixed;
			left: 30rpx;
			bottom: 30rpx;
			z-index: 100;
			display: flex;
			align-items: center;
			width: 92%;
			height: 100rpx;
			padding: 0 30rpx;
			background: rgba(255,255,255,.9);
			box-shadow: 0 0 20rpx 0 rgba(0,0,0,.5);
			border-radius: 16rpx;
			.checkbox{
				height:52rpx;
				position:relative;
				image{
					width: 52rpx;
					height: 100%;
					position:relative;
					z-index: 5;
				}
				.clear-btn{
					position:absolute;
					left: 26rpx;
					top: 0;
					z-index: 4;
					width: 0;
					height: 52rpx;
					line-height: 52rpx;
					padding-left: 38rpx;
					font-size: $uni-font-size-base;
					color: #fff;
					background: $uni-text-color-disable;
					border-radius:0 50px 50px 0;
					opacity: 0;
					transition: .2s;
					&.show{
						opacity: 1;
						width: 120rpx;
					}
				}
			}
			.total-box{
				display: flex;
				flex: 1;
				flex-direction: column;
				text-align:right;
				padding-right: 40rpx;
				.price{
					font-size: $uni-font-size-lg;
					color: $uni-text-color;
				}
				.coupon{
					font-size: $uni-font-size-sm;
					color: $uni-text-color-grey;
					text{
						color: $uni-text-color;
					}
				}
			}
			
			.calc-btn{
			padding: 0 38rpx;
			margin: 0;
			border-radius: 100px;
			height: 76rpx;
			line-height: 76rpx;
			font-size: $uni-font-size-base + 2rpx;
			background: $uni-color-base;
			box-shadow: 1px 2px 5px rgba(217, 60, 93, 0.72)
		}
		}
		/* 复选框选中状态 */
		.action-section .checkbox.checked,
		.cart-item .checkbox.checked{
			color: $uni-color-base !important;
		}
	}
</style>
