function p(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, _ = { exports: {} };
(function(e) {
  function c(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = c, e.exports.__esModule = !0, e.exports.default = e.exports;
})(_);
var n = _.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var s = {
  // Options.jsx
  items_per_page: "/ σελίδα",
  jump_to: "Μετάβαση",
  jump_to_confirm: "επιβεβαιώνω",
  page: "",
  // Pagination.jsx
  prev_page: "Προηγούμενη Σελίδα",
  next_page: "Επόμενη Σελίδα",
  prev_5: "Προηγούμενες 5 Σελίδες",
  next_5: "Επόμενες 5 σελίδες",
  prev_3: "Προηγούμενες 3 Σελίδες",
  next_3: "Επόμενες 3 Σελίδες",
  page_size: "Μέγεθος σελίδας"
};
o.default = s;
var u = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var v = {
  locale: "el_GR",
  today: "Σήμερα",
  now: "Τώρα",
  backToToday: "Πίσω στη σημερινή μέρα",
  ok: "OK",
  clear: "Καθαρισμός",
  month: "Μήνας",
  year: "Έτος",
  timeSelect: "Επιλογή ώρας",
  dateSelect: "Επιλογή ημερομηνίας",
  monthSelect: "Επιλογή μήνα",
  yearSelect: "Επιλογή έτους",
  decadeSelect: "Επιλογή δεκαετίας",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Προηγούμενος μήνας (PageUp)",
  nextMonth: "Επόμενος μήνας (PageDown)",
  previousYear: "Προηγούμενο έτος (Control + αριστερά)",
  nextYear: "Επόμενο έτος (Control + δεξιά)",
  previousDecade: "Προηγούμενη δεκαετία",
  nextDecade: "Επόμενη δεκαετία",
  previousCentury: "Προηγούμενος αιώνας",
  nextCentury: "Επόμενος αιώνας"
}, R = v;
d.default = R;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const m = {
  placeholder: "Επιλέξτε ώρα"
};
a.default = m;
var f = n.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var x = f(d), y = f(a);
const G = {
  lang: Object.assign({
    placeholder: "Επιλέξτε ημερομηνία",
    rangePlaceholder: ["Αρχική ημερομηνία", "Τελική ημερομηνία"]
  }, x.default),
  timePickerLocale: Object.assign({}, y.default)
};
t.default = G;
var P = n.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var Y = P(t);
u.default = Y.default;
var i = n.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var $ = i(o), g = i(u), D = i(t), M = i(a);
const O = {
  locale: "el",
  Pagination: $.default,
  DatePicker: D.default,
  TimePicker: M.default,
  Calendar: g.default,
  Table: {
    filterTitle: "Μενού φίλτρων",
    filterConfirm: "ΟΚ",
    filterReset: "Επαναφορά",
    selectAll: "Επιλογή τρέχουσας σελίδας",
    selectInvert: "Αντιστροφή τρέχουσας σελίδας"
  },
  Modal: {
    okText: "ΟΚ",
    cancelText: "Άκυρο",
    justOkText: "ΟΚ"
  },
  Popconfirm: {
    okText: "ΟΚ",
    cancelText: "Άκυρο"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Αναζήτηση",
    itemUnit: "αντικείμενο",
    itemsUnit: "αντικείμενα"
  },
  Upload: {
    uploading: "Μεταφόρτωση...",
    removeFile: "Αφαίρεση αρχείου",
    uploadError: "Σφάλμα μεταφόρτωσης",
    previewFile: "Προεπισκόπηση αρχείου",
    downloadFile: "Λήψη αρχείου"
  },
  Empty: {
    description: "Δεν υπάρχουν δεδομένα"
  }
};
l.default = O;
var T = l;
const h = /* @__PURE__ */ p(T);
export {
  h as default
};
