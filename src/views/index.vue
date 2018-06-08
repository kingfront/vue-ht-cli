<template>
  <div>
     <h1>{{indexInfo.msg}}</h1>
     <h2>{{userName}}</h2>
     <icon-svg name="index"></icon-svg>
  </div>
</template>
<script>
import HttpService from '../service/httpService.js'
export default {
  data () {
    return {
      indexInfo: {}
    }
  },
  computed: {
    userName: {
      get () { return this.$store.state.user.name },
      set (val) { this.$store.commit('user/updateName', val) }
    }
  },
  mounted: function () {
    this.init()
  },
  components: {
  },
  methods: {
    init: function () {
      HttpService.queryWelcome().then(data => {
        this.indexInfo = data
        this.userName = this.indexInfo.store
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
