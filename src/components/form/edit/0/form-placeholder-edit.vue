<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">默认提示文字</span>
    </Row>
    <Row>
      <Input type="text" v-model="item.placeholder" clearable></Input>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-placeholder-edit',
  data () {
    return {
      name: 'form-placeholder-edit'
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
