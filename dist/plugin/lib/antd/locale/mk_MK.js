function p(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, _ = { exports: {} };
(function(e) {
  function f(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = f, e.exports.__esModule = !0, e.exports.default = e.exports;
})(_);
var n = _.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var s = {
  // Options.jsx
  items_per_page: "/ стр",
  jump_to: "Оди на",
  jump_to_confirm: "потврди",
  page: "",
  // Pagination.jsx
  prev_page: "Претходна страница",
  next_page: "Наредна страница",
  prev_5: "Претходни 5 страници",
  next_5: "Наредни 5 страници",
  prev_3: "Претходни 3 страници",
  next_3: "Наредни 3 страници",
  page_size: "Page Size"
};
o.default = s;
var u = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var v = {
  locale: "mk_MK",
  today: "Денес",
  now: "Сега",
  backToToday: "Назад до денес",
  ok: "ОК",
  clear: "Избриши",
  month: "Месец",
  year: "Година",
  timeSelect: "Избери време",
  dateSelect: "Избери датум",
  monthSelect: "Избери месец",
  yearSelect: "Избери година",
  decadeSelect: "Избери деценија",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Претходен месец (PageUp)",
  nextMonth: "Нареден месец (PageDown)",
  previousYear: "Претходна година (Control + left)",
  nextYear: "Наредна година (Control + right)",
  previousDecade: "Претходна деценија",
  nextDecade: "Наредна деценија",
  previousCentury: "Претходен век",
  nextCentury: "Нареден век"
}, m = v;
d.default = m;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const M = {
  placeholder: "Избери време"
};
a.default = M;
var c = n.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var k = c(d), x = c(a);
const g = {
  lang: Object.assign({
    placeholder: "Избери датум",
    rangePlaceholder: ["Од датум", "До датум"]
  }, k.default),
  timePickerLocale: Object.assign({}, x.default)
};
t.default = g;
var y = n.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var P = y(t);
u.default = P.default;
var i = n.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var K = i(o), Y = i(u), $ = i(t), D = i(a);
const h = {
  locale: "mk",
  Pagination: K.default,
  DatePicker: $.default,
  TimePicker: D.default,
  Calendar: Y.default,
  global: {
    placeholder: "Ве молиме означете"
  },
  Table: {
    filterTitle: "Мени за филтрирање",
    filterConfirm: "ОК",
    filterReset: "Избриши",
    selectAll: "Одбери страница",
    selectInvert: "Инвертирај страница"
  },
  Modal: {
    okText: "ОК",
    cancelText: "Откажи",
    justOkText: "ОК"
  },
  Popconfirm: {
    okText: "ОК",
    cancelText: "Откажи"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Пребарај тука",
    itemUnit: "предмет",
    itemsUnit: "предмети"
  },
  Upload: {
    uploading: "Се прикачува...",
    removeFile: "Избриши фајл",
    uploadError: "Грешка при прикачување",
    previewFile: "Прикажи фајл",
    downloadFile: "Преземи фајл"
  },
  Empty: {
    description: "Нема податоци"
  },
  Icon: {
    icon: "Икона"
  },
  Text: {
    edit: "Уреди",
    copy: "Копирај",
    copied: "Копирано",
    expand: "Зголеми"
  },
  PageHeader: {
    back: "Назад"
  }
};
l.default = h;
var T = l;
const O = /* @__PURE__ */ p(T);
export {
  O as default
};
