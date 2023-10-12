function f(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, p = { exports: {} };
(function(a) {
  function _(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = _, a.exports.__esModule = !0, a.exports.default = a.exports;
})(p);
var c = p.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "/ עמוד",
  jump_to: "עבור אל",
  jump_to_confirm: "אישור",
  page: "",
  // Pagination.jsx
  prev_page: "העמוד הקודם",
  next_page: "העמוד הבא",
  prev_5: "5 עמודים קודמים",
  next_5: "5 עמודים הבאים",
  prev_3: "3 עמודים קודמים",
  next_3: "3 עמודים הבאים",
  page_size: "Page Size"
};
n.default = $;
var i = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var m = {
  locale: "he_IL",
  today: "היום",
  now: "עכשיו",
  backToToday: "חזור להיום",
  ok: "אישור",
  clear: "איפוס",
  month: "חודש",
  year: "שנה",
  timeSelect: "בחר שעה",
  dateSelect: "בחר תאריך",
  weekSelect: "בחר שבוע",
  monthSelect: "בחר חודש",
  yearSelect: "בחר שנה",
  decadeSelect: "בחר עשור",
  yearFormat: "YYYY",
  dateFormat: "M/D/YYYY",
  dayFormat: "D",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "חודש קודם (PageUp)",
  nextMonth: "חודש הבא (PageDown)",
  previousYear: "שנה שעברה (Control + left)",
  nextYear: "שנה הבאה (Control + right)",
  previousDecade: "העשור הקודם",
  nextDecade: "העשור הבא",
  previousCentury: "המאה הקודמת",
  nextCentury: "המאה הבאה"
}, v = m;
u.default = v;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const b = {
  placeholder: "בחר שעה"
};
l.default = b;
var s = c.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var h = s(u), x = s(l);
const g = {
  lang: Object.assign({
    placeholder: "בחר תאריך",
    rangePlaceholder: ["תאריך התחלה", "תאריך סיום"]
  }, h.default),
  timePickerLocale: Object.assign({}, x.default)
};
t.default = g;
var y = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var I = y(t);
i.default = I.default;
var d = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = d(n), L = d(i), D = d(t), M = d(l);
const e = "${label} הוא לא ${type} תקין", T = {
  locale: "he",
  Pagination: P.default,
  DatePicker: D.default,
  TimePicker: M.default,
  Calendar: L.default,
  global: {
    placeholder: "אנא בחר"
  },
  Table: {
    filterTitle: "תפריט סינון",
    filterConfirm: "אישור",
    filterReset: "איפוס",
    selectAll: "בחר הכל",
    selectInvert: "הפוך בחירה",
    selectionAll: "בחר את כל הנתונים",
    sortTitle: "מיון",
    expand: "הרחב שורה",
    collapse: "צמצם שורה",
    triggerDesc: "לחץ למיון לפי סדר יורד",
    triggerAsc: "לחץ למיון לפי סדר עולה",
    cancelSort: "לחץ כדי לבטל את המיון"
  },
  Modal: {
    okText: "אישור",
    cancelText: "ביטול",
    justOkText: "אישור"
  },
  Popconfirm: {
    okText: "אישור",
    cancelText: "ביטול"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "חפש כאן",
    itemUnit: "פריט",
    itemsUnit: "פריטים"
  },
  Upload: {
    uploading: "מעלה...",
    removeFile: "הסר קובץ",
    uploadError: "שגיאת העלאה",
    previewFile: "הצג קובץ",
    downloadFile: "הורד קובץ"
  },
  Empty: {
    description: "אין מידע"
  },
  Icon: {
    icon: "סמל"
  },
  Text: {
    edit: "ערוך",
    copy: "העתק",
    copied: "הועתק",
    expand: "הרחב"
  },
  PageHeader: {
    back: "חזרה"
  },
  Form: {
    defaultValidateMessages: {
      default: "ערך השדה שגוי ${label}",
      required: "בבקשה הזן ${label}",
      enum: "${label} חייב להיות אחד מערכים אלו [${enum}]",
      whitespace: "${label} לא יכול להיות ריק",
      date: {
        format: "${label} תאריך לא תקין",
        parse: "${label} לא ניתן להמיר לתאריך",
        invalid: "${label} הוא לא תאריך תקין"
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
        len: "${label} חייב להיות ${len} תווים",
        min: "${label} חייב להיות ${min} תווים",
        max: "${label} מקסימום ${max} תווים",
        range: "${label} חייב להיות בין ${min}-${max} תווים"
      },
      number: {
        len: "${label} חייב להיות שווה ל ${len}",
        min: "${label} ערך מינימלי הוא ${min}",
        max: "${label} ערך מקסימלי הוא ${max}",
        range: "${label} חייב להיות בין ${min}-${max}"
      },
      array: {
        len: "חייב להיות ${len} ${label}",
        min: "מינימום ${min} ${label}",
        max: "מקסימום ${max} ${label}",
        range: "הסכום של ${label} חייב להיות בין ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} לא תואם לתבנית ${pattern}"
      }
    }
  }
};
o.default = T;
var Y = o;
const j = /* @__PURE__ */ f(Y);
export {
  j as default
};
