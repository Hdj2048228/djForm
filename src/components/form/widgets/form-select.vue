<template>
  <Select v-model="item.value" :disabled="disabled" :placeholder="item.placeholder">
    <Option v-for="(option,index) in item.optionList" :key="index" :value="option.key">{{option.value}}</Option>
  </Select>
</template>

<script>
export default {
  name: 'form-select',
  data () {
    return {
      name: 'form-select'
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
