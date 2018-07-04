/**
 * Created by hdj on 2018/4/1.
 * 改写为ES6 Class的写法
 */
export const PareIntToNumber = (n) => {
  const cnum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
  let s = '';
  n = '' + n; // 数字转为字符串
  for (let i = 0; i < n.length; i++) {
    s += cnum[parseInt(n.charAt(i))];
  }
  return s;
};

class BaseFormElement {
  constructor (element) {
    if (element) {
      Object.assign(this, element);
    } else {
      this.name = 'base';
      this.res = ['', '', '', '', ''];
      this.id = Date.now();
      this.contentWidth = '100%';
      this.textAlign = 'text-left';
      this.column = 4;
      this.title = '标题';
      this.description = '';
      this.suffix = ''; // 单位
      this.placeholder = '请输入...'; // 默认输入值
      this.elementType = 'FormInput';
      this.vertical = false; // 布局方式 默认HORIZONTAL
      this.value = '';
      this.isScale = false;// 是否为量表
      this.url = ''; // 输入框自动填充 disabled 弃用
      // 验证相关
      this.required = false;
      this.rule = ''; // 验证规则，目前只支持input输入。
      this.minLength = 0;
      this.maxLength = 100;
      // datepicker
      this.initToday = false;
    }
  }

  addOption () {
    this.optionList.push(new OptionValue(null, PareIntToNumber(this.optionList.length)));
  };

  removeOption (i) {
    if (i >= 0 && i < this.optionList.length) {
      this.optionList.splice(i, 1);
    }
  };
}
class BaseFormOptionsElement extends BaseFormElement {
  constructor (ele) {
    super(ele);
    if (ele && ele.optionList) {
      const length = ele.optionList.length;
      this.optionList = [];
      for (let i = 0; i < length; i++) {
        const option = ele.optionList[i];
        this.optionList.push(new OptionValue(option));
      }
    } else {
      this.optionList = [new OptionValue({
        'key': '选项一',
        'label': '选项一',
        'value': '选项一',
        'score': '1',
        'children': [],
        'subElements': {}
      }), new OptionValue(
        {
          'key': '选项二',
          'label': '选项二',
          'value': '选项二',
          'score': '1',
          'children': [],
          'subElements': {}
        }), new OptionValue(
        {
          'key': '选项三',
          'label': '选项三',
          'score': '1',
          'value': '选项三',
          'children': [],
          'subElements': {}
        })
      ];
    }
    this.canAnalyze = true;
  }
}

class OptionValue {
  constructor (obj, i) {
    if (obj) {
      Object.assign(this, obj);
    } else {
      this.key = '选项' + (i || '');
      this.label = '选项' + (i || '');
      this.value = '选项' + (i || '');
      this.placeholder = '请选择';
      this.bgcolor = '#E4E4E4';
      this.subElement = {value: ''};
      this.userInputValue = '';
      this.userInput = false;
      this.score = 0;// 分数
      this.children = [];
    }
  }

  canUserInput () {
    this.userInput = !this.userInput;
  };

  addElement (element) {
    this.children.push(element || new OptionValue(null, this.children.length));
  };

  removeElement (i) {
    if (i >= 0 && i < this.children.length) {
      this.children.splice(i, 1);
    }
  };
}

// 量表的复选
class FormScaleCheckbox extends BaseFormOptionsElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'Checkbox';
    this.vertical = true;
    this.column = 12;
    this.isScale = true;// 是否为量表
  }
}

// 量表的单选
class FormScaleRadio extends BaseFormOptionsElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'FormRadio';
    this.vertical = true;
    this.column = 12;
    this.title = '单选';
    this.description = '单选描述';
    this.isScale = true;// 是否为量表
  }
}

class FormInput extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.title = '文本输入';
    this.name = '文本输入';
    this.elementType = 'FormInput';
    this.type = 'text';
  }
}

class FormNumber extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'FormNumber';
    this.title = '数字';
    this.name = '数字';
    this.type = 'text';
    this.canAnalyze = true;
  }
}

class FormSelect extends BaseFormOptionsElement {
  constructor (ele) {
    super(ele);
    this.title = '下拉选择';
    this.name = '下拉选择';
    this.elementType = 'FormSelect';
  }
}

class FormRadio extends BaseFormOptionsElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'FormRadio';
    this.title = '单选';
    this.name = '单选';
    this.column = 12;
  }
}

class FormCheckbox extends BaseFormOptionsElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'FormCheckbox';
    this.title = '复选';
    this.name = '复选';
    this.column = 12;
  }
}

class FormTextarea extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.title = '文本描述';
    this.name = '文本描述';
    this.elementType = 'FromInput';
  }
}

class FormAddress extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'FormAddress';
    this.name = '地址';
    this.title = '地址';
    this.canAnalyze = true;
    this.column = 12;
  }
}

