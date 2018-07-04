<template>
    <Input type="text" :disabled="disabled" v-model="item.value" :placeholder="item.placeholder"></Input>
</template>

<script>
export default {
  name: 'FormInput',
  data () {
    return {
      name: 'form-input'
    };
  },
  methods: {},
  props: {
    item: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
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
