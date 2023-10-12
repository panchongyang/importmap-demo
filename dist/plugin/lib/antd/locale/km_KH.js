function f(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, c = { exports: {} };
(function(a) {
  function p(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = p, a.exports.__esModule = !0, a.exports.default = a.exports;
})(c);
var m = c.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var _ = {
  // Options.jsx
  items_per_page: "/ ទំព័រ",
  jump_to: "លោត​ទៅ",
  jump_to_confirm: "បញ្ជាក់",
  page: "ទំព័រ",
  // Pagination.jsx
  prev_page: "ទំព័រ​មុន",
  next_page: "ទំព័រ​​បន្ទាប់",
  prev_5: "៥ ទំព័រថយក្រោយ",
  next_5: "៥ ទំព័រទៅមុខ",
  prev_3: "៣ ទំព័រថយក្រោយ",
  next_3: "៣ ទំព័រទៅមុខ",
  page_size: "Page Size"
};
n.default = _;
var i = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var $ = {
  locale: "km",
  today: "ថ្ងៃនេះ",
  now: "ឥឡូវ​នេះ",
  backToToday: "ត្រលប់ទៅថ្ងៃនេះ",
  ok: "កំណត់",
  timeSelect: "រយៈពេលជ្រើសរើស",
  dateSelect: "ជ្រើសរើសកាលបរិច្ឆេទ",
  weekSelect: "ជ្រើសរើសសប្តាហ៍",
  clear: "ច្បាស់",
  month: "ខែ",
  year: "ឆ្នាំ",
  previousMonth: "ខែមុន (ឡើងទំព័រ)",
  nextMonth: "ខែបន្ទាប់ (ប៊ូតុងចុះទំព័រ)",
  monthSelect: "ជ្រើសរើសខែ",
  yearSelect: "ជ្រើសរើសឆ្នាំ",
  decadeSelect: "ជ្រើសរើសអាយុ",
  yearFormat: "YYYY",
  dayFormat: "D",
  dateFormat: "YYYY-M-D",
  dateTimeFormat: "YYYY-M-D HH:mm:ss",
  previousYear: "ឆ្នាំមុន (Controlគ្រាប់ចុចបូកព្រួញខាងឆ្វេង)",
  nextYear: "ឆ្នាំក្រោយ (Control គ្រាប់ចុចបូកព្រួញស្ដាំ)",
  previousDecade: "ជំនាន់ចុងក្រោយ",
  nextDecade: "ជំនាន់​ក្រោយ",
  previousCentury: "សតវត្សចុងក្រោយ",
  nextCentury: "សតវត្សរ៍បន្ទាប់"
}, b = $;
u.default = b;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const v = {
  placeholder: "រើសម៉ោង",
  rangePlaceholder: ["ម៉ោងចប់ផ្ដើម", "ម៉ោងបញ្ចប់"]
};
l.default = v;
var s = m.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var h = s(u), x = s(l);
const g = {
  lang: Object.assign({
    placeholder: "រើសថ្ងៃ",
    yearPlaceholder: "រើសឆ្នាំ",
    quarterPlaceholder: "រើសត្រីមាស",
    monthPlaceholder: "រើសខែ",
    weekPlaceholder: "រើសសប្តាហ៍",
    rangePlaceholder: ["ថ្ងៃចាប់ផ្ដើម", "ថ្ងៃបញ្ចប់"],
    rangeYearPlaceholder: ["ឆ្នាំចាប់ផ្ដើម", "ឆ្នាំបញ្ចប់"],
    rangeMonthPlaceholder: ["ខែចាប់ផ្ដើម", "ខែបញ្ចប់"],
    rangeWeekPlaceholder: ["សប្ដាហ៍ចាប់ផ្ដើម", "សប្ដាហ៍បញ្ចប់"]
  }, h.default),
  timePickerLocale: Object.assign({}, x.default)
};
t.default = g;
var k = m.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = k(t);
i.default = y.default;
var d = m.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = d(n), H = d(i), M = d(t), T = d(l);
const e = "${label} is not a valid ${type}", K = {
  locale: "km",
  Pagination: P.default,
  DatePicker: M.default,
  TimePicker: T.default,
  Calendar: H.default,
  Table: {
    filterTitle: "បញ្ចីតម្រៀប",
    filterConfirm: "យល់ព្រម",
    filterReset: "ត្រឡប់ដើម",
    filterEmptyText: "គ្មានបញ្ចីតម្រៀប",
    emptyText: "គ្មានទិន្នន័យ",
    selectAll: "រើសក្នុងទំព័រនេះ",
    selectInvert: "បញ្ច្រាសក្នុងទំព័រនេះ",
    selectNone: "លុបចេញទាំងអស់",
    selectionAll: "រើសយកទាំងអស់",
    sortTitle: "តម្រៀប",
    expand: "ពន្លាត",
    collapse: "បិតបាំង",
    triggerDesc: "ចុចដើម្បីរៀបតាមលំដាប់ធំ",
    triggerAsc: "ចុចដើម្បីរៀបតាមលំដាប់តូច​",
    cancelSort: "ចុចដើម្បីបោះបង់"
  },
  Modal: {
    okText: "យល់ព្រម",
    cancelText: "បោះបង់",
    justOkText: "យល់ព្រម"
  },
  Popconfirm: {
    okText: "យល់ព្រម",
    cancelText: "បោះបង់"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ស្វែងរកនៅទីនេះ",
    itemUnit: "",
    itemsUnit: "items"
  },
  Upload: {
    uploading: "កំពុងបញ្ចូលឡើង...",
    removeFile: "លុបឯកសារ",
    uploadError: "បញ្ចូលមិនជោកជ័យ",
    previewFile: "មើលឯកសារ",
    downloadFile: "ទាញយកឯកសារ"
  },
  Empty: {
    description: "គ្មានទិន្នន័យ"
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
o.default = K;
var Y = o;
const D = /* @__PURE__ */ f(Y);
export {
  D as default
};
