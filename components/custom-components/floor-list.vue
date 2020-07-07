<template>
	<view>
		<scroll-view scroll-x="true" class="floor-list">
			<view class="scroll-wrapper">
				<view class="floor-item" :style="{width:width + 'px'}" v-for="(item,index) in list" :key="index" @click="goProductDetail">
					<image :src="item.image" mode="aspectFill" :style="{width:width + 'px',height:width + 'px'}"></image>
					<text class="title clamp">{{item.title}}</text>
					<text class="price">￥{{item.price}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		props:['list','width'],
		methods:{
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
	/deep/.uni-scroll-view::-webkit-scrollbar{
		display: none;
	}
	.floor-list{
		.scroll-wrapper{
			@include flex(row,flex-start,center)
			.floor-item{
				//width:150rpx;
				margin-right: 20rpx;
				image{
					//width: 150upx;
					//height: 150upx;
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
			}
		}
	}
</style>
