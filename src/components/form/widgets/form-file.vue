<template>
  <Upload  ref="upload"
           :show-upload-list="false"
           :default-file-list="defaultList"
           :on-success="handleSuccess"
           :format="[]"
           :max-size="item.maxSize"
           :on-format-error="handleFormatError"
           :on-exceeded-size="handleMaxSize"
           :before-upload="handleBeforeUpload"
           multiple
           :header="headers"
           :type="item.type"
           :action="action">
    <div v-if="item.type === 'drag'" style="padding: 20px 0">
      <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
      <p>点击或拖拽到此处上传</p>
    </div>
    <Button v-else="" type="ghost" icon="ios-cloud-upload-outline">添加附件</Button>
  </Upload>
</template>

<script>
import config from '../config/index';
export default {
  name: 'form-file',
  data () {
    return {
      name: 'form-file',
      defaultList: [],
      action: config.uploadUrl,
      headers: { authorization: config.authorization }
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
    handleSuccess (res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
      file.name = '7eb99afb9d5f317c912f08b5212fd69a';
      this.item.value = file.url;
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '文件类型错误',
        desc: '文件【 ' + file.name + '】类型不正确。'
      });
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '文件内容过大',
        desc: '文件【  ' + file.name + ' 】最大不能超过.' + this.item.maxSize + 'kb.'
      });
    },
    handleBeforeUpload () {
      if (this.disabled) {
        console.log(this.disabled + 'disabled');
        return;
      }
      const check = this.uploadList.length < this.item.maxNumber;
      if (!check) {
        this.$Notice.warning({
          title: '最多只能上传' + this.item.maxNumber + '文件'
        });
      }
      return check;
    }
  },
  created () {
  },
  mounted () {
    this.$refs.upload.$refs.input.disabled = this.disabled;
  }
};
</script>

<style scoped>

</style>
