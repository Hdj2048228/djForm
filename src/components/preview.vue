<template>
  <div :id="name">
    <ng-form :form="form" @submit="submit"></ng-form>
  </div>

</template>

<script>
  import NgForm from './form/ng-form';
  import {Form} from './form/Model/Form_ES6';

  export default {
    name: 'index',
    components: {
      NgForm
    },
    data() {
      return {
        name: 'index',
        form: null,
        preview: true
      };
    },
    methods: {
      /**
       * 处理表单提交
       */
      submit() {
        const _this = this;
        if (_this.preview) {
          _this.$Message.info('预览模式下，不允许提交数据');
        } else {
          // var data = {
          //   formId: '',
          //   deviceId: '',
          //   content: JSON.stringify(_this.form)
          // };
          // services.form.saveFormFeedback(data).then(() => {
          //   _this.$Message.info('提交成功');
          // });
        }
      }
    },
    created() {
      let _this = this;

      let preview = this.$route.query.preview || '';
      if (preview === '1') {
        this.preview = true;
        // 预览模式
        let form = JSON.parse(localStorage.getItem('form'));
        this.form = new Form(form);
      } else {
        // let formId = $.route.query.formid;
      }
    },

    mounted() {
    }
  };
</script>

<style scoped>

</style>
