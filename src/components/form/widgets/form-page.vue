<template>
  <Form :id="page.id" label-position="top" ref="pageform"
        style="width: 100%;">
      <FormItem class="padder-v-10"  v-for="(item,index) in page.elements" :key="index"
                :prop="'items.value'"
                :rules="{required: item.required, message: item.title + '必填', trigger: 'blur'}">
        <div v-if="item.elementType !== 'FormLine'" class="form-item-ivw-label" :class="item.class" slot="label">
          <div class="form-item-title">
            <span v-show="item.required" style="color: red">*</span>
            <span v-show="item.index">{{item.index + '.'}}</span>
            <span>{{item.title}}</span>
          </div>
          <div class="form-item-desc">{{item.description}}</div>
        </div>
        <component :disabled="false" :style="{width:item.contentWidth}" :placeholder="item.placeholder" :is="item.elementType"
                   :item="item"></component>
      </FormItem>
  </Form>
</template>

<script>
import draggable from 'vuedraggable';
import FormCheckbox from './form-checkbox';
import FormRadio from './form-radio';
import FormSelect from './form-select';
import FormUpload from './form-upload';
import FormFile from './form-file';
import FormNumber from './form-number';
import FormLine from './form-line';
import FormInput from './form-input';
import FormCascader from './form-cascader';
import FormSex from './form-sex';
import FormAddress from './form-address';

// import {FormComponents} from './index';
// formComponent['draggable'] = draggable;
// import FormPage from './form-page';
import FormDescription from './form-description.vue';
import FormDatePicker from './form-datepicker';
// console.log(FormComponents);
export default {
  name: 'Form-page',
  data () {
    return {
      name: 'form-page',
      selectIndex: null
    };
  },
  props: {
    page: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  components: {
    draggable,
    FormCheckbox,
    FormDatePicker,
    FormDescription,
    FormSex,
    FormAddress,
    FormFile,
    FormLine,
    FormInput,
    FormNumber,
    FormRadio,
    FormUpload,
    FormSelect,
    FormCascader
  },
  methods: {
    selectItem (index, item) {
      this.selectIndex = index;
      this.$emit('elementChange', item);
    },
    removeElement (index) {
      if (this.page.removeElement) {
        this.page.removeElement(index);
      } else if (this.form.elements) {
        this.page.elements.splice(index, 1);
      }
      this.$nextTick(() => {
        this.$emit('elementChange', undefined);
        this.selectIndex = -1;
      });
    }
  },
  created () {
  },
  mounted () {
  }
};
</script>

<style>

  .ivu-form-item-selected{
    border: 1px dashed #CCC;
    background-color:  #FFF8DC;
  }
  .form-content{
    position: absolute;
    top: -30px;
    left: 0;
    right: 0;
    bottom: 0;
    /*border: 1px dashed #CCC;*/
    /*background-color:  #FFF8DC;*/
    /*background-color:  red;*/

  }
  .form-item-copy{
    position: absolute;
    width: 22px;
    height: 22px;
    left: -20px;
    bottom:-20px;
    text-align: center;
    line-height: 20px;
    font-size: 1.2rem;
    color: white;
    background-color: red;
    z-index: 10000;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .form-item-delete{
    position: absolute;
    width: 22px;
    height: 22px;
    right: -21px;
    bottom: -21px;
    text-align: center;
    line-height: 22px;
    font-size: 15px;
    color: white;
    background-color: #D24E46;
    z-index: 200;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .form-item-title{
    font-size: 16px;
    color: #000;
    padding-bottom: 5px;
  }

  .form-item-desc{
    font-weight: normal;
    color: #666666;
    font-size: 14px;
    padding-top: 3px;
    padding-bottom: 5px;
  }
  .form-item-ivw-label{
    display: block;
    text-align: left;
  }
  .hide{
    display: none;
  }
  .ivu-form-item-required .ivu-form-item-label:before{
    display: none;
  }
</style>
