import C from "react";
function Y(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var k = {}, q = { exports: {} };
(function(e) {
  function r(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(q);
var s = q.exports, T = { exports: {} }, D = { exports: {} };
(function(e) {
  function r(t) {
    "@babel/helpers - typeof";
    return e.exports = r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
      return typeof l;
    } : function(l) {
      return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l;
    }, e.exports.__esModule = !0, e.exports.default = e.exports, r(t);
  }
  e.exports = r, e.exports.__esModule = !0, e.exports.default = e.exports;
})(D);
var N = D.exports;
(function(e) {
  var r = N.default;
  function t(a) {
    if (typeof WeakMap != "function")
      return null;
    var o = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
    return (t = function(f) {
      return f ? n : o;
    })(a);
  }
  function l(a, o) {
    if (!o && a && a.__esModule)
      return a;
    if (a === null || r(a) !== "object" && typeof a != "function")
      return {
        default: a
      };
    var n = t(o);
    if (n && n.has(a))
      return n.get(a);
    var u = {}, f = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var c in a)
      if (c !== "default" && Object.prototype.hasOwnProperty.call(a, c)) {
        var d = f ? Object.getOwnPropertyDescriptor(a, c) : null;
        d && (d.get || d.set) ? Object.defineProperty(u, c, d) : u[c] = a[c];
      }
    return u.default = a, n && n.set(a, u), u;
  }
  e.exports = l, e.exports.__esModule = !0, e.exports.default = e.exports;
})(T);
var L = T.exports, x = {}, p = {}, b = {};
Object.defineProperty(b, "__esModule", {
  value: !0
});
b.default = void 0;
var F = {
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
b.default = F;
var y = {}, v = {}, $ = {};
Object.defineProperty($, "__esModule", {
  value: !0
});
$.default = void 0;
var A = {
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
}, W = A;
$.default = W;
var m = {};
Object.defineProperty(m, "__esModule", {
  value: !0
});
m.default = void 0;
const K = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
};
m.default = K;
var U = s.default;
Object.defineProperty(v, "__esModule", {
  value: !0
});
v.default = void 0;
var I = U($), B = U(m);
const z = {
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
  }, I.default),
  timePickerLocale: Object.assign({}, B.default)
};
v.default = z;
var H = s.default;
Object.defineProperty(y, "__esModule", {
  value: !0
});
y.default = void 0;
var Q = H(v);
y.default = Q.default;
var P = s.default;
Object.defineProperty(p, "__esModule", {
  value: !0
});
p.default = void 0;
var V = P(b), G = P(y), J = P(v), X = P(m);
const i = "${label} is not a valid ${type}", Z = {
  locale: "en",
  Pagination: V.default,
  DatePicker: J.default,
  TimePicker: X.default,
  Calendar: G.default,
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
        string: i,
        method: i,
        array: i,
        object: i,
        number: i,
        date: i,
        boolean: i,
        integer: i,
        float: i,
        regexp: i,
        email: i,
        url: i,
        hex: i
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
p.default = Z;
var ee = s.default;
Object.defineProperty(x, "__esModule", {
  value: !0
});
x.changeConfirmLocale = te;
x.getConfirmLocale = ae;
var O = ee(p);
let g = Object.assign({}, O.default.Modal), h = [];
const R = () => h.reduce((e, r) => Object.assign(Object.assign({}, e), r), O.default.Modal);
function te(e) {
  if (e) {
    const r = Object.assign({}, e);
    return h.push(r), g = R(), () => {
      h = h.filter((t) => t !== r), g = R();
    };
  }
  g = Object.assign({}, O.default.Modal);
}
function ae() {
  return g;
}
var _ = {};
Object.defineProperty(_, "__esModule", {
  value: !0
});
_.default = void 0;
var re = C;
const le = /* @__PURE__ */ (0, re.createContext)(void 0);
_.default = le;
var S = {}, E = s.default, oe = L.default;
Object.defineProperty(S, "__esModule", {
  value: !0
});
S.default = void 0;
var M = oe(C), ne = E(_), w = E(p);
const ie = (e, r) => {
  const t = M.useContext(ne.default), l = M.useMemo(() => {
    var o;
    const n = r || w.default[e], u = (o = t == null ? void 0 : t[e]) !== null && o !== void 0 ? o : {};
    return Object.assign(Object.assign({}, typeof n == "function" ? n() : n), u || {});
  }, [e, r, t]), a = M.useMemo(() => {
    const o = t == null ? void 0 : t.locale;
    return t != null && t.exist && !o ? w.default.locale : o;
  }, [t]);
  return [l, a];
};
S.default = ie;
(function(e) {
  "use client";
  var r = s.default, t = L.default;
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = e.ANT_MARK = void 0, Object.defineProperty(e, "useLocale", {
    enumerable: !0,
    get: function() {
      return n.default;
    }
  });
  var l = t(C), a = x, o = r(_), n = r(S);
  e.ANT_MARK = "internalMark";
  const u = (f) => {
    const {
      locale: c = {},
      children: d,
      _ANT_MARK__: ue
    } = f;
    l.useEffect(() => (0, a.changeConfirmLocale)(c && c.Modal), [c]);
    const j = l.useMemo(() => Object.assign(Object.assign({}, c), {
      exist: !0
    }), [c]);
    return /* @__PURE__ */ l.createElement(o.default.Provider, {
      value: j
    }, d);
  };
  e.default = u;
})(k);
var ce = k;
const fe = /* @__PURE__ */ Y(ce);
export {
  fe as default
};
