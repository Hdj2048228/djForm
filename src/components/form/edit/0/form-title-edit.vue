<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">标题</span>
    </Row>
    <Row>
      <Input type="text" v-model="item.title" clearable></Input>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-title-edit',
  data () {
    return {
      name: 'form-title-edit'
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
