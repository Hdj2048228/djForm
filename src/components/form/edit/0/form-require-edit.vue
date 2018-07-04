<template>
  <p class="m-t-10">
    <Row>
      <Checkbox v-model="item.required">这是个必填项</Checkbox>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-require-edit',
  data () {
    return {
      name: 'form-require-edit'
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
