<template>
  <div class="comp-body">
    <el-avatar :size="30" :src="avatar"></el-avatar>
    <div class="name">{{ name }}</div>
    <i class="el-icon-arrow-right"></i>
  </div>
</template>

<script>
export default {
  name: "UserCell",
  props: {
    avatar: String,
    name: String
  }
}
</script>

<style scoped lang="sass">
.el-avatar
  display: block
  margin: 0 .5em

.comp-body
  padding: .5em 0
  width: 15em
  display: flex
  flex-direction: row
  align-items: center
  border-radius: calc(15px + .5em)
  cursor: pointer
  user-select: none
  transition: .5s

  .name
    flex-grow: 1

  i
    margin-right: .5em

  &:hover
    background-color: #dadada
</style>
