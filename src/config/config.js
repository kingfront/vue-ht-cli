// 接口地址配置
export const URL = {
  GOODS_URL: window.MURL.GOODS_URL
    ? window.MURL.GOODS_URL
    : "http://rap2api.taobao.org/app/mock"
};

// 常量配置
export const CTS = {
  // 是否开启mock模拟数据
  MOCK_FLG: false,
  // 是否开启日志打印
  CONSOLE_FLG: true,
  // aes加密秘钥
  AES_KEY: "xxx"
};

// http请求超时时间 单位：s
export const TIMEOUT = "10000";
