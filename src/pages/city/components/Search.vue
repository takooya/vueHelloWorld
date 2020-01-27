<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.search
  height: 36px
  padding: 0 5px
  background: $headerBgColor

  .search-input
    box-sizing: border-box
    height: 31px
    line-height: 31px
    padding: 0 5px
    width: 100%
    text-align: center
    border-radius: 3px
    color: #666

</style>
