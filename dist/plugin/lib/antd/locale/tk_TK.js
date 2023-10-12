function c(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var n = {}, m = { exports: {} };
(function(a) {
  function p(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = p, a.exports.__esModule = !0, a.exports.default = a.exports;
})(m);
var s = m.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var g = {
  // Options.jsx
  items_per_page: "/ sahypa",
  jump_to: "Git",
  jump_to_confirm: "tassykla",
  page: "Sahypa",
  // Pagination.jsx
  prev_page: "Öňki sahypa",
  next_page: "Soňky sahypa",
  prev_5: "Öňki 5 sahypa",
  next_5: "Soňky 5 sahypa",
  prev_3: "Öňki 3 sahypa",
  next_3: "Soňky 3 sahypa",
  page_size: "Sahypa sany"
};
o.default = g;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var k = {
  locale: "tk_TK",
  today: "Şugün",
  now: "Şuwagt",
  backToToday: "Şugüne gaýt",
  ok: "Bolýar",
  clear: "Arassala",
  month: "Aý",
  year: "Ýyl",
  timeSelect: "Wagt saýla",
  dateSelect: "Gün saýla",
  monthSelect: "Aý saýla",
  yearSelect: "Ýyl saýla",
  decadeSelect: "On ýyllygy saýla",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Öňki aý (PageUp)",
  nextMonth: "Soňky aý (PageDown)",
  previousYear: "Öňki ýyl (Control + çep)",
  nextYear: "Soňky ýyl (Control + sag)",
  previousDecade: "Öňki on ýyl",
  nextDecade: "Soňky on ýyl",
  previousCentury: "Öňki asyr",
  nextCentury: "Soňky asyr"
}, f = k;
d.default = f;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const _ = {
  placeholder: "Wagty saýlaň",
  rangePlaceholder: ["Başlanýan wagty", "Gutarýan wagty"]
};
t.default = _;
var u = s.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var b = u(d), $ = u(t);
const v = {
  lang: Object.assign({
    placeholder: "Wagt saýlaň",
    rangePlaceholder: ["Başlanýan wagty", "Gutarýan wagty"],
    yearPlaceholder: "Ýyl saýlaň",
    quarterPlaceholder: "Çärýek saýlaň",
    monthPlaceholder: "Aý saýlaň",
    weekPlaceholder: "Hepde saýlaň",
    rangeYearPlaceholder: ["Başlanýan ýyly", "Gutarýan ýyly"],
    rangeQuarterPlaceholder: ["Başlanýan çärýegi", "Gutarýan çärýegi"],
    rangeMonthPlaceholder: ["Başlanýan aýy", "Gutarýan aýy"],
    rangeWeekPlaceholder: ["Başlanýan hepdesi", "Gutarýan hepdesi"]
  }, b.default),
  timePickerLocale: Object.assign({}, $.default)
};
l.default = v;
var h = s.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var T = h(l);
i.default = T.default;
var y = s.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var x = y(o), P = y(i), w = y(l), M = y(t);
const e = "${label} ${type} görnüşinde däl", S = {
  locale: "tk",
  Pagination: x.default,
  DatePicker: w.default,
  TimePicker: M.default,
  Calendar: P.default,
  global: {
    placeholder: "Saýlaň"
  },
  Table: {
    filterTitle: "Filter",
    filterConfirm: "Bolýar",
    filterReset: "Arassala",
    filterEmptyText: "Filtersiz",
    emptyText: "Maglumat ýok",
    selectAll: "Ählisini saýla",
    selectInvert: "Tersini saýlaň",
    selectNone: "Ähli maglumatlary arassala",
    selectionAll: "Ähli maglumatlary saýla",
    sortTitle: "Tertiple",
    expand: "Setirleri aç",
    collapse: "Setirleri ýygna",
    triggerDesc: "Kemelýän tertipde tertiple",
    triggerAsc: "Artýan tertipde tertiple",
    cancelSort: "Tertipleri arassala"
  },
  Modal: {
    okText: "Bolýar",
    cancelText: "Ýatyr",
    justOkText: "Bolýar"
  },
  Popconfirm: {
    okText: "Bolýar",
    cancelText: "Ýatyr"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Gözle",
    itemUnit: "elem.",
    itemsUnit: "elem.",
    remove: "Poz",
    selectAll: "Ähli maglumatlary saýla",
    selectCurrent: "Şu sahypany saýlaň",
    selectInvert: "Ters tertipde görkez",
    removeAll: "Ähli maglumatlary poz",
    removeCurrent: "Şu sahypany poz"
  },
  Upload: {
    uploading: "Ugradylýar...",
    removeFile: "Faýly poz",
    uploadError: "Ugratmakda näsazlyk ýüze çykdy",
    previewFile: "Faýly görmek",
    downloadFile: "Faýly ýükle"
  },
  Empty: {
    description: "Maglumat ýok"
  },
  Icon: {
    icon: "nyşan"
  },
  Text: {
    edit: "Üýtgetmek",
    copy: "Göçürmek",
    copied: "Göçürildi",
    expand: "Ýygnamak"
  },
  PageHeader: {
    back: "Yza"
  },
  Form: {
    defaultValidateMessages: {
      default: "${label} meýdany barlanmady",
      required: "${label} meýdany giriziň",
      enum: "${label} meýdan şulardan biri bolmaly: [${enum}]",
      whitespace: "${label} meýdany boş bolup bilmeýär",
      date: {
        format: "${label} ýalňyş wagt formaty",
        parse: "${label} meýdany wagta çalşyp bolmady",
        invalid: "${label} meýdany nädogry wagt"
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
        len: "${label} meýdany ${len} simwol bolmaly",
        min: "${label} meýdany ${min} simwoldan az bolmaly däl",
        max: "${label} meýdany ${max} simwoldan köp bolmaly däl",
        range: "${label} meýdany ${min}-${max} simwol aralygynda bolmaly"
      },
      number: {
        len: "${label} meýdan ${len} simwol bolmaly",
        min: "${label} meýdany ${min} simwoldan az bolmaly däl",
        max: "${label} meýdany ${max} simwoldan köp bolmaly däl"
      },
      array: {
        len: "${label} meýdanynyň elementleriniň sany ${len} deň bolmaly",
        min: "${label} meýdanynyň elementleriniň sany ${min} az bolmaly däl",
        max: "${label} meýdanynyň elementleriniň sany ${max} köp bolmaly däl",
        range: "${label} meýdanynyň elementleriniň sany ${min} we ${max} aralykda bolmaly"
      },
      pattern: {
        mismatch: "${label} meýdany ${pattern} şablony bilen gabat gelmeýär"
      }
    }
  },
  Image: {
    preview: "Öňünden görmek"
  }
};
n.default = S;
var K = n;
const Y = /* @__PURE__ */ c(K);
export {
  Y as default
};
