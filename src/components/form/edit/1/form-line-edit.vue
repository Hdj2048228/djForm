<template>
  <Row>
    <form-title-edit :item="item"></form-title-edit>
    <form-description-edit :item="item"></form-description-edit>
    <form-line-style-edit :item="item" :value="item.borderStyle"></form-line-style-edit>
    <form-text-align-edit :item="item" title="标题对齐方式" value="titleAlign"></form-text-align-edit>
    <form-text-align-edit :item="item" title="描述对齐方式"value="descriptionAlign"></form-text-align-edit>
  </Row>
</template>

<script>
import FormTitleEdit from '../0/form-title-edit.vue';
import FormDescriptionEdit from '../0/form-description-edit.vue';
import FormContentTextEdit from '../0/form-content-text-edit.vue';
import FormTextAlignEdit from '../0/form-text-align-edit.vue';
import FormLineStyleEdit from '../0/form-line-style-edit.vue';

export default {
  name: 'form-line-edit',
  components: {
    FormTitleEdit,
    FormDescriptionEdit,
    FormTextAlignEdit,
    FormContentTextEdit,
    FormLineStyleEdit
  },
  data () {
    return {
      name: 'form-line-edit'
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {},
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
