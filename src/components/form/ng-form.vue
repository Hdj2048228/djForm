<template>
  <Card dis-hover>
    <p slot="title" class="text-center">
      <Icon type="ios-list-outline"></Icon>
      {{form.title}}
    </p>
    <div id="doList">
      <div class="form-page" :key="index" v-for="(page,index) in form.pages">
        <form-page :ref="'page'+ index" :page="page"></form-page>
        <Row class="text-center">
          <Button type="primary" @click="innerSubmit"> 提交</Button>
        </Row>
      </div>
    </div>
  </Card>

</template>

<script>
// import bus from '../../../common/js/bus';
import FormPage from './widgets/form-page';
import {FormResultModel} from './Model/Form_ES6';

export default {
  name: 'ng-form',
  components: {
    FormPage
  },
  data () {
    return {
      name: 'ng-form'
    };
  },
  props: {
    form: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    innerSubmit () {
      const obj = this.form.parseToResult();
      console.log(JSON.stringify(obj));
      this.$refs.page0[0].$refs.pageform.validate((valid) => {
        localStorage.setItem('form', JSON.stringify(this.form));
        if (valid) {
          this.$emit('submit');
          // bus.$emit('submit');
        } else {
          this.$Message.error('有未填项，请检查!');
        }
      });
    },
    /**
     *  上传结果解析，只要标题和值以及下拉选项
     */
    pareResult () {
      let result = [];
      this.form.pages.forEach((page) => {
        page.elements.forEach((ele) => {
          result.push(new FormResultModel(ele));
        });
      });
      return result;
    }
  },
  created () {
    console.log(this.form);
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
