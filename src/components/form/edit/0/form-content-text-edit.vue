<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">文本内容</span>
    </Row>
    <Row>
      <Input type="text" v-model="item.contentText"></Input>
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
