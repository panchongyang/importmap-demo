function g(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var n = {}, u = { exports: {} };
(function(a) {
  function m(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = m, a.exports.__esModule = !0, a.exports.default = a.exports;
})(u);
var h = u.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var p = {
  // Options.jsx
  items_per_page: "/ leathanach",
  jump_to: "Téigh",
  jump_to_confirm: "dheimhnigh",
  page: "",
  // Pagination.jsx
  prev_page: "Leathanach Roimhe Seo",
  next_page: "An chéad leathanach eile",
  prev_5: "5 leathanach roimhe seo",
  next_5: "Ar Aghaidh 5 Leathanaigh",
  prev_3: "3 leathanach roimhe seo",
  next_3: "Ar Aghaidh 3 Leathanaigh",
  page_size: "Page Size"
};
o.default = p;
var i = {}, t = {}, c = {};
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var f = {
  locale: "ga_IE",
  today: "inniu",
  now: "anois",
  backToToday: "Ar ais inniu",
  ok: "ceart go leor",
  clear: "soiléir",
  month: "mhí",
  year: "bhliain",
  timeSelect: "roghnaigh am",
  dateSelect: "roghnaigh dáta",
  weekSelect: "Roghnaigh seachtain",
  monthSelect: "Roghnaigh mí",
  yearSelect: "Roghnaigh bliain",
  decadeSelect: "Roghnaigh deich mbliana",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "An mhí roimhe seo (PageUp)",
  nextMonth: "An mhí seo chugainn (PageDown)",
  previousYear: "Anuraidh (Control + left)",
  nextYear: "An bhliain seo chugainn (Control + right)",
  previousDecade: "Le deich mbliana anuas",
  nextDecade: "Deich mbliana amach romhainn",
  previousCentury: "An chéid seo caite",
  nextCentury: "An chéad aois eile"
}, b = f;
c.default = b;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const v = {
  placeholder: "Roghnaigh am",
  rangePlaceholder: ["Am tosaigh", "Am deiridh"]
};
l.default = v;
var s = h.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var _ = s(c), $ = s(l);
const x = {
  lang: Object.assign({
    placeholder: "Roghnaigh dáta",
    yearPlaceholder: "Roghnaigh bliain",
    quarterPlaceholder: "Roghnaigh ráithe",
    monthPlaceholder: "Roghnaigh mí",
    weekPlaceholder: "Roghnaigh seachtain",
    rangePlaceholder: ["Dáta tosaigh", "Dáta deiridh"],
    rangeYearPlaceholder: ["Tús na bliana", "Deireadh na bliana"],
    rangeMonthPlaceholder: ["Tosaigh mhí", "Deireadh mhí"],
    rangeWeekPlaceholder: ["Tosaigh an tseachtain", "Deireadh na seachtaine"]
  }, _.default),
  timePickerLocale: Object.assign({}, $.default)
};
t.default = x;
var P = h.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = P(t);
i.default = y.default;
var d = h.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var D = d(o), E = d(i), R = d(t), A = d(l);
const e = "${label} is not a valid ${type}", I = {
  locale: "ga",
  Pagination: D.default,
  DatePicker: R.default,
  TimePicker: A.default,
  Calendar: E.default,
  global: {
    placeholder: "Please select"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
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
    description: "No Data"
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
        string: e,
        method: e,
        array: e,
        object: e,
        number: e,
        date: e,
        boolean: e,
        integer: e,
        float: e,
        regexp: e,
        email: e,
        url: e,
        hex: e
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
  }
};
n.default = I;
var T = n;
const k = /* @__PURE__ */ g(T);
export {
  k as default
};
