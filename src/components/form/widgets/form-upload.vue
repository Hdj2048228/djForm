<template>
  <div>
    <div class="demo-upload-list" v-for="obj in uploadList">
      <template v-if="obj.status === 'finished'">
        <img :src="obj.url">
        <div class="demo-upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(obj.name)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove(obj)"></Icon>
        </div>
      </template>
      <template v-else>
        <Progress v-if="obj.showProgress" :percent="obj.percentage" hide-info></Progress>
      </template>
    </div>
    <Upload
      ref="upload"
      :show-upload-list="false"
      :default-file-list="defaultList"
      :on-success="handleSuccess"
      :format="['jpg','jpeg','png']"
      :max-size="item.maxSize"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      multiple
      :headers="header"
      :type="item.type"
      name="pic"
      :action="action"
      style="display: inline-block;width:58px;">
      <div style="width: 58px;height:58px;line-height: 58px;">
        <Icon type="camera" size="20"></Icon>
      </div>
    </Upload>
    <Modal title="图片预览" v-model="visible">
      <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
    </Modal>
  </div>
</template>

<script>
import config from '../config/index';
export default {
  name: 'form-upload',
  data () {
    return {
      name: 'form-upload',
      defaultList: [

      ],
      header: {authorization: config.authorization},
      action: config.uploadUrl,
      imgName: '',
      visible: false,
      uploadList: []
    };
  },
  methods: {
    handleView (name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove (file) {
      if (this.disabled) {
        return;
      }
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess (res, file) {
      console.log(res);
      file.url = res.data;
      this.item.value = res.data;
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '文件类型错误',
        desc: '请上传.jpg/.png/.jpeg格式的图片'
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
        return;
      }
      const check = this.uploadList.length < this.item.maxNumber;
      if (!check) {
        this.$Notice.warning({
          title: '最多只能上传' + this.item.maxNumber + '张图片'
        });
      }
      return check;
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
    this.uploadList = this.$refs.upload.fileList;
    this.$refs.upload.$refs.input.disabled = this.disabled;
  }
};
</script>

<style scoped>
  .demo-upload-list{
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid transparent;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    position: relative;
    box-shadow: 0 1px 1px rgba(0,0,0,.2);
    margin-right: 4px;
  }
  .demo-upload-list img{
    width: 100%;
    height: 100%;
  }
  .demo-upload-list-cover{
    display: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0,0,0,.6);
  }
  .demo-upload-list:hover .demo-upload-list-cover{
    display: block;
  }
  .demo-upload-list-cover i{
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    margin: 0 2px;
  }

</style>
