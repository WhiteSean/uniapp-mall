/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18270893576,
		nickname: 'Sean',
		portrait: 'http://a.hiphotos.baidu.com/zhidao/wh=450,600/sign=bbba1da0d60735fa91a546bdab612385/9825bc315c6034a84e7d073ac9134954082376e9.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = [{
		src: "/static/temp/banner2.png",
		background: "rgb(203, 87, 60)",
	},
	{
		src: "/static/temp/banner1.png",
		background: "rgb(205, 215, 218)",
	},
	{
		src: "/static/temp/banner3.png",
		background: "#f1f1f1",
	}
]
/* 商品列表 */
const goodsList = [{
		image: "https://gd1.alicdn.com/imgextra/i4/1757621211/O1CN01AI44wO1KogEtyzmN3_!!1757621211.jpg",
		title: "2020春夏装显瘦遮肚子连衣裙",
		price: 179,
		sales: 61,
	},
	{
		image: "https://gd2.alicdn.com/imgextra/i2/0/O1CN01eWtf1x1LYTqjIOjwQ_!!0-item_pic.jpg",
		title: "2020夏季新款复古设计感赫本风小黑裙",
		price: 430,
		sales: 16,
	},
	{
		image: "https://gd4.alicdn.com/imgextra/i3/2/O1CN01pCHWOj266LSJQ4ywP_!!2-item_pic.png",
		title: "新款收腰长裙显瘦高腰气质超仙网纱吊带裙子",
		price: 108.8,
		sales: 5,
	}, {
		image:"https://gd2.alicdn.com/imgextra/i3/197049783/O1CN014lOB1o2M8fJeEvnM6_!!197049783-0-lubanu-s.jpg",
		title: "曦沐珠宝999足金",
		price: 6998,
		sales: 88,
	}, {
		image: "https://gd3.alicdn.com/imgextra/i1/192707956/O1CN01Aeop6v28dtgpXbZQs_!!192707956.jpg",
		title: "港味BF风宽松休闲短袖T恤",
		price: 122,
		sales: 137,
	}, {
		image: "https://gd4.alicdn.com/imgextra/i2/0/O1CN01Y5CdaZ1Tmh3dYJ9Cx_!!0-item_pic.jpg",
		title: "牛仔短裤女夏季新款韩版显瘦宽松高腰",
		price: 179,
		sales: 95,
	},
]

