<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">限制文件上传数量</span>
    </Row>
    <Row>
      <InputNumber type="number" v-model="item.maxNumber"></InputNumber>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-maxNumber-edit',
  data () {
    return {
      name: 'form-maxNumber-edit'
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {},
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
