function p(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, n = { exports: {} };
(function(e) {
  function _(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = _, e.exports.__esModule = !0, e.exports.default = e.exports;
})(n);
var d = n.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var c = {
  // Options.jsx
  items_per_page: "/ síðu",
  jump_to: "Síða",
  jump_to_confirm: "staðfest",
  page: "",
  // Pagination.jsx
  prev_page: "Fyrri síða",
  next_page: "Næsta síða",
  prev_5: "Til baka 5 síður",
  next_5: "Áfram 5 síður",
  prev_3: "Til baka 3 síður",
  next_3: "Áfram 3 síður",
  page_size: "Page Size"
};
i.default = c;
var u = {}, a = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var v = {
  locale: "is_IS",
  today: "Í dag",
  now: "Núna",
  backToToday: "Til baka til dagsins í dag",
  ok: "Í lagi",
  clear: "Hreinsa",
  month: "Mánuður",
  year: "Ár",
  timeSelect: "Velja tíma",
  dateSelect: "Velja dag",
  monthSelect: "Velja mánuð",
  yearSelect: "Velja ár",
  decadeSelect: "Velja áratug",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Fyrri mánuður (PageUp)",
  nextMonth: "Næsti mánuður (PageDown)",
  previousYear: "Fyrra ár (Control + left)",
  nextYear: "Næsta ár (Control + right)",
  previousDecade: "Fyrri áratugur",
  nextDecade: "Næsti áratugur",
  previousCentury: "Fyrri öld",
  nextCentury: "Næsta öld"
}, g = v;
o.default = g;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const m = {
  placeholder: "Velja tíma"
};
t.default = m;
var f = d.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var S = f(o), y = f(t);
const j = {
  lang: Object.assign({
    placeholder: "Veldu dag",
    rangePlaceholder: ["Upphafsdagur", "Lokadagur"]
  }, S.default),
  timePickerLocale: Object.assign({}, y.default)
};
a.default = j;
var k = d.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var x = k(a);
u.default = x.default;
var s = d.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var I = s(i), P = s(u), h = s(a), F = s(t);
const M = {
  locale: "is",
  Pagination: I.default,
  DatePicker: h.default,
  TimePicker: F.default,
  Calendar: P.default,
  Table: {
    filterTitle: "Afmarkanir",
    filterConfirm: "Staðfesta",
    filterReset: "Núllstilla",
    selectAll: "Velja allt",
    selectInvert: "Viðsnúa vali"
  },
  Modal: {
    okText: "Áfram",
    cancelText: "Hætta við",
    justOkText: "Í lagi"
  },
  Popconfirm: {
    okText: "Áfram",
    cancelText: "Hætta við"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Leita hér",
    itemUnit: "færsla",
    itemsUnit: "færslur"
  },
  Upload: {
    uploading: "Hleð upp...",
    removeFile: "Fjarlægja skrá",
    uploadError: "Villa við að hlaða upp",
    previewFile: "Forskoða skrá",
    downloadFile: "Hlaða niður skrá"
  },
  Empty: {
    description: "Engin gögn"
  }
};
l.default = M;
var T = l;
const Y = /* @__PURE__ */ p(T);
export {
  Y as default
};
