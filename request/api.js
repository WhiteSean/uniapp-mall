import Json from './Json' //测试用数据
const json = type => {
	//模拟请求数据
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(Json[type])
		},500)
	})
}
export default json