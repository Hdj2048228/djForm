<template>
  <div :id="name">
    <Row>
    <p>当一级选择</p>
    <p>
      <Select @on-change="change">
        <Option v-for="(option,i) in item.optionList" :value="i" :key="i">
          {{option.value}}
        </Option>
      </Select>
    </p>
    </Row>
    <Row v-if="level === 3 ">
      <p>且二级选择</p>
      <p v-show="selectLevel_1 && selectLevel_1.children">
        <Select @on-change="change_1">
          <Option v-for="(option,i) in selectLevel_1.children" :value="i" :key="i">
            {{option.value}}
          </Option>
        </Select>
      </p>
    </Row>
    <Row v-if="lastLevel && lastLevel.children">
       <!--<FormPlaceholderEdit :item="lastLevel"></FormPlaceholderEdit>-->
      <formCascaderOpiton :item="lastLevel" v-if="lastLevel"
                          :option-list="lastLevel.children"></formCascaderOpiton>
    </Row>
  </div>

</template>

<script>
import FormCascaderOpiton from './form-cascader-option-edit';
import FormPlaceholderEdit from './form-placeholder-edit';

export default {
  name: 'form-cascader-level-edit',
  data () {
    return {
      name: 'form-cascader-level-edit',
      selectLevel_1: {children: []},
      selectLevel_2: null,
      lastLevel: null
    };
  },
  components: {
    FormCascaderOpiton,
    FormPlaceholderEdit
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    level: { // 第二级
      type: Number,
      required: true,
      default: 2,
      maxSize: 3
    }
  },
  methods: {
    change (i) {
      if (this.level === 2) { // 第二层级联
        this.lastLevel = this.item.optionList[i];
      }
      this.selectLevel_1 = this.item.optionList[i];
    },
    change_1 (i) {
      if (this.level === 3) {
        this.lastLevel = this.selectLevel_1.children[i];
      }
    }
  },
  created () {
  },
  mounted () {
  }
};
</script>

<style lang="less" scoped>
  .ivu-input{
    border: none;
    border-bottom: 1px solid #dddee1 !important;
  }
</style>
