<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">文本描述</span>
    </Row>
    <Row>
      <Input type="text" v-model="item.description" clearable></Input>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-description-edit',
  data () {
    return {
      name: 'form-description-edit'
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
