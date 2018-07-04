<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">组件排版方式</span>
    </Row>
    <RadioGroup  type="button">
      <div class="ivu-radio-group ivu-radio-group-button">
        <label class="ivu-radio-wrapper ivu-radio-group-item" :class="!item.vertical?'ivu-radio-wrapper-checked':''">
          <span class="ivu-radio" :class="!item.vertical?'ivu-radio-checked':''">
          <span class="ivu-radio-inner"></span>
          <input v-model="item.vertical" type="radio" name="itemVertical" :value="false" class="ivu-radio-input">
        </span>
          水平布局
        </label>
        <label  class="ivu-radio-wrapper ivu-radio-group-item" :class="item.vertical?'ivu-radio-wrapper-checked':''">
          <span class="ivu-radio " :class="item.vertical?'ivu-radio-checked':''">
            <span class="ivu-radio-inner"></span>
          <input v-model="item.vertical" type="radio" name="itemVertical" :value="true" class="ivu-radio-input">
          </span>
          垂直布局
        </label>
      </div>
    </RadioGroup>
  </p>
</template>

<script>
export default {
  name: 'form-vertical--edit',
  data () {
    return {
      name: 'form-vertical--edit'
    };
  },
  methods: {},
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
