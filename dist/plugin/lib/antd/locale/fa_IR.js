function _(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, f = { exports: {} };
(function(a) {
  function s(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports;
})(f);
var c = f.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var m = {
  // Options.jsx
  items_per_page: "/ صفحه",
  jump_to: "برو به",
  jump_to_confirm: "تایید",
  page: "",
  // Pagination.jsx
  prev_page: "صفحه قبلی",
  next_page: "صفحه بعدی",
  prev_5: "۵ صفحه قبلی",
  next_5: "۵ صفحه بعدی",
  prev_3: "۳ صفحه قبلی",
  next_3: "۳ صفحه بعدی",
  page_size: "اندازه صفحه"
};
n.default = m;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var $ = {
  locale: "fa_IR",
  today: "امروز",
  now: "اکنون",
  backToToday: "بازگشت به روز",
  ok: "باشه",
  clear: "پاک کردن",
  month: "ماه",
  year: "سال",
  timeSelect: "انتخاب زمان",
  dateSelect: "انتخاب تاریخ",
  monthSelect: "یک ماه را انتخاب کنید",
  yearSelect: "یک سال را انتخاب کنید",
  decadeSelect: "یک دهه را انتخاب کنید",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "ماه قبل (PageUp)",
  nextMonth: "ماه بعد (PageDown)",
  previousYear: "سال قبل (Control + left)",
  nextYear: "سال بعد (Control + right)",
  previousDecade: "دهه قبل",
  nextDecade: "دهه بعد",
  previousCentury: "قرن قبل",
  nextCentury: "قرن بعد"
}, v = $;
d.default = v;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const b = {
  placeholder: "انتخاب زمان",
  rangePlaceholder: ["زمان شروع", "زمان پایان"]
};
t.default = b;
var p = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var g = p(d), x = p(t);
const h = {
  lang: Object.assign({
    placeholder: "انتخاب تاریخ",
    yearPlaceholder: "انتخاب سال",
    quarterPlaceholder: "انتخاب فصل",
    monthPlaceholder: "انتخاب ماه",
    weekPlaceholder: "انتخاب هفته",
    rangePlaceholder: ["تاریخ شروع", "تاریخ پایان"],
    rangeYearPlaceholder: ["سال شروع", "سال پایان"],
    rangeQuarterPlaceholder: ["فصل شروع", "فصل پایان"],
    rangeMonthPlaceholder: ["ماه شروع", "ماه پایان"],
    rangeWeekPlaceholder: ["هفته شروع", "هفته پایان"]
  }, g.default),
  timePickerLocale: Object.assign({}, x.default)
};
l.default = h;
var P = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = P(l);
i.default = y.default;
var u = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var R = u(n), I = u(i), T = u(l), M = u(t);
const e = "${label} از نوع ${type} معتبر نیست", Y = {
  locale: "fa",
  Pagination: R.default,
  DatePicker: T.default,
  TimePicker: M.default,
  Calendar: I.default,
  global: {
    placeholder: "لطفاً انتخاب کنید"
  },
  Table: {
    filterTitle: "منوی فیلتر",
    filterConfirm: "تایید",
    filterReset: "پاک کردن",
    filterEmptyText: "بدون فیلتر",
    filterCheckall: "انتخاب همه‌ی موارد",
    filterSearchPlaceholder: "جستجو در فیلترها",
    emptyText: "بدون داده",
    selectAll: "انتخاب صفحه‌ی کنونی",
    selectInvert: "معکوس کردن انتخاب‌ها در صفحه ی کنونی",
    selectNone: "انتخاب هیچکدام",
    selectionAll: "انتخاب همه‌ی داده‌ها",
    sortTitle: "مرتب سازی",
    expand: "باز شدن ردیف",
    collapse: "بستن ردیف",
    triggerDesc: "ترتیب نزولی",
    triggerAsc: "ترتیب صعودی",
    cancelSort: "لغوِ ترتیبِ داده شده"
  },
  Tour: {
    Next: "بعدی",
    Previous: "قبلی",
    Finish: "پایان"
  },
  Modal: {
    okText: "تایید",
    cancelText: "لغو",
    justOkText: "تایید"
  },
  Popconfirm: {
    okText: "تایید",
    cancelText: "لغو"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "جستجو",
    itemUnit: "عدد",
    itemsUnit: "عدد",
    remove: "حذف",
    selectCurrent: "انتخاب صفحه فعلی",
    removeCurrent: "پاک کردن انتخاب‌های صفحه فعلی",
    selectAll: "انتخاب همه",
    removeAll: "پاک کردن همه انتخاب‌ها",
    selectInvert: "معکوس کردن انتخاب‌ها در صفحه ی کنونی"
  },
  Upload: {
    uploading: "در حال آپلود...",
    removeFile: "حذف فایل",
    uploadError: "خطا در آپلود",
    previewFile: "مشاهده‌ی فایل",
    downloadFile: "دریافت فایل"
  },
  Empty: {
    description: "داده‌ای موجود نیست"
  },
  Icon: {
    icon: "آیکن"
  },
  Text: {
    edit: "ویرایش",
    copy: "کپی",
    copied: "کپی شد",
    expand: "توسعه"
  },
  PageHeader: {
    back: "برگشت"
  },
  Form: {
    optional: "(اختیاری)",
    defaultValidateMessages: {
      default: "خطا در ${label}",
      required: "فیلد ${label} اجباریست",
      enum: "${label} باید یکی از [${enum}] باشد",
      whitespace: "${label} نمیتواند خالی باشد",
      date: {
        format: "ساختار تاریخ در ${label} نامعتبر است",
        parse: "${label} قابل تبدیل به تاریخ نیست",
        invalid: "${label} تاریخی نا معتبر است"
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
        len: "${label} باید ${len} کاراکتر باشد",
        min: "${label} باید حداقل ${min} کاراکتر باشد",
        max: "${label} باید حداکثر ${max} کاراکتر باشد",
        range: "${label} باید بین ${min}-${max} کاراکتر باشد"
      },
      number: {
        len: "${label} باید برابر ${len}",
        min: "${label} حداقل میتواند ${min} باشد",
        max: "${label} حداکثر میتواند ${max} باشد",
        range: "${label} باید بین ${min}-${max} باشد"
      },
      array: {
        len: "تعداد ${label} باید ${len} باشد.",
        min: "تعداد ${label} حداقل باید ${min} باشد",
        max: "تعداد ${label} حداکثر باید ${max} باشد",
        range: "مقدار ${label} باید بین ${min}-${max} باشد"
      },
      pattern: {
        mismatch: "الگوی ${label} با ${pattern} برابری نمی‌کند"
      }
    }
  },
  Image: {
    preview: "پیش‌نمایش"
  },
  QRCode: {
    expired: "QR Code منقضی شذد",
    refresh: "به‌روزرسانی"
  }
};
o.default = Y;
var D = o;
const k = /* @__PURE__ */ _(D);
export {
  k as default
};
