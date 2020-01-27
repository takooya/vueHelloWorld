<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <div class="weekend-wrap">
      <a class="weekend-link" v-for="item of list" :key="item.id" :href="item.href">
        <div class="weekend-img-wrap">
          <img class="weekend-img" :src="item.imgUrl"/>
        </div>
        <div class="weekend-info-title">{{item.title}}</div>
        <div class="weekend-info-desc">{{item.desc}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: {
      type: Array,
      default: function () {
        return [{
          id: '0001',
          href: '/',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1505/c2/0be94f64d9df91.jpg_r_640x214_130f7614.jpg',
          title: '暂无数据',
          desc: '暂无数据'
        }]
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.weekend-title
  line-height: 40px
  background: #eee
  text-indent: 3px
  padding-left: 13px

.weekend-wrap
  position: relative
  background: #fff

  .weekend-link
    display: block
    width: 100%
    height: 100%
    margin-bottom: 15px

    .weekend-img-wrap
      overflow: hidden
      height: 0
      padding-bottom: 37.09%

      .weekend-img
        width: 100%

    .weekend-info-title
      height: 24px
      line-height: 24px
      font-size: 16px
      color: black
      padding-left: 3%
      ellipsis()

    .weekend-info-desc
      line-height: 24px
      color: #ccc
      padding-left: 3%
      ellipsis()

</style>
