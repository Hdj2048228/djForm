<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">组件宽度（{{item.contentWidth}}）</span>
    </Row>
    <RadioGroup  type="button" v-model="item.contentWidth" size="small">
      <Radio :label="key" v-for="(key,val) in widths" :key="key">{{val}}</Radio>
    </RadioGroup>
  </p>
</template>

<script>
export default {
  name: 'form-vertical--edit',
  data () {
    return {
      name: 'form-vertical--edit',
      widths: {
        10: '10%', 20: '20%', 30: '30%', 40: '40%', 50: '50%', 60: '60%', 70: '70%', 80: '80%', 90: '90%', 100: '100%'
      }

    };
  },
  methods: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>
  .ivu-radio-group-button.ivu-radio-group-small .ivu-radio-wrapper{
    padding: 0 3px;
  }
</style>
