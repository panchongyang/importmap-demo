function _(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, s = { exports: {} };
(function(a) {
  function f(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = f, a.exports.__esModule = !0, a.exports.default = a.exports;
})(s);
var c = s.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var m = {
  // Options.jsx
  items_per_page: "/ පිටුව",
  jump_to: "වෙත යන්න",
  jump_to_confirm: "තහවුරු",
  page: "පිටුව",
  // Pagination.jsx
  prev_page: "කලින් පිටුව",
  next_page: "ඊළඟ පිටුව",
  prev_5: "කලින් පිටු 5",
  next_5: "ඊළඟ පිටු 5",
  prev_3: "කලින් පිටු 3",
  next_3: "ඊළඟ පිටු 3",
  page_size: "පිටුවේ ප්‍රමාණය"
};
i.default = m;
var l = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var $ = {
  locale: "si_LK",
  today: "අද",
  now: "දැන්",
  backToToday: "අදට ආපසු",
  ok: "හරි",
  clear: "හිස් කරන්න",
  month: "මාසය",
  year: "අවුරුද්ද",
  timeSelect: "වේලාවක් තෝරන්න",
  dateSelect: "දිනයක් තෝරන්න",
  weekSelect: "සතියක් තෝරන්න",
  monthSelect: "මාසයක් තෝරන්න",
  yearSelect: "අවුරුද්දක් තෝරන්න",
  decadeSelect: "දශකයක් තෝරන්න",
  yearFormat: "YYYY",
  dateFormat: "YYYY/M/D",
  dayFormat: "D",
  dateTimeFormat: "YYYY/M/D HH:mm:ss",
  monthBeforeYear: !1,
  previousMonth: "කලින් මාසය (පිටුව ඉහළට)",
  nextMonth: "ඊළඟ මාසය (පිටුව පහළට)",
  previousYear: "පසුගිය අවුරුද්ද (Control + වම)",
  nextYear: "ඊළඟ අවුරුද්ද (Control + දකුණ)",
  previousDecade: "පසුගිය දශකය",
  nextDecade: "ඊළඟ දශකය",
  previousCentury: "පසුගිය සියවස",
  nextCentury: "ඊළඟ සියවස"
}, v = $;
n.default = v;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const b = {
  placeholder: "වේලාව තෝරන්න",
  rangePlaceholder: ["ආරම්භක වේලාව", "නිමවන වේලාව"]
};
t.default = b;
var p = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var x = p(n), g = p(t);
const h = {
  lang: Object.assign({
    placeholder: "දිනය තෝරන්න",
    yearPlaceholder: "අවුරුද්ද තෝරන්න",
    quarterPlaceholder: "කාර්තුව තෝරන්න",
    monthPlaceholder: "මාසය තෝරන්න",
    weekPlaceholder: "සතිය තෝරන්න",
    rangePlaceholder: ["ආරම්භක දිනය", "නිමවන දිනය"],
    rangeYearPlaceholder: ["ආර්ම්භක අවුරුද්ද", "නිමවන අවුරුද්ද"],
    rangeQuarterPlaceholder: ["ආරම්භක කාර්තුව", "නිමවන කාර්තුව"],
    rangeMonthPlaceholder: ["ආරම්භක මාසය", "නිමවන මාසය"],
    rangeWeekPlaceholder: ["ආරම්භක සතිය", "නිමවන සතිය"]
  }, x.default),
  timePickerLocale: Object.assign({}, g.default)
};
l.default = h;
var d = {}, y = c.default;
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var P = y(l);
d.default = P.default;
var u = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var L = u(i), T = u(l), K = u(t), M = u(d);
const e = "${label} වලංගු ${type} ක් නොවේ", Y = {
  locale: "si",
  Pagination: L.default,
  DatePicker: T.default,
  TimePicker: K.default,
  Calendar: M.default,
  global: {
    placeholder: "කරුණාකර තෝරන්න"
  },
  Table: {
    filterTitle: "පෙරහන්",
    filterConfirm: "හරි",
    filterReset: "යළි සකසන්න",
    filterEmptyText: "පෙරහන් නැත",
    filterCheckall: "සියළු අථක තෝරන්න",
    filterSearchPlaceholder: "පෙරහන් තුළ සොයන්න",
    emptyText: "දත්ත නැත",
    selectAll: "වත්මන් පිටුව තෝරන්න",
    selectInvert: "වත්මන් පිටුව යටියනය",
    selectNone: "සියළු දත්ත ඉවතලන්න",
    selectionAll: "සියළු දත්ත තෝරන්න",
    sortTitle: "පෙළගැසීම",
    expand: "පේළිය දිගහරින්න",
    collapse: "පේළිය හකුළන්න",
    triggerDesc: "අවරෝහණව පෙළගැසීමට ඔබන්න",
    triggerAsc: "ආරෝහණව පෙළගැසීමට ඔබන්න",
    cancelSort: "පෙළගැසීම අවලංගු කිරීමට ඔබන්න"
  },
  Modal: {
    okText: "හරි",
    cancelText: "අවලංගු කරන්න",
    justOkText: "හරි"
  },
  Popconfirm: {
    okText: "හරි",
    cancelText: "අවලංගු කරන්න"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "මෙතැන සොයන්න",
    itemUnit: "අථකය",
    itemsUnit: "අථක",
    remove: "ඉවත් කරන්න",
    selectCurrent: "වත්මන් පිටුව තෝරන්න",
    removeCurrent: "වත්මන් පිටුව ඉවත් කරන්න",
    selectAll: "සියළු දත්ත තෝරන්න",
    removeAll: "සියළු දත්ත ඉවතලන්න",
    selectInvert: "වත්මන් පිටුව යටියනය"
  },
  Upload: {
    uploading: "උඩුගත වෙමින්...",
    removeFile: "ගොනුව ඉවතලන්න",
    uploadError: "උඩුගත වීමේ දෝෂයකි",
    previewFile: "ගොනුවේ පෙරදසුන",
    downloadFile: "ගොනුව බාගන්න"
  },
  Empty: {
    description: "දත්ත නැත"
  },
  Icon: {
    icon: "නිරූපකය"
  },
  Text: {
    edit: "සංස්කරණය",
    copy: "පිටපත්",
    copied: "පිටපත් විය",
    expand: "විහිදුවන්න"
  },
  PageHeader: {
    back: "ආපසු"
  },
  Form: {
    optional: "(විකල්පයකි)",
    defaultValidateMessages: {
      default: "${label} සඳහා ක්‍ෂේත්‍රය වලංගුකරණයේ දෝෂයකි",
      required: "${label} ඇතුල් කරන්න",
      enum: "[${enum}] වලින් එකක් ${label} විය යුතුය",
      whitespace: "${label} හිස් අකුරක් නොවිය යුතුය",
      date: {
        format: "${label} දිනයේ ආකෘතිය වැරදිය",
        parse: "${label} දිනයකට පරිවර්තනය කළ නොහැකිය",
        invalid: "${label} වලංගු නොවන දිනයකි"
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
        len: "${label} අකුරු ${len}ක් විය යුතුය",
        min: "${label} අවමය අකුරු ${min}ක් විය යුතුය",
        max: "${label} අකුරු ${max}ක් දක්වා විය යුතුය",
        range: "${label} අකුරු ${min}-${max}ක් අතර විය යුතුය"
      },
      number: {
        len: "${label} නිසැකව ${len} සමාන විය යුතුය",
        min: "${label} අවමය ${min} විය යුතුය",
        max: "${label} උපරිමය ${max} විය යුතුය",
        range: "${label} නිසැකව ${min}-${max} අතර විය යුතුය"
      },
      array: {
        len: "${len} ${label} විය යුතුය",
        min: "අවම වශයෙන් ${min} ${label}",
        max: "උපරිම වශයෙන් ${max} ${label}",
        range: "${label} ගණන ${min}-${max} අතර විය යුතුය"
      },
      pattern: {
        mismatch: "${pattern} රටාවට ${label} නොගැළපේ"
      }
    }
  },
  Image: {
    preview: "පෙරදසුන"
  }
};
o.default = Y;
var D = o;
const k = /* @__PURE__ */ _(D);
export {
  k as default
};
