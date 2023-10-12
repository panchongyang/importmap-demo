function _(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var r = {}, n = { exports: {} };
(function(e) {
  function v(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  e.exports = v, e.exports.__esModule = !0, e.exports.default = e.exports;
})(n);
var s = n.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var f = {
  // Options.jsx
  items_per_page: "/ lappuse",
  jump_to: "iet uz",
  jump_to_confirm: "apstiprināt",
  page: "",
  // Pagination.jsx
  prev_page: "Iepriekšējā lapa",
  next_page: "Nākamā lapaspuse",
  prev_5: "Iepriekšējās 5 lapas",
  next_5: "Nākamās 5 lapas",
  prev_3: "Iepriekšējās 3 lapas",
  next_3: "Nākamās 3 lapas",
  page_size: "Page Size"
};
i.default = f;
var u = {}, a = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var c = {
  locale: "lv_LV",
  today: "Šodien",
  now: "Tagad",
  backToToday: "Atpakaļ pie šodienas",
  ok: "OK",
  clear: "Skaidrs",
  month: "Mēnesis",
  year: "Gads",
  timeSelect: "Izvēlieties laiku",
  dateSelect: "Izvēlieties datumu",
  monthSelect: "Izvēlieties mēnesi",
  yearSelect: "Izvēlieties gadu",
  decadeSelect: "Izvēlieties desmit gadus",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Iepriekšējais mēnesis (PageUp)",
  nextMonth: "Nākammēnes (PageDown)",
  previousYear: "Pagājušais gads (Control + left)",
  nextYear: "Nākamgad (Control + right)",
  previousDecade: "Pēdējā desmitgadē",
  nextDecade: "Nākamā desmitgade",
  previousCentury: "Pagājušajā gadsimtā",
  nextCentury: "Nākamajā gadsimtā"
}, m = c;
o.default = m;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const g = {
  placeholder: "Izvēlieties laiku"
};
t.default = g;
var p = s.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var k = p(o), j = p(t);
const P = {
  lang: Object.assign({
    placeholder: "Izvēlieties datumu",
    rangePlaceholder: ["Sākuma datums", "Beigu datums"]
  }, k.default),
  timePickerLocale: Object.assign({}, j.default)
};
a.default = P;
var L = s.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var x = L(a);
u.default = x.default;
var d = s.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var y = d(i), V = d(u), M = d(a), O = d(t);
const Y = {
  locale: "lv",
  Pagination: y.default,
  DatePicker: M.default,
  TimePicker: O.default,
  Calendar: V.default,
  Table: {
    filterTitle: "Filtrēšanas izvēlne",
    filterConfirm: "OK",
    filterReset: "Atiestatīt",
    selectAll: "Atlasiet pašreizējo lapu",
    selectInvert: "Pārvērst pašreizējo lapu"
  },
  Modal: {
    okText: "OK",
    cancelText: "Atcelt",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Atcelt"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Meklēt šeit",
    itemUnit: "vienumu",
    itemsUnit: "vienumus"
  },
  Upload: {
    uploading: "Augšupielāde...",
    removeFile: "Noņemt failu",
    uploadError: "Augšupielādes kļūda",
    previewFile: "Priekšskatiet failu",
    downloadFile: "Lejupielādēt failu"
  },
  Empty: {
    description: "Nav datu"
  }
};
r.default = Y;
var $ = r;
const D = /* @__PURE__ */ _($);
export {
  D as default
};
