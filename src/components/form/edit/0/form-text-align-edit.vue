<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">{{title}}</span>
    </Row>
    <Row>
      <RadioGroup v-model="item[value]" type="button"  >
        <Radio label="text-left">居左</Radio>
        <Radio label="text-center">居中</Radio>
        <Radio label="text-right">居右</Radio>
      </RadioGroup>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-description-edit',
  data () {
    return {
      name: 'form-description-edit',
      res: this.value
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    value: {
      // type: String,
      required: true
    },
    title: {
      type: String,
      default: '文字对齐方式'
    }
  },
  watch: {
    // value (val) {
    //   this.res = val;// ②监听外部对props属性result的变更，并同步到组件内的data属性myResult中
    // },
    // res (val) {
    //   // this.$emit('on-change', val);// ③组件内对myResult变更后向外部发送事件通知
    // }
  },
  methods: {
    change (val) {
      this.$set(this.item, this.value, val);
    }
  },
  created () {
    console.log(this.value);
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
