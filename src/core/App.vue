<template>
  <!-- 模板 -->
  <div id="bpp">
    <div class="main">
      <div class="a">
        <div></div>
      </div>
      <div class="b"></div>
      <div class="c"></div>
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {}
  }
}
</script>
<style scoped lang="scss">
#bpp {
  background: #fff;
  .main {
    display: flex;
    margin: 10px;
    height: 300px;
    background: wheat;
    .a {
      width: 25%;
      background: red;
    }
    .b {
      width: 25%;
      background: green;
    }
    .c {
      width: 50%;
      background: blue;
    }
  }
}
</style>
