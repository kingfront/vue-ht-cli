<template>
  <div>
    <h1>hello</h1>
  </div>
</template>
<script>
import HttpService from '../service/httpService.js'
import { setLocal } from '../util/util.js'
export default {
  data () {
    return {
    }
  },
  mounted: function () {
    setLocal('test', 'test')
    // this.init()
  },
  components: {
  },
  methods: {
    init: function () {
      HttpService.queryTaskList().then(data => {
        console.info(data)
      }).catch(error => {
        console.info(error)
      })
    }
  },
  watch: {
  }
}
</script>
<style scoped>

</style>
