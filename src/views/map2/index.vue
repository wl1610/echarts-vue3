<template>
  <div class="box">
    <chart-view class="chart-content" :chart-option="chartOpt" :auto-resize="true" height="800px" />
    <!-- <ul class="top5-box">
      <li v-for="({ name, value }, i) in topList" :key="i">
        <span class="top5-box-name">{{ name }}</span>
        <span class="top5-box-value">{{ value }}万</span>
      </li>
    </ul> -->
  </div>
</template>
<script>
  export default {
    name: 'chartTestView',
    data() {
      return {
        chartOpt: {},
        topList: [
          {
            name: '山东省',
            value: 4.2,
          },
          {
            name: '广西省',
            value: 2.2,
          },
          {
            name: '广东省',
            value: 1.2,
          },
          {
            name: '新疆',
            value: 1.1,
          },
          {
            name: '内蒙古',
            value: 1,
          },
        ],
      };
    },
    mounted() {},
    async created() {
      this.chartOpt = this.$eChartFn.chinaMapChart4();
      // this.chartOpt = await this.$eChartFn.chinaMapChart8();
    },
    methods: {},
    watch: {},
  };
</script>
<style lang="scss">
  .box {
    position: relative;
    width: 100%;
    height: 100%;

    .top5-box {
      position: absolute;
      left: 25%;
      bottom: 8%;
      width: 220px;
      border: 1px solid #3371ff;
      background-color: transparent;
      color: #fff;
      padding: 16px;
      > li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        padding: 0;
        height: 25px;
        font-size: 18px;
        font-weight: 500;
        color: #ffffff;

        > span {
          display: inline-block;
        }
      }
      &-name {
        width: 54px;
        text-align-last: justify;
      }
      &-value {
        padding-left: 16px;
        text-align: right;
      }
    }
  }
</style>
