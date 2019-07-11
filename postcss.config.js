module.exports = {
  plugins: {
    "autoprefixer": {
    	browsers: ['Android >= 4.0', 'iOS >= 7']
    },
		// 因本项目引用了vant ui，使用了flex布局方式，所以自动转换rem需注释掉
    // "postcss-pxtorem": {
    //   "rootValue": 37.5, // 设计稿宽度的1/10,
    //   "propList": ['*']// 需要做转化处理的属性，如`hight`、`width`、`margin`等，`*`表示全部
    // }
  }
};