import HttpRequest from './httpRequest.js'
import { URL, CTS } from '../config/config.js'
// api接口
let u = CTS.MOCK_FLG ? '' : URL.XX_URL
class HttpService {
  queryTaskList () {
    return HttpRequest.post(u + '/queryTaskList')
  }
}

export default new HttpService()
