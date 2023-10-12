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
  items_per_page: "/старонка",
  jump_to: "Перайсці",
  jump_to_confirm: "Пацвердзіць",
  page: "",
  // Pagination.jsx
  prev_page: "Назад",
  next_page: "Наперад",
  prev_5: "Папярэднія 5",
  next_5: "Наступныя 5",
  prev_3: "Папярэднія 3",
  next_3: "Наступныя 3",
  page_size: "памер старонкі"
};
n.default = m;
var i = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var $ = {
  locale: "by_BY",
  today: "Сёння",
  now: "Зараз",
  backToToday: "Дадзеная дата",
  ok: "OK",
  clear: "Ачысціць",
  month: "Месяц",
  year: "Год",
  timeSelect: "Выбраць час",
  dateSelect: "Выбраць дату",
  weekSelect: "Выбраць тыдзень",
  monthSelect: "Выбраць месяц",
  yearSelect: "Выбраць год",
  decadeSelect: "Выбраць дзесяцігоддзе",
  yearFormat: "YYYY",
  dateFormat: "D-M-YYYY",
  dayFormat: "D",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Папярэдні месяц (PageUp)",
  nextMonth: "Наступны месяц (PageDown)",
  previousYear: "Папярэдні год (Control + left)",
  nextYear: "Наступны год (Control + right)",
  previousDecade: "Папярэдняе дзесяцігоддзе",
  nextDecade: "Наступнае дзесяцігоддзе",
  previousCentury: "Папярэдні век",
  nextCentury: "Наступны век"
}, b = $;
d.default = b;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const v = {
  placeholder: "Выберыце час",
  rangePlaceholder: ["Час пачатку", "Час заканчэння"]
};
t.default = v;
var s = c.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var y = s(d), g = s(t);
const x = {
  lang: Object.assign({
    placeholder: "Выберыце дату",
    yearPlaceholder: "Выберыце год",
    quarterPlaceholder: "Выберыце квартал",
    monthPlaceholder: "Выберыце месяц",
    weekPlaceholder: "Выберыце тыдзень",
    rangePlaceholder: ["Дата пачатку", "Дата заканчэння"],
    rangeYearPlaceholder: ["Год пачатку", "Год заканчэння"],
    rangeQuarterPlaceholder: ["Квартал пачатку", "Квартал заканчэння"],
    rangeMonthPlaceholder: ["Месяц пачатку", "Месяц заканчэння"],
    rangeWeekPlaceholder: ["Тыдзень пачаку", "Тыдзень заканчэння"]
  }, y.default),
  timePickerLocale: Object.assign({}, g.default)
};
l.default = x;
var Y = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var h = Y(l);
i.default = h.default;
var u = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = u(n), B = u(i), T = u(l), M = u(t);
const e = "${label} не з'яўляецца тыпам ${type}", O = {
  locale: "by",
  Pagination: P.default,
  DatePicker: T.default,
  TimePicker: M.default,
  Calendar: B.default,
  global: {
    placeholder: "Калі ласка, выберыце"
  },
  Table: {
    filterTitle: "Фільтр",
    filterConfirm: "OK",
    filterReset: "Скінуць",
    filterEmptyText: "Без фільтраў",
    filterCheckall: "Выбраць усё",
    filterSearchPlaceholder: "Пошук фільтраў",
    emptyText: "Няма даных",
    selectAll: "Выбраць усё",
    selectInvert: "Інвертаваць выбар",
    selectNone: "Ачысціць усе даныя",
    selectionAll: "Выбраць усе даныя",
    sortTitle: "Сартаванне",
    expand: "Разгарнуць радок",
    collapse: "Згарнуць радок",
    triggerDesc: "Націсніце для сартавання па ўбыванні",
    triggerAsc: "Націсніце для сартавання па ўзрастанні",
    cancelSort: "Націсніце, каб адмяніць сартаванне"
  },
  Modal: {
    okText: "OK",
    cancelText: "Адмена",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Адмена"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Пошук",
    itemUnit: "элем.",
    itemsUnit: "элем.",
    remove: "Выдаліць",
    selectCurrent: "Вылучыць бягучую старонку",
    removeCurrent: "Выдаліць бягучую старонку",
    selectAll: "Выбраць усе даныя",
    removeAll: "Выдаліць усе даныя",
    selectInvert: "Паказаць у адваротным парадку"
  },
  Upload: {
    uploading: "Запампоўка...",
    removeFile: "Выдаліць файл",
    uploadError: "Адбылася памылка пры запампоўцы",
    previewFile: "Перадпрагляд файла",
    downloadFile: "Спампаваць файл"
  },
  Empty: {
    description: "Няма даных"
  },
  Icon: {
    icon: "Іконка"
  },
  Text: {
    edit: "Рэдагаваць",
    copy: "Капіяваць",
    copied: "Капіяванне завершана",
    expand: "Разгарнуць"
  },
  PageHeader: {
    back: "Назад"
  },
  Form: {
    optional: "(не абавязкова)",
    defaultValidateMessages: {
      default: "Памылка праверкі поля «${label}»",
      required: "Калі ласка, увядзіце «${label}»",
      enum: "Поле «${label}» павінна быць адным з [${enum}]",
      whitespace: "Поле «${label}» не можа быць пустым",
      date: {
        format: "Поле «${label}» мае няправільны фармат даты",
        parse: "Поле «${label}» не можа быць пераўтворана ў дату",
        invalid: "Поле «${label}» не з'яўляецца карэктнай датай"
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
        len: "Значэнне поля «${label}» павінна мець даўжыню ${len} сімвалаў",
        min: "Значэнне поля «${label}» павінна мець не меней за ${min} сімвалаў",
        max: "Значэнне поля «${label}» павінна быць не даўжэй за ${max} сімвалаў",
        range: "Значэнне поля «${label}» павінна мець даўжыню ${min}-${max} сімвалаў"
      },
      number: {
        len: "Значэнне поля «${label}» павінна быць роўнае ${len}",
        min: "Значэнне поля «${label}» павінна быць больш або роўнае ${min}",
        max: "Значэнне поля «${label}» павінна быць больш або роўнае ${max}",
        range: "Значэнне поля «${label}» павінна быць паміж ${min} і ${max}"
      },
      array: {
        len: "Колькасць элементаў у полі «${label}» павінна быць роўная ${len}",
        min: "Колькасць элементаў у полі «${label}» павінна быць не меней за ${min}",
        max: "Колькасць элементаў у полі «${label}» павінна быць не болей за ${max}",
        range: "Колькасць элементаў у полі «${label}» павінна быць паміж ${min} і ${max}"
      },
      pattern: {
        mismatch: "Значэнне поля «${label}» не адпавядае шаблону ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
o.default = O;
var D = o;
const k = /* @__PURE__ */ _(D);
export {
  k as default
};
