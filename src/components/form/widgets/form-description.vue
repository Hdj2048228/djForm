<template>
  <Input type="textarea" :disabled="disabled"  v-model="item.value" :placeholder="item.placeholder"></Input>
</template>

<script>
export default {
  name: 'form-description',
  data () {
    return {
      name: 'form-description'
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
  .form-description{
    line-height: 1.4;
    font-weight: normal;
    color: #666666;
  }

</style>
