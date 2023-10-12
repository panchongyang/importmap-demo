function m(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, s = { exports: {} };
(function(a) {
  function f(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = f, a.exports.__esModule = !0, a.exports.default = a.exports;
})(s);
var c = s.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "條/頁",
  jump_to: "跳至",
  jump_to_confirm: "確定",
  page: "頁",
  // Pagination.jsx
  prev_page: "上一頁",
  next_page: "下一頁",
  prev_5: "向前 5 頁",
  next_5: "向後 5 頁",
  prev_3: "向前 3 頁",
  next_3: "向後 3 頁",
  page_size: "頁碼"
};
n.default = $;
var i = {}, l = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var v = {
  locale: "zh_TW",
  today: "今天",
  now: "此刻",
  backToToday: "返回今天",
  ok: "確定",
  timeSelect: "選擇時間",
  dateSelect: "選擇日期",
  weekSelect: "選擇周",
  clear: "清除",
  month: "月",
  year: "年",
  previousMonth: "上個月 (翻頁上鍵)",
  nextMonth: "下個月 (翻頁下鍵)",
  monthSelect: "選擇月份",
  yearSelect: "選擇年份",
  decadeSelect: "選擇年代",
  yearFormat: "YYYY年",
  dayFormat: "D日",
  dateFormat: "YYYY年M月D日",
  dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
  previousYear: "上一年 (Control鍵加左方向鍵)",
  nextYear: "下一年 (Control鍵加右方向鍵)",
  previousDecade: "上一年代",
  nextDecade: "下一年代",
  previousCentury: "上一世紀",
  nextCentury: "下一世紀"
}, h = v;
u.default = h;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const b = {
  placeholder: "請選擇時間"
};
t.default = b;
var p = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var x = p(u), g = p(t);
const _ = {
  lang: Object.assign({
    placeholder: "請選擇日期",
    yearPlaceholder: "請選擇年份",
    quarterPlaceholder: "請選擇季度",
    monthPlaceholder: "請選擇月份",
    weekPlaceholder: "請選擇周",
    rangePlaceholder: ["開始日期", "結束日期"],
    rangeYearPlaceholder: ["開始年份", "結束年份"],
    rangeMonthPlaceholder: ["開始月份", "結束月份"],
    rangeQuarterPlaceholder: ["開始季度", "結束季度"],
    rangeWeekPlaceholder: ["開始周", "結束周"]
  }, x.default),
  timePickerLocale: Object.assign({}, g.default)
};
_.lang.ok = "確 定";
l.default = _;
var T = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = T(l);
i.default = y.default;
var d = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = d(n), z = d(i), M = d(l), Y = d(t);
const e = "${label}不是一個有效的${type}", k = {
  locale: "zh-hk",
  Pagination: P.default,
  DatePicker: M.default,
  TimePicker: Y.default,
  Calendar: z.default,
  global: {
    placeholder: "請選擇"
  },
  Table: {
    filterTitle: "篩選器",
    filterConfirm: "確定",
    filterReset: "重置",
    filterEmptyText: "無篩選項",
    selectAll: "全部選取",
    selectInvert: "反向選取",
    selectNone: "清空所有",
    selectionAll: "全選所有",
    sortTitle: "排序",
    expand: "展開行",
    collapse: "關閉行",
    triggerDesc: "點擊降序",
    triggerAsc: "點擊升序",
    cancelSort: "取消排序"
  },
  Modal: {
    okText: "確定",
    cancelText: "取消",
    justOkText: "知道了"
  },
  Tour: {
    Next: "下一步",
    Previous: "上一步",
    Finish: "結束導覽"
  },
  Popconfirm: {
    okText: "確定",
    cancelText: "取消"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "搜尋資料",
    itemUnit: "項目",
    itemsUnit: "項目",
    remove: "刪除",
    selectCurrent: "全選當頁",
    removeCurrent: "刪除當頁",
    selectAll: "全選所有",
    removeAll: "刪除全部",
    selectInvert: "反選當頁"
  },
  Upload: {
    uploading: "正在上傳...",
    removeFile: "刪除檔案",
    uploadError: "上傳失敗",
    previewFile: "檔案預覽",
    downloadFile: "下载文件"
  },
  Empty: {
    description: "無此資料"
  },
  Icon: {
    icon: "圖標"
  },
  Text: {
    edit: "編輯",
    copy: "複製",
    copied: "複製成功",
    expand: "展開"
  },
  PageHeader: {
    back: "返回"
  },
  Form: {
    defaultValidateMessages: {
      default: "字段驗證錯誤${label}",
      required: "請輸入${label}",
      enum: "${label}必須是其中一個[${enum}]",
      whitespace: "${label}不能為空字符",
      date: {
        format: "${label}日期格式無效",
        parse: "${label}不能轉換為日期",
        invalid: "${label}是一個無效日期"
      },
      types: {
        string: e,
        method: e,
        array: e,
        object: e,
        number: e,
        date: e,
        boolean: e,
        integer: e,
        float: e,
        regexp: e,
        email: e,
        url: e,
        hex: e
      },
      string: {
        len: "${label}須為${len}個字符",
        min: "${label}最少${min}個字符",
        max: "${label}最多${max}個字符",
        range: "${label}須在${min}-${max}字符之間"
      },
      number: {
        len: "${label}必須等於${len}",
        min: "${label}最小值為${min}",
        max: "${label}最大值為${max}",
        range: "${label}須在${min}-${max}之間"
      },
      array: {
        len: "須為${len}個${label}",
        min: "最少${min}個${label}",
        max: "最多${max}個${label}",
        range: "${label}數量須在${min}-${max}之間"
      },
      pattern: {
        mismatch: "${label}與模式不匹配${pattern}"
      }
    }
  },
  Image: {
    preview: "預覽"
  }
};
o.default = k;
var D = o;
const W = /* @__PURE__ */ m(D);
export {
  W as default
};
