<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style lang="less">
#app {
  font-size: 16px;
  background-color: #f8f8f8;
  -webkit-font-smoothing: antialiased;
}
.main{
	margin-top: 46px;
}
.fade-enter-active{
  transition: opacity .6s;
}
.fade-enter{
  opacity: .5;
}
</style>
