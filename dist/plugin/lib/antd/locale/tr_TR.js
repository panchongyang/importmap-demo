function p(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var n = {}, u = { exports: {} };
(function(a) {
  function f(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  a.exports = f, a.exports.__esModule = !0, a.exports.default = a.exports;
})(u);
var m = u.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var y = {
  // Options.jsx
  items_per_page: "/ sayfa",
  jump_to: "Git",
  jump_to_confirm: "onayla",
  page: "Sayfa",
  // Pagination.jsx
  prev_page: "Önceki Sayfa",
  next_page: "Sonraki Sayfa",
  prev_5: "Önceki 5 Sayfa",
  next_5: "Sonraki 5 Sayfa",
  prev_3: "Önceki 3 Sayfa",
  next_3: "Sonraki 3 Sayfa",
  page_size: "sayfa boyutu"
};
o.default = y;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = {
  locale: "tr_TR",
  today: "Bugün",
  now: "Şimdi",
  backToToday: "Bugüne Geri Dön",
  ok: "Tamam",
  clear: "Temizle",
  month: "Ay",
  year: "Yıl",
  timeSelect: "Zaman Seç",
  dateSelect: "Tarih Seç",
  monthSelect: "Ay Seç",
  yearSelect: "Yıl Seç",
  decadeSelect: "On Yıl Seç",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Önceki Ay (PageUp)",
  nextMonth: "Sonraki Ay (PageDown)",
  previousYear: "Önceki Yıl (Control + Sol)",
  nextYear: "Sonraki Yıl (Control + Sağ)",
  previousDecade: "Önceki On Yıl",
  nextDecade: "Sonraki On Yıl",
  previousCentury: "Önceki Yüzyıl",
  nextCentury: "Sonraki Yüzyıl"
}, $ = _;
d.default = $;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const v = {
  placeholder: "Zaman seç",
  rangePlaceholder: ["Başlangıç zamanı", "Bitiş zamanı"]
};
r.default = v;
var c = m.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var k = c(d), T = c(r);
const g = {
  lang: Object.assign({
    placeholder: "Tarih seç",
    yearPlaceholder: "Yıl seç",
    quarterPlaceholder: "Çeyrek seç",
    monthPlaceholder: "Ay seç",
    weekPlaceholder: "Hafta seç",
    rangePlaceholder: ["Başlangıç tarihi", "Bitiş tarihi"],
    rangeYearPlaceholder: ["Başlangıç yılı", "Bitiş yılı"],
    rangeMonthPlaceholder: ["Başlangıç ayı", "Bitiş ayı"],
    rangeWeekPlaceholder: ["Başlangıç haftası", "Bitiş haftası"]
  }, k.default),
  timePickerLocale: Object.assign({}, T.default)
};
l.default = g;
var b = m.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var h = b(l);
i.default = h.default;
var s = m.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var S = s(o), x = s(i), Y = s(l), P = s(r);
const e = "${label} geçerli bir ${type} değil", R = {
  locale: "tr",
  Pagination: S.default,
  DatePicker: Y.default,
  TimePicker: P.default,
  Calendar: x.default,
  global: {
    placeholder: "Lütfen seçiniz"
  },
  Table: {
    filterTitle: "Filtre menüsü",
    filterConfirm: "Tamam",
    filterReset: "Sıfırla",
    filterEmptyText: "Filtre yok",
    selectAll: "Tüm sayfayı seç",
    selectInvert: "Tersini seç",
    selectionAll: "Tümünü seç",
    sortTitle: "Sırala",
    expand: "Satırı genişlet",
    collapse: "Satırı daralt",
    triggerDesc: "Azalan düzende sırala",
    triggerAsc: "Artan düzende sırala",
    cancelSort: "Sıralamayı kaldır"
  },
  Modal: {
    okText: "Tamam",
    cancelText: "İptal",
    justOkText: "Tamam"
  },
  Popconfirm: {
    okText: "Tamam",
    cancelText: "İptal"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Arama",
    itemUnit: "Öğe",
    itemsUnit: "Öğeler",
    remove: "Kaldır",
    selectCurrent: "Tüm sayfayı seç",
    removeCurrent: "Sayfayı kaldır",
    selectAll: "Tümünü seç",
    removeAll: "Tümünü kaldır",
    selectInvert: "Tersini seç"
  },
  Upload: {
    uploading: "Yükleniyor...",
    removeFile: "Dosyayı kaldır",
    uploadError: "Yükleme hatası",
    previewFile: "Dosyayı önizle",
    downloadFile: "Dosyayı indir"
  },
  Empty: {
    description: "Veri Yok"
  },
  Icon: {
    icon: "ikon"
  },
  Text: {
    edit: "Düzenle",
    copy: "Kopyala",
    copied: "Kopyalandı",
    expand: "Genişlet"
  },
  PageHeader: {
    back: "Geri"
  },
  Form: {
    optional: "(opsiyonel)",
    defaultValidateMessages: {
      default: "Alan doğrulama hatası ${label}",
      required: "${label} gerekli bir alan",
      enum: "${label} şunlardan biri olmalı: [${enum}]",
      whitespace: "${label} sadece boşluk olamaz",
      date: {
        format: "${label} tarih biçimi geçersiz",
        parse: "${label} bir tarihe dönüştürülemedi",
        invalid: "${label} geçersiz bir tarih"
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
        len: "${label} ${len} karakter olmalı",
        min: "${label} en az ${min} karakter olmalı",
        max: "${label} en çok ${max} karakter olmalı",
        range: "${label} ${min}-${max} karakter arası olmalı"
      },
      number: {
        len: "${label} ${len} olmalı",
        min: "${label} en az ${min} olmalı",
        max: "${label} en çok ${max} olmalı",
        range: "${label} ${min}-${max} arası olmalı"
      },
      array: {
        len: "${label} sayısı ${len} olmalı",
        min: "${label} sayısı en az ${min} olmalı",
        max: "${label} sayısı en çok ${max} olmalı",
        range: "${label} sayısı ${min}-${max} arası olmalı"
      },
      pattern: {
        mismatch: "${label} şu kalıpla eşleşmeli: ${pattern}"
      }
    }
  },
  Image: {
    preview: "Önizleme"
  }
};
n.default = R;
var D = n;
const z = /* @__PURE__ */ p(D);
export {
  z as default
};
