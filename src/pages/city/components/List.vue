<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div
                            class="button-wrapper"
                            v-for="item of hotCities"
                            :key="item.id"
                            @click="handleCityClick(item.name)"
                    >
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(items,key) of cities" :key="key" :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="item of items" :key="item.id">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'CityList',
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
    }
  },
  props: {
    hotCities: {
      type: Array
    },
    cities: {
      type: Object
    },
    letter: {
      type: String
    }
  },
  watch: {
    letter () {
      const element = this.$refs[this.letter][0]
      this.scroll.scrollToElement(element)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
    &:before
        border-color: #eee

    &:after
        border-color: #eee

.border-bottom
    &:before
        border-color: #eee

.list
    overflow: hidden
    position: absolute
    top: 79px
    left: 0
    right: 0
    bottom: 0

    .title
        line-height: 27px
        background: #eee
        padding-left: 10px
        color: #666
        font-size: 13px

    .button-list
        overflow: hidden
        padding: 5px 30px 5px 5px

        .button-wrapper
            float: left
            width: 33.33%

            .button
                margin: 5px
                padding: 5px 0
                text-align: center
                border: 1px solid #ccc
                border-radius: 3px

    .item-list
        .item
            line-height: 26px
            padding-left: 10px

</style>
