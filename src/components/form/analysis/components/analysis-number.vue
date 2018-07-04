<template>
  <div :id="name">
    <Row :gutter="20">
      <Col v-for="(key,val) in counts" :key="val" :xs="24" :sm="12" :md="6" :style="{marginBottom: '10px'}">
      <infor-card
        :id-name="key.id"
        :end-val="key.count"
        :iconType="key.iconType"
        :color="key.color"
        :intro-text="key.name"
      ></infor-card>
      </Col>
    </Row>
  </div>

</template>

<script>
import InforCard from './inforCard';

export default {
  name: 'analysis-number',
  components: {
    InforCard
  },
  props: {
    data: {
      required: true
    }
  },
  data () {
    return {
      name: 'analysis-number',
      counts: {
        min: {
          id: 'user_min_count',
          name: '最小值',
          count: 0,
          iconType: 'icon-min',
          color: '#2d8cf0'
        },
        max: {
          id: 'user_max_count',
          name: '最大值',
          count: 0,
          iconType: 'icon-max',
          color: '#64d572'
        },
        total: {
          id: 'user_total_count',
          name: '累加',
          count: 0,
          iconType: 'icon-total',
          color: '#ffd572'
        },
        average: {
          id: 'user_average_count',
          name: '平均值',
          count: 0,
          iconType: 'icon-average',
          color: '#f25e43'
        }
      },
      count: {
        createUser: 496,
        visit: 3264,
        collection: 24389305,
        transfer: 39503498
      }
    };
  },
  methods: {
    resetCounts () {
      this.counts.average.count = this.data.average;
      this.counts.min.count = this.data.min;
      this.counts.max.count = this.data.max;
      this.counts.total.count = this.data.total;
    }
  },
  created () {
    this.resetCounts();
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
