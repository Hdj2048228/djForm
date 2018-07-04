<template>
  <Tabs class="m-t-10" type="card" v-model="selectTab" @on-tab-remove="handleTabRemove">
    <span slot="extra">
      <Button :disabled="item.level>=3" type="primary" @click="addLevel" size="small">+</Button>
      <Button :disabled="item.level<=1" type="primary" @click="delLevel" size="small">-</Button>
    </span>
    <TabPane v-for="index in item.level" :key="index" :name="index + ''" :label="index+ '级'">
      <Row v-if="selectTab === '1'">
        <FormCascaderOpiton :item="item" :option-list="item.optionList"></FormCascaderOpiton>
      </Row>
      <Row v-if="selectTab === '2'">
        <FormLevelEdit :level="2" :item="item"></FormLevelEdit>
      </Row>
      <Row v-if="selectTab === '3'">
        <FormLevelEdit :level="3" :item="item"></FormLevelEdit>
      </Row>
    </TabPane>
  </Tabs>
</template>

<script>
import FormCascaderOpiton from './form-cascader-option-edit';
import FormLevelEdit from './form-cascader-level-edit';

export default {
  name: 'form-contentext-edit',
  data () {
    return {
      name: 'form-contentext-edit',
      selectTab: '1',
      selectLevel_0: null
    };
  },
  components: {
    FormCascaderOpiton,
    FormLevelEdit
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleTabRemove (name) {
      // this['tab' + name] = false;
    },
    addLevel () {
      this.item.addLevel();
      this.$nextTick(() => {
        this.selectTab = this.item.level + '';
      });
    },
    change (i) {
      this.selectLevel_0 = this.item.optionList[i];
    },
    delLevel () {
      this.recursive(this.item.level);
      this.item.delLevel();
    },
    recursive (index) {
      for (let obj1 in this.item.optionList) {
        for (let obj2 in obj1.children) {
          if (index === 2) {
            obj2.children = [];
          } else {
            for (let obj3 in obj2.children) {
              obj3.children = [];
            }
          }
        }
      }
    }

  },
  created () {
    console.log(this.item.optionList);
  },
  mounted () {
  }
};
</script>

<style scoped>
  .ivu-tabs .ivu-tabs-tabpane {
    overflow: -webkit-paged-y;
  }

</style>
