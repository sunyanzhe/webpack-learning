<template>
  <h1 class="another-h1">{{defaultData}}</h1>
</template>

<script>
export default {
  data() {
    return {
      defaultData: 'Hello, World'
    }
  }
}
</script>

<style lang="less">
  .another-h1 {
    color: skyblue;
    font-size: 14px;
  }
</style>