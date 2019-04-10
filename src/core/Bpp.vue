<template>
  <!-- 模板 -->
  <div id="bpp">
    <div class="main">
    </div>
  </div>
</template>
<script>
import * as d3 from 'd3'
export default {
  data() {
    return {
      width: '100%',
      height: '100%',
      padding: {
        // 每个按钮的padding
        top: 10,
        right: 10,
        bottom: 10,
        left: 10
      },
      lineList: [
        {
          start: 10,
          end: 20,
          line: [[200, 10], [200, 400]]
        },
        {
          start: 10,
          end: 20,
          line: [[110, 20], [110, 90], [120, 100], [200, 100]]
        }
      ],
      buttonList: [
        {
          x: 10,
          y: 10,
          width: 100,
          height: 30,
          text: 'x111',
          background: '#efefef'
        },
        {
          x: 200,
          y: 40,
          width: 200,
          height: 30,
          text: '1111111111-Web',
          background: '#efefef'
        },
        {
          x: 410,
          y: 80,
          width: 200,
          height: 30,
          text: '122222222-Web',
          background: '#efefef'
        },
        {
          x: 200,
          y: 80,
          width: 200,
          height: 30,
          text: '333333333-Web',
          background: '#efefef'
        },
        {
          x: 400,
          y: 40,
          width: 200,
          height: 30,
          text: '1233333-Web',
          background: '#efefef'
        }
      ]
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let svg = d3
        .select('.main')
        .append('svg')
        .attr('width', this.width) //设定宽度
        .attr('height', this.height) //设定高度
      svg
        .selectAll('rect')
        .data(this.buttonList)
        .enter()
        .append('rect')
        .attr('rx', 5)
        .attr('x', (d, i) => {
          return d.x
        })
        .attr('y', (d, i) => {
          return d.y
        })
        .attr('width', (d, i) => {
          return d.width
        })
        .attr('height', (d, i) => {
          return d.height
        })
        .attr('fill', (d, i) => {
          return d.background
        })
        .style('stroke-width', 1)
        .style('stroke', '#000')
      var texts = svg
        .selectAll('.MyText')
        .data(this.buttonList)
        .enter()
        .append('text')
        .attr('class', 'MyText')
        .attr('text-anchor', 'middle')
        .attr('x', function(d, i) {
          return d.x + d.width / 2
        })
        .attr('y', (d, i) => {
          return d.y + 20
        })
        .attr('dx', 0)
        .attr('dy', 0)
        .text((d, i) => {
          return d.text
        })
      var lineGenerator = d3
        .line()
        //    获取每个节点的x坐标
        .x(function(d) {
          return d[0]
        })
        //   获取每个节点的y坐标
        .y(function(d) {
          return d[1]
        })
        .curve(d3.curveBasis)

      svg
        .append('path')
        .attr('stroke', '#333')
        .attr('stroke-width', '2')
        .attr('fill', 'none')
        //    设置路径信息
        .attr('d', lineGenerator(this.lineList[0].line))
      svg
        .append('path')
        .attr('stroke', '#05a')
        .attr('stroke-width', '2')
        .attr('fill', 'none')
        //    设置路径信息
        .attr('d', lineGenerator(this.lineList[1].line))
        .interpolate('cardinal')
    }
  }
}
</script>
<style scoped lang="scss">
#bpp {
  background: #fff;
  .main {
    margin: 100px;
    height: 300px;
    background: wheat;
  }
}
</style>
