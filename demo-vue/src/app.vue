<template>
  <div id="container">
    <h1>{{initData}}</h1>
    <hello></hello>
  </div>
</template>

<script>
import Hello from './page/hello'
export default {
  components: {
    Hello
  },
  data() {
    return {
      initData: 'Hello, Vue'
    }
  }
}
</script>

<style lang="less">
  #container {
    height: 300px;
    color: red;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>