<template>
  <Form :id="page.id" label-position="top"
        style="width: 100%;">
    <draggable v-model="page.elements" :options="options" @add="add" @start="drag=true" @end="drag=false">
      <FormItem class="padder-v-10 form-item" :class="selectIndex === index?'ivu-form-item-selected':''" v-for="(item,index) in page.elements" :key="index" @click.native="selectItem(index,item)">
        <span  v-if="selectIndex === index" class="form-item-copy" @click="copyItem(item,index)">C</span>
        <div v-if="item.elementType !== 'FormLine'" class="form-item-ivw-label" :class="item.class" slot="label">
          <div class="form-item-title">
            <span v-show="item.required" style="color: red">*</span>
            <span v-show="item.index">{{item.index + '.'}}</span>
            <span>{{item.title}}</span>
          </div>
          <div class="form-item-desc">{{item.description}}</div>
        </div>

        <span  @click="removeElement(index)" class="form-item-delete">x</span>
        <component :disabled="disabled" :style="{width:item.contentWidth}" :placeholder="item.placeholder" :is="item.elementType"
                   :item="item"></component>
      </FormItem>
    </draggable>

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

// import FormPage from './form-page';
import FormDescription from './form-description.vue';
import FormDatePicker from './form-datepicker';
import {Form, formComponent} from '../Model/Form_ES6';
import FormAddress from './form-address';

export default {
  name: 'Form-page',
  data () {
    return {
      name: 'form-page',
      selectIndex: null,
      options: {
        group: {
          name: 'list',
          clone: true
        },
        animation: 120,
        ghostClass: 'placeholder-style',
        fallbackClass: 'iview-admin-cloned-item'
      },
      tempForm: new Form()
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
    },
    formComponent: {
      type: Array,
      required: true,
      default: formComponent
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
    mouseOver () {
      console.log('mouseOver');
    },
    mouseEnter () {
      console.log('mouseEnter');
    },
    mouseLeave () {
      console.log('mouseleave');
    },
    copyItem (item, index) {
      this.page.copyElement(item, index, this.tempForm);
    },
    add (evet) {
      let oldIndex = evet.oldIndex;
      let newIndex = evet.newIndex;
      let modelName = this.formComponent[0].elements[oldIndex].modelName;
      let origin = this.page.elements;
      origin[newIndex] = new this.tempForm[modelName]();
      this.$set(this.page.elements, origin);
    },
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

<style type="less">

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
    display: none;
    position: absolute;
    width: 10px;
    height: 10px;
    left: 0;
    bottom:0;
    text-align: center;
    line-height: 10px;
    font-size: 1.2rem;
    background-color: #D24E46;
    z-index: 10000;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .form-item-delete{
    display: none;
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
    z-index: 10000;
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

  .form-item:hover {
    border: 1px dashed #CCC;
  }
  .form-item:hover .form-item-delete {
    display: inline-block;
  }

  .hide{
    display: none;
  }
</style>
