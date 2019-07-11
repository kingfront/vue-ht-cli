import CryptoJS from "crypto-js";

export const oidInit = () => {
  try{
    let url = window.location.href;
    url = url.substring(0,url.indexOf("?")) + '?oid=true';
    window.history.pushState(null, null, url)
    }catch(e){
     //TODO handle the exception
    }
};
/**
 * 存储localStorage
 */
export const setLocal = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  if (window.localStorage) {
    window.localStorage.setItem(name, content);
  }
};
/**
 * 获取localStorage
 */
export const getLocal = name => {
  if (!name) return;
  if (!window.localStorage) return;
  return window.localStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeLocal = name => {
  if (!name) return;
  if (!window.localStorage) return;
  window.localStorage.removeItem(name);
};

/**
 * 存储sessionStorage
 */
export const setSession = (name, content) => {
  if (!name) return;
  if (typeof content !== "string") {
    content = JSON.stringify(content);
  }
  window.sessionStorage.setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getSession = name => {
  if (!name) return;
  return window.sessionStorage.getItem(name);
};

/**
 * 删除localStorage
 */
export const removeSession = name => {
  if (!name) return;
  window.sessionStorage.removeItem(name);
};

/**
 * 获取style样式
 */
export const getStyle = (element, attr, NumberMode = "int") => {
  let target;
  if (attr === "scrollTop") {
    target = element.scrollTop;
  } else if (element.currentStyle) {
    target = element.currentStyle[attr];
  } else {
    target = document.defaultView.getComputedStyle(element, null)[attr];
  }
  return NumberMode === "float" ? parseFloat(target) : parseInt(target);
};

/**
 * 判断是否是微信
 */
export const isWeiXin = () => {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.match(/MicroMessenger/i) === "micromessenger") {
    return true;
  } else {
    return false;
  }
};
/**
 * 判断是否是qq
 */
export const isQQ = () => {
  var ua = window.navigator.userAgent.toLowerCase();
  if (ua.indexOf("qq/") > -1) {
    return true;
  } else {
    return false;
  }
};

/**
 * 动态加载css
 */
export const loadCss = url => {
  var script = document.createElement("link");
  script.rel = "stylesheet";
  script.href = url;
  document.body.appendChild(script);
};
/**
 * 动态加载js
 */
export const loadJs = url => {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  document.body.appendChild(script);
};

/**
 * 获取url链接里面传过来的值
 * name:key的名称
 */
export const UrlVal = name => {
  var url = window.location.search.substr(1);
  if (window.location.search.substr(1).match("&amp")) {
    url = window.location.search.substr(1).replace(/&amp/g, "&");
  }
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = url.match(reg);
  if (r != null) return decodeURI(r[2]);
  return null;
};

/**
 * 判断当前设备是否为ios
 */
export const isIos = () => {
  var ua = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) {
    return true;
  } else if (/android/.test(ua)) {
    return false;
  }
};

/**
 * 格式化当前时间
 */
export const format = (date, fmt) => {
  var o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "q+": Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};
/**
 * 获取当前时间戳
 * 如：20170502102317
 */
export const MakeTime = () => {
  let d = new Date();
  let en = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
  let en1 =
    buLing(d.getHours()) +
    "" +
    buLing(d.getMinutes()) +
    "" +
    buLing(d.getSeconds());
  return toDate(en).replace(/-/g, "") + en1;
};
export const buLing = str => {
  if (str < 10) {
    str = "0" + str;
  }
  return str;
};
export const toDate = time => {
  var arys = [];
  arys = time.split("-");
  var fullyear = arys[0];
  var month = arys[1];
  var day = arys[2];
  var date = "";
  date += fullyear + "-";
  if (month >= 10) {
    date += month + "-";
  } else {
    date += "0" + month + "-";
  }
  if (day >= 10) {
    date += day;
  } else {
    date += "0" + day;
  }
  return date;
};

/**
 * aes加密
 */
export const encodePwd = (data, key) => {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var encrypted1 = CryptoJS.AES.encrypt(data, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
  });
  return CryptoJS.enc.Hex.parse(encrypted1.ciphertext.toString()).toString();
};
/**
 * aes解密
 */
export const decodePwd = (data, key) => {
  var keyHex = CryptoJS.enc.Utf8.parse(key);
  var decrypted = CryptoJS.AES.decrypt(
    {
      ciphertext: CryptoJS.enc.Hex.parse(data.toString())
    },
    keyHex,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    }
  );
  return decrypted.toString(CryptoJS.enc.Utf8);
};

/**
 * Base64转码
 */
export const encodeBase64 = data => {
  var str = CryptoJS.enc.Utf8.parse(data);
  return CryptoJS.enc.Base64.stringify(str);
};
/**
 * Base64解码
 */
export const decodeBase64 = data => {
  var str = CryptoJS.enc.Base64.parse(data);
  return CryptoJS.enc.Utf8.stringify(str);
};

/*
* 日志打印
*/
export const Log = {
  isConsole: true,
  i: function(jsName, content) {
    if (this.isConsole) {
      console.info("位置:", content);
    }
  },
  w: function(jsName, content) {
    if (this.isConsole) {
      console.warn("位置:", content);
    }
  },
  e: function(jsName, content) {
    if (this.isConsole) {
      console.error("位置:", content);
    }
  }
};

/*
* 生成uuid
*/
export const uuid = () => {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4";
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  s[8] = s[13] = s[18] = s[23] = "-";
  var uuid = s.join("");
  return uuid;
};
