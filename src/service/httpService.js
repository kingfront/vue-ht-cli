import HttpRequest from './httpRequest.js'
import { URL, CTS } from '../config/config.js'
// api接口
let u = CTS.MOCK_FLG ? '' : URL.XX_URL
class HttpService {
  queryWelcome () {
    return HttpRequest.post(u + '/queryWelcome')
  }
}

export default new HttpService()
