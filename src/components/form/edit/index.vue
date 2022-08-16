<template>
  <div :id="name" class="padder-t-10">
    <p class="m-v-10">
        <Button type="ghost" @click="backPrevious">返回</Button>
        <Button type="ghost" @click.native="goPreview">预览</Button>
        <Button type="ghost" @click.native="saveForm">提交表单</Button>
        <Button type="ghost" @click.native="analyze">分析</Button>

    </p>
    <Row :gutter="5">
      <Col span="6">
        <Collapse class="m-t-10" v-model="showFormComponents" accordion>
      <Panel name="2">
        <!--<p slot="title">-->
        <!--<Icon type="ios-list"></Icon>-->
        组件
        <!--</p>-->
        <div slot="content" class="collapsed-box" id="form-elements-collapsed"
             v-for="item in formComponent" >
          <div class="box-header">
            <h3 class="box-title">{{item.title}}</h3>
          </div>
          <div class="box-body padder-v-5 ">
            <draggable :list="item.elements" :options="options" @start="canDragTo=false" @end="end" :move="checkMove">
              <a class="btn btn-app" :key="element.name" v-for="element in item.elements"
                 @click.stop="widgetClick(element)">
                <i class="fa" :class="element.className"/>
                {{element.name}}
              </a>
            </draggable>
            <!--</transition-group>-->
            <!--</draggable>-->
          </div>
          <!-- /.box-body -->
        </div>
      </Panel>

    </Collapse>
      </Col>
      <Col span="12">
      <Card>
        <Row>
          <Col span="24">
          <Card dis-hover>
            <p slot="title">
              <Icon type="ios-list-outline"></Icon>
              <span >{{form.title}}</span>
            </p>
            <div id="doList">
              <div class="form-page" :key="index" v-for="(page,index) in form.pages">
                <form-page-edit @elementChange="elementChange" :page="page" :form-component="formComponent" :disabled="true"></form-page-edit>
              </div>

              <ul class="iview-admin-draggable-list"></ul>
            </div>
          </Card>
          </Col>

        </Row>
      </Card>
      </Col>
      <Col span="6" class="padding-left-10">
      <Collapse  v-model="showFormTitle" accordion>
        <Panel name="1">
          表头设置
          <p slot="content">
            <span>表单标题</span><Input v-model="form.title" type="text"></Input>
          </p>
        </Panel>
      </Collapse>
      <Collapse  v-if="selectElement" class="m-t-10" v-model="showFormComponentSetting" accordion>
        <Panel name="3">

        <!--<p slot="title">-->
          <!--<Icon type="ios-paper-outline"></Icon>-->
          {{selectElement.name || ''}}组件设置
        <!--</p>-->
        <component  slot="content" v-if="selectElement.elementType" :is="selectElement.elementType + 'Edit'"
                   :item="selectElement"></component>
        </Panel>
      </Collapse>

        </Col>

    </Row>
    <Modal title="预览" v-model="preview">
      <NgForm :form="form"></NgForm>
    </Modal>
  </div>

</template>

<script>
// import services from '../../../../service';
import {Form, formComponent} from '../Model/Form_ES6';

import {FormComponentsEdit} from '../widgets/index';
export default {
  name: 'form-index',
  data () {
    return {
      name: 'index',
      showFormTitle: '1',
      showFormComponents: '2',
      showFormComponentSetting: '3',
      selectPage: 0,
      selectPageIndex: 0,
      formComponent,
      selectElement: {},
      canDragTo: false,
      form: {},
      formId: '',
      categoryId: '',
      preview: false,
      options: {
        group: {
          name: 'list',
          pull: 'clone'
        },
        sort: false,
        animation: 120,
        ghostClass: 'placeholder-style',
        fallbackClass: 'iview-admin-cloned-item',
        onClone (evt) {
          console.log('onClone' + evt);
        }
      }
    };
  },
  props: {
    ispreview: Boolean
  },
  components: FormComponentsEdit,
  methods: {
    analyze() {
      window.open('#/analyze','_blank');
    },
    saveForm () {
      console.log(JSON.stringify(this.form));
      const id = parseInt( Math.random() *1000000)
      const item = {name:'新建表单', time: '2022-08-14', id, forms: this.form }
      const strForm = item
      const list  = JSON.parse(localStorage.getItem('form-list'))|| []
      list.unshift(strForm)
      localStorage.setItem('form-list',JSON.stringify(list))
      if (this.categoryId === '') {
        this.$Message.error('表单类型为空，请返回上一页面，选择表单类型');
        return;
      }

      if (!this.form.title || this.form.title === '') {
        this.$Message.error('请输入表单标题');
        return;
      }
      this.$Message.success('保存成功');
      const data = {
        name: this.form.title,
        categoryId: this.categoryId,
        template: JSON.stringify(this.form)
      };
      // services.form.saveForm(data).then(() => {
      //   this.$router.go(-1);
      // });
    },
    backPrevious () {
      this.$router.go(-1);
    },
    checkMove: function (evt) {
      this.canDragTo = !!evt.relatedContext.element;
      return this.canDragTo;
    },
    end (evet) {
    },
    goPreview () {
      this.$emit('preview',Object.assign({},this.form));
      localStorage.setItem('form', JSON.stringify(this.form));
      window.open('#/preview?preview=1','_blank');
      // window.open('./index.html#/forms?preview=1', '_blank');
    },
    elementChange (item) {
      this.selectElement = item;
    },
    widgetClick (item) {
      const model = new this.form[item.modelName]();
      if (!model) {
        this.$Message.error('找不到【' + item.modelName + '】对应的对象名 ');
        return;
      }
      console.log(FormComponentsEdit);

      if (!this.selectPage) {
        this.selectPage = this.form.pages[0];
      }
      console.log('widgetClick' + model + this.selectPage.addElement);

      this.selectPage.addElement(model);
    }
  },
  created () {
    const _this = this;
    this.categoryId = this.$route.query.type;
    console.log('表单类型id:' + this.categoryId);
    this.formId = this.$route.query.id;
    const isCopy = this.$route.query.copy;
    console.log('表单id:' + this.formId);
    if (this.formId) {
      // 编辑
      // services.form.getFormById(this.formId).then((data) => {
      //   _this.form = new Form(JSON.parse(data.template));
      //   if (isCopy) {
      //     _this.form.id = Date.now();
      //   }
      //   _this.categoryId = data.categoryId;
      // });
    } else {
      this.form = new Form();
      this.selectPage = this.form.pages[0];
    }
  },
  mounted () {

  }
};
</script>

<style scoped>
  @import '../assets/form.less';

  .iview-admin-draggable-list {
    height: 100%;
  }

  .iview-admin-draggable-list li {
    padding: 9px;
    border: 1px solid #e7ebee;
    border-radius: 3px;
    margin-bottom: 5px;
    cursor: pointer;
    position: relative;
    transition: all .2s;
  }

  .iview-admin-draggable-list li:hover {
    color: #87b4ee;
    border-color: #87b4ee;
    transition: all .2s;
  }

  .iview-admin-draggable-delete {
    height: 100%;
    position: absolute;
    right: -8px;
    top: 0px;
    display: none;
  }

  .iview-admin-draggable-list li:hover .iview-admin-draggable-delete {
    display: block;
  }

  .placeholder-style {
    display: block !important;
    color: transparent;
    border-style: dashed !important;
  }

  .delte-item-animation {
    opacity: 0;
    transition: all .2s;
  }

  .iview-admin-draggable-list {
    overflow: auto
  }

  .ivu-form-item {
    background-color: #FFF8DC;

  }
  .fa{
    line-height: 20px;
  }

</style>
