<template>
  <div class="page-echarts">
    <!-- 基础折线图 -->
    <div
      class="page-echarts__block"
      id="base-line-echarts"
      ref="baseLineEchartsRef"
    ></div>
    <!-- /基础折线图 -->
    <!-- 基础世界地图 -->
    <div
      class="page-echarts__block"
      id="world-echarts"
      ref="worldEchartsRef"
    ></div>
    <!-- /基础世界地图 -->
    <!-- 流向世界地图 -->
    <div
      class="page-echarts__block"
      id="world-flow-echarts"
      ref="worldFlowEchartsRef"
    ></div>
    <!-- /流向世界地图 -->
    <!-- 百度地图组合 -->
    <div
      class="page-echarts__block"
      id="bmap-echarts"
      ref="bmapEchartsRef"
      style="height: 900px;"
    ></div>
    <!-- /百度地图组合 -->
  </div>
</template>

<script>
import * as echarts from 'echarts'
import 'echarts/dist/extension/bmap.min.js'
import './map/world'
import './map/china'
import baseLineOption from './options/base-line'
import worldOption from './options/world'
import worldFlowOption from './options/world-flow'
import bmapOption from './options/bmap'

export default {
  mounted() {
    this.initBaseLineEcharts()
    this.initWorldEcharts()
    this.initWorldFlowEcharts()
    this.initBMapEcharts()
  },
  methods: {
    initBaseLineEcharts() {
      const chart = echarts.init(this.$refs.baseLineEchartsRef)
      chart.setOption(baseLineOption)
    },
    initWorldEcharts() {
      /**
       * 参考
       * [echarts 散点世界地图](https://juejin.cn/post/6844903999846498317)
       * [Vue Echarts世界地图](https://www.cxyzjd.com/article/wk15038187622/104048135)
       * [echarts 实现世界地图地域流向炫酷效果](https://segmentfault.com/a/1190000022593794)
       * [echarts-countries](https://echarts-maps.github.io/echarts-countries-js/preview.html)
       */
      const chart = echarts.init(this.$refs.worldEchartsRef)
      chart.setOption(worldOption)
    },
    initWorldFlowEcharts() {
      const chart = echarts.init(this.$refs.worldFlowEchartsRef)
      chart.setOption(worldFlowOption)
    },
    initBMapEcharts() {
      const chart = echarts.init(this.$refs.bmapEchartsRef)
      chart.setOption(bmapOption)
    }
  }
}
</script>

<style lang="scss" scoped>
.page-echarts__block {
  height: 500px;
}
</style>
