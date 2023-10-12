function s(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, _ = { exports: {} };
(function(a) {
  function c(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = c, a.exports.__esModule = !0, a.exports.default = a.exports;
})(_);
var p = _.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "/ страница",
  jump_to: "Към",
  jump_to_confirm: "потвърждавам",
  page: "",
  // Pagination.jsx
  prev_page: "Предишна страница",
  next_page: "Следваща страница",
  prev_5: "Предишни 5 страници",
  next_5: "Следващи 5 страници",
  prev_3: "Предишни 3 страници",
  next_3: "Следващи 3 страници",
  page_size: "Page Size"
};
n.default = $;
var u = {}, t = {}, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var b = {
  locale: "bg_BG",
  today: "Днес",
  now: "Сега",
  backToToday: "Към днес",
  ok: "Добре",
  clear: "Изчистване",
  month: "Месец",
  year: "Година",
  timeSelect: "Избор на час",
  dateSelect: "Избор на дата",
  monthSelect: "Избор на месец",
  yearSelect: "Избор на година",
  decadeSelect: "Десетилетие",
  yearFormat: "YYYY",
  dateFormat: "D M YYYY",
  dayFormat: "D",
  dateTimeFormat: "D M YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Предишен месец (PageUp)",
  nextMonth: "Следващ месец (PageDown)",
  previousYear: "Последна година (Control + left)",
  nextYear: "Следваща година (Control + right)",
  previousDecade: "Предишно десетилетие",
  nextDecade: "Следващо десетилетие",
  previousCentury: "Последен век",
  nextCentury: "Следващ век"
}, m = b;
i.default = m;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const v = {
  placeholder: "Избор на час"
};
l.default = v;
var f = p.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var g = f(i), x = f(l);
const y = {
  lang: Object.assign({
    placeholder: "Избор на дата",
    rangePlaceholder: ["Начална", "Крайна"]
  }, g.default),
  timePickerLocale: Object.assign({}, x.default)
};
t.default = y;
var B = p.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var P = B(t);
u.default = P.default;
var d = p.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var h = d(n), G = d(u), M = d(t), Y = d(l);
const e = "${label} не е валиден ${type}", D = {
  locale: "bg",
  Pagination: h.default,
  DatePicker: M.default,
  TimePicker: Y.default,
  Calendar: G.default,
  Table: {
    filterTitle: "Филтриране",
    filterConfirm: "Добре",
    filterReset: "Нулриане",
    selectAll: "Избор на текуща страница",
    selectInvert: "Обръщане"
  },
  Modal: {
    okText: "Добре",
    cancelText: "Отказ",
    justOkText: "Добре"
  },
  Popconfirm: {
    okText: "Добре",
    cancelText: "Отказ"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Търсене",
    itemUnit: "избор",
    itemsUnit: "избори"
  },
  Upload: {
    uploading: "Качване...",
    removeFile: "Премахване",
    uploadError: "Грешка при качването",
    previewFile: "Преглед",
    downloadFile: "Свали файл"
  },
  Empty: {
    description: "Няма данни"
  },
  Form: {
    optional: "（по желание）",
    defaultValidateMessages: {
      default: "грешка при проверка на полето ${label}",
      required: "Моля, въведете ${label}",
      enum: "${label} трябва да е един от [${enum}]",
      whitespace: "${label} Не може да бъде нулев знак",
      date: {
        format: "${label} невалиден формат на датата",
        parse: "${label} не може да се преобразува в дата",
        invalid: "${label} е невалидна дата"
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
        len: "${label} ще бъде ${len} знака",
        min: "${label} най-малко ${min} герои",
        max: "${label} повечето ${max} герои",
        range: "${label} Трябва да е вътре ${min}-${max} между знаци"
      },
      number: {
        len: "${label} трябва да е равно на ${len}",
        min: "${label} Минималната стойност е ${min}",
        max: "${label} Максималната стойност е ${max}",
        range: "${label} Трябва да е вътре ${min}-${max} между"
      },
      array: {
        len: "ще бъде ${len} индивидуален ${label}",
        min: "най-малко ${min} индивидуален ${label}",
        max: "повечето ${max} индивидуален ${label}",
        range: "${label} Количеството трябва да е вътре ${min}-${max} между"
      },
      pattern: {
        mismatch: "${label} не отговаря на модела ${pattern}"
      }
    }
  }
};
o.default = D;
var T = o;
const j = /* @__PURE__ */ s(T);
export {
  j as default
};
