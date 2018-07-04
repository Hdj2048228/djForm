<template>
  <Row>
    <FormTitleEdit :item="item"></FormTitleEdit>
    <FormDesEdit :item="item"></FormDesEdit>
    <FormRequireEdit :item="item"></FormRequireEdit>
    <FormPlaceholderEdit :item="item"></FormPlaceholderEdit>
    <FormWidthEdit :item="item"></FormWidthEdit>
  </Row>

</template>

<script>
import FormTitleEdit from '../0/form-title-edit.vue';
import FormPlaceholderEdit from '../0/form-placeholder-edit.vue';
import FormDesEdit from '../0/form-description-edit.vue';
import FormOptionEdit from '../0/form-option-edit.vue';
import FormRequireEdit from '../0/form-require-edit.vue';
import FormWidthEdit from '../0/form-width-edit.vue';

export default {
  name: 'form-sex-edit',
  components: {
    FormTitleEdit,
    FormWidthEdit,
    FormPlaceholderEdit,
    FormDesEdit,
    FormOptionEdit,
    FormRequireEdit
  },
  data () {
    return {
      name: 'form-sex-edit'
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