/* 购物车 */
const cartList = [{
		id: 1,
		image: 'https://gd4.alicdn.com/imgextra/i2/591532322/O1CN01J9AYj01T1WGppkTPF_!!591532322.jpg',
		attr_val: '春装款 S',
		stock: 15,
		title: '短袖上衣',
		price: 278.00,
		number: 1
	},
	{
		id: 3,
		image: 'https://gd4.alicdn.com/imgextra/i3/462926982/O1CN01SOYpXR21RntcYbn3b_!!462926982.jpg',
		attr_val: 'Omega海马300米',
		stock: 3,
		title: '欧米茄Omega海马300米',
		price: 27500,
		number: 5
	},
	{
		id: 4,
		image: 'https://gd4.alicdn.com/imgextra/i2/507971049/O1CN01KQSnMr1JcU4EwHxDh_!!507971049.jpg',
		attr_val: 'Chnel',
		stock: 55,
		title: '香奈儿',
		price: 175.88,
		number: 1
	},
	{
		id: 5,
		image: 'https://gd1.alicdn.com/imgextra/i4/0/O1CN01xgOIpL1LYTqeLh5JT_!!0-item_pic.jpg',
		attr_val: '春秋款 M',
		stock: 15,
		title: '棉麻薄款小西装',
		price: 689.00,
		number: 1
	},
	{
		id: 6,
		image: 'https://gd4.alicdn.com/imgextra/i3/0/O1CN01K9NwoD2GdudLgkqgo_!!0-item_pic.jpg',
		attr_val: '雪纺碎花 M',
		stock: 15,
		title: "雪纺碎花鱼尾包臀裙",
		price: 128,
		number: 1
	},
	{
		id: 7,
		image: 'https://gd3.alicdn.com/imgextra/i4/1019597252/O1CN01gUZVv923RSsQL6f06_!!1019597252.jpg',
		attr_val: 'iPhone XR',
		stock: 7,
		title: '苹果 iPhone XR',
		price: 4500,
		number: 10
	},
	{
		id: 8,
		image: 'https://gd3.alicdn.com/imgextra/i4/0/O1CN01Bo67tH2MIHdXqVn8i_!!0-item_pic.jpg',
		attr_val: 'sw女鞋高跟',
		stock: 15,
		title: '性感一字带网红同款高跟鞋',
		price: 348.00,
		number: 1
	},
	{
		id: 9,
		image: 'https://gd1.alicdn.com/imgextra/i3/0/O1CN01KB2dii1kUgy173QXA_!!0-item_pic.jpg',
		attr_val: 'L',
		stock: 55,
		title: '显瘦无袖马夹',
		price: 175.88,
		number: 1
	},
	{
		id: 10,
		image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552410549432&di=06dd3758053fb6d6362516f30a42d055&imgtype=0&src=http%3A%2F%2Fimgcache.mysodao.com%2Fimg3%2FM0A%2F67%2F42%2FCgAPD1vNSsHNm-TnAAEy61txQb4543_400x400x2.JPG',
		attr_val: '520 #粉红色',
		stock: 15,
		title: '迪奥（Dior）烈艳唇膏',
		price: 1089.00,
		number: 1
	},
	{
		id: 11,
		image: 'https://gd1.alicdn.com/imgextra/i1/2190200350/O1CN01DNmf0x1ESLEPON86i_!!2190200350.jpg',
		attr_val: 'HR赫莲娜悦 15ML',
		stock: 15,
		title: "HR赫莲娜悦活修护眼部精华乳",
		price: 428,
		number: 1
	},
	{
		id: 12,
		image: 'https://gd1.alicdn.com/imgextra/i1/1073289152/TB2zJqdt1uSBuNjSsziXXbq8pXa_!!1073289152.jpg',
		attr_val: '永生花',
		stock: 7,
		title: '进口永生花礼盒',
		price: 158.8,
		number: 10
	},
	{
		id: 13,
		image: 'https://gd3.alicdn.com/imgextra/i1/0/O1CN013lmD7d1ehA2JVps7q_!!0-item_pic.jpg',
		attr_val: '链条小方包',
		stock: 15,
		title: '链条小方包',
		price: 420.00,
		number: 1
	}
];
//详情展示页面
const detailData = {
	title: '纯种金毛幼犬活体有血统证书',
	title2: '拆家小能手 你值得拥有',
	favorite: true,
	imgList: [{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
		},
		{
			src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
		},
		{
			src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
		},
	],
	episodeList: [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
	],
	guessList: [{
			src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg',
			title: '猫眼指甲油',
			title2: '独树一帜的免照灯猫眼指甲'
		},
		{
			src: 'http://m.china-7.net/uploads/14778449362891.jpg',
			title: '创意屋',
			title2: '创意屋形上下双层高低床'
		},
		{
			src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg',
			title: 'MissCandy 指甲油',
			title2: '十分适合喜欢素净的妹纸，尽显淡雅的气质'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2108933440,2194129200&fm=214&gp=0.jpg	',
			title: 'RMK 2017星空海蓝唇釉',
			title2: '唇釉质地，上唇后很滋润。少女也会心动的蓝色，透明液体形状。'
		}
	],
	evaList: [{
			src: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/77c6a7efce1b9d1663174705fbdeb48f8d546486.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '评论不要太苛刻，不管什么产品都会有瑕疵，客服也说了可以退货并且商家承担运费，我觉得至少态度就可以给五星。'
		},
		{
			src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg',
			nickname: 'Ranth Allngal',
			time: '09-20 12:54',
			zan: '54',
			content: '楼上说的好有道理。'
		}
	]
}
const shareList = [{
		type: 1,
		icon: '/static/temp/share_wechat.png',
		text: '微信好友'
	},
	{
		type: 2,
		icon: '/static/temp/share_moment.png',
		text: '朋友圈'
	},
	{
		type: 3,
		icon: '/static/temp/share_qq.png',
		text: 'QQ好友'
	},
	{
		type: 4,
		icon: '/static/temp/share_qqzone.png',
		text: 'QQ空间'
	}
]
const lazyLoadList = [{
		src: 'http://img0.imgtn.bdimg.com/it/u=2396068252,4277062836&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/itbbs/1309/06/c4/25310541_1378426131583.jpg'
	},
	{
		src: 'http://img.pconline.com.cn/images/upload/upc/tx/photoblog/1610/26/c4/28926240_1477451226577_mthumb.jpg'
	},
	{
		src: 'http://picture.ik123.com/uploads/allimg/190219/12-1Z219105139.jpg'
	},
	{
		src: 'http://img5.imgtn.bdimg.com/it/u=2904900134,438461613&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img1.imgtn.bdimg.com/it/u=1690475408,2565370337&fm=26&gp=0.jpg'
	},
	{
		src: 'http://img.99114.com/group1/M00/7F/99/wKgGS1kVrPGAe5LmAAU2KrJmb3Q923_600_600.jpg'
	},
	{
		src: 'http://img4.imgtn.bdimg.com/it/u=261047209,372231813&fm=26&gp=0.jpg'
	},
	{
		src: 'http://i2.17173cdn.com/i7mz64/YWxqaGBf/tu17173com/20150107/eMyVMObjlbcvDEv.jpg'
	},
	{
		src: 'http://img008.hc360.cn/m4/M02/E7/87/wKhQ6FSrfU6EfUoyAAAAAITAfyc280.jpg'
	},
	{
		src: 'http://pic1.win4000.com/wallpaper/d/5991569950166.jpg'
	},
	{
		src: 'http://gss0.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/6f061d950a7b0208f9fe945e60d9f2d3572cc85e.jpg'
	},
	{
		src: 'http://pic41.nipic.com/20140429/18169759_125841756000_2.jpg'
	},
	{
		src: 'http://www.k73.com/up/allimg/130415/22-130415093527.jpg'
	},
	{
		src: 'http://img.52z.com/upload/news/image/20180530/20180530081619_31029.jpg'
	},
	{
		src: 'http://b-ssl.duitang.com/uploads/item/201410/02/20141002111638_tXAzU.jpeg'
	},
	{
		src: 'http://img2.ph.126.net/C4JW6f57QWSB21-8jh2UGQ==/1762596304262286698.jpg'
	},
	{
		src: 'http://att.bbs.duowan.com/forum/201405/17/190257nzcvkkdg6w2e8226.jpg'
	},
	{
		src: 'http://attach.bbs.miui.com/forum/201504/10/223644v3intigyvva0vgym.jpg'
	},
	{
		src: 'http://pic1.win4000.com/mobile/3/57888a298d61d.jpg'
	},
]

