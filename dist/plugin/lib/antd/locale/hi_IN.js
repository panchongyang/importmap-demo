function f(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, p = { exports: {} };
(function(a) {
  function _(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = _, a.exports.__esModule = !0, a.exports.default = a.exports;
})(p);
var c = p.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var m = {
  // Options.jsx
  items_per_page: "/ पृष्ठ",
  jump_to: "इस पर चलें",
  jump_to_confirm: "पुष्टि करें",
  page: "",
  // Pagination.jsx
  prev_page: "पिछला पृष्ठ",
  next_page: "अगला पृष्ठ",
  prev_5: "पिछले 5 पृष्ठ",
  next_5: "अगले 5 पृष्ठ",
  prev_3: "पिछले 3 पृष्ठ",
  next_3: "अगले 3 पेज",
  page_size: "Page Size"
};
i.default = m;
var n = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var $ = {
  locale: "hi_IN",
  today: "आज",
  now: "अभी",
  backToToday: "आज तक",
  ok: "ठीक",
  clear: "स्पष्ट",
  month: "महीना",
  year: "साल",
  timeSelect: "समय का चयन करें",
  dateSelect: "तारीख़ चुनें",
  weekSelect: "एक सप्ताह चुनें",
  monthSelect: "एक महीना चुनें",
  yearSelect: "एक वर्ष चुनें",
  decadeSelect: "एक दशक चुनें",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "पिछला महीना (पेजअप)",
  nextMonth: "अगले महीने (पेजडाउन)",
  previousYear: "पिछले साल (Ctrl + बाएं)",
  nextYear: "अगले साल (Ctrl + दाहिना)",
  previousDecade: "पिछला दशक",
  nextDecade: "अगले दशक",
  previousCentury: "पीछ्ली शताब्दी",
  nextCentury: "अगली सदी"
}, v = $;
d.default = v;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const h = {
  placeholder: "समय का चयन करें",
  rangePlaceholder: ["आरंभिक समय", "अंत समय"]
};
t.default = h;
var s = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var b = s(d), x = s(t);
const g = {
  lang: Object.assign({
    placeholder: "तारीख़ चुनें",
    yearPlaceholder: "वर्ष चुनें",
    quarterPlaceholder: "तिमाही चुनें",
    monthPlaceholder: "महीना चुनिए",
    weekPlaceholder: "सप्ताह चुनें",
    rangePlaceholder: ["प्रारंभ तिथि", "समाप्ति तिथि"],
    rangeYearPlaceholder: ["आरंभिक वर्ष", "अंत वर्ष"],
    rangeMonthPlaceholder: ["आरंभिक महीना", "अंत महीना"],
    rangeWeekPlaceholder: ["आरंभिक सप्ताह", "अंत सप्ताह"]
  }, b.default),
  timePickerLocale: Object.assign({}, x.default)
};
l.default = g;
var y = c.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var P = y(l);
n.default = P.default;
var u = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var I = u(i), N = u(n), T = u(l), M = u(t);
const e = "${label} मान्य ${type} नहीं है", Y = {
  locale: "hi",
  Pagination: I.default,
  DatePicker: T.default,
  TimePicker: M.default,
  Calendar: N.default,
  global: {
    placeholder: "कृपया चुनें"
  },
  Table: {
    filterTitle: "सूची बंद करें",
    filterConfirm: "अच्छी तरह से",
    filterReset: "रीसेट",
    filterEmptyText: "कोई फ़िल्टर नहीं",
    emptyText: "कोई जानकारी नहीं",
    selectAll: "वर्तमान पृष्ठ का चयन करें",
    selectInvert: "वर्तमान पृष्ठ घुमाएं",
    selectNone: "सभी डेटा साफ़ करें",
    selectionAll: "सभी डेटा का चयन करें",
    sortTitle: "द्वारा क्रमबद्ध करें",
    expand: "पंक्ति का विस्तार करें",
    collapse: "पंक्ति संक्षिप्त करें",
    triggerDesc: "अवरोही क्रमित करने के लिए क्लिक करें",
    triggerAsc: "आरोही क्रमित करने के लिए क्लिक करें",
    cancelSort: "छँटाई रद्द करने के लिए क्लिक करें"
  },
  Modal: {
    okText: "अच्छी तरह से",
    cancelText: "रद्द करना",
    justOkText: "अच्छी तरह से"
  },
  Popconfirm: {
    okText: "अच्छी तरह से",
    cancelText: "रद्द करना"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "यहां खोजें",
    itemUnit: "तत्त्व",
    itemsUnit: "विषय-वस्तु",
    remove: "हटाए",
    selectCurrent: "वर्तमान पृष्ठ का चयन करें",
    removeCurrent: "वर्तमान पृष्ठ हटाएं",
    selectAll: "सभी डेटा का चयन करें",
    removeAll: "सभी डेटा हटाएं",
    selectInvert: "वर्तमान पृष्ठ को उल्टा करें"
  },
  Upload: {
    uploading: "अपलोड हो रहा...",
    removeFile: "फ़ाइल निकालें",
    uploadError: "अपलोड में त्रुटि",
    previewFile: "फ़ाइल पूर्वावलोकन",
    downloadFile: "फ़ाइल डाउनलोड करें"
  },
  Empty: {
    description: "कोई आकड़ा उपलब्ध नहीं है"
  },
  Icon: {
    icon: "आइकन"
  },
  Text: {
    edit: "संपादित करें",
    copy: "प्रतिलिपि",
    copied: "कॉपी किया गया",
    expand: "विस्तार"
  },
  PageHeader: {
    back: "वापस"
  },
  Form: {
    optional: "(ऐच्छिक)",
    defaultValidateMessages: {
      default: "${label} के लिए फील्ड सत्यापन त्रुटि",
      required: "कृपया ${label} दर्ज करें",
      enum: "${label} [${enum}] में से एक होना चाहिए",
      whitespace: "${label} एक खाली अक्षर नहीं हो सकता",
      date: {
        format: "${label} तिथि प्रारूप अमान्य है",
        parse: "${label} को तारीख में नहीं बदला जा सकता",
        invalid: "${label} एक अमान्य तिथि है"
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
        len: "${label} ${len} अक्षर का होना चाहिए",
        min: "${label} कम से कम ${min} वर्णों का होना चाहिए",
        max: "${label} अधिकतम ${max} वर्णों का होना चाहिए",
        range: "${label} ${min}-${max} वर्णों के बीच होना चाहिए"
      },
      number: {
        len: "${label} ${len} के बराबर होना चाहिए",
        min: "${label} कम से कम ${min} होना चाहिए",
        max: "${label} अधिकतम ${max} होना चाहिए",
        range: "${label} ${min}-${max} के बीच होना चाहिए"
      },
      array: {
        len: "${len} ${label} होना चाहिए",
        min: "कम से कम ${min} ${label}",
        max: "ज्यादा से ज्यादा ${max} ${label}",
        range: "${label} की राशि ${min}-${max} के बीच होनी चाहिए"
      },
      pattern: {
        mismatch: "${label} ${pattern} पैटर्न से मेल नहीं खाता"
      }
    }
  },
  Image: {
    preview: "पूर्वावलोकन"
  }
};
o.default = Y;
var D = o;
const k = /* @__PURE__ */ f(D);
export {
  k as default
};
