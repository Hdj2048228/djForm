<template>
    <Card>
      <p slot="title" class="text-center">
        {{form.title}}
      </p>
      <div>
        <form-result-item :item="item" v-for="(item,index) in form.result" :key="index"></form-result-item>
      </div>
    </Card>
</template>

<script>
import FormResultItem from './form-result';

export default {
  name: 'form-result',
  data () {
    return {
      name: 'form-result',
      form: {
        title: '表单',
        id: '1',
        result: [
          {
            id: '1000', title: '名称', value: '选择名称', type: '试试'
          },
          {
            id: '1000',
            title: '名称',
            value: 'http://img2.imgtn.bdimg.com/it/u=3588772980,2454248748&fm=27&gp=0.jpg',
            type: 'FormUpload'
          }
        ]
      }
    };
  },
  components: {
    FormResultItem
  },
  // props: {
  //   form: {
  //     required: true
  //   }
  // },
  methods: {},
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
