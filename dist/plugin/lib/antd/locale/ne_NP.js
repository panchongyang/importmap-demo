function f(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, i = { exports: {} };
(function(e) {
  function _(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = _, e.exports.__esModule = !0, e.exports.default = e.exports;
})(i);
var c = i.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var p = {
  // Options.jsx
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination.jsx
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
};
o.default = p;
var n = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var v = {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
}, P = v;
d.default = P;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const h = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
a.default = h;
var s = c.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var m = s(d), S = s(a);
const g = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, m.default),
  timePickerLocale: Object.assign({}, S.default)
};
t.default = g;
var y = c.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var x = y(t);
n.default = x.default;
var u = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var U = u(o), Y = u(n), k = u(t), M = u(a);
const D = {
  locale: "ne-np",
  Pagination: U.default,
  DatePicker: k.default,
  TimePicker: M.default,
  Calendar: Y.default,
  Table: {
    filterTitle: "फिल्टर मेनु",
    filterConfirm: "हो",
    filterReset: "रीसेट",
    selectAll: "सबै छान्नुुहोस्",
    selectInvert: "छनौट उल्टाउनुहोस"
  },
  Modal: {
    okText: "हो",
    cancelText: "होईन",
    justOkText: "हो"
  },
  Popconfirm: {
    okText: "हो",
    cancelText: "होईन"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "यहाँ खोज्नुहोस्",
    itemUnit: "वस्तु",
    itemsUnit: "वस्तुहरू"
  },
  Upload: {
    uploading: "अपलोड गर्दै...",
    removeFile: "फाइल हटाउनुहोस्",
    uploadError: "अप्लोडमा समस्या भयो",
    previewFile: "फाइल पूर्वावलोकन गर्नुहोस्",
    downloadFile: "डाउनलोड फाइल"
  },
  Empty: {
    description: "डाटा छैन"
  }
};
l.default = D;
var $ = l;
const T = /* @__PURE__ */ f($);
export {
  T as default
};
