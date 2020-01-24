<template>
  <swiper class="wrapper" :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" v-bind:key="item.id">
      <img class="swipe-img" :src="item.imgUrl">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://timgsa.baidu.com/timg?image&amp;quality=80&amp;size=b9999_10000&amp;sec=1579862901728&amp;di=11b5b8f774817f29d4f5b847b9c2c466&amp;imgtype=0&amp;src=http%3A%2F%2Fpic3.16pic.com%2F00%2F53%2F55%2F16pic_5355416_b.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background: white !important

.wrapper
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom 26.66%

  .swipe-img
    width: 100%
</style>
