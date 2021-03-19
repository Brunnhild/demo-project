<template>
  <div class="page-body">
    <div class="name">王小虎</div>
    <el-table
        :data="tableData"
        border
        :show-header="false"
        style="width: 100%"
    >
      <el-table-column prop="first" class-name="first-column"></el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <span v-if="scope.row.type === 'text'">{{ scope.row.second }}</span>
          <el-button v-if="scope.row.type === 'button'" type="text">Click</el-button>
          <el-progress
              :text-inside="true"
              :stroke-width="24"
              v-if="scope.row.type === 'progress-7'"
              :percentage="percentage_7(scope.row.second)"
              :format="() => scope.row.second"
          ></el-progress>
          <el-progress
              :text-inside="true"
              :stroke-width="24"
              v-if="scope.row.type === 'progress-5'"
              :percentage="percentage_5(scope.row.second)"
              :format="() => scope.row.second"
          ></el-progress>
          <el-avatar
              shape="square"
              size="large"
              :src="scope.row.second"
              v-if="scope.row.type === 'avatar'"
          ></el-avatar>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {
  progress_5_key,
  progress_7_key,
  getOneUser,
  gauge_5,
  gauge_7,
  avatar_key,
  getUserList
} from '/static/service.js'

export default {
  name: "OneUserPage",
  mounted() {
    console.log(getUserList())
    const record = getOneUser()
    for (const i in record) {
      if (!record.hasOwnProperty(i)) continue
      let type = 'text'
      if (progress_5_key.indexOf(i) !== -1) type = 'progress-5'
      if (progress_7_key.indexOf(i) !== -1) type = 'progress-7'
      if (avatar_key.indexOf(i) !== -1 && record[i] !== '(跳过)') type = 'avatar'
      this.tableData.push({
        first: i,
        second: record[i],
        type: type
      })
    }
  },
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    format(v) {
      return v
    },
    percentage_7(p) {
      return (gauge_7.indexOf(p)) * 100 / 6
    },
    percentage_5(p) {
      return (gauge_5.indexOf(p)) * 100 / 4
    }
  }
}
</script>

<style scoped lang="sass">
.page-body
  width: 80%
  position: relative
  margin: 100px auto

.name
  margin: 1em

/deep/.first-column
  font-weight: 600
  user-select: none
  cursor: default
</style>
