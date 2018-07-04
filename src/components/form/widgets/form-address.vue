<template>
  <Row :gutter="5">
    <Col span="12"> <al-cascader v-model="res_s" :disabled="disabled"/></Col>
    <Col span="12"> <Input v-model="detail":disabled="disabled" @on-change="change"></Input></Col>
  </Row>

</template>

<script>
import iviewArea from 'iview-area';
import Vue from 'vue';
Vue.use(iviewArea);

export default {
  name: 'form-address',
  components: {

  },
  data () {
    return {
      name: 'form-address',
      res_s: [],
      detail: ''
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    change () {
      let arr = this.res_s.map((val) => {
        return val.name;
      });
      this.item.value = arr.join('/') + '/' + this.detail;
    }
  },
  watch: {
    res_s (v) {
      let arr = v.map((val) => {
        return val.name;
      });
      this.item.value = arr.join('/') + '/' + this.detail;
    }
  },
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
