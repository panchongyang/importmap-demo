function y(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var i = {}, p = { exports: {} };
(function(a) {
  function m(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = m, a.exports.__esModule = !0, a.exports.default = a.exports;
})(p);
var u = p.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var f = {
  // Options.jsx
  items_per_page: "na stronę",
  jump_to: "Idź do",
  jump_to_confirm: "potwierdź",
  page: "",
  // Pagination.jsx
  prev_page: "Poprzednia strona",
  next_page: "Następna strona",
  prev_5: "Poprzednie 5 stron",
  next_5: "Następne 5 stron",
  prev_3: "Poprzednie 3 strony",
  next_3: "Następne 3 strony",
  page_size: "rozmiar strony"
};
o.default = f;
var n = {}, t = {}, s = {};
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var _ = {
  locale: "pl_PL",
  today: "Dzisiaj",
  now: "Teraz",
  backToToday: "Ustaw dzisiaj",
  ok: "OK",
  clear: "Wyczyść",
  month: "Miesiąc",
  year: "Rok",
  timeSelect: "Ustaw czas",
  dateSelect: "Ustaw datę",
  monthSelect: "Wybierz miesiąc",
  yearSelect: "Wybierz rok",
  decadeSelect: "Wybierz dekadę",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Poprzedni miesiąc (PageUp)",
  nextMonth: "Następny miesiąc (PageDown)",
  previousYear: "Ostatni rok (Ctrl + left)",
  nextYear: "Następny rok (Ctrl + right)",
  previousDecade: "Ostatnia dekada",
  nextDecade: "Następna dekada",
  previousCentury: "Ostatni wiek",
  nextCentury: "Następny wiek"
}, z = _;
s.default = z;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const w = {
  placeholder: "Wybierz godzinę"
};
l.default = w;
var c = u.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var $ = c(s), b = c(l);
const v = {
  lang: Object.assign({
    placeholder: "Wybierz datę",
    rangePlaceholder: ["Data początkowa", "Data końcowa"]
  }, $.default),
  timePickerLocale: Object.assign({}, b.default)
};
t.default = v;
var k = u.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var P = k(t);
n.default = P.default;
var d = u.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var j = d(o), g = d(n), x = d(t), h = d(l);
const e = "${label} nie posiada poprawnej wartości dla typu ${type}", O = {
  locale: "pl",
  Pagination: j.default,
  DatePicker: x.default,
  TimePicker: h.default,
  Calendar: g.default,
  global: {
    placeholder: "Wybierz"
  },
  Table: {
    filterTitle: "Menu filtra",
    filterConfirm: "OK",
    filterReset: "Usuń filtry",
    filterEmptyText: "Brak filtrów",
    filterCheckall: "Wybierz wszystkie elementy",
    filterSearchPlaceholder: "Szukaj w filtrach",
    emptyText: "Brak danych",
    selectAll: "Zaznacz bieżącą stronę",
    selectInvert: "Odwróć zaznaczenie",
    selectNone: "Wyczyść",
    selectionAll: "Wybierz wszystkie",
    sortTitle: "Sortowanie",
    expand: "Rozwiń wiersz",
    collapse: "Zwiń wiersz",
    triggerDesc: "Sortuj malejąco",
    triggerAsc: "Sortuj rosnąco",
    cancelSort: "Usuń sortowanie"
  },
  Tour: {
    Next: "Dalej",
    Previous: "Wróć",
    Finish: "Zakończ"
  },
  Modal: {
    okText: "OK",
    cancelText: "Anuluj",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Anuluj"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Szukaj",
    itemUnit: "obiekt",
    itemsUnit: "obiekty",
    remove: "Usuń",
    selectCurrent: "Wybierz aktualną stronę",
    removeCurrent: "Usuń aktualną stronę",
    selectAll: "Wybierz wszystkie",
    removeAll: "Usuń wszystkie",
    selectInvert: "Odwróć wybór"
  },
  Upload: {
    uploading: "Wysyłanie...",
    removeFile: "Usuń plik",
    uploadError: "Błąd wysyłania",
    previewFile: "Podejrzyj plik",
    downloadFile: "Pobieranie pliku"
  },
  Empty: {
    description: "Brak danych"
  },
  Icon: {
    icon: "Ikona"
  },
  Text: {
    edit: "Edytuj",
    copy: "Kopiuj",
    copied: "Skopiowany",
    expand: "Rozwiń"
  },
  PageHeader: {
    back: "Wstecz"
  },
  Form: {
    optional: "(opcjonalne)",
    defaultValidateMessages: {
      default: "Błąd walidacji dla pola ${label}",
      required: "Pole ${label} jest wymagane",
      enum: "Pole ${label} musi posiadać wartość z listy: [${enum}]",
      whitespace: "Pole ${label} nie może być puste",
      date: {
        format: "${label} posiada zły format daty",
        parse: "${label} nie może zostać zinterpretowane jako data",
        invalid: "${label} jest niepoprawną datą"
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
        len: "${label} musi posiadać ${len} znaków",
        min: "${label} musi posiadać co namniej ${min} znaków",
        max: "${label} musi posiadać maksymalnie ${max} znaków",
        range: "${label} musi posiadać między ${min} a ${max} znaków"
      },
      number: {
        len: "${label} musi mieć wartość o długości ${len}",
        min: "${label} musi mieć wartość większą lub równą ${min}",
        max: "${label} musi mieć wartość mniejszą lub równą ${max}",
        range: "${label} musi mieć wartość pomiędzy ${min} a ${max}"
      },
      array: {
        len: "${label} musi posiadać ${len} elementów",
        min: "${label} musi posiadać co najmniej ${min} elementów",
        max: "${label} musi posiadać maksymalnie ${max} elementów",
        range: "${label} musi posiadać między ${min} a ${max} elementów"
      },
      pattern: {
        mismatch: "${label} nie posiada wartości zgodnej ze wzorem ${pattern}"
      }
    }
  },
  Image: {
    preview: "Podgląd"
  }
};
i.default = O;
var D = i;
const T = /* @__PURE__ */ y(D);
export {
  T as default
};
