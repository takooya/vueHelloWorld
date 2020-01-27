<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
  </div>
</template>

<script>
import LiList from '../LiList'
import PartLiList from '../PartLiList'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'

export default {
  name: 'Home',
  data () {
    return {
      inputText: 'nihao',
      list: ['第一颗', '第二颗']
    }
  },
  components: {
    PartLiList,
    LiList,
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  methods: {
    submitText: function () {
      this.list.push(this.inputText)
    },
    remove: function (index) {
      this.list.splice(index, 1)
    },
    handleDelete: function (index) {
      this.list.splice(index, 1)
    }
  },
  computed: {
    newInputText: {
      get: function () {
        return this.$data.inputText + ' new'
      },
      set: function (value) {
        this.$data.inputText = value.substr(0, value.length - 4)
      }
    }
  }
}

</script>

<style lang="stylus" scoped>

</style>
