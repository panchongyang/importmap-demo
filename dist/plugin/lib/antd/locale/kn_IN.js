function p(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, _ = { exports: {} };
(function(e) {
  function f(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = f, e.exports.__esModule = !0, e.exports.default = e.exports;
})(_);
var i = _.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var s = {
  // Options.jsx
  items_per_page: "/ ಪುಟ",
  jump_to: "ಜಿಗಿತವನ್ನು",
  jump_to_confirm: "ಖಚಿತಪಡಿಸಲು ಜಿಗಿತವನ್ನು",
  page: "",
  // Pagination.jsx
  prev_page: "ಹಿಂದಿನ ಪುಟ",
  next_page: "ಮುಂದಿನ ಪುಟ",
  prev_5: "ಹಿಂದಿನ 5 ಪುಟಗಳು",
  next_5: "ಮುಂದಿನ 5 ಪುಟಗಳು",
  prev_3: "ಹಿಂದಿನ 3 ಪುಟಗಳು",
  next_3: "ಮುಂದಿನ 3 ಪುಟಗಳು",
  page_size: "Page Size"
};
o.default = s;
var n = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var v = {
  locale: "kn_IN",
  today: "ಇಂದು",
  now: "ಈಗ",
  backToToday: "ಇಂದು ಹಿಂದಿರುಗಿ",
  ok: "ಸರಿ",
  clear: "ಸ್ಪಷ್ಟ",
  month: "ತಿಂಗಳು",
  year: "ವರ್ಷ",
  timeSelect: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ",
  dateSelect: "ದಿನಾಂಕವನ್ನು ಆಯ್ಕೆ ಮಾಡಿ",
  weekSelect: "ಒಂದು ವಾರದ ಆರಿಸಿ",
  monthSelect: "ಒಂದು ತಿಂಗಳು ಆಯ್ಕೆಮಾಡಿ",
  yearSelect: "ಒಂದು ವರ್ಷ ಆರಿಸಿ",
  decadeSelect: "ಒಂದು ದಶಕದ ಆಯ್ಕೆಮಾಡಿ",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "ಹಿಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಅಪ್)",
  nextMonth: "ಮುಂದಿನ ತಿಂಗಳು (ಪೇಜ್ಡೌನ್)",
  previousYear: "ಕಳೆದ ವರ್ಷ (Ctrl + ಎಡ)",
  nextYear: "ಮುಂದಿನ ವರ್ಷ (Ctrl + ಬಲ)",
  previousDecade: "ಕಳೆದ ದಶಕ",
  nextDecade: "ಮುಂದಿನ ದಶಕ",
  previousCentury: "ಕಳೆದ ಶತಮಾನ",
  nextCentury: "ಮುಂದಿನ ಶತಮಾನ"
}, k = v;
u.default = k;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const m = {
  placeholder: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ"
};
a.default = m;
var c = i.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var x = c(u), y = c(a);
const I = {
  lang: Object.assign({
    placeholder: "ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ",
    rangePlaceholder: ["ಪ್ರಾರಂಭ ದಿನಾಂಕ", "ಅಂತಿಮ ದಿನಾಂಕ"]
  }, x.default),
  timePickerLocale: Object.assign({}, y.default)
};
t.default = I;
var N = i.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var P = N(t);
n.default = P.default;
var d = i.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var Y = d(o), $ = d(n), g = d(t), M = d(a);
const T = {
  locale: "kn",
  Pagination: Y.default,
  DatePicker: g.default,
  TimePicker: M.default,
  Calendar: $.default,
  // locales for all comoponents
  global: {
    placeholder: "ದಯವಿಟ್ಟು ಆರಿಸಿ"
  },
  Table: {
    filterTitle: "ಪಟ್ಟಿ ಸೋಸಿ",
    filterConfirm: "ಸರಿ",
    filterReset: "ಮರುಹೊಂದಿಸಿ",
    emptyText: "ಮಾಹಿತಿ ಇಲ್ಲ",
    selectAll: "ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
    selectInvert: "ಪ್ರಸ್ತುತ ಪುಟವನ್ನು ತಿರುಗಿಸಿ",
    sortTitle: "ವಿಂಗಡಿಸಿ"
  },
  Modal: {
    okText: "ಸರಿ",
    cancelText: "ರದ್ದು",
    justOkText: "ಸರಿ"
  },
  Popconfirm: {
    okText: "ಸರಿ",
    cancelText: "ರದ್ದು"
  },
  Transfer: {
    titles: ["", ""],
    notFoundContent: "ದೊರೆತಿಲ್ಲ",
    searchPlaceholder: "ಇಲ್ಲಿ ಹುಡುಕಿ",
    itemUnit: "ವಿಷಯ",
    itemsUnit: "ವಿಷಯಗಳು"
  },
  Select: {
    notFoundContent: "ದೊರೆತಿಲ್ಲ"
  },
  Upload: {
    uploading: "ಏರಿಸಿ...",
    removeFile: "ಫೈಲ್ ತೆಗೆದುಹಾಕಿ",
    uploadError: "ಏರಿಸುವ ದೋಷ",
    previewFile: "ಫೈಲ್ ಮುನ್ನೋಟ",
    downloadFile: "ಫೈಲ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ"
  }
};
l.default = T;
var D = l;
const h = /* @__PURE__ */ p(D);
export {
  h as default
};
