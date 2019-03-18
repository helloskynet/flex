<template>
  <div class="main">
    <div
      :style=mainStyleObj
      class="container"
    >
      <div
        class="item"
        v-for="item in numBox"
        :style="itemObj"
        :key="item"
      >
        {{item}}
      </div>
    </div>
    <div class="control">
      控制区：<br>
      <a-button @click='changeNum(1)'>增加item</a-button>
      <a-button @click='changeNum(-1)'>减少item</a-button>
      容器的属性<br>
      <br>
      主轴方向： flex-direction:
      row(default):
      <a-switch
        v-model="flexDirection.row"
        @change="onChange('flexDirection','row')"
      />
      <br>
      row-reverse:
      <a-switch
        v-model="flexDirection.rowReverse"
        @change="onChange('flexDirection','rowReverse')"
      />
      column:
      <a-switch
        v-model="flexDirection.column"
        @change="onChange('flexDirection','column')"
      />
      column-reverse:
      <a-switch
        v-model="flexDirection.columnReverse"
        @change="onChange('flexDirection','columnReverse')"
      />
      <br>
      <br>
      轴线换行：
      flex-wrap: nowrap(default):
      <a-switch
        v-model="flexWrap.nowrap"
        @change="onChange('flexWrap','nowrap')"
      />
      wrap
      <a-switch
        v-model="flexWrap.wrap"
        @change="onChange('flexWrap','wrap')"
      />
      wrap-reverse
      <a-switch
        v-model="flexWrap.wrapReverse"
        @change="onChange('flexWrap','wrapReverse')"
      />
      <br>
      "flex-flow": "",

      "justify-content": flex-start(default):
      <a-switch
        v-model="justifyContent.flexStart"
        @change="onChange('justifyContent','flexStart')"
      />
      flex-end：
      <a-switch
        v-model="justifyContent.flexEnd"
        @change="onChange('justifyContent','flexEnd')"
      />
      center：
      <a-switch
        v-model="justifyContent.center"
        @change="onChange('justifyContent','center')"
      />
      space-between：
      <a-switch
        v-model="justifyContent.spaceBetween"
        @change="onChange('justifyContent','spaceBetween')"
      />
      space-around：
      <a-switch
        v-model="justifyContent.spaceAround"
        @change="onChange('justifyContent','spaceAround')"
      />
      <br>
      交叉轴对齐方式：
      "align-items":
      flex-start
      <a-switch
        v-model="alignItems.flexStart"
        @change="onChange('alignItems','flexStart')"
      />
      flex-end
      <a-switch
        v-model="alignItems.flexEnd"
        @change="onChange('alignItems','flexEnd')"
      />
      center
      <a-switch
        v-model="alignItems.center"
        @change="onChange('alignItems','center')"
      />
      baseline
      <a-switch
        v-model="alignItems.baseline"
        @change="onChange('alignItems','baseline')"
      />
      stretch
      <a-switch
        v-model="alignItems.stretch"
        @change="onChange('alignItems','stretch')"
      />
      <br>
      "align-content": ""
    </div>
    <div class="code">
      container:
      <pre>
{{mainStyleObj}}
      </pre>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numBox: 6,
      mainStyleObj: {
        flexDirection: "row",
        flexWrap: "nowrap",
        flexFlow: "", // flex-direction 和 flex-wrap 简写
        justifyContent: "flex-start",
        alignItems: "stretch",
        "align-content": ""
      },
      itemObj: {},
      flexDirection: {
        row: true,
        rowReverse: false,
        column: false,
        columnReverse: false
      },
      flexWrap: {
        nowrap: true,
        wrap: false,
        wrapReverse: false
      },
      justifyContent: {
        flexStart: true,
        flexEnd: false,
        center: false,
        spaceBetween: false,
        spaceAround: false
      },
      alignItems: {
        flexStart: false,
        flexEnd: false,
        center: false,
        baseline: false,
        stretch: true
      },
      directionsMap: new Map([
        ["row", "row"],
        ["rowReverse", "row-reverse"],
        ["column", "column"],
        ["columnReverse", "column-reverse"],
        ["nowrap", "nowrap"], // flex-wrap
        ["wrap", "wrap"],
        ["wrapReverse", "wrap-reverse"],
        // justifyContent
        ["flexStart", "flex-start"],
        ["flexEnd", "flex-end"],
        ["center", "center"],
        ["spaceBetween", "space-between"],
        ["spaceAround", "space-around"],
        // align-items
        ["baseline", "baseline"],
        ["stretch", "stretch"]
      ])
    };
  },
  methods: {
    // 修改style
    onChange(first, second) {
      const flag = this[first][second];
      let style = "";
      if (flag) {
        for (const obj in this[first]) {
          this[first][obj] = false;
        }
        this[first][second] = true;
        style = second;
      } else {
        switch (first) {
          case "flexWrap": {
            this[first].nowrap = true;
            style = "nowrap";
            break;
          }
          case "flexDirection": {
            this[first].row = true;
            style = "row";
            break;
          }
          case "justifyContent": {
            this[first].flexStart = true;
            style = "flexStart";
            break;
          }
          case "alignItems": {
            this[first].stretch = true;
            style = "stretch";
            break;
          }
          default: {
            break;
          }
        }
      }
      this.mainStyleObj[first] = this.directionsMap.get(style);
    },
    // item 数量
    changeNum(num) {
      this.numBox += num;
      this.numBox = this.numBox < 1 ? 1 : this.numBox;
      this.numBox = this.numBox > 24 ? 24 : this.numBox;
    }
  }
};
</script>
<style lang='scss'>
.main {
  display: flex;
  flex-wrap: wrap;
  .container {
    display: flex;
    width: 50%;
    height: 300px;
    background: blue;
    .item {
      background-color: #a5f5a5;
      border: 1px solid red;
      margin: 10px;
    }
  }
  .code,
  .control {
    width: 50%;
  }
  .code {
    background-color: #ff9;
  }
}
</style>
