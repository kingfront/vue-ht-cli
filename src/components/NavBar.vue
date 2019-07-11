<template>
  <van-nav-bar
		:title="title"
		:left-text="backFlag ? backTitle : ''"
		right-text="分享"
		:fixed="true"
		:left-arrow="backFlag ? true : false"
		@click-left="onClickLeft"
		@click-right="onClickRight"
	/>
</template>

<script>
import { mapState } from 'vuex'
import { NavBar,Toast } from 'vant';
export default {
  name: "NoMsg",
  props: {
    
  },
	components: {
		[Toast.name]: Toast,
		[NavBar.name]: NavBar
	},
	computed: mapState({
    title: state => state.navbar.title,
		backFlag: state => state.navbar.backFlag
  }),
	/** 也可以这样接收
	computed: {
		title () {
		  return this.$store.state.navbar.title;
		},
		backFlag () {
		  return this.$store.state.navbar.backFlag;
		}
  },
	**/
  data() {
    return {
      backTitle:'返回'
    };
  },
	methods: {
    onClickLeft() {
			this.$router.go(-1)
    },
    onClickRight() {
      Toast('已分享');
    }
  }
};
</script>
<style lang="less">
.van-nav-bar__text{
	color:#07c160;
}
.van-nav-bar .van-icon {
  color:#07c160;
}
</style>