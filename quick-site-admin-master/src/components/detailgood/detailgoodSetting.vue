<template>
  <div class="box">
    <table>

    </table>
  </div>
</template>
<script>
export default {
  name: 'CompanyInfoSetting',
  props: {
    data: Object
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
