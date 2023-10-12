function f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var r = {}, n = { exports: {} };
(function(e) {
  function _(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  e.exports = _, e.exports.__esModule = !0, e.exports.default = e.exports;
})(n);
var i = n.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var p = {
  // Options.jsx
  items_per_page: "/ oldal",
  jump_to: "Ugrás",
  jump_to_confirm: "megerősít",
  page: "",
  // Pagination.jsx
  prev_page: "Előző oldal",
  next_page: "Következő oldal",
  prev_5: "Előző 5 oldal",
  next_5: "Következő 5 oldal",
  prev_3: "Előző 3 oldal",
  next_3: "Következő 3 oldal",
  page_size: "Page Size"
};
o.default = p;
var u = {}, t = {}, s = {};
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var c = {
  locale: "hu_HU",
  today: "Ma",
  // 'Today',
  now: "Most",
  // 'Now',
  backToToday: "Vissza a mai napra",
  // 'Back to today',
  ok: "OK",
  clear: "Törlés",
  // 'Clear',
  month: "Hónap",
  // 'Month',
  year: "Év",
  // 'Year',
  timeSelect: "Időpont kiválasztása",
  // 'Select time',
  dateSelect: "Dátum kiválasztása",
  // 'Select date',
  monthSelect: "Hónap kiválasztása",
  // 'Choose a month',
  yearSelect: "Év kiválasztása",
  // 'Choose a year',
  decadeSelect: "Évtized kiválasztása",
  // 'Choose a decade',
  yearFormat: "YYYY",
  dateFormat: "YYYY/MM/DD",
  // 'M/D/YYYY',
  dayFormat: "DD",
  // 'D',
  dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
  // 'M/D/YYYY HH:mm:ss',
  monthBeforeYear: !0,
  previousMonth: "Előző hónap (PageUp)",
  // 'Previous month (PageUp)',
  nextMonth: "Következő hónap (PageDown)",
  // 'Next month (PageDown)',
  previousYear: "Múlt év (Control + left)",
  // 'Last year (Control + left)',
  nextYear: "Jövő év (Control + right)",
  // 'Next year (Control + right)',
  previousDecade: "Előző évtized",
  // 'Last decade',
  nextDecade: "Következő évtized",
  // 'Next decade',
  previousCentury: "Múlt évszázad",
  // 'Last century',
  nextCentury: "Jövő évszázad"
  // 'Next century',
}, z = c;
s.default = z;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const m = {
  placeholder: "Válasszon időt"
};
a.default = m;
var v = i.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var h = v(s), k = v(a);
const U = {
  lang: Object.assign({
    placeholder: "Válasszon dátumot",
    rangePlaceholder: ["Kezdő dátum", "Befejezés dátuma"]
  }, h.default),
  timePickerLocale: Object.assign({}, k.default)
};
t.default = U;
var g = i.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var H = g(t);
u.default = H.default;
var d = i.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var M = d(o), D = d(u), x = d(t), y = d(a);
const P = {
  locale: "hu",
  Pagination: M.default,
  DatePicker: x.default,
  TimePicker: y.default,
  Calendar: D.default,
  Table: {
    filterTitle: "Szűrők",
    filterConfirm: "Alkalmazás",
    filterReset: "Visszaállítás",
    selectAll: "Jelenlegi oldal kiválasztása",
    selectInvert: "Jelenlegi oldal inverze",
    sortTitle: "Rendezés"
  },
  Modal: {
    okText: "Alkalmazás",
    cancelText: "Visszavonás",
    justOkText: "Alkalmazás"
  },
  Popconfirm: {
    okText: "Alkalmazás",
    cancelText: "Visszavonás"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Keresés",
    itemUnit: "elem",
    itemsUnit: "elemek"
  },
  Upload: {
    uploading: "Feltöltés...",
    removeFile: "Fájl eltávolítása",
    uploadError: "Feltöltési hiba",
    previewFile: "Fájl előnézet",
    downloadFile: "Fájl letöltése"
  },
  Empty: {
    description: "Nincs adat"
  }
};
r.default = P;
var Y = r;
const $ = /* @__PURE__ */ f(Y);
export {
  $ as default
};
