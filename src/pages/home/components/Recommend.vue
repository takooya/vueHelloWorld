<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of list" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: {
      type: Array,
      default: function () {
        return [{
          id: '0001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/201304/17/f3b5735b997d5059c8d65eac.jpg_200x200_4201bd69.jpg',
          title: '暂无数据',
          desc: '暂无数据'
        }]
      }
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/mixins.styl"
.recommend-title
  line-height: 40px
  background: #eee
  text-indent: 3px
  padding-left: 13px

.item
  overflow: hidden
  display: flex
  height: 100px

  .item-img
    height: 90px
    width: 90px
    padding: 5px

  .item-info
    flex: 1
    padding: 5px
    min-width: 0

    .item-title
      line-height: 30px
      font-size: 16px
      ellipsis()

    .item-desc
      line-height: 30px
      color: #ccc
      ellipsis()

    .item-button
      line-height: 18px
      width: 80px
      margin-top: 10px
      background: #ff9300
      padding: 1px
      border-radius: 8px
      color: #fff

</style>
