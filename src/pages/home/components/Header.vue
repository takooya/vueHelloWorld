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
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String,
      default: '城市'
    }
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
    width: 20%
    padding-left: 12px
    color: white
    font-size: 16px

    .icon-font
      font-size: 6px

</style>
