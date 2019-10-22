<template>
  <div class="head">
    <h1 class="title">携程自定义小程序编辑后台</h1>
    <button class="save_button" @click="$emit('save')">生成代码</button>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  .head {
    background-color: #324057;
    height: 60px;
  }
  .title {
    font-size: 22px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    margin: 0;
    padding-left: 2em;
    float: left;
    font-weight: normal;
  }
  .save_button {
    display: block;
    float: right;
    font-size: 16px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    background: transparent;
    width: 130px;
    height: 32px;
    margin-top: 15px;
    margin-right: 24px
  }

  button:hover {
    color: #58b7ff;
    border: 1px solid #58b7ff
  }
</style>
