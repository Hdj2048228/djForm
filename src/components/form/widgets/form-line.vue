<template>
  <div   :class="item.class|| ''">
    <div class="form-item-title bor-b"  style="display: block" :class="[item.borderStyle,item.titleAlign]">
      <span>{{item.title}}</span>
    </div>
    <div class="form-item-desc" :class="item.descriptionAlign">{{item.description}}</div>
  </div>
</template>

<script>
export default {
  name: 'form-line',
  data () {
    return {
      name: 'form-line'
    };
  },
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
  methods: {},
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>
  @import "../assets/form.less";
  .part-line {
    height: 2px;
    border-bottom: 1px black dotted;
  }
</style>
