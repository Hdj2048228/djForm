<template>
    <Row :id="name" class="padder-v-10">
      <Col span="10">{{item.title}}</Col>
      <Col span="14" v-if="item.type==='FormUpload'">
        <img  class="form-upload-image" src="../assets/6-1024b.jpg" />
      </Col>
      <Col span="14" v-else="">{{item.value}}</Col>
    </Row>
</template>

<script>
export default {
  name: 'form-result',
  data () {
    return {
      name: 'form-result'
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
  .form-upload-image{
    display: inline-block;
    max-width: 100%;
    max-height: 200px;
  }
</style>
