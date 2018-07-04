<template>
  <Row>
    <DatePicker style="width: 100%" v-if="item.dateType.indexOf('date')>= 0" :disabled="disabled" :type="item.dateType"
                :placeholder="item.placeholder" :value="item.value" @on-change="dateChange" ></DatePicker>
    <TimePicker style="width: 100%" v-else="" :disabled="disabled" :type="item.dateType"  :placeholder="item.placeholder"
                :value="item.value" @on-change="dateChange" :confirm="true" ></TimePicker>

  </Row>
</template>

<script>
export default {
  name: 'form-datepicker',
  data () {
    return {
      name: 'form-datepicker'
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
  methods: {
    dateChange (date) {
      if (typeof date === 'object') { // 日期范围
        this.item.value = (date[0] || '') + ' - ' + (date[1] || '');
      } else {
        this.item.value = date;
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
