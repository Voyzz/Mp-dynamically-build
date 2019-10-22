<template>
  <div>
    <van-image style = "height: 300px;width: 100%"
               :src="data.goodDetail.url"
    />
    <br/>
    <div style="margin-left: 10px;margin-bottom: 40px">
    <h3 style="color: red;font-size: 18px">¥22.3</h3>
    <h3 style="font-size: 16px">macbook pro 新款</h3>
    </div>
    <br/>
  </div>
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
