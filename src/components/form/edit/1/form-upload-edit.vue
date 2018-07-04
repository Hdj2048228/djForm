<template>
  <Row>
    <FormTitleEdit :item="item"></FormTitleEdit>
    <FormDescriptionEdit :item="item"></FormDescriptionEdit>
    <FormRequireEdit :item="item"></FormRequireEdit>
    <FormMaxSizeEdit :item="item"></FormMaxSizeEdit>
    <FormMaxNumberEdit :item="item"></FormMaxNumberEdit>
  </Row>

</template>

<script>
import FormTitleEdit from '../0/form-title-edit.vue';
import FormPlaceholderEdit from '../0/form-placeholder-edit.vue';
import FormDescriptionEdit from '../0/form-description-edit.vue';
import FormOptionEdit from '../0/form-option-edit.vue';
import FormRequireEdit from '../0/form-require-edit.vue';
import FormMaxNumberEdit from '../0/form-upload-maxnumber-edit.vue';
import FormMaxSizeEdit from '../0/form-upload-maxsize-edit.vue';

export default {
  name: 'form-select-edit',
  components: {
    FormTitleEdit,
    FormPlaceholderEdit,
    FormDescriptionEdit,
    FormOptionEdit,
    FormRequireEdit,
    FormMaxNumberEdit,
    FormMaxSizeEdit
  },
  data () {
    return {
      name: 'form-upload-edit'
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
