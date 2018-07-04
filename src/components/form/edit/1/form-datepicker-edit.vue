<template>
  <Row>
    <FormTitleEdit :item="item"></FormTitleEdit>
    <FormDescriptionEdit :item="item"></FormDescriptionEdit>
    <FormDatetypeEdit :item="item"></FormDatetypeEdit>
    <FormWidthEdit :item="item"></FormWidthEdit>
  </Row>
</template>

<script>
import FormTitleEdit from '../0/form-title-edit.vue';
import FormPlaceholderEdit from '../0/form-placeholder-edit.vue';
import FormDescriptionEdit from '../0/form-description-edit.vue';
import FormDatetypeEdit from '../0/form-datetype-edit.vue';
import FormWidthEdit from '../0/form-width-edit.vue';

export default {
  name: 'form-datepicker-edit',
  components: {
    FormTitleEdit,
    FormWidthEdit,
    FormPlaceholderEdit,
    FormDescriptionEdit,
    FormDatetypeEdit
  },
  data () {
    return {
      name: 'form-datepicker-edit'
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
