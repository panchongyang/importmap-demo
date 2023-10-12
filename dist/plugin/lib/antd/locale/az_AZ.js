function p(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var i = {}, s = { exports: {} };
(function(a) {
  function v(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = v, a.exports.__esModule = !0, a.exports.default = a.exports;
})(s);
var m = s.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var c = {
  // Options.jsx
  items_per_page: "/ səhifə",
  jump_to: "Get",
  jump_to_confirm: "təsdiqlə",
  page: "",
  // Pagination.jsx
  prev_page: "Əvvəlki Səhifə",
  next_page: "Növbəti Səhifə",
  prev_5: "Əvvəlki 5 Səhifə",
  next_5: "Növbəti 5 Səhifə",
  prev_3: "Əvvəlki 3 Səhifə",
  next_3: "Növbəti 3 Səhifə",
  page_size: "Page Size"
};
n.default = c;
var o = {}, l = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var _ = {
  locale: "az_AZ",
  today: "Bugün",
  now: "İndi",
  backToToday: "Bugünə qayıt",
  ok: "Təsdiq",
  clear: "Təmizlə",
  month: "Ay",
  year: "İl",
  timeSelect: "vaxtı seç",
  dateSelect: "tarixi seç",
  weekSelect: "Həftə seç",
  monthSelect: "Ay seç",
  yearSelect: "il seç",
  decadeSelect: "Onillik seçin",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Əvvəlki ay (PageUp)",
  nextMonth: "Növbəti ay (PageDown)",
  previousYear: "Sonuncu il (Control + left)",
  nextYear: "Növbəti il (Control + right)",
  previousDecade: "Sonuncu onillik",
  nextDecade: "Növbəti onillik",
  previousCentury: "Sonuncu əsr",
  nextCentury: "Növbəti əsr"
}, $ = _;
u.default = $;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const x = {
  placeholder: "Vaxtı seç"
};
t.default = x;
var f = m.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var b = f(u), y = f(t);
const h = {
  lang: Object.assign({
    placeholder: "Tarix seçin",
    rangePlaceholder: ["Başlama tarixi", "Bitmə tarixi"]
  }, b.default),
  timePickerLocale: Object.assign({}, y.default)
};
l.default = h;
var g = m.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var k = g(l);
o.default = k.default;
var d = m.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var z = d(n), T = d(o), A = d(l), S = d(t);
const e = "${label}Hökmlü deyil${type}", M = {
  locale: "az",
  Pagination: z.default,
  DatePicker: A.default,
  TimePicker: S.default,
  Calendar: T.default,
  Table: {
    filterTitle: "Filter menyu",
    filterConfirm: "Axtar",
    filterReset: "Sıfırla",
    emptyText: "Məlumat yoxdur",
    selectAll: "Cari səhifəni seç",
    selectInvert: "Invert current page"
  },
  Modal: {
    okText: "Bəli",
    cancelText: "Ləğv et",
    justOkText: "Bəli"
  },
  Popconfirm: {
    okText: "Bəli",
    cancelText: "Ləğv et"
  },
  Transfer: {
    titles: ["", ""],
    notFoundContent: "Tapılmadı",
    searchPlaceholder: "Burada axtar",
    itemUnit: "item",
    itemsUnit: "items"
  },
  Select: {
    notFoundContent: "Tapılmadı"
  },
  Upload: {
    uploading: "Yüklənir...",
    removeFile: "Faylı sil",
    uploadError: "Yükləmə xətası",
    previewFile: "Fayla önbaxış"
  },
  Form: {
    optional: "（Seçimli）",
    defaultValidateMessages: {
      default: "Sahə təsdiq xətası${label}",
      required: "Xahiş edirik daxil olun${label}",
      enum: "${label}Onlardan biri olmalıdır[${enum}]",
      whitespace: "${label}Null xarakter ola bilməz",
      date: {
        format: "${label}Tarix formatı hökmlü deyil",
        parse: "${label}Tarixi döndərmək mümkün deyil",
        invalid: "${label}səhv tarixdir"
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
        len: "${label}Olmalıdır${len}işarələr",
        min: "${label}ən az${min}işarələr",
        max: "${label}ən çox${max}işarələr",
        range: "${label}Olmalıdır${min}-${max}hərflər arasında"
      },
      number: {
        len: "${label}Bərabər olmalıdır${len}",
        min: "${label}Minimal dəyəri${min}",
        max: "${label}Maksimal qiymət:${max}",
        range: "${label}Olmalıdır${min}-${max}aralarında"
      },
      array: {
        len: "Olmalıdır${len}parça${label}",
        min: "ən az${min}parça${label}",
        max: "ən çox${max}parça${label}",
        range: "${label}miqdarıOlmalıdır${min}-${max}aralarında"
      },
      pattern: {
        mismatch: "${label}Şablona uyğun gəlmir${pattern}"
      }
    }
  }
};
i.default = M;
var O = i;
const P = /* @__PURE__ */ p(O);
export {
  P as default
};
