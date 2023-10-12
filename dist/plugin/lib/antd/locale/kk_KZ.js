function _(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, p = { exports: {} };
(function(a) {
  function f(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = f, a.exports.__esModule = !0, a.exports.default = a.exports;
})(p);
var c = p.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var m = {
  // Options.jsx
  items_per_page: "/ бет",
  jump_to: "Секіру",
  jump_to_confirm: "Растау",
  page: "",
  // Pagination.jsx
  prev_page: "Артқа",
  next_page: "Алға",
  prev_5: "Алдыңғы 5",
  next_5: "Келесі 5",
  prev_3: "Алдыңғы 3",
  next_3: "Келесі 3",
  page_size: "Page Size"
};
n.default = m;
var d = {}, l = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var $ = {
  locale: "kk_KZ",
  today: "Бүгін",
  now: "Қазір",
  backToToday: "Ағымдағы күн",
  ok: "Таңдау",
  clear: "Таза",
  month: "Ай",
  year: "Жыл",
  timeSelect: "Уақытты таңдау",
  dateSelect: "Күнді таңдау",
  monthSelect: "Айды таңдаңыз",
  yearSelect: "Жылды таңдаңыз",
  decadeSelect: "Онжылды таңдаңыз",
  yearFormat: "YYYY",
  dateFormat: "D-M-YYYY",
  dayFormat: "D",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Алдыңғы ай (PageUp)",
  nextMonth: "Келесі ай (PageDown)",
  previousYear: "Алдыңғы жыл (Control + left)",
  nextYear: "Келесі жыл (Control + right)",
  previousDecade: "Алдыңғы онжылдық",
  nextDecade: "Келесі онжылдық",
  previousCentury: "Алдыңғы ғасыр",
  nextCentury: "Келесі ғасыр"
}, v = $;
i.default = v;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const k = {
  placeholder: "Уақытты таңдаңыз",
  rangePlaceholder: ["Бастау уақыты", "Аяқталу уақыты"]
};
t.default = k;
var s = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var b = s(i), g = s(t);
const x = {
  lang: Object.assign({
    placeholder: "Күнді таңдаңыз",
    yearPlaceholder: "Жылды таңдаңыз",
    quarterPlaceholder: "Тоқсанды таңдаңыз",
    monthPlaceholder: "Айды таңдаңыз",
    weekPlaceholder: "Аптаны таңдаңыз",
    rangePlaceholder: ["Бастау күні", "Аяқталу күні"],
    rangeYearPlaceholder: ["Бастау жылы", "Аяқталу жылы"],
    rangeMonthPlaceholder: ["Бастау айы", "Аяқталу айы"],
    rangeWeekPlaceholder: ["Бастау апта", "Аяқталу апта"]
  }, b.default),
  timePickerLocale: Object.assign({}, g.default)
};
l.default = x;
var h = c.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var y = h(l);
d.default = y.default;
var u = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = u(n), K = u(d), T = u(l), M = u(t);
const e = "${label} ${type} типі емес", Y = {
  locale: "kk",
  Pagination: P.default,
  DatePicker: T.default,
  TimePicker: M.default,
  Calendar: K.default,
  global: {
    placeholder: "Таңдаңыз"
  },
  Table: {
    filterTitle: "Фильтр",
    filterConfirm: "OK",
    filterReset: "Тазарту",
    filterEmptyText: "Фильтр жоқ",
    emptyText: "Деректер жоқ",
    selectAll: "Барлығын таңдау",
    selectInvert: "Таңдауды төңкеру",
    selectionAll: "Барлық деректерді таңдаңыз",
    sortTitle: "Сұрыптау",
    expand: "Жолды жазу",
    collapse: "Жолды бүктеу",
    triggerDesc: "Төмендеуді сұрыптау үшін басыңыз",
    triggerAsc: "Өсу ретімен сұрыптау үшін басыңыз",
    cancelSort: "Сұрыптаудан бас тарту үшін басыңыз"
  },
  Modal: {
    okText: "Жарайды",
    cancelText: "Болдырмау",
    justOkText: "Жарайды"
  },
  Popconfirm: {
    okText: "Жарайды",
    cancelText: "Болдырмау"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Іздеу",
    itemUnit: "элемент.",
    itemsUnit: "элемент.",
    remove: "Жою",
    selectAll: "Барлық деректерді таңдау",
    selectCurrent: "Ағымдағы бетті таңдау",
    selectInvert: "Кері тәртіпте көрсету",
    removeAll: "Барлық деректерді жою",
    removeCurrent: "Ағымдағы парақты өшіру"
  },
  Upload: {
    uploading: "Жүктеу...",
    removeFile: "Файлды жою",
    uploadError: "Жүктеу кезінде қате пайда болды",
    previewFile: "Файлды алдын ала қарау",
    downloadFile: "Файлды жүктеу"
  },
  Empty: {
    description: "Деректер жоқ"
  },
  Icon: {
    icon: "белгішесі"
  },
  Text: {
    edit: "Өңдеу",
    copy: "Көшіру",
    copied: "Көшірілді",
    expand: "Жазу"
  },
  PageHeader: {
    back: "Артқа"
  },
  Form: {
    defaultValidateMessages: {
      default: "${label} өрісін тексеру қателігі",
      required: "${label} енгізіңіз",
      enum: "${label} [${enum}] қатарынан болуы керек",
      whitespace: "${label} бос болмауы керек",
      date: {
        format: "${label} жарамды күн форматы емес",
        parse: "${label} күнге түрлендірілмейді",
        invalid: "${label} жарамды күн емес"
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
        len: "${label} ${len} таңбадан тұруы керек",
        min: "${label} ${min} таңбадан үлкен немесе оған тең болуы керек",
        max: "${label} ${max} таңбадан кем немесе оған тең болуы керек",
        range: "${label} ұзындығы ${min}-${max} таңба аралығында болуы керек"
      },
      number: {
        len: "${label} ${len} тең болуы керек",
        min: "${label} ${min} мәнінен үлкен немесе оған тең болуы керек",
        max: "${label} ${max} мәнінен аз немесе оған тең болуы керек"
      },
      array: {
        len: "${label} элементтерінің саны ${len} тең болуы керек",
        min: "${label} элементтерінің саны ${min} көп немесе оған тең болуы керек",
        max: "${label} элементтерінің саны ${max} аз немесе оған тең болуы керек",
        range: "${label} элементтерінің саны ${min} - ${max} аралығында болуы керек"
      },
      pattern: {
        mismatch: "${label} ${pattern} мен сәйкес келмейді"
      }
    }
  }
};
o.default = Y;
var Z = o;
const D = /* @__PURE__ */ _(Z);
export {
  D as default
};
