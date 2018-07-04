<template>
    <div :id="name">
      <Row class="form-response">
        <div id="bar" v-if="data" class="w-full" style="width: 100%;height: 300px"></div>
      </Row>
      <Row class="form-analysis" v-if= " data && data.res">
          <analyze-body v-for="(item,index) in data.res" :item="item" :key="index" ></analyze-body>
      </Row>
    </div>

</template>

<script>
import echarts from 'echarts';
import AnalyzeBody from './components/index';
import {res} from '../Model/Analyze';
export default {
  name: 'form-analysis',
  data () {
    return {
      name: 'form-analysis',
      res
    };
  },
  components: {
    AnalyzeBody
  },
  props: {
    data: {required: true}
  },
  methods: {
    setAnalyzeData () {
      if (!this.data) {
        return;
      }
      const colors = ['#5AA9ED', '#77C043', '#77C043'];
      const option = {
        color: colors,
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        grid: {
          right: '20%'
        },
        toolbox: {
          feature: {
            dataView: {show: true, readOnly: false},
            restore: {show: true},
            saveAsImage: {show: true}
          }
        },
        legend: {
          data: ['反馈量', '浏览量']
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            data: this.data.x_data
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '数量',
            min: 0,
            max: 150,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: colors[2]
              }
            },
            axisLabel: {
              formatter: '{value} 人'
            }
          }
        ],
        series: [
          {
            name: '浏览量',
            type: 'bar',
            data: this.data.y_1_data
          },
          {
            name: '反馈量',
            type: 'line',
            data: this.data.y_2_data
          }
        ]
      };

      const myChart = echarts.init(document.getElementById('bar'));
      myChart.setOption(option);
    }
  },
  created () {
  },
  watch: {
    data () {
      this.setAnalyzeData();
    }
  },
  mounted () {
    this.setAnalyzeData();
  }
};
</script>

<style scoped>

</style>
