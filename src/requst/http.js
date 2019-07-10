import axios from 'axios'
import { Message } from "element-ui"
//transmitType: 'json'/'url'
export default function request(url, type = 'GET', transmitType = 'url', data = {}) {
	return new Promise(function(resolve,reject) {
		let option = {
			url,
			method: type
		}
		if (transmitType === 'url') {
			option.params = data
		} else {
			option.data = data
		}

		axios(option)
		.then(res => {
			if (res.data.status === 1000) {
				resolve(res.data)
			} else {
				reject(res.data)
			}
		})
		.catch(error => {
			Message.error('出错了，请稍候重试')
			reject({ msg: '出错了，请稍候重试' })
		})
	})
}