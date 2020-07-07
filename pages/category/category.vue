<template>
	<view class="content">
		<scroll-view scroll-y="true" class="left-scroll">
			<view v-for="(item,index) in firstList" :key="index" class="left-item" :class="{'active':item.id === currentIndex}" @click="switchTab(item)">
				{{item.name}}
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" scroll-with-animation class="right-scroll" :scroll-top="tabScrollTop" @scroll="rightScorll">
			<view v-for="(item,index) in secondList" :key="index" class="second-list" :id="'second-' + item.id">
				<text class="second-item">{{item.name}}</text>
				<view class="third-list">
					<view v-for="(obj,i) in thirdList" :key="i" class="third-item" @click="goProductList" v-if="obj.pid === item.id">
						<image :src="obj.picture"></image>
						<text>{{obj.name}}</text>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				firstList: [],//一级分类
				secondList: [],//二级分类
				thirdList: [],//三级分类
				currentIndex: 1,
				tabScrollTop: 0,//设置滚动条的位置
				calcFlag: false,// 计算右侧滚动每个二级分类的高度标志
			}
		},
		onLoad() {
			this.load()
		},
		methods:{
			async load(){
				let list = await this.$api.json('cateList')
				list.forEach(item => {
					if(!item.pid){
						this.firstList.push(item) // 没有pid表示为以及分类
					}else if(!item.picture){
						this.secondList.push(item) // 没有图片的表示为二级分类
					}else {
						this.thirdList.push(item)
					}
				})
			},
			//一级分类点击事件
			switchTab(item){
				if(!this.calcFlag){
					this.calcSize()
				}
				this.currentIndex = item.id
				let index = this.secondList.findIndex(sitem=>sitem.pid === item.id);
				this.tabScrollTop = this.secondList[index].top;
			},
			//滚动事件
			rightScorll(e){
				if(!this.calcFlag){
					this.calcSize()
				}
				let scrollTop = e.detail.scrollTop
				let list = this.secondList.filter(item => item.top <= scrollTop).reverse() // 将二级分类的top小于滚动的位置的放到一个数组里，并且倒序
				if(list.length > 0){
					this.currentIndex = list[0].pid   // 当前滚动的位置的pid就为放到数组的最后一个类别，即倒序后的第一个，将此pid赋予currentIndex
				}
			},
			//计算右边每个二级分类的高度
			calcSize(){
				let h = 0;
				this.secondList.forEach(item => {
					let selectQuery = uni.createSelectorQuery().select('#second-' + item.id)
					selectQuery.fields({size:true},data => {
						item.top = h
						h += data.height    //uni提供的api，循环二级分类，获取第一个节点元素，fields节点相关配置信息，size表示是否返回节点尺寸
						item.bottom = h		// 下一个二级分类的top=上一个的高度，bottom=上面所有的分类高度+自身高度
					}).exec();   //.exec()的作用是执行selectQuery.fields请求，不加这个不生效
				})
				this.calcFlag = true
			},
			goProductList(){
				uni.navigateTo({
					url:'/pages/product/productList'
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../../style/mixin.scss';
	page,.content{
		height: 100%;
		background-color: $background;
	}
	.content{
		display: flex;
		.left-scroll{
			width: 200rpx;
			height: 100%;
			background-color: #FFF;
			.left-item{
				@include flex(row,center,center);
				width: 100%;
				height: 100rpx;
				font-size: 28rpx;
				color: $uni-text-color-base;
				transition: .5s ease;
				position: relative;
				&.active{
					color: $uni-color-base;
					background-color: $background;
					transition: .5s ease;
					&:before{
						position: absolute;
						content: '';
						width: 10rpx;
						height: 50%;
						left: 0;
						background-color: $uni-color-base;
					}
				}
			}
		}
		.right-scroll{
			display: flex;
			flex: 1;
			overflow: hidden;
			padding-left: 20rpx;
			.second-item{
				@include flex(row,flex-start,center);
				height: 70rpx;
				padding-top: 8rpx;
				font-size: 28rpx;
				color: $uni-text-color;
			}
			.third-list{
				display: flex;
				flex-wrap: wrap;
				width: 100%;
				background-color: #FFF;
				padding-top: 12rpx;
				.third-item{
					@include flex(column,center,center);
					width: 176rpx;
					font-size: 26rpx;
					color: #666;
					padding-bottom: 20rpx;
					image{
						width: 140rpx;
						height: 140rpx;
					}
				}
			}
		}
	}
</style>
