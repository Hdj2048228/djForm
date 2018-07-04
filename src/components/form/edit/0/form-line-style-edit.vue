<template>
  <p class="m-t-10">
    <Row>
      <span class="form-edit-title">线行</span>
    </Row>
    <Row>
      <RadioGroup v-model="item.borderStyle"  type="button">
        <Radio label="dotted"><span
          class="bor-b dotted borde-style-span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Radio>
        <Radio label="solid"><span
          class="bor-b solid borde-style-span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Radio>
        <Radio label="dashed"><span
          class="bor-b dashed borde-style-span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Radio>
        <Radio label="double"><span
          class="bor-b double borde-style-span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></Radio>
      </RadioGroup>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-line-stye-edit',
  data () {
    return {
      name: 'form-line-style-edit'
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    value: {
      type: String
    }
  },
  methods: {
  },
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>
  @import "../../assets/form.less";

  .borde-style-span {
    width: 20px;
    max-height: 5px;
    margin-top: 15px;
    display: inline-block;
  }
</style>
