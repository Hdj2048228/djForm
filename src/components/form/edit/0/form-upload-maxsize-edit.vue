<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">限制上传文件大小(kb)</span>
    </Row>
    <Row>
      <InputNumber type="number" v-model="item.maxSize"></InputNumber>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-contentext-edit',
  data () {
    return {
      name: 'form-contentext-edit'
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
