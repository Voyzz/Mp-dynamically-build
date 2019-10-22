<template>
  <div class="box">
    <div style="width: 300px;margin-left: 52px;margin-bottom: 15px">
      <p>轮播图高度：</p>
      <van-slider v-model="data.height" :min="0" :max="500" style="width: 300px"/></div>
    <table width="400">
      <tr>
        <td style="width: 300px">
          轮播图链接
        </td>
        <td>
          <van-button type="primary" @click="addnew">新增</van-button>
        </td>
      </tr>
      <tr v-for="item in data.images" :key="item">
        <td style="width: 300px">
          <input :value="item" style="width: 100%"/>
        </td>
        <td>
          <van-button type="danger" @click="remove(item)">删除</van-button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CompanyInfoSetting',
  props: {
    data: Object
  },
  methods: {
    remove: function (text) {
      let newArr = []
      this.data.images.forEach(x => {
        if (x !== text) {
          newArr.push(x)
        }
      })
      this.data.images = newArr
    },
    addnew: function () {
      let newob = '新链接'
      this.data.images.push(newob)
    }
  }

}
</script>
<style scoped>
label {
  font-size: 13px;
}
.content-label {
  vertical-align: top;
}
.box {
  padding-top: 20px;
}
table {
  margin: 0 auto;
}
#title {
  width: 320px;
  margin-bottom: 5px;
}
#content {
  width: 320px;
  height: 250px;
  resize: none;
}
</style>
