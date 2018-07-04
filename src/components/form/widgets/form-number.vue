<template>
  <InputNumber :type="item.type" :number="true" :disabled="disabled" v-model="res"
               :placeholder="item.placeholder"></InputNumber>
</template>

<script>
export default {
  name: 'form-number',
  data () {
    return {
      name: 'form-number',
      res: parseFloat(this.item.value) || 0
    };
  },
  methods: {},
  watch: {
    res (val) {
      this.item.value = val + '';
    }
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
  created () {
    console.log('sssss');
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
