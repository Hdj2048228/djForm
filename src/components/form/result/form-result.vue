<template>
    <Row :id="name" class="padder-v-10">
      <template v-if="item.type === 'FormLine'">
        <form-line :item="item"></form-line>
      </template>
      <template v-else>
        <Col span="10">{{item.title}}</Col>
        <Col span="14" v-if="item.type==='FormUpload'">
          <img  class="form-upload-image" src="../assets/6-1024b.jpg" />
        </Col>
        <Col span="14" v-else="">{{item.value}}</Col>
      </template>

    </Row>

</template>

<script>
import FormLine from '../widgets/form-line';

export default {
  name: 'form-result-item',
  data () {
    return {
      name: 'form-result-item'
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  components:{
    FormLine
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
