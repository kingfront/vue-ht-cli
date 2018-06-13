<template>
  <div class="index">
     <h1>{{indexInfo.msg}}</h1>
     <h2>{{userName}}</h2>
     <icon-svg name="index"></icon-svg>
  </div>
</template>
<script>
import HttpService from '../service/httpService.js'
export default {
  name: 'index',
  data () {
    return {
      indexInfo: {},
      userName: ''
    }
  },
  computed: {
  },
  mounted: function () {
    this.userName = this.$store.state.user.name
    this.init()
  },
  components: {
  },
  methods: {
    init: function () {
      HttpService.queryWelcome().then(data => {
        this.indexInfo = data
        this.$store.commit('user/updateName', this.indexInfo.store)
        this.$Log.i('首页信息', data)
      }).catch(error => {
        this.$Log.e('首页信息', error.message)
      })
    }
  },
  watch: {
  }
}
</script>
<style scoped>

</style>