class FormDialog extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'DIALOG_SELECT';
    this.elements = [];
    this.subElement = new FormCheckbox(null, this.id);
  }

  addElement (element) {
    this.elements.push(element);
  };

  removeElement (i) {
    if (i >= 0 && i < this.elements.length) {
      this.elements.splice(i, 1);
    }
  };
}

class FormDatePicker extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.title = '日期';
    this.name = '日期';
    this.elementType = 'FormDatePicker';
    this.dateType = 'date';
    this.initToday = false;
    //  默认起始日期值为 now 时为当前时间 火狐不识别endDate？
    this.startDay = '';
    this.endDay = '';
  }
}

class FormFile extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.title = '附件上传';
    this.name = '附件';
    this.elementType = 'FormFile';
    this.maxNumber = 1;
    this.type = 'select'; // or drag
    this.maxSize = 1024 * 240;
  }
}

class FormCascader extends BaseFormOptionsElement {
  constructor (ele) {
    super(ele);
    this.title = '级联选择';
    this.name = '级联';
    this.elementType = 'FormCascader';
    this.level = 1;
  }

  addLevel () {
    this.level++;
  };

  delLevel () {
    this.level--;
  };
}

class FormUpload extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.title = '图片上传';
    this.name = '图片上传';
    this.elementType = 'FormUpload';
    this.maxNumber = 1;
    this.type = 'drag'; // or drag
    this.maxSize = 1024 * 240;
  }
}

class FormDescription extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.name = '描述';
    this.title = '描述';
    this.elementType = 'FormDescription';
    this.description = '';
    this.contentText = '文本描述';
    this.index = null;
    this.classes = 'hide';
    this.type = 'textarea';
  }
}

class FormLine extends BaseFormElement {
  constructor (ele) {
    super(ele);
    BaseFormElement.apply(this, arguments);
    this.elementType = 'FormLine';
    this.title = '';
    this.name = '分割线';
    this.titleAlign = 'text-left';
    this.descriptionAlign = 'text-left';
    this.description = '';
    this.column = 12;
    this.borderStyle = 'solid';
  }
}

// 性别
class FormSex extends BaseFormOptionsElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'FormSex';
    this.title = '性别';
    this.name = '性别';
    this.canAnalyze = true;
    this.description = '';
    this.column = 4;
    this.optionList = [new OptionValue({
      'label': '男',
      'key': 'MALE',
      'value': '男'
    }), new OptionValue(
      {
        'label': '女',
        'key': 'FEMALE',
        'value': '女'
      }), new OptionValue(
      {
        'label': '未知',
        'key': '0',
        'value': '未知'
      })
    ];
  }
}

// 婚姻状况
class FormMarital extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'SELECT';
    this.title = '婚姻';
    this.column = 4;
    this.optionList = [new OptionValue(
      {
        'key': '已婚',
        'value': 'MARRIED'
      }), new OptionValue(
      {
        'key': '未婚',
        'value': 'NOT_MARRIED'
      })
    ];
  }
}

// 输入范围
class FormTextRange extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'TEXT_RANGE';
    this.column = 6;
  }
}

class FormMoudleTitle extends BaseFormElement {
  constructor (ele) {
    super(ele);
    this.elementType = 'MODULELINE';
    this.column = 12;
  }
}
class FormPage {
  constructor (index, obj) {
    if (obj) {
      Object.assign(this, obj);
      if (obj.elements) {
        this.elements = [];
        const length = obj.elements.length;
        for (let i = 0; i < length; i++) {
          let element = obj.elements[i];
          this.elements.push(new BaseFormElement(element));
        }
      }
    } else {
      this.id = Date.now();
      this.pageTitle = '页面标题';
      this.pageDesc = '';
      this.elements = [];
    }
  }

  copyElement (Model, index, currentForm) {
    const modelName = Model['elementType'];
    if (modelName) {
      let obj = new currentForm[modelName]();
      this.elements.splice(index + 1, 0, obj);
    }
  };
  addElement (model) {
    this.elements.push(model);
  };
  insertElement (index, model) {
    this.elements.splice(index, 0, model);
  };

  replaceElement (index, ele) {
    if (ele && index >= 0) {
      this.elements[index] = ele;
    }
  };
  changeLayout (i) {
    if (i === 1) {
      this.vertical = true;
    } else {
      this.vertical = false;
    }
  };
  removeElement (index) {
    if (index >= 0 && index < this.elements.length) {
      this.elements.splice(index, 1);
    }
  };
}

/*
 * 构建类数组对象--对级联的选项key和val进行深度遍历
 * option 选项内容
 * index 选项所处的级别作为key
 * result 最终结果
 * */
