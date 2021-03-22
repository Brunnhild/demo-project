<template>
  <div>
    <el-row>
      <el-col :span="12">
        <i-mechanism></i-mechanism>
      </el-col>
      <el-col :span="12">
        <div>
          <div class="title">请上传您的头像</div>
          <div class="section-body">
            <div class="uploader">
              <el-upload
                  ref="uploader"
                  action="#"
                  list-type="picture-card"
                  :auto-upload="false">
                <i slot="default" class="el-icon-plus"></i>
                <div slot="file" slot-scope="{file}">
                  <img class="el-upload-list__item-thumbnail" :src="file.url" alt=""/>
                  <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-delete" @click="handleRemove(file)">
                      <i class="el-icon-delete"></i>
                    </span>
                  </span>
                </div>
              </el-upload>
              <el-button @click="upload" size="mini">上传</el-button>
            </div>
            <div class="recommend">
              <div class="title">与您相似的用户：</div>
              <i-user-cell
                  v-if="users.length > 0"
                  v-for="(item, index) in users"
                  :key="index"
                  :avatar="item.avatar"
                  :name="item.name"
                  @click.native="toUser"
              ></i-user-cell>
              <div class="no-img" v-if="users.length === 0">上传头像后查看与您相似的用户</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Mechanism from "./HomePage/Mechanism"
import UserCell from "./HomePage/UserCell"

export default {
  name: "HomePage",
  components: {
    'i-mechanism': Mechanism,
    'i-user-cell': UserCell
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    handleRemove(file) {
      const fileList = this.$refs.uploader.uploadFiles
      const index = fileList.findIndex( fileItem => {
        return fileItem.uid === file.uid
      })
      fileList.splice(index, 1)
    },
    upload() {
      const fileList = this.$refs.uploader.uploadFiles
      if (fileList.length === 0) {
        this.$message({
          type: 'warning',
          message: '请上传头像'
        })
        return
      }
      this.users = [
        {
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          name: 'Jacob'
        },
        {
          avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
          name: 'Joseph'
        }
      ]
    },
    toUser() {
      this.$router.push({
        name: 'oneUser'
      })
    }
  }
}
</script>

<style scoped lang="sass">
.title
  font-weight: 300
  margin-bottom: 1em

.uploader
  width: 250px

  .el-button
    margin-top: 1em

  /deep/.el-upload--picture-card
    line-height: 50px
    width: 50px
    height: 50px

  /deep/.el-upload-list__item
    width: 50px
    height: 50px

.section-body
  display: flex
  flex-direction: row

  .recommend
    font-weight: 300

    .no-img
      font-size: 12px
      color: #6a6a6a
</style>
