function c(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var r = {}, s = { exports: {} };
(function(e) {
  function p(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  e.exports = p, e.exports.__esModule = !0, e.exports.default = e.exports;
})(s);
var d = s.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var _ = {
  // Options.jsx
  items_per_page: "/ halaman",
  jump_to: "Lompat ke",
  jump_to_confirm: "Sahkan",
  page: "",
  // Pagination.jsx
  prev_page: "Halaman sebelumnya",
  next_page: "Halam seterusnya",
  prev_5: "5 halaman sebelum",
  next_5: "5 halaman seterusnya",
  prev_3: "3 halaman sebelumnya",
  next_3: "3 halaman seterusnya",
  page_size: "Page Size"
};
i.default = _;
var n = {}, a = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var f = {
  locale: "ms_MY",
  today: "Hari ini",
  now: "Sekarang",
  backToToday: "Kembali ke hari ini",
  ok: "OK",
  timeSelect: "Pilih masa",
  dateSelect: "Pilih tarikh",
  weekSelect: "Pilih minggu",
  clear: "Padam",
  month: "Bulan",
  year: "Tahun",
  previousMonth: "Bulan lepas",
  nextMonth: "Bulan depan",
  monthSelect: "Pilih bulan",
  yearSelect: "Pilih tahun",
  decadeSelect: "Pilih dekad",
  yearFormat: "YYYY",
  dayFormat: "D",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousYear: "Tahun lepas (Ctrl+left)",
  nextYear: "Tahun depan (Ctrl+right)",
  previousDecade: "Dekad lepas",
  nextDecade: "Dekad depan",
  previousCentury: "Abad lepas",
  nextCentury: "Abad depan"
}, v = f;
u.default = v;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const h = {
  placeholder: "Sila pilih masa"
};
t.default = h;
var m = d.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var M = m(u), k = m(t);
const Y = {
  lang: Object.assign({
    placeholder: "Pilih tarikh",
    rangePlaceholder: ["Tarikh mula", "Tarikh akhir"]
  }, M.default),
  timePickerLocale: Object.assign({}, k.default)
};
a.default = Y;
var y = d.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var g = y(a);
n.default = g.default;
var o = d.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var P = o(i), T = o(n), b = o(a), x = o(t);
const D = {
  locale: "ms-my",
  Pagination: P.default,
  DatePicker: b.default,
  TimePicker: x.default,
  Calendar: T.default,
  global: {
    placeholder: "Sila pilih"
  },
  PageHeader: {
    back: "Kembali"
  },
  Text: {
    edit: "Sunting",
    copy: "Salin",
    copied: "Berjaya menyalin",
    expand: "Kembang"
  },
  Empty: {
    description: "Tiada data"
  },
  Table: {
    filterTitle: "Cari dengan tajuk",
    filterConfirm: "OK",
    filterReset: "Menetapkan semula",
    emptyText: "Tiada data",
    selectAll: "Pilih semua",
    selectInvert: "Terbalikkan"
  },
  Modal: {
    okText: "OK",
    cancelText: "Batal",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Batal"
  },
  Transfer: {
    titles: ["", ""],
    notFoundContent: "Tidak dijumpai",
    searchPlaceholder: "Carian di sini",
    itemUnit: "item",
    itemsUnit: "item"
  },
  Icon: {
    icon: "ikon"
  },
  Select: {
    notFoundContent: "Tidak Dijumpai"
  },
  Upload: {
    uploading: "Sedang memuat naik...",
    removeFile: "Buang fail",
    uploadError: "Masalah muat naik",
    previewFile: "Tengok fail",
    downloadFile: "Muat turun fail"
  }
};
r.default = D;
var O = r;
const S = /* @__PURE__ */ c(O);
export {
  S as default
};
