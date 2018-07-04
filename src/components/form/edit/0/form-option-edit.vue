<template>
  <p class="m-t-10 bor-t">
    <Row>
      <span class="form-edit-title">选项内容</span>
    </Row>
    <Row class="m-t-10 form-eidt-option" @click="selectIndex = index" v-for="(option,index) in item.optionList" :key="index">
      <Input type="text" @on-focus="selectIndex = index" v-model="option.key" @on-change="optionKeyChange(option)"></Input>
      <span class="form-item-delete" @click="deleteOption" v-show="selectIndex == index">x</span>
    </Row>
    <Row class="m-t-10">
      <Button @click="addSelectOption" type="default" long>添加选项</Button>
    </Row>
  </p>
</template>

<script>
export default {
  name: 'form-option-edit',
  data () {
    return {
      name: 'form-option-edit',
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
