function p(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var r = {}, g = { exports: {} };
(function(a) {
  function c(n) {
    return n && n.__esModule ? n : {
      default: n
    };
  }
  a.exports = c, a.exports.__esModule = !0, a.exports.default = a.exports;
})(g);
var m = g.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var f = {
  // Options.jsx
  items_per_page: "/ pagina",
  jump_to: "Ga naar",
  jump_to_confirm: "bevestigen",
  page: "",
  // Pagination.jsx
  prev_page: "Vorige pagina",
  next_page: "Volgende pagina",
  prev_5: "Vorige 5 pagina's",
  next_5: "Volgende 5 pagina's",
  prev_3: "Vorige 3 pagina's",
  next_3: "Volgende 3 pagina's",
  page_size: "Page Size"
};
i.default = f;
var o = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var v = {
  locale: "nl_BE",
  today: "Vandaag",
  now: "Nu",
  backToToday: "Terug naar vandaag",
  ok: "OK",
  clear: "Reset",
  month: "Maand",
  year: "Jaar",
  timeSelect: "Selecteer tijd",
  dateSelect: "Selecteer datum",
  monthSelect: "Kies een maand",
  yearSelect: "Kies een jaar",
  decadeSelect: "Kies een decennium",
  yearFormat: "YYYY",
  dateFormat: "D-M-YYYY",
  dayFormat: "D",
  dateTimeFormat: "D-M-YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Vorige maand (PageUp)",
  nextMonth: "Volgende maand (PageDown)",
  previousYear: "Vorig jaar (Control + left)",
  nextYear: "Volgend jaar (Control + right)",
  previousDecade: "Vorig decennium",
  nextDecade: "Volgend decennium",
  previousCentury: "Vorige eeuw",
  nextCentury: "Volgende eeuw"
}, _ = v;
d.default = _;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const $ = {
  placeholder: "Selecteer tijd",
  rangePlaceholder: ["Start tijd", "Eind tijd"]
};
t.default = $;
var s = m.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var b = s(d), k = s(t);
const j = {
  lang: Object.assign({
    monthPlaceholder: "Selecteer maand",
    placeholder: "Selecteer datum",
    quarterPlaceholder: "Selecteer kwartaal",
    rangeMonthPlaceholder: ["Begin maand", "Eind maand"],
    rangePlaceholder: ["Begin datum", "Eind datum"],
    rangeWeekPlaceholder: ["Begin week", "Eind week"],
    rangeYearPlaceholder: ["Begin jaar", "Eind jaar"],
    weekPlaceholder: "Selecteer week",
    yearPlaceholder: "Selecteer jaar"
  }, b.default),
  timePickerLocale: Object.assign({}, k.default)
};
l.default = j;
var x = m.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var h = x(l);
o.default = h.default;
var u = m.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var P = u(i), y = u(o), E = u(l), B = u(t);
const e = "${label} is geen geldige ${type}", V = {
  locale: "nl-be",
  Pagination: P.default,
  DatePicker: E.default,
  TimePicker: B.default,
  Calendar: y.default,
  global: {
    placeholder: "Maak een selectie"
  },
  Table: {
    cancelSort: "Klik om sortering te annuleren",
    collapse: "Rij inklappen",
    emptyText: "Geen data",
    expand: "Rij uitklappen",
    filterConfirm: "OK",
    filterEmptyText: "Geen filters",
    filterReset: "Reset",
    filterTitle: "Filteren",
    selectAll: "Selecteer huidige pagina",
    selectInvert: "Keer volgorde om",
    selectNone: "Maak selectie leeg",
    selectionAll: "Selecteer alle data",
    sortTitle: "Sorteren",
    triggerAsc: "Klik om oplopend te sorteren",
    triggerDesc: "Klik om aflopend te sorteren"
  },
  Modal: {
    okText: "OK",
    cancelText: "Annuleer",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Annuleer"
  },
  Transfer: {
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Verwijder",
    removeAll: "Verwijder alles",
    removeCurrent: "Verwijder huidige pagina",
    searchPlaceholder: "Zoek hier",
    selectAll: "Selecteer alles",
    selectCurrent: "Selecteer huidige pagina",
    selectInvert: "Huidige pagina omkeren",
    titles: ["", ""]
  },
  Upload: {
    downloadFile: "Bestand downloaden",
    previewFile: "Preview file",
    removeFile: "Verwijder bestand",
    uploadError: "Fout tijdens uploaden",
    uploading: "Uploaden..."
  },
  Empty: {
    description: "Geen gegevens"
  },
  Icon: {
    icon: "icoon"
  },
  Text: {
    edit: "Bewerken",
    copy: "kopiëren",
    copied: "Gekopieerd",
    expand: "Uitklappen"
  },
  PageHeader: {
    back: "Terug"
  },
  Form: {
    optional: "(optioneel)",
    defaultValidateMessages: {
      default: "Validatiefout voor ${label}",
      required: "Gelieve ${label} in te vullen",
      enum: "${label} moet één van [${enum}] zijn",
      whitespace: "${label} mag geen blanco teken zijn",
      date: {
        format: "${label} heeft een ongeldig formaat",
        parse: "${label} kan niet naar een datum omgezet worden",
        invalid: "${label} is een ongeldige datum"
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
        len: "${label} moet ${len} karakters lang zijn",
        min: "${label} moet minimaal ${min} karakters lang zijn",
        max: "${label} mag maximaal ${max} karakters lang zijn",
        range: "${label} moet tussen ${min}-${max} karakters lang zijn"
      },
      number: {
        len: "${label} moet gelijk zijn aan ${len}",
        min: "${label} moet minimaal ${min} zijn",
        max: "${label} mag maximaal ${max} zijn",
        range: "${label} moet tussen ${min}-${max} liggen"
      },
      array: {
        len: "Moeten ${len} ${label} zijn",
        min: "Minimaal ${min} ${label}",
        max: "maximaal ${max} ${label}",
        range: "Het aantal ${label} moet tussen ${min}-${max} liggen"
      },
      pattern: {
        mismatch: "${label} komt niet overeen met het patroon ${pattern}"
      }
    }
  },
  Image: {
    preview: "Voorbeeld"
  }
};
r.default = V;
var w = r;
const M = /* @__PURE__ */ p(w);
export {
  M as default
};
