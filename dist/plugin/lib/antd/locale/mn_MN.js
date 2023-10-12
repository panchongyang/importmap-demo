function p(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var l = {}, _ = { exports: {} };
(function(e) {
  function c(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = c, e.exports.__esModule = !0, e.exports.default = e.exports;
})(_);
var i = _.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var s = {
  // Options.jsx
  items_per_page: "/ хуудас",
  jump_to: "Шилжих",
  jump_to_confirm: "сонгох",
  page: "",
  // Pagination.jsx
  prev_page: "Өмнөх хуудас",
  next_page: "Дараагийн хуудас",
  prev_5: "Дараагийн 5 хуудас",
  next_5: "Дараагийн 5 хуудас",
  prev_3: "Дараагийн 3 хуудас",
  next_3: "Дараагийн 3 хуудас",
  page_size: "Page Size"
};
o.default = s;
var n = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var v = {
  locale: "mn_MN",
  today: "Өнөөдөр",
  now: "Одоо",
  backToToday: "Өнөөдөрлүү буцах",
  ok: "OK",
  clear: "Цэвэрлэх",
  month: "Сар",
  year: "Жил",
  timeSelect: "Цаг сонгох",
  dateSelect: "Огноо сонгох",
  weekSelect: "7 хоног сонгох",
  monthSelect: "Сар сонгох",
  yearSelect: "Жил сонгох",
  decadeSelect: "Арван сонгох",
  yearFormat: "YYYY",
  dateFormat: "YYYY/MM/DD",
  dayFormat: "DD",
  dateTimeFormat: "YYYY/MM/DD HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Өмнөх сар (PageUp)",
  nextMonth: "Дараа сар (PageDown)",
  previousYear: "Өмнөх жил (Control + left)",
  nextYear: "Дараа жил (Control + right)",
  previousDecade: "Өмнөх арван",
  nextDecade: "Дараа арван",
  previousCentury: "Өмнөх зуун",
  nextCentury: "Дараа зуун"
}, m = v;
u.default = m;
var a = {};
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
const M = {
  placeholder: "Цаг сонгох"
};
a.default = M;
var f = i.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var x = f(u), y = f(a);
const D = {
  lang: Object.assign({
    placeholder: "Огноо сонгох",
    rangePlaceholder: ["Эхлэх огноо", "Дуусах огноо"]
  }, x.default),
  timePickerLocale: Object.assign({}, y.default)
};
t.default = D;
var P = i.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var g = P(t);
n.default = g.default;
var d = i.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var N = d(o), Y = d(n), $ = d(t), h = d(a);
const O = {
  locale: "mn-mn",
  Pagination: N.default,
  DatePicker: $.default,
  TimePicker: h.default,
  Calendar: Y.default,
  Table: {
    filterTitle: "Хайх цэс",
    filterConfirm: "Тийм",
    filterReset: "Цэвэрлэх",
    selectAll: "Бүгдийг сонгох",
    selectInvert: "Бусдыг сонгох"
  },
  Modal: {
    okText: "Тийм",
    cancelText: "Цуцлах",
    justOkText: "Тийм"
  },
  Popconfirm: {
    okText: "Тийм",
    cancelText: "Цуцлах"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Хайх",
    itemUnit: "Зүйл",
    itemsUnit: "Зүйлүүд"
  },
  Upload: {
    uploading: "Хуулж байна...",
    removeFile: "Файл устгах",
    uploadError: "Хуулахад алдаа гарлаа",
    previewFile: "Файлыг түргэн үзэх",
    downloadFile: "Файлыг татах"
  },
  Empty: {
    description: "Мэдээлэл байхгүй байна"
  }
};
l.default = O;
var T = l;
const j = /* @__PURE__ */ p(T);
export {
  j as default
};
