<template>
    <van-tabbar>
      <van-tabbar-item :name="item.text" :icon="item.icon"  :key="item.text" v-for='item in data.tabarList'>{{item.text}}</van-tabbar-item>
    </van-tabbar>
</template>
<script>
export default {
  name: 'CompanyInfoPreview',
  props: {
    data: Object
  }

}
</script>
<style scoped>
.title {
  font-size: 14px;
  padding: 15px 0 5px 15px;
  background-color: #eff2f7;
  font-weight: normal;
  color: #666;
}
.text {
  font-size: 14px;
  padding: 12px 15px;
  white-space: pre-line;
  word-break: break-all;
  word-wrap: break-word;
  overflow: hidden;
  background-color: white;
}
</style>
