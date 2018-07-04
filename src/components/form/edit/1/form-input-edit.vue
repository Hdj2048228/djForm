<template>
  <Row>
    <FormTitleEdit :item="item"></FormTitleEdit>
    <FormDescriptionEdit :item="item"></FormDescriptionEdit>
    <FormRequireEdit :item="item"></FormRequireEdit>
    <FormPlaceholderEdit :item="item"></FormPlaceholderEdit>
    <FormWidthEdit :item="item"></FormWidthEdit>
  </Row>
</template>

<script>
import FormTitleEdit from '../0/form-title-edit.vue';
import FormPlaceholderEdit from '../0/form-placeholder-edit.vue';
import FormDescriptionEdit from '../0/form-description-edit.vue';
import FormRequireEdit from '../0/form-require-edit.vue';
import FormWidthEdit from '../0/form-width-edit.vue';

export default {
  name: 'FormInputEdit',
  components: {
    FormTitleEdit,
    FormPlaceholderEdit,
    FormDescriptionEdit,
    FormRequireEdit,
    FormWidthEdit
  },
  data () {
    return {
      name: 'form-input-edit'
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
