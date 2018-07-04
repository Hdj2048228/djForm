<template>
  <RadioGroup v-model="item.value" :vertical="item.vertical">
    <Radio :disabled="disabled" v-for="(option,index) in item.optionList" :key="index" :label="option.key">{{option.value}}</Radio>
  </RadioGroup>
</template>

<script>
export default {
  name: 'form-radio',
  data () {
    return {
      name: 'form-radio'
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
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
