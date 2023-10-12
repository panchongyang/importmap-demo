function _(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, p = { exports: {} };
(function(a) {
  function f(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = f, a.exports.__esModule = !0, a.exports.default = a.exports;
})(p);
var c = p.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var m = {
  // Options.jsx
  items_per_page: "/ გვერდი.",
  jump_to: "გადასვლა",
  jump_to_confirm: "დადასტურება",
  page: "",
  // Pagination.jsx
  prev_page: "წინა გვერდი",
  next_page: "შემდეგი გვერდი",
  prev_5: "წინა 5 გვერდი",
  next_5: "შემდეგი 5 გვერდი",
  prev_3: "წინა 3 გვერდი",
  next_3: "შემდეგი 3 გვერდი",
  page_size: "Page Size"
};
n.default = m;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var $ = {
  locale: "ka_GE",
  today: "დღეს",
  now: "ახლა",
  backToToday: "მიმდინარე თარიღი",
  ok: "OK",
  clear: "გასუფთავება",
  month: "თვე",
  year: "წელი",
  timeSelect: "დროის არჩევა",
  dateSelect: "თარიღის არჩევა",
  weekSelect: "კვირის არჩევა",
  monthSelect: "თვის არჩევა",
  yearSelect: "წლის არჩევა",
  decadeSelect: "ათწლეულის არჩევა",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "წინა თვე (PageUp)",
  nextMonth: "მომდევნო თვე (PageDown)",
  previousYear: "წინა წელი (Control + left)",
  nextYear: "მომდევნო წელი (Control + right)",
  previousDecade: "წინა ათწლეული",
  nextDecade: "მომდევნო ათწლეული",
  previousCentury: "გასული საუკუნე",
  nextCentury: "მომდევნო საუკუნე"
}, v = $;
d.default = v;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const b = {
  placeholder: "აირჩიეთ დრო",
  rangePlaceholder: ["საწყისი თარიღი", "საბოლოო თარიღი"]
};
t.default = b;
var s = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var g = s(d), x = s(t);
const k = {
  lang: Object.assign({
    placeholder: "აირჩიეთ თარიღი",
    yearPlaceholder: "აირჩიეთ წელი",
    quarterPlaceholder: "აირჩიეთ მეოთხედი",
    monthPlaceholder: "აირჩიეთ თვე",
    weekPlaceholder: "აირჩიეთ კვირა",
    rangePlaceholder: ["საწყისი თარიღი", "საბოლოო თარიღი"],
    rangeYearPlaceholder: ["საწყისი წელი", "საბოლოო წელი"],
    rangeMonthPlaceholder: ["საწყისი თვე", "საბოლოო თვე"],
    rangeWeekPlaceholder: ["საწყისი კვირა", "საბოლოო კვირა"]
  }, g.default),
  timePickerLocale: Object.assign({}, x.default)
};
l.default = k;
var h = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = h(l);
i.default = y.default;
var u = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = u(n), E = u(i), T = u(l), G = u(t);
const e = "${label} არ არის სწორი ${type}", M = {
  locale: "ka",
  Pagination: P.default,
  DatePicker: T.default,
  TimePicker: G.default,
  Calendar: E.default,
  global: {
    placeholder: "გთხოვთ აირჩიოთ"
  },
  Table: {
    filterTitle: "ფილტრის მენიუ",
    filterConfirm: "კარგი",
    filterReset: "გასუფთავება",
    filterEmptyText: "ფილტრები არაა",
    emptyText: "ინფორმაცია არაა",
    selectAll: "აირჩიეთ მიმდინარე გვერდი",
    selectInvert: "შეაბრუნეთ მიმდინარე გვერდი",
    selectNone: "მონაცემების გასუფთავება",
    selectionAll: "ყველას მონიშვნა",
    sortTitle: "დალაგება",
    expand: "სტრიქონის გაშლა",
    collapse: "სტრიქონის შეკუმშვა",
    triggerDesc: "დაღმავალი დალაგება",
    triggerAsc: "აღმავალი დალაგება",
    cancelSort: "დალაგების გაუქმება"
  },
  Modal: {
    okText: "კარგი",
    cancelText: "გაუქმება",
    justOkText: "ოკ"
  },
  Popconfirm: {
    okText: "კარგი",
    cancelText: "გაუქმება"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "მოძებნე აქ",
    itemUnit: "ერთეული",
    itemsUnit: "ერთეულები",
    remove: "ამოშლა",
    selectCurrent: "მიმდინარე გვერდის არჩევა",
    removeCurrent: "მიმდინარე გვერდის ამოშლა",
    selectAll: "ყველას მონიშვნა",
    removeAll: "ყველას წაშლა",
    selectInvert: "მიმდინარე გვერდის შებრუნება"
  },
  Upload: {
    uploading: "იტვირთება...",
    removeFile: "ფაილის ამოშლა",
    uploadError: "ატვირთვის შეცდომა",
    previewFile: "ფაილის გადახედვა",
    downloadFile: "ფაილის ჩამოტვირთვა"
  },
  Empty: {
    description: "ინფორმაცია არაა"
  },
  Icon: {
    icon: "ხატულა"
  },
  Text: {
    edit: "რედაქტირება",
    copy: "ასლი",
    copied: "ასლი აღებულია",
    expand: "გაშლა"
  },
  PageHeader: {
    back: "უკან"
  },
  Form: {
    optional: "(არასავალდებულო)",
    defaultValidateMessages: {
      default: "ველის შემოწმების შეცდომა ${label}-ისთვის",
      required: "გთხოვთ შეიყვანეთ ${label}",
      enum: "${label} უნდა იყოს ერთ-ერთი [${enum}]-დან",
      whitespace: "${label} არ შეიძლება იყოს ცარიელი სიმბოლო",
      date: {
        format: "${label} თარიღის ფორმატი არასწორია",
        parse: "${label} თარიღში კონვერტირება არ არის შესაძლებელი",
        invalid: "${label} არასწორი თარიღია"
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
        len: "${label} უნდა იყოს ${len} სიმბოლო",
        min: "${label} უნდა იყოს სულ მცირე ${min} სიმბოლო",
        max: "${label} უნდა იყოს მაქსიმუმ ${max} სიმბოლო",
        range: "${label} უნდა იყოს ${min}-${max} სიმბოლოს შორის"
      },
      number: {
        len: "${label} უნდა იყოს ${len} ტოლი",
        min: "${label} უნდა იყოს მინუმიმ ${min}",
        max: "${label} უნდა იყოს მაქსიმუმ ${max}",
        range: "${label} უნდა იყოს ${min}-${max} შორის"
      },
      array: {
        len: "უნდა იყოს ${len} ${label}",
        min: "სულ მცირე ${min} ${label}",
        max: "არაუმეტეს ${max} ${label}",
        range: "${label}-ის რაოდენობა უნდა იყოს ${min}-${max} შორის"
      },
      pattern: {
        mismatch: "${label} არ ერგება შაბლონს ${pattern}"
      }
    }
  },
  Image: {
    preview: "გადახედვა"
  }
};
o.default = M;
var Y = o;
const D = /* @__PURE__ */ _(Y);
export {
  D as default
};
