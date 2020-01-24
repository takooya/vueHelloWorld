<template>
  <li v-on:click='remove(index)'>{{this.content}}</li>
</template>

<script>
export default {
  name: 'PartLiList',
  props: ['content', 'index'],
  methods: {
    remove: function (index) {
      this.$emit('delete', index)
    }
  }
}
</script>

<style scoped>

</style>
