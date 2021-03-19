<template>
  <div id="app">
    <router-link to="oneUser">One User</router-link>
    <router-link to="users">Users</router-link>
    <router-link to="home">Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'demo-project',
}
</script>

<style lang="sass">
html
  font-family: "Microsoft YaHei",微软雅黑,"Microsoft JhengHei",华文细黑,STHeiti,MingLiu,serif
</style>
