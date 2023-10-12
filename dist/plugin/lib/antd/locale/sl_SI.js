function c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, s = { exports: {} };
(function(e) {
  function u(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = u, e.exports.__esModule = !0, e.exports.default = e.exports;
})(s);
var d = s.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var p = {
  // Options.jsx
  items_per_page: "/ strani",
  jump_to: "Pojdi na",
  jump_to_confirm: "potrdi",
  page: "",
  // Pagination.jsx
  prev_page: "Prejšnja stran",
  next_page: "Naslednja stran",
  prev_5: "Prejšnjih 5 strani",
  next_5: "Naslednjih 5 strani",
  prev_3: "Prejšnje 3 strani",
  next_3: "Naslednje 3 strani",
  page_size: "Page Size"
};
o.default = p;
var i = {}, t = {}, a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const _ = {
  placeholder: "Izberite čas"
};
a.default = _;
var f = d.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var v = f(a);
const j = {
  lang: {
    locale: "sl",
    placeholder: "Izberite datum",
    rangePlaceholder: ["Začetni datum", "Končni datum"],
    today: "Danes",
    now: "Trenutno",
    backToToday: "Nazaj na trenutni datum",
    ok: "OK",
    clear: "Počisti",
    month: "Mesec",
    year: "Leto",
    timeSelect: "Izberi čas",
    dateSelect: "Izberi datum",
    monthSelect: "Izberite mesec",
    yearSelect: "Izberite leto",
    decadeSelect: "Izberite desetletje",
    yearFormat: "YYYY",
    dateFormat: "D.M.YYYY",
    dayFormat: "D",
    dateTimeFormat: "D.M.YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: !0,
    previousMonth: "Prejšnji mesec (PageUp)",
    nextMonth: "Naslednji mesec (PageDown)",
    previousYear: "Lansko leto (Control + left)",
    nextYear: "Naslednje leto (Control + right)",
    previousDecade: "Prejšnje desetletje",
    nextDecade: "Naslednje desetletje",
    previousCentury: "Zadnje stoletje",
    nextCentury: "Naslednje stoletje"
  },
  timePickerLocale: Object.assign({}, v.default)
};
t.default = j;
var m = d.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var P = m(t);
i.default = P.default;
var n = d.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var I = n(o), b = n(i), k = n(t), S = n(a);
const g = {
  locale: "sl",
  Pagination: I.default,
  DatePicker: k.default,
  TimePicker: S.default,
  Calendar: b.default,
  Table: {
    filterTitle: "Filter",
    filterConfirm: "Filtriraj",
    filterReset: "Pobriši filter",
    selectAll: "Izberi vse na trenutni strani",
    selectInvert: "Obrni izbor na trenutni strani"
  },
  Modal: {
    okText: "V redu",
    cancelText: "Prekliči",
    justOkText: "V redu"
  },
  Popconfirm: {
    okText: "v redu",
    cancelText: "Prekliči"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Išči tukaj",
    itemUnit: "Objekt",
    itemsUnit: "Objektov"
  },
  Upload: {
    uploading: "Nalaganje...",
    removeFile: "Odstrani datoteko",
    uploadError: "Napaka pri nalaganju",
    previewFile: "Predogled datoteke",
    downloadFile: "Prenos datoteke"
  },
  Empty: {
    description: "Ni podatkov"
  }
};
l.default = g;
var M = l;
const x = /* @__PURE__ */ c(M);
export {
  x as default
};
