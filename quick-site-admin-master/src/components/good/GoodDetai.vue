<template>
  <div>
    <van-grid :border="false" :column-num="2">
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
        <span>iphone6最新手机 $1228.00</span>
      </van-grid-item>
      <van-grid-item>
        <van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
        <span>苹果最新台式机 $1228.00</span>
      </van-grid-item>

    </van-grid>
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
