import S from "react";
function k(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var f = {}, C = { exports: {} };
(function(e) {
  function n(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})(C);
var v = C.exports, M = { exports: {} }, O = { exports: {} };
(function(e) {
  function n(t) {
    "@babel/helpers - typeof";
    return e.exports = n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, n(t);
  }
  e.exports = n, e.exports.__esModule = !0, e.exports.default = e.exports;
})(O);
var U = O.exports;
(function(e) {
  var n = U.default;
  function t(a) {
    if (typeof WeakMap != "function")
      return null;
    var l = /* @__PURE__ */ new WeakMap(), o = /* @__PURE__ */ new WeakMap();
    return (t = function(b) {
      return b ? o : l;
    })(a);
  }
  function i(a, l) {
    if (!l && a && a.__esModule)
      return a;
    if (a === null || n(a) !== "object" && typeof a != "function")
      return {
        default: a
      };
    var o = t(l);
    if (o && o.has(a))
      return o.get(a);
    var c = {}, b = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var u in a)
      if (u !== "default" && Object.prototype.hasOwnProperty.call(a, u)) {
        var p = b ? Object.getOwnPropertyDescriptor(a, u) : null;
        p && (p.get || p.set) ? Object.defineProperty(c, u, p) : c[u] = a[u];
      }
    return c.default = a, o && o.set(a, c), c;
  }
  e.exports = i, e.exports.__esModule = !0, e.exports.default = e.exports;
})(M);
var q = M.exports, m = {};
Object.defineProperty(m, "__esModule", {
  value: !0
});
m.default = void 0;
var D = S;
const T = /* @__PURE__ */ (0, D.createContext)(void 0);
m.default = T;
var _ = {}, x = {};
Object.defineProperty(x, "__esModule", {
  value: !0
});
x.default = void 0;
var E = {
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
x.default = E;
var h = {}, d = {}, y = {};
Object.defineProperty(y, "__esModule", {
  value: !0
});
y.default = void 0;
var Y = {
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
}, F = Y;
y.default = F;
var s = {};
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
const N = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
s.default = N;
var w = v.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var L = w(y), W = w(s);
const j = {
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
  }, L.default),
  timePickerLocale: Object.assign({}, W.default)
};
d.default = j;
var A = v.default;
Object.defineProperty(h, "__esModule", {
  value: !0
});
h.default = void 0;
var I = A(d);
h.default = I.default;
var g = v.default;
Object.defineProperty(_, "__esModule", {
  value: !0
});
_.default = void 0;
var K = g(x), B = g(h), H = g(d), Q = g(s);
const r = "${label} is not a valid ${type}", z = {
  locale: "en",
  Pagination: K.default,
  DatePicker: H.default,
  TimePicker: Q.default,
  Calendar: B.default,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckall: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand"
  },
  PageHeader: {
    back: "Back"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: r,
        method: r,
        array: r,
        object: r,
        number: r,
        date: r,
        boolean: r,
        integer: r,
        float: r,
        regexp: r,
        email: r,
        url: r,
        hex: r
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh"
  },
  ColorPicker: {
    presetEmpty: "Empty"
  }
};
_.default = z;
var R = v.default, V = q.default;
Object.defineProperty(f, "__esModule", {
  value: !0
});
f.default = void 0;
var $ = V(S), G = R(m), P = R(_);
const J = (e, n) => {
  const t = $.useContext(G.default), i = $.useMemo(() => {
    var l;
    const o = n || P.default[e], c = (l = t == null ? void 0 : t[e]) !== null && l !== void 0 ? l : {};
    return Object.assign(Object.assign({}, typeof o == "function" ? o() : o), c || {});
  }, [e, n, t]), a = $.useMemo(() => {
    const l = t == null ? void 0 : t.locale;
    return t != null && t.exist && !l ? P.default.locale : l;
  }, [t]);
  return [i, a];
};
f.default = J;
var X = f;
const ee = /* @__PURE__ */ k(X);
export {
  ee as default
};