class ResultOption {
  constructor (obj) {
    if (obj) {
      Object.assign(this, obj);
      this.key = obj.key;
      this.label = obj.label;
      this.value = obj.value;
      this.score = obj.score;
    } else {
      throw new Error('传参不能为空！');
    }
  }
};
const depOptions = (option, result, index, parentOption) => {
  let res = new ResultOption(option);
  if (option) {
    if (!result[index]) {
      result[index] = [];
    }
    if (parentOption) {
      res['key'] = (parentOption['key'] || '') + '/' + res['key'];
      res['value'] = (parentOption['value'] || '') + '/' + res['value'];
    }
    result[index].push(res);
  }
  if (option.children && option.children.length > 0) {
    for (let i = 0; i < option.children.length; i++) {
      const opt = option.children[i];
      depOptions(opt, result, index + 1, res);
    }
  }
};
export const FormResultModel = class FormResultModel {
  constructor (ele) {
    if (ele) {
      this.id = ele.id; // id
      this.title = ele.title; // 标题
      this.value = ele.value; // 值
      this.elementType = ele.elementType; // 类型
      this.name = ele.name; // 类型名称
      this.canAnalyze = !!ele.canAnalyze;
      if (ele.optionList) {
        this.optionList = ele.optionList;
        this.options = {};
        for (let i = 0; i < this.optionList.length; i++) {
          depOptions(this.optionList[i], this.options, 0);
        }
        console.log('deps' + this.options);
      }
    } else {
      throw new Error('传参不能为空！');
    }
  }
};
export class Form {
  constructor (obj) {
    if (obj) {
      Object.assign(this, obj);
      if (obj.pages) {
        this.pages = [];
        const length = obj.pages.length;
        for (let i = 0; i < length; i++) {
          let page = obj.pages[i];
          this.pages.push(new FormPage(i, page));
        }
      }
    } else {
      this.title = '表单标题';
      this.pages = [new FormPage(0)];
    }
    this.total = 0;
    this.pageCount = this.pages.length;
    this.FormInput = FormInput;
    this.FormNumber = FormNumber;
    this.FormSelect = FormSelect;
    this.FormRadio = FormRadio;
    this.FormCheckbox = FormCheckbox;
    this.FormTextarea = FormTextarea;
    this.FormAddress = FormAddress;
    this.FormDialog = FormDialog;
    this.FormDatePicker = FormDatePicker;
    this.FormLine = FormLine;
    this.FormScaleCheckbox = FormScaleCheckbox;
    this.FormScaleRadio = FormScaleRadio;
    this.FormSex = FormSex;
    this.FormMarital = FormMarital;
    this.FormTextRange = FormTextRange;
    this.FormMoudleTitle = FormMoudleTitle;
    this.FormUpload = FormUpload;
    this.FormFile = FormFile;
    this.FormDescription = FormDescription;
    this.FormPage = FormPage;
    this.FormCascader = FormCascader;
  }

  addPage () {
    this.pages.push(new FormPage(this.pages.length));
  };

  removePage (index) {
    if (index >= 0 && index < this.pages.length) {
      this.pages.splice(index, 1);
    }
  };

  parseToResult () {
    let obj = {};
    obj['title'] = this.title;
    obj['id'] = this.id;
    obj['canA'] = this.id;
    let result = [];
    this.pages.forEach((page) => {
      page.elements.forEach((ele) => {
        result.push(new FormResultModel(ele));
      });
    });
    obj['result'] = result;
    return obj;
  };
};

export const formComponent = [{
  'title': '基本元素',
  'elements': [
    {
      'className': 'iconfont icon-wenbenshuru',
      'name': '文本框',
      'modelName': 'FormInput'
    },
    {
      'className': 'ivu-icon ivu-icon-android-radio-button-on',
      'name': '单选',
      'modelName': 'FormRadio'
    },
    {
      'className': 'ivu-icon ivu-icon-android-checkbox',
      'name': '复选',
      'modelName': 'FormCheckbox'
    },
    {
      'className': 'ivu-icon ivu-icon-android-arrow-dropdown-circle',
      'name': '下拉选择',
      'modelName': 'FormSelect'
    },
    {
      'className': 'iconfont icon-shuzi',
      'name': '数字',
      'modelName': 'FormNumber'
    },
    {
      'className': 'iconfont icon-jilianxuanze',
      'name': '多级下拉',
      'modelName': 'FormCascader'
    },
    {
      'className': 'ivu-icon ivu-icon-ios-clock-outline',
      'name': '日期',
      'modelName': 'FormDatePicker'
    },
    {
      'className': 'ivu-icon ivu-icon-ios-cloud-upload-outline',
      'name': '附件',
      'modelName': 'FormFile'
    }, {
      'className': 'ivu-icon ivu-icon-document-text',
      'name': '文本描述',
      'modelName': 'FormDescription'
    },
    {
      'className': 'ivu-icon ivu-icon-navicon',
      'name': '分割线',
      'modelName': 'FormLine'
    },
    // {
    //   'className': 'fa-dot-circle-o',
    //   'name': '分页',
    //   'modelName': 'FormPage'
    // },
    {
      'className': 'ivu-icon ivu-icon-image',
      'name': '图片上传',
      'modelName': 'FormUpload'
    },
    {
      'className': 'iconfont icon-ico-sex',
      'name': '性别',
      'modelName': 'FormSex'
    },
    {
      'className': 'iconfont icon-address',
      'name': '地址',
      'modelName': 'FormAddress'
    }]
}];
