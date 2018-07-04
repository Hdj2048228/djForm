<template>
  <div>
    <Row>
      <Tabs type="card" @on-click="selectTabsChange">
        <TabPane label="反馈列表">
          <Card>
            <Row>
              <Table ref="scaleManage" :columns="cloumns" :data="scaleList" :loading="loading"
                     @on-selection-change="selectChange"  @on-row-dblclick="dbClick" stripe>
              </Table>
            </Row>
            <Row>
              <Page @on-change="pageChange" :total="totalSize" class="padder-b-10 padder-t-10 pull-right"></Page>
            </Row>
          </Card>
        </TabPane>
        <TabPane label="统计视图" >
          <form-analyze ref="analyze" :data="analyzedData"></form-analyze>
        </TabPane>
      </Tabs>
      <div class="feedback-detail" v-show="selectScale.name">
        <div class="form-result-header">
          <Button type="ghost" size="small" @click="handleFeedback">处理</Button>
          <Button type="ghost" size="small" @click="closeFeedbackDetail">关闭</Button>
          <Button type="ghost" size="small" @click="removeFeedbackDetail">删除</Button>
          <Button type="ghost" size="small" @click="exportToImage">导出图片</Button>
          <Button type="ghost" size="small" @click="printFeedbackDetail">打印</Button>
        </div>
        <div id="form-feedback-detail" class="form-result-content">
          <form-feedback-detail id="capture" ref="image"></form-feedback-detail>
        </div>
        <div class="form-result-footer">
          <img id="exportedImage" style="width: 0px;height: 0px;" />
        </div>

        <div class="feedback-detail-close"></div>
      </div>
      <!--<Modal v-model="selectScale.name">-->
      <!--<form-feedback-detail></form-feedback-detail>-->
      <!--</Modal>-->
    </Row>
  </div>
</template>

<script>
  import html2canvas from 'html2canvas';
  import FormAnalyze from './form/analysis/index';
  import FormFeedbackDetail from './form/result/index';
  import {AnalyseResult} from './form/Model/Analyze';

  export default {
    name: 'scale-manage',
    components: {
      FormAnalyze,
      FormFeedbackDetail
    },
    data () {
      return {
        scaleName: '',
        category: {name: ''},
        selectCategory: {},
        pageNumber: 0,
        totalSize: 0,
        analyzedData: {},
        selectScales: [],
        addScaleTypeModal: false,
        selectScale: {},
        scaleList: [{id: '01', name: '程序员满意度问卷', time: '2017-09-10'}, {id: '01', name: '程序员满意度问卷', time: '2017-09-10'}],
        cloumns: [
          {
            title: '序号',
            type: 'index',
            align: 'center'
          },
          {
            title: '序号',
            key: 'name',
            align: 'center'
          },
          {
            title: '提交时间',
            key: 'time',
            align: 'center'
          },
          {
            title: '其他信息',
            key: 'other',
            align: 'center'
          },
          {
            title: '操作',
            key: 'other',
            align: 'center',
            render: (h, obj) => {
              // const id = obj.row.id;
              return h('Button',
                {
                  props: {type: 'primary', size: 'small'},
                  on: {
                    click: (event) => {
                      this.showAnalyzeView(obj.row);
                      event.stopPropagation();
                    }
                  }
                }, '查看');
            }
          }
        ],
        loading: false
      };
    },
    methods: {
      dbClick (data) {
        this.showAnalyzeView(data);
      },
      showAnalyzeView (data) {
        this.selectScale = data;
      },
      exportToImage () {
        const vm = this;
        html2canvas(document.querySelector('#capture', {
          allowTaint: true,
          useCORS: true
        })).then(canvas => {
          const url = canvas.toDataURL();
          document.getElementById('exportedImage').src = url;
          let a = document.createElement('a');
          a.href = url;
          a.download = vm.imageName ? vm.imageName : '未命名';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        });
      },
      printFeedbackDetail () {
        const printHtml = document.getElementById('form-feedback-detail').innerHTML;
        const wind = window.open('/index.html#/print', 'newwindow', 'toolbar=no, menubar=no, scrollbars=no, resizable=no,location=no, status=no');
        setTimeout(() => {
          wind.document.body.innerHTML = printHtml;
          wind.print();
        }, 300);
        return false;
      },
      handleFeedback () {

      },
      closeFeedbackDetail () {
        this.selectScale = {};
      },
      selectChange (selection) {
        console.log(selection);
        this.selectScales = selection;
      },
      pageChange (pageNumber) {
        this.pageNumber = pageNumber - 1;
        this.search();
      },
      removeFeedbackDetail () {
        const _this = this;
        this.$Modal.confirm({
          title: '删除确认',
          content: '确定删除该反馈吗？',
          onOk () {
            // do del
            _this.$Message.success('删除成功');
          }
        });
      },
      selectTabsChange () {
        this.closeFeedbackDetail();
        this.analyzedData = {};
        this.$refs.analyze.setAnalyzeData();
        setTimeout(() => {
          this.analyzedData = AnalyseResult;
        }, 100);
      }
    },
    created () {

    },
    mounted () {
      document.body.addEventListener('click', () => {
        this.closeFeedbackDetail();
      });
    }
  };
</script>
<style>
  .form-result-header{
    height: 52px;
    padding: 10px 15px;
    background-color: #EEF6FC;
    border-bottom: 1px solid #BDD6E8;
    border-top: 10px solid #267DC5;
  }
  .feedback-detail{
    position: fixed;
    right: -20px;
    top: 80px;
    bottom: 80px;
    width: 600px;
    -webkit-box-shadow: -5px 5px 16px rgba(0,0,0,.25);
    box-shadow: -5px 5px 16px rgba(0,0,0,.25);
    -webkit-transform: translate3d(0,0,0);
    -moz-transform: translate3d(0,0,0);
    transform: translate3d(0,0,0);
    background-color: #fefefd;
    -webkit-transition: all 273ms cubic-bezier(.39,.58,.57,1);
    -moz-transition: all 273ms cubic-bezier(.39,.58,.57,1);
    transition: all 273ms cubic-bezier(.39,.58,.57,1);
  }

</style>


