function f(e) {
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
var o = s.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var c = {
  // Options.jsx
  items_per_page: "/ halaman",
  jump_to: "Menuju",
  jump_to_confirm: "konfirmasi",
  page: "Halaman",
  // Pagination.jsx
  prev_page: "Halaman Sebelumnya",
  next_page: "Halaman Berikutnya",
  prev_5: "5 Halaman Sebelumnya",
  next_5: "5 Halaman Berikutnya",
  prev_3: "3 Halaman Sebelumnya",
  next_3: "3 Halaman Berikutnya",
  page_size: "ukuran halaman"
};
i.default = c;
var n = {}, a = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var v = {
  locale: "id_ID",
  today: "Hari ini",
  now: "Sekarang",
  backToToday: "Kembali ke hari ini",
  ok: "Baik",
  clear: "Bersih",
  month: "Bulan",
  year: "Tahun",
  timeSelect: "pilih waktu",
  dateSelect: "pilih tanggal",
  weekSelect: "Pilih satu minggu",
  monthSelect: "Pilih satu bulan",
  yearSelect: "Pilih satu tahun",
  decadeSelect: "Pilih satu dekade",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Bulan sebelumnya (PageUp)",
  nextMonth: "Bulan selanjutnya (PageDown)",
  previousYear: "Tahun lalu (Control + kiri)",
  nextYear: "Tahun selanjutnya (Kontrol + kanan)",
  previousDecade: "Dekade terakhir",
  nextDecade: "Dekade berikutnya",
  previousCentury: "Abad terakhir",
  nextCentury: "Abad berikutnya"
}, m = v;
u.default = m;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const h = {
  placeholder: "Pilih waktu"
};
t.default = h;
var _ = o.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var k = _(u), g = _(t);
const D = {
  lang: Object.assign({
    placeholder: "Pilih tanggal",
    rangePlaceholder: ["Mulai tanggal", "Tanggal akhir"]
  }, k.default),
  timePickerLocale: Object.assign({}, g.default)
};
a.default = D;
var y = o.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var P = y(a);
n.default = P.default;
var d = o.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var b = d(i), T = d(n), x = d(a), I = d(t);
const M = {
  locale: "id",
  Pagination: b.default,
  DatePicker: x.default,
  TimePicker: I.default,
  Calendar: T.default,
  Table: {
    filterTitle: "Saring",
    filterConfirm: "OK",
    filterReset: "Hapus",
    selectAll: "Pilih semua di halaman ini",
    selectInvert: "Balikkan pilihan di halaman ini",
    sortTitle: "Urutkan"
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
    searchPlaceholder: "Cari",
    itemUnit: "item",
    itemsUnit: "item"
  },
  Upload: {
    uploading: "Mengunggah...",
    removeFile: "Hapus file",
    uploadError: "Kesalahan pengunggahan",
    previewFile: "File pratinjau",
    downloadFile: "Unduh berkas"
  },
  Empty: {
    description: "Tidak ada data"
  }
};
r.default = M;
var O = r;
const Y = /* @__PURE__ */ f(O);
export {
  Y as default
};
