<template>
  <p class="m-t-10 bor-t">
    <Row>
      <span class="form-edit-title">时间类型</span>
      <Select v-model="item.type">
          <Option value="select">点选上传</Option>
          <Option value="drag">拖拽上传</Option>
      </Select>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-upload-type-edit',
  data () {
    return {
      name: 'form-upload-type-edit',
      selectIndex: -1
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
  .form-eidt-option:hover{
  background-color: #E9EDEE;
  }
  .form-item-delete{
    position: absolute;
    top: 6px;
    right: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: white;
    background-color: #D24E46;
    z-index: 10000;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
</style>
