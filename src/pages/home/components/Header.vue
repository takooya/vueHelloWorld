<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont">&#xe606;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe60b;</span>输入城市/景点/游玩主题</div>
    <div is="router-link" class="header-right" to="/city">
      <span>{{this.city}}</span>
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  display: flex
  background: $headerBgColor
  line-height: $headerHeight
  height: $headerHeight
  color: #fff

  .header-left
    width: 10%
    display: flex
    padding-left: 6px

    .iconfont
      font-size: 26px

  .header-input
    width: 90%
    line-height: 30px
    height: 30px
    border-radius: 1px
    background: white
    color: gray
    margin-top: 7px
    display: flex
    padding-left: 12px

  .header-right
    min-width: 23vw
    padding 0 1vw
    float right
    color: white
    font-size: 16px

    .icon-font
      font-size: 6px

</style>
