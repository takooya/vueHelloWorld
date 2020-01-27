<template>
  <div class="header">
    城市选择
    <div is="router-link" to="/home" class="iconfont header-back">&#xe606;</div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  position: relative
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  text-align: center
  color: white
  background: $headerBgColor

  .header-back
    position: absolute
    width: 32px
    text-align: center
    font-size: 6px
    top: 0
    left: 0
    color: white

</style>
