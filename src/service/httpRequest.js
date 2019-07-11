import axios from 'axios'
import jsonp from 'jsonp'
import {TIMEOUT} from '../config/config.js'
// 请求拦截
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})
// 返回拦截
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

class HttpRequest {
  get (url, paramer, header) {
    return this.post(url, paramer, header, 'get')
  }
  /**
  * url : 请求地址
  * param : 请求参数
  * header : 需要添加的header,例如:{'Authorization':'xxxxx'}
  * json: 'application/json; charset=utf-8'
  * form: 'application/x-www-form-urlencoded; charset=utf-8'
  */
  post (url, param, header, method) {
    let headers = {'Content-Type': 'application/json'}
    if (header) {
      Object.assign(headers, header)
    }
    let data = new Promise((resolve, reject) => {
      axios.request({
        url: url,
        method: method ? 'get' : 'post',
        data: param,
        headers: headers,
        timeout: TIMEOUT,
        responseType: 'json'
      }).then((response) => {
        resolve(response['data'])
      }).catch(function (error) {
        reject(error)
      })
    })
    return data
  }
  /**
  * url:请求地址
  * pm:服务端接收jsonp的名称,默认为jsoncallback
  * 注：callback为服务端返回的函数名称
  */
  jsonp (url, pm) {
    const data = new Promise((resolve, reject) => {
      jsonp(url, {
        timeout: TIMEOUT,
        param: pm === true ? pm : 'jsoncallback',
        name: 'callback'
      }, (err, data) => {
        if (err) {
          reject(err)
        } else {
          resolve(data)
        }
      })
    })
    return data
  }
}
export default new HttpRequest()
