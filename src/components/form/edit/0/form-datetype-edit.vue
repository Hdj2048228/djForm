<template>
  <p class="m-t-10 bor-t">
    <Row>
      <span class="form-edit-title">时间类型</span>
      <Select v-model="item.dateType">
        <OptionGroup label="日期">
          <Option  value="date">日期（YYYY-MM-DD）</Option>
          <Option  value="daterange">日期范围（YYYY-MM-DD）</Option>
          <Option  value="datetime">日期-时间（YYYY-MM-DD HH:mm:ss）</Option>
          <Option  value="datetimerange">日期-时间范围（YYYY-MM-DD HH:mm:ss）</Option>
          <Option  value="year">年（YYYY）</Option>
          <Option  value="month">月（YYYY）</Option>
        </OptionGroup>
        <OptionGroup label="时间">
          <Option  value="time">时间（HH:mm:ss）</Option>
          <Option  value="timerange">时间范围（HH:mm:ss）</Option>
        </OptionGroup>
      </Select>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-datetype-edit',
  data () {
    return {
      name: 'form-datetype-edit',
      selectIndex: -1
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    optionKeyChange () {
      option.value = option.key;
    },
    deleteOption () {
      this.item.removeOption(this.selectIndex);
      this.selectIndex = -1;
    },
    addSelectOption () {
      this.item.addOption();
    }
  },
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>
  .form-eidt-option:hover{
  background-color: #E9EDEE;
  }
  .form-item-delete{
    position: absolute;
    top: 6px;
    right: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: white;
    background-color: #D24E46;
    z-index: 10000;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
</style>
