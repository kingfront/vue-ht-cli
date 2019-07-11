<template>
	<div class="main">
		<nav-bar></nav-bar>
		<van-card
			v-for="goods in goodsList"
			:key="goods.id"
			:num="goods.num"
			:price="goods.price"
			:desc="goods.desc"
			:title="goods.title + goods.price"
			:thumb="thumb">
			<div slot="footer">
				<router-link :to="{ name: 'cart', params: { id: goods.id } }"><van-button type="primary" size="small">加入购物车</van-button></router-link>
				<van-button @click="buyIt(goods.id)" type="primary" size="small">立即购买</van-button>
			</div>
		</van-card>
	</div>
</template>

<script>
import HttpService from '../service/httpService.js';
import { Card, Tag, Button, Toast } from 'vant';
import NavBar from '../components/NavBar.vue'
export default {
	name: 'index',
	data() {
		return {
			loading: true,
			goodsList: null,
			thumb:'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
		};
	},
	components: {
		[Card.name]: Card,
		[Tag.name]: Tag,
		[Button.name]: Button,
		[Toast.name]: Toast,
		NavBar
	},
	created() {
		Toast.loading({
			mask: true,
			message: '加载中...'
		});
		this.init();
	},
	methods: {
		/**
		 * 加载商品信息列表
		 * add by wanghao
		 * 2019-07-10
		 */
		init: function() {
			let channelId = '001';
			HttpService.queryGoods(channelId)
				.then(data => {
					this.goodsList = data;
					Toast.clear();
				})
				.catch(error => {
					console.info(error);
					Toast.clear();
				});
		},
		/**
		 * 点击购买商品
		 * add by wanghao
		 * 2019-07-10
		 */
		buyIt: function(id) {
			this.$router.push({
				path: '/cart/' + id
			});
		}
	}
};
</script>

<style lang="less">
	
</style>
