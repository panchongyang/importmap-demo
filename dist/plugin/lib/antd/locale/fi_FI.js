function p(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, d = { exports: {} };
(function(e) {
  function f(i) {
    return i && i.__esModule ? i : {
      default: i
    };
  }
  e.exports = f, e.exports.__esModule = !0, e.exports.default = e.exports;
})(d);
var n = d.exports, r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var _ = {
  // Options.jsx
  items_per_page: "/ sivu",
  jump_to: "Mene",
  jump_to_confirm: "Potvrdite",
  page: "Sivu",
  // Pagination.jsx
  prev_page: "Edellinen sivu",
  next_page: "Seuraava sivu",
  prev_5: "Edelliset 5 sivua",
  next_5: "Seuraavat 5 sivua",
  prev_3: "Edelliset 3 sivua",
  next_3: "Seuraavat 3 sivua",
  page_size: "Page Size"
};
r.default = _;
var o = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var c = {
  locale: "fi_FI",
  today: "Tänään",
  now: "Nyt",
  backToToday: "Tämä päivä",
  ok: "OK",
  clear: "Tyhjennä",
  month: "Kuukausi",
  year: "Vuosi",
  timeSelect: "Valise aika",
  dateSelect: "Valitse päivä",
  monthSelect: "Valitse kuukausi",
  yearSelect: "Valitse vuosi",
  decadeSelect: "Valitse vuosikymmen",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Edellinen kuukausi (PageUp)",
  nextMonth: "Seuraava kuukausi (PageDown)",
  previousYear: "Edellinen vuosi (Control + left)",
  nextYear: "Seuraava vuosi (Control + right)",
  previousDecade: "Edellinen vuosikymmen",
  nextDecade: "Seuraava vuosikymmen",
  previousCentury: "Edellinen vuosisata",
  nextCentury: "Seuraava vuosisata"
}, k = c;
u.default = k;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const m = {
  placeholder: "Valitse aika"
};
a.default = m;
var v = n.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var y = v(u), F = v(a);
const P = {
  lang: Object.assign({
    placeholder: "Valitse päivä",
    rangePlaceholder: ["Alkamispäivä", "Päättymispäivä"]
  }, y.default),
  timePickerLocale: Object.assign({}, F.default)
};
t.default = P;
var g = n.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var h = g(t);
o.default = h.default;
var s = n.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var x = s(r), T = s(o), I = s(t), j = s(a);
const M = {
  locale: "fi",
  Pagination: x.default,
  DatePicker: I.default,
  TimePicker: j.default,
  Calendar: T.default,
  Table: {
    filterTitle: "Suodatus valikko",
    filterConfirm: "OK",
    filterReset: "Tyhjennä",
    selectAll: "Valitse kaikki",
    selectInvert: "Valitse päinvastoin",
    sortTitle: "Lajittele",
    triggerDesc: "Lajittele laskevasti",
    triggerAsc: "Lajittele nousevasti",
    cancelSort: "Peruuta lajittelu"
  },
  Modal: {
    okText: "OK",
    cancelText: "Peruuta",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Peruuta"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Etsi täältä",
    itemUnit: "kohde",
    itemsUnit: "kohdetta"
  },
  Upload: {
    uploading: "Lähetetään...",
    removeFile: "Poista tiedosto",
    uploadError: "Virhe lähetyksessä",
    previewFile: "Esikatsele tiedostoa",
    downloadFile: "Lataa tiedosto"
  },
  Empty: {
    description: "Ei kohteita"
  },
  Text: {
    edit: "Muokkaa",
    copy: "Kopioi",
    copied: "Kopioitu",
    expand: "Näytä lisää"
  }
};
l.default = M;
var O = l;
const S = /* @__PURE__ */ p(O);
export {
  S as default
};
