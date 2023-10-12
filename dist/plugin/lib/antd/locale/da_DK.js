function c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, s = { exports: {} };
(function(e) {
  function p(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  e.exports = p, e.exports.__esModule = !0, e.exports.default = e.exports;
})(s);
var u = s.exports, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = {
  // Options.jsx
  items_per_page: "/ side",
  jump_to: "Gå til",
  jump_to_confirm: "bekræft",
  page: "Side",
  // Pagination.jsx
  prev_page: "Forrige Side",
  next_page: "Næste Side",
  prev_5: "Forrige 5 Sider",
  next_5: "Næste 5 Sider",
  prev_3: "Forrige 3 Sider",
  next_3: "Næste 3 Sider",
  page_size: "sidestørrelse"
};
d.default = _;
var o = {}, t = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var v = {
  locale: "da_DK",
  today: "I dag",
  now: "Nu",
  backToToday: "Gå til i dag",
  ok: "OK",
  clear: "Ryd",
  month: "Måned",
  year: "År",
  timeSelect: "Vælg tidspunkt",
  dateSelect: "Vælg dato",
  monthSelect: "Vælg måned",
  yearSelect: "Vælg år",
  decadeSelect: "Vælg årti",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Forrige måned (Page Up)",
  nextMonth: "Næste måned (Page Down)",
  previousYear: "Forrige år (Ctrl-venstre pil)",
  nextYear: "Næste år (Ctrl-højre pil)",
  previousDecade: "Forrige årti",
  nextDecade: "Næste årti",
  previousCentury: "Forrige århundrede",
  nextCentury: "Næste århundrede"
}, g = v;
i.default = g;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const D = {
  placeholder: "Vælg tid",
  rangePlaceholder: ["Starttidspunkt", "Sluttidspunkt"]
};
r.default = D;
var f = u.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var m = f(i), K = f(r);
const y = {
  lang: Object.assign({
    placeholder: "Vælg dato",
    rangePlaceholder: ["Startdato", "Slutdato"]
  }, m.default),
  timePickerLocale: Object.assign({}, K.default)
};
t.default = y;
var x = u.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var F = x(t);
o.default = F.default;
var n = u.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var k = n(d), S = n(o), h = n(t), P = n(r);
const O = {
  locale: "da",
  DatePicker: h.default,
  TimePicker: P.default,
  Calendar: S.default,
  Pagination: k.default,
  Table: {
    filterTitle: "Filtermenu",
    filterConfirm: "OK",
    filterReset: "Nulstil",
    filterEmptyText: "Ingen filtre",
    emptyText: "Ingen data",
    selectAll: "Vælg alle",
    selectNone: "Ryd alt data",
    selectInvert: "Invertér valg",
    selectionAll: "Vælg alt data",
    sortTitle: "Sortér",
    expand: "Udvid række",
    collapse: "Flet række",
    triggerDesc: "Klik for at sortere faldende",
    triggerAsc: "Klik for at sortere stigende",
    cancelSort: "Klik for at annullere sortering"
  },
  Modal: {
    okText: "OK",
    cancelText: "Afbryd",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Afbryd"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Søg her",
    itemUnit: "element",
    itemsUnit: "elementer"
  },
  Upload: {
    uploading: "Uploader...",
    removeFile: "Fjern fil",
    uploadError: "Fejl ved upload",
    previewFile: "Forhåndsvisning",
    downloadFile: "Download fil"
  },
  Empty: {
    description: "Ingen data"
  }
};
l.default = O;
var M = l;
const T = /* @__PURE__ */ c(M);
export {
  T as default
};
