<template>
  <div :id="name">
    <Card>
      <p slot="title" style="overflow: visible">
        <span>{{item.title}}</span>
        <span class="analyize-tag">{{item.name}}</span>
      </p>

      <Row class="analyze-border" v-if="item.name==='选择'" v-for="(key,val,index) in item.data" :key="val" slot=""
           style=" padding-left: 0px !important;
    padding-right: 0px !important;">
        <p class="padder-t-10">
          <span class="analyze-pie-index">{{index + 1}}</span>
        </p>
        <Col :xs="24" :sm="24" :md="10">
        <analyze-pie :data="key" :id="val" :title="val"></analyze-pie>
        </Col>
        <Col :xs="24" :sm="24" :md="14" style="padding-top: 15px">
        <Table :columns="columns" :data="key" size="small"></Table>
        </Col>
      </Row>
      <Row>
        <analyze-number v-if="item.name==='数字'" :data="item.data"></analyze-number>
      </Row>
    </Card>
  </div>

</template>

<script>
import AnalyzePie from './analysis-pie';
import AnalyzeNumber from './analysis-number';

export default {
  name: 'index',
  data () {
    return {
      name: 'index',
      columns: [
        {
          'title': '选项名称',
          'key': 'name'
        },
        {
          'title': '占比',
          'key': 'zb',
          'fixed': 'right',
          'sortable': true
        },
        {
          'title': '数量',
          'key': 'value',
          'fixed': 'right'
        }
      ]
    };
  },
  components: {
    AnalyzePie,
    AnalyzeNumber
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

<style scoped lang="less">
  .analyize-tag {
    display: inline-block;
    height: 22px;
    padding-left: 5px;
    padding-right: 5px;
    margin-top: 10px;
    line-height: 22px;
    color: #fff;
    background-color: #C1C4C1;
    border-radius: 2px;
    font-size: 12px;
  }

  .analyze-border {
    /*border-bottom: 1px solid #E6E9EF;*/

  }

  .analyze-border:before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border-top: 1px solid #E6E9EF;
  }

  .analyze-border:after {
    border-bottom: none;
  }

  .analyze-pie-index {
    border: 1px solid rgb(82, 178, 102);
    color: rgb(82, 178, 102);
    cursor: default;
    display: inline;
    font-family: Roboto, "Helvetica Neue", Helvetica, "Nimbus Sans L", -apple-system, system-ui, "Liberation Sans", "Hiragino Sans GB", "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans CN", "Source Han Sans SC", "Wenquanyi Micro Hei", "WenQuanYi Zen Hei", "ST Heiti", SimSun, "WenQuanYi Zen Hei Sharp", sans-serif;
    font-size: 14px;
    hyphens: auto;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    padding: 2px 5px 2px 5px;
  }

</style>
