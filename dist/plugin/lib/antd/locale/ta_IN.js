function _(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, p = { exports: {} };
(function(a) {
  function s(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = s, a.exports.__esModule = !0, a.exports.default = a.exports;
})(p);
var c = p.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var m = {
  // Options.jsx
  items_per_page: "/ பக்கம்",
  jump_to: "அடுத்த",
  jump_to_confirm: "உறுதிப்படுத்தவும்",
  page: "",
  // Pagination.jsx
  prev_page: "முந்தைய பக்கம்",
  next_page: "அடுத்த பக்கம்",
  prev_5: "முந்தைய 5 பக்கங்கள்",
  next_5: "அடுத்த 5 பக்கங்கள்",
  prev_3: "முந்தைய 3 பக்கங்கள்",
  next_3: "அடுத்த 3 பக்கங்கள்",
  page_size: "Page Size"
};
n.default = m;
var i = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var $ = {
  locale: "ta_IN",
  today: "இன்று",
  now: "இப்போது",
  backToToday: "இன்றுக்கு திரும்பு",
  ok: "சரி",
  clear: "அழி",
  month: "மாதம்",
  year: "வருடம்",
  timeSelect: "நேரத்தைத் தேர்ந்தெடு",
  dateSelect: "தேதியைத் தேர்ந்தெடு",
  weekSelect: "வாரத்தைத் தேர்வுசெய்க",
  monthSelect: "மாதத்தைத் தேர்வுசெய்க",
  yearSelect: "வருடத்தைத் தேர்வுசெய்க",
  decadeSelect: "தசாப்தத்தைத் தேர்வுசெய்க",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "முந்தைய மாதம் (PageUp)",
  nextMonth: "அடுத்த மாதம் (PageDown)",
  previousYear: "முந்தைய வருடம் (Control + left)",
  nextYear: "அடுத்த வருடம் (Control + right)",
  previousDecade: "முந்தைய தசாப்தம்",
  nextDecade: "அடுத்த தசாப்தம்",
  previousCentury: "முந்தைய நூற்றாண்டு",
  nextCentury: "அடுத்த நூற்றாண்டு"
}, v = $;
d.default = v;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const b = {
  placeholder: "நேரத்தைத் தேர்ந்தெடுக்கவும்"
};
l.default = b;
var f = c.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var g = f(d), x = f(l);
const h = {
  lang: Object.assign({
    placeholder: "தேதியைத் தேர்ந்தெடுக்கவும்",
    rangePlaceholder: ["தொடக்க தேதி", "கடைசி தேதி"],
    quarterPlaceholder: "காலாண்டைத் தேர்ந்தெடுக்கவும்",
    monthPlaceholder: "மாதத்தைத் தேர்ந்தெடுக்கவும்",
    weekPlaceholder: "வாரத்தைத் தேர்ந்தெடுக்கவும்",
    rangeYearPlaceholder: ["தொடக்க ஆண்டு", "இறுதி ஆண்டு"],
    rangeQuarterPlaceholder: ["காலாண்டு தொடக்கம்", "இறுதி காலாண்டு"],
    rangeMonthPlaceholder: ["தொடக்க மாதம்", "இறுதி மாதம்"],
    rangeWeekPlaceholder: ["வாரம் தொடங்கு", "இறுதி வாரம்"]
  }, g.default),
  timePickerLocale: Object.assign({}, x.default)
};
t.default = h;
var P = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = P(t);
i.default = y.default;
var u = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var I = u(n), N = u(i), T = u(t), M = u(l);
const e = "${label} is not a valid ${type}", Y = {
  locale: "ta",
  Pagination: I.default,
  DatePicker: T.default,
  TimePicker: M.default,
  Calendar: N.default,
  // locales for all comoponents
  global: {
    placeholder: "தேதியைத் தேர்ந்தெடுக்கவும்"
  },
  Table: {
    filterTitle: "பட்டியலை மூடு",
    filterConfirm: "சரி",
    filterReset: "மீட்டமை",
    emptyText: "தகவல் இல்லை",
    selectAll: "அனைத்தையும் தேர்வுசெய்",
    selectInvert: "தலைகீழாக மாற்று",
    sortTitle: "தலைப்பை வரிசைப்படுத்தவும்",
    filterEmptyText: "No filters",
    filterCheckall: "அனைத்து பொருட்களையும் தேர்ந்தெடுக்கவும்",
    filterSearchPlaceholder: "வடிப்பான்களில் தேடவும்",
    expand: "வரிசையை விரிவாக்கு",
    collapse: "வரிசையைச் சுருக்கு",
    triggerDesc: "இறங்குவரிசையை வரிசைப்படுத்த கிளிக் செய்யவும்",
    triggerAsc: "ஏறுவரிசையில் வரிசைப்படுத்த கிளிக் செய்யவும்",
    cancelSort: "வரிசையாக்கத்தை ரத்து செய்ய கிளிக் செய்யவும்"
  },
  Modal: {
    okText: "சரி",
    cancelText: "ரத்து செய்யவும்",
    justOkText: "பரவாயில்லை, சரி"
  },
  Popconfirm: {
    okText: "சரி",
    cancelText: "ரத்து செய்யவும்"
  },
  Transfer: {
    titles: ["", ""],
    notFoundContent: "உள்ளடக்கம் கிடைக்கவில்லை",
    searchPlaceholder: "இங்கு தேடவும்",
    itemUnit: "தகவல்",
    itemsUnit: "தகவல்கள்"
  },
  Upload: {
    uploading: "பதிவேற்றுகிறது...",
    removeFile: "கோப்பை அகற்று",
    uploadError: "பதிவேற்றுவதில் பிழை",
    previewFile: "கோப்பை முன்னோட்டமிடுங்கள்",
    downloadFile: "பதிவிறக்க கோப்பு"
  },
  Empty: {
    description: "தகவல் இல்லை"
  },
  Icon: {
    icon: "உருவம்"
  },
  Text: {
    edit: "திருத்து",
    copy: "நகல் எடு",
    copied: "நகல் எடுக்கப்பட்டது",
    expand: "விரிவாக்கவும்"
  },
  PageHeader: {
    back: "பின் செல்லவும்"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "${label}க்கான புல சரிபார்ப்பு பிழை",
      required: "${label} ஐ உள்ளிடவும்",
      enum: "${label} கண்டிப்பாக [${enum}] இல் ஒன்றாக இருக்க வேண்டும்",
      whitespace: "${label} வெற்று எழுத்தாக இருக்கக்கூடாது",
      date: {
        format: "${label} தேதி வடிவம் தவறானது",
        parse: "${label}ஐ தேதியாக மாற்ற முடியாது",
        invalid: "${label} என்பது தவறான தேதி"
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
        len: "${label} கண்டிப்பாக ${len} எழுத்துகளாக இருக்க வேண்டும்",
        min: "${label} குறைந்தது ${min} எழுத்துகளாக இருக்க வேண்டும்",
        max: "${label} ${max} எழுத்துகள் வரை இருக்க வேண்டும்",
        range: "${label} கண்டிப்பாக ${min}-${max} எழுத்துகளுக்கு இடையில் இருக்க வேண்டும்"
      },
      number: {
        len: "${label} கண்டிப்பாக ${len}க்கு சமமாக இருக்க வேண்டும்",
        min: "${label} குறைந்தபட்சம் ${min} ஆக இருக்க வேண்டும்",
        max: "${label} அதிகபட்சம் ${max} ஆக இருக்க வேண்டும்",
        range: "${label} கண்டிப்பாக ${min}-${max} இடையே இருக்க வேண்டும்"
      },
      array: {
        len: "${len} ${label} ஆக இருக்க வேண்டும்",
        min: "குறைந்தது ${min} ${label}",
        max: "அதிகபட்சம் ${max} ${label}",
        range: "${label} இன் தொகை கண்டிப்பாக ${min}-${max} இடையே இருக்க வேண்டும்"
      },
      pattern: {
        mismatch: "${label} ஆனது ${pattern} வடிவத்துடன் பொருந்தவில்லை"
      }
    }
  },
  Image: {
    preview: "முன்னோட்ட"
  },
  QRCode: {
    expired: "QR குறியீடு காலாவதியானது",
    refresh: "புதுப்பிப்பு"
  }
};
o.default = Y;
var D = o;
const k = /* @__PURE__ */ _(D);
export {
  k as default
};
