<template>
  <Row>
    <FormTitleEdit :item="item"></FormTitleEdit>
    <FormPlaceholderEdit :item="item"></FormPlaceholderEdit>
    <FormDescriptionEdit :item="item"></FormDescriptionEdit>
    <FormRequireEdit :item="item"></FormRequireEdit>
    <FormCascaderEdit :item="item"></FormCascaderEdit>
  </Row>
</template>

<script>
import FormTitleEdit from '../0/form-title-edit.vue';
import FormPlaceholderEdit from '../0/form-placeholder-edit.vue';
import FormDescriptionEdit from '../0/form-description-edit.vue';
import FormOptionEdit from '../0/form-option-edit.vue';
import FormRequireEdit from '../0/form-require-edit.vue';
import FormCascaderEdit from '../0/form-cascader-edit.vue';

export default {
  name: 'form-checkbox-edit',
  components: {
    FormTitleEdit,
    FormPlaceholderEdit,
    FormDescriptionEdit,
    FormOptionEdit,
    FormRequireEdit,
    FormCascaderEdit
  },
  data () {
    return {
      name: 'form-checkbox-edit'
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
