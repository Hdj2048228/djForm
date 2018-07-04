<template>
  <!--<Row>-->
    <!--<Col span="6" class="padder-lr-5">-->
    <!--<Select :disabled="disabled"  @on-change="change0" :placeholder="item.placeholder">-->
      <!--<Option v-for="(option, index) in item.optionList" :value="index" :key="index">{{option.key}}</Option>-->
    <!--</Select>-->
    <!--</Col>-->
    <!--<Col span="6" v-if="select_0.children&& select_0.children.length>0" class="padder-lr-5"-->
         <!--:placeholder="select_0.placeholder">-->
    <!--<Select :disabled="disabled" @on-change="change1">-->
      <!--<Option v-for="(option, index) in select_0.children" :value="index" :key="index">{{option.key}}</Option>-->
    <!--</Select>-->
    <!--</Col>-->
    <!--<Col span="6" v-if="select_1.children&& select_1.children.length>0" class="padder-lr-5"-->
         <!--:placeholder="select_1.placeholder">-->
    <!--<Select  :disabled="disabled"  @on-change="change2">-->
      <!--<Option v-for="(option, index) in select_1.children" :value="index" :key="index">{{option.key}}</Option>-->
    <!--</Select>-->
    <!--</Col>-->
    <!--<Col span="6" v-if="select_2.children&& select_2.children.length>0" class="padder-lr-5">-->
    <!--<Select :disabled="disabled"  @on-change="change3" :placeholder="select_2.placeholder">-->
      <!--<Option v-for="(option, index) in select_2.children" :value="index" :key="index">{{option.key}}</Option>-->
    <!--</Select>-->
    <!--</Col>-->


  <!--</Row>-->
  <Row>
    <Cascader :disabled="disabled"  v-model="res" :data="item.optionList"></Cascader>
  </Row>
</template>

<script>
export default {
  name: 'form-cascader',
  data () {
    return {
      name: 'form-cascader',
      res: this.item.res || [],
      result_0: '',
      result_1: '',
      result_2: '',
      result_3: '',
      select_0: {},
      select_1: {},
      select_2: {},
      select_3: {}
    };
  },
  watch: {
    res (val) {
      this.item.res = val;
      this.item.value = val.join('/');
    }
  },
  methods: {
    change0 (option) {
      this.select_0 = this.item.optionList[option];
      this.res[0] = this.item.optionList[option].key;
      this.res[1] = '';
      this.res[2] = '';
      this.res[3] = '';
      // this.result_1 = '';
      // this.result_2 = '';
      // this.result_3 = '';
      this.select_1 = {};
      this.select_2 = {};
      this.select_3 = {};
      this.valueChange();
    },
    change1 (option) {
      this.select_1 = this.select_0.children[option];
      this.res[2] = '';
      this.res[3] = '';
      // this.res[2] = '';
      // this.result_2 = '';
      // this.result_3 = '';
      this.select_2 = {};
      this.select_3 = {};
      this.valueChange();
    },
    change2 (option) {
      this.select_2 = this.select_1.children[option];
      this.res[3] = '';
      // this.result_3 = '';
      this.select_3 = {};
      this.valueChange();
    },
    change3 (option) {
      this.select_3 = this.select_2.children[option];
      this.valueChange();
    },
    valueChange () {
      this.item.value = this.res.join(',');
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
  },
  mounted () {
    // console.log(this.item.value);
  }
};
</script>

<style scoped>


</style>
