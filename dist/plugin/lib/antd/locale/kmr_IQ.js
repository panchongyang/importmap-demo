function s(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, p = { exports: {} };
(function(e) {
  function f(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = f, e.exports.__esModule = !0, e.exports.default = e.exports;
})(p);
var d = p.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var c = {
  // Options.jsx
  items_per_page: "/ rûpel",
  jump_to: "Biçe",
  jump_to_confirm: "piştrast bike",
  page: "",
  // Pagination.jsx
  prev_page: "Rûpelê Pêş",
  next_page: "Rûpelê Paş",
  prev_5: "5 Rûpelên Pêş",
  next_5: "5 Rûpelên Paş",
  prev_3: "3 Rûpelên Pêş",
  next_3: "3 Rûpelên Paş",
  page_size: "Page Size"
};
o.default = c;
var i = {}, a = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var m = {
  locale: "ku",
  today: "Îro",
  now: "Niha",
  backToToday: "Vegere îro",
  ok: "Temam",
  clear: "Paqij bike",
  month: "Meh",
  year: "Sal",
  timeSelect: "Demê hilbijêre",
  dateSelect: "Dîrok hilbijêre",
  monthSelect: "Meh hilbijêre",
  yearSelect: "Sal hilbijêre",
  decadeSelect: "Dehsal hilbijêre",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Meha peş (PageUp))",
  nextMonth: "Meha paş (PageDown)",
  previousYear: "Sala peş (Control + şep)",
  nextYear: "Sala paş (Control + rast)",
  previousDecade: "Dehsalen peş",
  nextDecade: "Dehsalen paş",
  previousCentury: "Sedsalen peş",
  nextCentury: "Sedsalen paş"
}, v = m;
u.default = v;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const k = {
  placeholder: "Demê hilbijêre"
};
r.default = k;
var _ = d.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var h = _(u), P = _(r);
const b = {
  lang: Object.assign({
    placeholder: "Dîrok hilbijêre",
    rangePlaceholder: ["Dîroka destpêkê", "Dîroka dawîn"]
  }, h.default),
  timePickerLocale: Object.assign({}, P.default)
};
a.default = b;
var D = d.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var j = D(a);
i.default = j.default;
var n = d.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var g = n(o), M = n(i), x = n(a), y = n(r);
const T = {
  locale: "ku",
  Pagination: g.default,
  DatePicker: x.default,
  TimePicker: y.default,
  Calendar: M.default,
  Table: {
    filterTitle: "Menuê peldanka",
    filterConfirm: "Temam",
    filterReset: "Jê bibe",
    selectAll: "Hemî hilbijêre",
    selectInvert: "Hilbijartinan veguhere"
  },
  Modal: {
    okText: "Temam",
    cancelText: "Betal ke",
    justOkText: "Temam"
  },
  Popconfirm: {
    okText: "Temam",
    cancelText: "Betal ke"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Lêgerîn",
    itemUnit: "tişt",
    itemsUnit: "tişt"
  },
  Upload: {
    uploading: "Bardike...",
    removeFile: "Pelê rabike",
    uploadError: "Xeta barkirine",
    previewFile: "Pelê pêşbibîne",
    downloadFile: "Pelê dakêşin"
  },
  Empty: {
    description: "Agahî tune"
  }
};
l.default = T;
var I = l;
const Q = /* @__PURE__ */ s(I);
export {
  Q as default
};
