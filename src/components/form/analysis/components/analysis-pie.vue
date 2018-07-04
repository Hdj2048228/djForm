<template>
  <div :id="id" style="height: 300px;"></div>
</template>

<script>
import echarts from 'echarts';

export default {
  name: 'analysis-pie',
  data () {
    return {
      name: 'analysis-pie'
    };
  },
  props: {
    data: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    id: {
      required: false,
      default: Date.now()
    }
  },
  methods: {},
  created () {
  },
  mounted () {
    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
      },
      color: ['#5AA9ED', '#77C043', '#FBC546', '#F79D1D', '#E74E4E'],
      series: [
        {
          type: 'pie',
          radius: '65%',
          center: ['50%', '50%'],
          selectedMode: 'single',
          data: this.data,
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    const chart = echarts.init(document.getElementById(this.id));
    chart.setOption(option);
  }
};
</script>

<style scoped>

</style>
