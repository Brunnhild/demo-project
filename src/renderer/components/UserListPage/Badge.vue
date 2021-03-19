<template>
  <div class="com-body">
    <el-avatar shape="square" size="large" :src="src"></el-avatar>
    <div class="com-text">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "Badge",
  props: {
    src: String,
    name: String
  }
}
</script>

<style scoped lang="sass">
.com-body
  font-size: 12px
  display: inline-flex
  align-items: center
  flex-direction: column
  border: solid #dfdfdf 1px
  border-radius: 3px
  padding: 1em
  user-select: none
  cursor: pointer
  margin: 1em

  .com-text
    margin-top: .5em
</style>
