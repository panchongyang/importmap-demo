function f(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, m = { exports: {} };
(function(a) {
  function s(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports;
})(m);
var c = m.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var _ = {
  // Options.jsx
  items_per_page: "/ စာမျက်နှာ",
  jump_to: "သွားရန်",
  jump_to_confirm: "သေချာပြီ",
  page: "",
  // Pagination.jsx
  prev_page: "ယခင်စာမျက်နှာ",
  next_page: "နောက်စာမျက်နှာ",
  prev_5: "ယခင် ၅ခုမြောက်",
  next_5: "နောက် ၅ခုမြောက်",
  prev_3: "ယခင် ၃ခုမြောက်",
  next_3: "နောက် ၃ခုမြောက်",
  page_size: "Page Size"
};
n.default = _;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var $ = {
  locale: "my_MM",
  today: "ယနေ့",
  now: "ယခု",
  backToToday: "ယနေ့မတိုင်ခင်သို့",
  ok: "OK",
  clear: "ရှင်းမည်",
  month: "လ",
  year: "နှစ်",
  timeSelect: "အချိန်ကိုရွေး",
  dateSelect: "နေ့ကိုရွေး",
  weekSelect: "သီတင်းပတ်ကိုရွေး",
  monthSelect: "လကိုရွေး",
  yearSelect: "နှစ်ကိုရွေး",
  decadeSelect: "ဆယ်စုနှစ်ကိုရွေး",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "ယခင်လ (PageUp)",
  nextMonth: "နောက်လ (PageDown)",
  previousYear: "ယခင်နှစ် (Control + left)",
  nextYear: "နောက်နှစ် (Control + right)",
  previousDecade: "ယခင်ဆယ်စုနှစ်",
  nextDecade: "နောက်ဆယ်စုနှစ်",
  previousCentury: "ယခင်ရာစုနှစ်",
  nextCentury: "နောက်ရာစုနှစ်"
}, v = $;
d.default = v;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const M = {
  placeholder: "အချိန်ရွေးပါ။",
  rangePlaceholder: ["စတင်ချိန်", "ကုန်ဆုံးချိန်"]
};
t.default = M;
var p = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var y = p(d), b = p(t);
const x = {
  lang: Object.assign({
    placeholder: "ရက်စွဲကို ရွေးပါ။",
    yearPlaceholder: "နှစ်ကို ရွေးပါ။",
    quarterPlaceholder: "လေးပုံတစ်ပုံကို ရွေးပါ။",
    monthPlaceholder: "လကိုရွေးပါ။",
    weekPlaceholder: "ရက်သတ္တပတ်ကို ရွေးပါ။",
    rangePlaceholder: ["စတင်သည့်ရက်စွဲ", "ကုန်ဆုံးရက်"],
    rangeYearPlaceholder: ["စတင်သည့်နှစ်", "နှစ်ကုန်"],
    rangeQuarterPlaceholder: ["လေးပုံတစ်ပုံကို စတင်ပါ။", "အဆုံးသုံးလ"],
    rangeMonthPlaceholder: ["စတင်လ", "လကုန်"],
    rangeWeekPlaceholder: ["ရက်သတ္တပတ်စတင်ပါ။", "သီတင်းပတ်ကုန်"]
  }, y.default),
  timePickerLocale: Object.assign({}, b.default)
};
l.default = x;
var h = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var g = h(l);
i.default = g.default;
var u = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = u(n), T = u(i), Y = u(l), D = u(t);
const e = "${label} သည် တရားဝင် ${type} မဟုတ်ပါ", k = {
  locale: "my",
  Pagination: P.default,
  DatePicker: Y.default,
  TimePicker: D.default,
  Calendar: T.default,
  // locales for all components
  global: {
    placeholder: "ကျေးဇူးပြု၍ ရွေးချယ်ပါ။"
  },
  Table: {
    filterTitle: "စစ်ထုတ်ခြင်း မီနူ",
    filterConfirm: "အိုကေ",
    filterReset: "ပြန်လည်သတ်မှတ်ပါ။",
    filterEmptyText: "စစ်ထုတ်မှုများမရှိပါ။",
    filterCheckall: "ပစ္စည်းအားလုံးကို ရွေးပါ။",
    filterSearchPlaceholder: "စစ်ထုတ်မှုများတွင် ရှာဖွေပါ။",
    selectAll: "လက်ရှိစာမျက်နှာကို ရွေးပါ။",
    selectInvert: "လက်ရှိစာမျက်နှာကို ပြောင်းလိုက်ပါ။",
    selectNone: "ဒေတာအားလုံးကို ရှင်းလင်းပါ။",
    selectionAll: "ဒေတာအားလုံးကို ရွေးပါ။",
    sortTitle: "မျိုးတူစု",
    expand: "အတန်းချဲ့ပါ။",
    collapse: "အတန်းကို ခေါက်သိမ်းပါ။",
    cancelSort: "အမျိုးအစားခွဲခြင်းကို ပယ်ဖျက်ရန် နှိပ်ပါ။"
  },
  Tour: {
    Next: "နောက်တစ်ခု",
    Previous: "အရင်",
    Finish: "ပြီးအောင်"
  },
  Modal: {
    okText: "အိုကေ",
    cancelText: "မလုပ်တော့",
    justOkText: "အိုကေ"
  },
  Popconfirm: {
    cancelText: "မလုပ်တော့",
    okText: "အိုကေ"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ဒီမှာရှာပါ။",
    itemUnit: "ပစ္စည်း",
    itemsUnit: "ပစ္စည်းများ",
    remove: "ဖယ်ရှားပါ။",
    selectCurrent: "လက်ရှိစာမျက်နှာကို ရွေးပါ။",
    removeCurrent: "လက်ရှိစာမျက်နှာကို ဖယ်ရှားပါ။",
    selectAll: "ဒေတာအားလုံးကို ရွေးပါ။",
    removeAll: "ဒေတာအားလုံးကို ဖယ်ရှားပါ။",
    selectInvert: "လက်ရှိစာမျက်နှာကို ပြောင်းလိုက်ပါ။"
  },
  Upload: {
    uploading: "တင်ခြင်း။...",
    removeFile: "ဖိုင်ကို ဖယ်ရှားပါ။",
    uploadError: "အပ်လုဒ်အမှား",
    previewFile: "ဖိုင်ကို အစမ်းကြည့်ပါ။",
    downloadFile: "ဖိုင်ကိုဒေါင်းလုဒ်လုပ်ပါ။"
  },
  Empty: {
    description: "ဒေတာမရှိပါ။"
  },
  Icon: {
    icon: "အိုင်ကွန်"
  },
  Text: {
    edit: "တည်းဖြတ်ပါ။",
    copy: "ကော်ပီ",
    copied: "ကူးယူသည်။",
    expand: "ချဲ့ထွင်ပါ။"
  },
  PageHeader: {
    back: "ကျော"
  },
  Form: {
    optional: "(ချန်လှပ်ထားနိုင်သည်)",
    defaultValidateMessages: {
      default: "${label} အတွက် အကွက်အတည်ပြုခြင်း အမှား",
      required: "${label} ကို ထည့်ပါ",
      enum: "${label} သည် [${enum}] မှ တစ်ခု ဖြစ်ရမည်",
      whitespace: "${label} သည် အလွတ်စာလုံးမဖြစ်ရပါ။",
      date: {
        format: "${label} ရက်စွဲဖော်မတ်သည် မမှန်ကန်ပါ။",
        parse: "${label} ကို ရက်စွဲအဖြစ် ပြောင်းလဲ၍မရပါ။",
        invalid: "${label} သည် မမှန်ကန်သော ရက်စွဲတစ်ခုဖြစ်သည်။"
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
        len: "${label} သည် ${len} စာလုံးဖြစ်ရမည်။",
        min: "${label} သည် အနည်းဆုံး စာလုံး ${min} ရှိရမည်။",
        max: "${label} သည် ${max} စာလုံးအထိ ရှိရပါမည်။",
        range: "${label} သည် ${min}-${max} စာလုံးကြားရှိရမည်။"
      },
      number: {
        len: "${label} သည် ${len} နှင့် ညီရမည်",
        min: "${label} သည် အနည်းဆုံး ${min} ဖြစ်ရမည်",
        max: "${label} သည် အများဆုံး ${max} ဖြစ်ရမည်",
        range: "${label} သည် ${min}-${max} ကြားရှိရမည်"
      },
      array: {
        len: "${len} ${label} ဖြစ်ရမည်",
        min: "အနည်းဆုံး ${min} ${label}",
        max: "အများဆုံး ${max} ${label}",
        range: "${label} ၏ ပမာဏသည် ${min}-${max} အကြား ဖြစ်ရမည်"
      },
      pattern: {
        mismatch: "${label} သည် ပုံစံ ${pattern} နှင့် မကိုက်ညီပါ"
      }
    }
  },
  Image: {
    preview: "စမ်းကြည့်ပါ။"
  },
  QRCode: {
    expired: "QR ကုဒ် သက်တမ်းကုန်သွားပါပြီ။",
    refresh: "ပြန်လည်စတင်ပါ။"
  }
};
o.default = k;
var O = o;
const j = /* @__PURE__ */ f(O);
export {
  j as default
};