const orderList = [{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [
			{
				title: '牛仔短裤女夏季新款韩版显瘦宽松高腰',
				price: 328,
				image: 'https://gd4.alicdn.com/imgextra/i2/0/O1CN01Y5CdaZ1Tmh3dYJ9Cx_!!0-item_pic.jpg',
				number: 1,
				attr: 'M'
			}
		]
	},
	{
		time: '2020-04-06 11:00',
		state: 9,
		goodsList: [{
			title: '2020春夏装显瘦遮肚子连衣裙',
			price: 179,
			image: 'https://gd1.alicdn.com/imgextra/i4/1757621211/O1CN01AI44wO1KogEtyzmN3_!!1757621211.jpg',
			number: 1,
			attr: '白色 M'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				title: '牛仔短裤女夏季新款韩版显瘦宽松高腰',
				price: 328,
				image: 'https://gd3.alicdn.com/imgextra/i1/192707956/O1CN01Aeop6v28dtgpXbZQs_!!192707956.jpg',
				number: 1,
				attr: 'M'
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
			title: '港味BF风宽松休闲短袖T恤',
			price: 130,
			image: 'https://gd2.alicdn.com/imgextra/i2/0/O1CN01eWtf1x1LYTqjIOjwQ_!!0-item_pic.jpg',
			number: 1,
			attr: 'L'
		}]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				title: '短袖上衣',
				price: 328,
				image: 'https://gd4.alicdn.com/imgextra/i2/591532322/O1CN01J9AYj01T1WGppkTPF_!!591532322.jpg',
				number: 1,
				attr: 'M'
			},
		]
	},
	{
		time: '2019-04-06 11:37',
		state: 1,
		goodsList: [{
				title: '雪纺碎花鱼尾包臀裙',
				price: 328,
				image: 'https://gd4.alicdn.com/imgextra/i3/0/O1CN01K9NwoD2GdudLgkqgo_!!0-item_pic.jpg',
				number: 1,
				attr: 'M'
			},
		]
	}

]
const cateList = [{
		id: 1,
		name: '手机数码'
	},
	{
		id: 2,
		name: '礼品鲜花'
	},
	{
		id: 3,
		name: '男装女装'
	},
	{
		id: 4,
		name: '母婴用品'
	},
	{
		id: 5,
		pid: 1,
		name: '手机通讯'
	},
	{
		id: 6,
		pid: 1,
		name: '运营商'
	},
	{
		id: 8,
		pid: 5,
		name: '全面屏手机',
		picture: 'https://gd3.alicdn.com/imgextra/i3/93763117/O1CN01IDu5KE1Ytd7hbwIIz_!!93763117.jpg'
	},
	{
		id: 9,
		pid: 5,
		name: '游戏手机',
		picture: 'https://gd3.alicdn.com/imgextra/i3/93763117/O1CN01HHqokb1Ytd7gjzBVY_!!93763117.jpg'
	},
	{
		id: 10,
		pid: 5,
		name: '老人机',
		picture: 'https://gd2.alicdn.com/imgextra/i2/93763117/O1CN01LNuDcG1Ytd7fNdnxT_!!93763117.jpg'
	},
	{
		id: 11,
		pid: 5,
		name: '拍照手机',
		picture: 'https://gd3.alicdn.com/imgextra/i3/3000223709/O1CN01i9W5Oe1dGlZICDNZZ_!!3000223709.jpg'
	},
	{
		id: 12,
		pid: 5,
		name: '女性手机',
		picture: 'https://gd2.alicdn.com/imgextra/i2/3000223709/O1CN017C9ngU1dGlZJ888e4_!!3000223709.jpg'
	},
	{
		id: 14,
		pid: 6,
		name: '合约机',
		picture: 'https://gd3.alicdn.com/imgextra/i3/3000223709/O1CN01i9W5Oe1dGlZICDNZZ_!!3000223709.jpg'
	},
	{
		id: 15,
		pid: 6,
		name: '选好卡',
		picture: 'https://gd2.alicdn.com/imgextra/i2/3000223709/O1CN01YpEHUF1dGlZEs7fVT_!!3000223709.jpg'
	},
	{
		id: 16,
		pid: 6,
		name: '办套餐',
		picture: 'https://gd4.alicdn.com/imgextra/i4/3000223709/O1CN01q26pdd1dGlZDhVIFo_!!3000223709.jpg'
	},
	{
		id: 17,
		pid: 2,
		name: '礼品',
	},
	{
		id: 18,
		pid: 2,
		name: '鲜花',
	},
	{
		id: 19,
		pid: 17,
		name: '公益摆件',
		picture: '/static/temp/cate7.jpg'
	},
	{
		id: 20,
		pid: 17,
		name: '创意礼品',
		picture: '/static/temp/cate8.jpg'
	},
	{
		id: 21,
		pid: 18,
		name: '鲜花',
		picture: '/static/temp/cate9.jpg'
	},
	{
		id: 22,
		pid: 18,
		name: '每周一花',
		picture: '/static/temp/cate10.jpg'
	},
	{
		id: 23,
		pid: 18,
		name: '卡通花束',
		picture: '/static/temp/cate11.jpg'
	},
	{
		id: 24,
		pid: 18,
		name: '永生花',
		picture: '/static/temp/cate12.jpg'
	},
	{
		id: 25,
		pid: 3,
		name: '男装'
	},
	{
		id: 26,
		pid: 3,
		name: '女装'
	},
	{
		id: 27,
		pid: 25,
		name: '男士T恤',
		picture: '/static/temp/cate13.jpg'
	},
	{
		id: 28,
		pid: 25,
		name: '男士外套',
		picture: '/static/temp/cate14.jpg'
	},
	{
		id: 29,
		pid: 26,
		name: '裙装',
		picture: 'https://gd4.alicdn.com/imgextra/i4/2186409039/O1CN013LIWT52GdudHSczH0_!!2186409039.jpg'
	},
	{
		id: 30,
		pid: 26,
		name: 'T恤',
		picture: 'https://gd4.alicdn.com/imgextra/i4/192707956/O1CN01E85QYA28dtgpLHZnp_!!192707956.jpg'
	},
	{
		id: 31,
		pid: 26,
		name: '上装',
		picture: 'https://gd4.alicdn.com/imgextra/i4/3170218260/O1CN017NwWk52At86Anpd1d_!!3170218260-0-lubanu-s.jpg'
	},
	{
		id: 32,
		pid: 26,
		name: '下装',
		picture: 'https://gd2.alicdn.com/imgextra/i2/1757621211/O1CN01rEbyvg1KogF7zCkks_!!1757621211.jpg'
	},
	{
		id: 33,
		pid: 4,
		name: '奶粉',
	},
	{
		id: 34,
		pid: 4,
		name: '营养辅食',
	},
	{
		id: 35,
		pid: 4,
		name: '童装',
	},
	{
		id: 39,
		pid: 4,
		name: '喂养用品',
	},
	{
		id: 36,
		pid: 33,
		name: '有机奶粉',
		picture: '/static/temp/cate17.jpg'
	},
	{
		id: 37,
		pid: 34,
		name: '果泥/果汁',
		picture: '/static/temp/cate18.jpg'
	},
	{
		id: 39,
		pid: 34,
		name: '面条/粥',
		picture: '/static/temp/cate20.jpg'
	},
	{
		id: 42,
		pid: 35,
		name: '婴童衣橱',
		picture: '/static/temp/cate19.jpg'
	},
	{
		id: 43,
		pid: 39,
		name: '吸奶器',
		picture: '/static/temp/cate21.jpg'
	},
	{
		id: 44,
		pid: 39,
		name: '儿童餐具',
		picture: '/static/temp/cate22.jpg'
	},
	{
		id: 45,
		pid: 39,
		name: '牙胶安抚',
		picture: '/static/temp/cate23.jpg'
	},
	{
		id: 46,
		pid: 39,
		name: '围兜',
		picture: '/static/temp/cate24.jpg'
	},
]

export default {
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList
}
