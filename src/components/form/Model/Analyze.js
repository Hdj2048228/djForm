export const AnalyseBaseModel = class AnalyseBaseModel {
  constructor (obj) {
    if (obj) {
      Object.assign(this, obj);
    } else {
      this.title = '';
      this.elementType = '';
      this.name = '';
    }
  }
};

// class AnalyseSelectModel extends AnalyseBaseModel{
//   constructor (obj) {
//     if(obj){
//       this.res =
//     }
//   }
// }
export const res = [
  {
    title: '数字',
    name: '数字',
    data: {
      max: 1200,
      min: 1,
      total: 120000002,
      average: 132323
    }
  },
  {
    title: '选择',
    name: '选择',
    data: {
      1000: [
        {
          name: '选项1',
          value: 3,
          zb: '15%'
        },
        {
          name: '选项2',
          value: 11,
          zb: '55%'
        }, {
          name: '选项3',
          value: 6,
          zb: '30%'
        }],
      10001: [
        {
          name: '选项1 - 选项1-1',
          value: 2,
          zb: '20%'
        },
        {
          name: '选项1 - 选项1-2',
          value: 3,
          zb: '30%'
        }, {
          name: '选项2 - 选项2-1',
          value: 5,
          zb: '50%'
        }]
    }
  },
  {
    title: '数字',
    name: '数字',
    data: {
      max: 1200,
      min: 1,
      total: 120000002,
      average: 132323
    }
  }];
export const AnalyseResult = {
  x_data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  y_1_data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
  y_2_data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
  res: res
};
