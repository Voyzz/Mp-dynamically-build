<template>
  <div class="box">
    <table width="400">
      <div>导航栏设置 <van-button type="primary" @click="addnew" style="margin-left: 20px">新增</van-button></div>

      <tr>
        <td width="300">
          标题
        </td>
        <td width="100">
          操作
        </td>
      </tr>
      <tr v-for="item in data.tabliest" :key="item.text">
        <td>
          <input v-model="item.text" style="width: 100%"/>
        </td>
        <td>
          <van-button type="danger" @click="remove(item.text)">删除</van-button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  name: 'CompanyInfoSetting',
  props: {
    data: {
    }
  },
  data () {
    return {
      tabliestitem: ''
    }
  },
  mounted: function () {
    this.tabliestitem = this.data.tabliest.join(',')
    console.log(this.data)
  },
  watch: {
    data (val) {
      console.log(val)
      if (this.data.tabliest) {
        this.tabliestitem = this.data.tabliest
      }
    }
  },
  methods: {
    remove: function (text) {
      let newArr = []
      this.data.tabliest.forEach(x => {
        if (x.text !== text) {
          newArr.push(x)
        }
      })
      this.data.tabliest = newArr
    },
    addnew: function () {
      let newob = {text: '模块名', icon: ''}
      this.data.tabliest.push(newob)
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
