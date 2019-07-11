import HttpRequest from './httpRequest.js'
import { URL, CTS } from '../config/config.js'
// api接口
class HttpService {
  queryGoods (channelId) {
    return HttpRequest.get(URL.GOODS_URL + '/data/1247727',{
			channelId: channelId
		})
  }
}

export default new HttpService()
