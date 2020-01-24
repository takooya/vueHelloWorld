<template>
  <div>
<!--    <img src="./assets/logo.png">-->
    <router-view/>
    <router-link to="/Home">Home</router-link>
    <router-link to="/">HelloWorld</router-link>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
</style>
