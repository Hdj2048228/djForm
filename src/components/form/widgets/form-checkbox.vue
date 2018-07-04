<template>
    <CheckboxGroup v-model="res" >
      <Checkbox :style="item.vertical?'display: block':'display:inline-block'" :disabled="disabled" v-for="(option,index) in item.optionList" :key="index" :label="option.key">{{option.value}}</Checkbox>
    </CheckboxGroup>
</template>

<script>
export default {
  name: 'form-checkbox',
  data () {
    return {
      name: 'form-checkbox',
      res: []
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
      required: false,
      default: false
    }
  },
  watch: {
    res (newValue, oldValue) {
      if (newValue instanceof Array) {
        this.item.value = '';
        for (let i = 0; i < newValue.length; i++) {
          this.item.value += newValue[i];
          if (newValue.length === 1 || i !== (newValue.length - 1)) {
            this.item.value = this.item.value + ',';
          }
        }
      }
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
