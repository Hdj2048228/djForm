<template>
  <Row>
    <FormTitleEdit :item="item"></FormTitleEdit>
    <FormDescriptionEdit :item="item"></FormDescriptionEdit>
    <FormRequireEdit :item="item"></FormRequireEdit>
    <FormPlaceholderEdit :item="item"></FormPlaceholderEdit>
  </Row>
</template>

<script>
import FormTitleEdit from '../0/form-title-edit.vue';
import FormPlaceholderEdit from '../0/form-placeholder-edit.vue';
import FormDescriptionEdit from '../0/form-description-edit.vue';
import FormRequireEdit from '../0/form-require-edit.vue';

export default {
  name: 'form-description-edit',
  components: {
    FormTitleEdit,
    FormPlaceholderEdit,
    FormDescriptionEdit,
    FormRequireEdit
  },
  data () {
    return {
      name: 'form-description-edit'
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  methods: {
    change (val) {
      this.item.textAlign = val;
    }
  },
  created () {
  },
  mounted () {
  }
};
</script>

<style scoped>

</style>
