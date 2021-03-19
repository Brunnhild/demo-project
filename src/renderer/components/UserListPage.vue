<template>
  <div class="page-body">
    <i-badge
        v-for="(item, index) in userList"
        :key="index" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"
        :name="item.phone"
    ></i-badge>
  </div>
</template>

<script>
import Badge from "./UserListPage/Badge";
import { getUserList } from "/static/service";

export default {
  name: "UserListPage",
  components: {
    'i-badge': Badge
  },
  mounted() {
    this.userList = getUserList()
  },
  data() {
    return {
      userList: []
    }
  }
}
</script>

<style scoped lang="sass">
.page-body
  width: 70%
  position: relative
  margin: 1em auto
</style>
