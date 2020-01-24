<template>
  <div id="app">
    <HomeHeader></HomeHeader>
    <input type="text" v-model="inputText"/>
    <button v-on:click="submitText">递交</button>
    <ul>
      <li
          v-for="(item,index) in list"
          v-bind:content="item"
          v-bind:key="item"
          v-on:click="remove(index)"
      >{{item}}
      </li>
    </ul>
    全局组件
    <ul>
      <li-list v-for="(item,index) in list"
               v-bind:content="item"
               v-bind:key="item"
               v-on:click="remove(index)"
      ></li-list>
    </ul>
    局部组件
    <ul>
      <part-li-list v-for="(item,index) in list"
                    v-bind:content="item"
                    v-bind:index="index"
                    v-bind:key="item"
                    v-on:delete="handleDelete(index)">
      </part-li-list>
    </ul>
    <br>
    <span>{{inputText}}</span>
    <br>
    <span>{{newInputText}}</span>
    <br>
    <input ref="newInput" type="text" v-model="newInputText"/>
    <button @click="newInputText = this.$refs.newInput.value">递交</button>
  </div>
</template>

<script>
import LiList from '../LiList'
import PartLiList from '../PartLiList'
import HomeHeader from './components/Header'

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
    HomeHeader
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

<style scoped>

</style>
