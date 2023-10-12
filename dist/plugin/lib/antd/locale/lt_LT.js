function c(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var l = {}, m = { exports: {} };
(function(a) {
  function k(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = k, a.exports.__esModule = !0, a.exports.default = a.exports;
})(m);
var d = m.exports, s = {};
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var v = {
  // Options.jsx
  items_per_page: "/ psl.",
  jump_to: "Pereiti į",
  jump_to_confirm: "patvirtinti",
  page: "psl.",
  // Pagination.jsx
  prev_page: "Atgal",
  next_page: "Pirmyn",
  prev_5: "Grįžti 5 psl.",
  next_5: "Peršokti 5 psl.",
  prev_3: "Grįžti 3 psl.",
  next_3: "Peršokti 3 psl.",
  page_size: "Puslapio dydis"
};
s.default = v;
var n = {}, i = {}, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var P = {
  locale: "lt_LT",
  today: "Šiandien",
  now: "Dabar",
  backToToday: "Rodyti šiandien",
  ok: "Gerai",
  clear: "Išvalyti",
  month: "Mėnesis",
  year: "Metai",
  timeSelect: "Pasirinkti laiką",
  dateSelect: "Pasirinkti datą",
  weekSelect: "Pasirinkti savaitę",
  monthSelect: "Pasirinkti mėnesį",
  yearSelect: "Pasirinkti metus",
  decadeSelect: "Pasirinkti dešimtmetį",
  yearFormat: "YYYY",
  dateFormat: "YYYY-MM-DD",
  dayFormat: "DD",
  dateTimeFormat: "YYYY-MM-DD HH:MM:SS",
  monthBeforeYear: !0,
  previousMonth: "Buvęs mėnesis (PageUp)",
  nextMonth: "Kitas mėnesis (PageDown)",
  previousYear: "Buvę metai (Control + left)",
  nextYear: "Kiti metai (Control + right)",
  previousDecade: "Buvęs dešimtmetis",
  nextDecade: "Kitas dešimtmetis",
  previousCentury: "Buvęs amžius",
  nextCentury: "Kitas amžius"
}, f = P;
o.default = f;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const b = {
  placeholder: "Pasirinkite laiką",
  rangePlaceholder: ["Pradžios laikas", "Pabaigos laikas"]
};
t.default = b;
var p = d.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var _ = p(o), g = p(t);
const $ = {
  lang: Object.assign({
    placeholder: "Pasirinkite datą",
    yearPlaceholder: "Pasirinkite metus",
    quarterPlaceholder: "Pasirinkite ketvirtį",
    monthPlaceholder: "Pasirinkite mėnesį",
    weekPlaceholder: "Pasirinkite savaitę",
    rangePlaceholder: ["Pradžios data", "Pabaigos data"],
    rangeYearPlaceholder: ["Pradžios metai", "Pabaigos metai"],
    rangeQuarterPlaceholder: ["Pradžios ketvirtis", "Pabaigos ketvirtis"],
    rangeMonthPlaceholder: ["Pradžios mėnesis", "Pabaigos mėnesis"],
    rangeWeekPlaceholder: ["Pradžios savaitė", "Pabaigos savaitė"]
  }, _.default),
  timePickerLocale: Object.assign({}, g.default)
};
i.default = $;
var y = d.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var T = y(i);
n.default = T.default;
var u = d.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var x = u(s), h = u(n), M = u(i), D = u(t);
const e = "${label} neatitinka tipo ${type}", j = {
  locale: "lt",
  Pagination: x.default,
  DatePicker: M.default,
  TimePicker: D.default,
  Calendar: h.default,
  global: {
    placeholder: "Pasirinkite"
  },
  Table: {
    filterTitle: "Filtras",
    filterConfirm: "Gerai",
    filterReset: "Atstatyti",
    filterEmptyText: "Be filtrų",
    filterCheckall: "Pasirinkti visus",
    filterSearchPlaceholder: "Ieškoti filtruose",
    emptyText: "Nėra duomenų",
    selectAll: "Pasirinkti viską",
    selectInvert: "Apversti pasirinkimą",
    selectNone: "Išvalyti visus",
    selectionAll: "Rinktis visus",
    sortTitle: "Rikiavimas",
    expand: "Išskleisti",
    collapse: "Suskleisti",
    triggerDesc: "Spustelėkite norėdami rūšiuoti mažėjančia tvarka",
    triggerAsc: "Spustelėkite norėdami rūšiuoti didėjančia tvarka",
    cancelSort: "Spustelėkite, kad atšauktumėte rūšiavimą"
  },
  Tour: {
    Next: "Kitas",
    Previous: "Ankstesnis",
    Finish: "Baigti"
  },
  Modal: {
    okText: "Taip",
    cancelText: "Atšaukti",
    justOkText: "Gerai"
  },
  Popconfirm: {
    okText: "Taip",
    cancelText: "Atšaukti"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Paieška",
    itemUnit: "vnt.",
    itemsUnit: "vnt.",
    remove: "Pašalinti",
    selectCurrent: "Pasirinkti dabartinį puslapį",
    removeCurrent: "Ištrinti dabartinį puslapį",
    selectAll: "Pasirinkti viską",
    removeAll: "Ištrinti viską",
    selectInvert: "Apversti pasirinkimą"
  },
  Upload: {
    uploading: "Įkeliami duomenys...",
    removeFile: "Ištrinti failą",
    uploadError: "Įkeliant įvyko klaida",
    previewFile: "Failo peržiūra",
    downloadFile: "Atsisiųsti failą"
  },
  Empty: {
    description: "Nėra duomenų"
  },
  Icon: {
    icon: "piktograma"
  },
  Text: {
    edit: "Redaguoti",
    copy: "Kopijuoti",
    copied: "Nukopijuota",
    expand: "Plačiau"
  },
  PageHeader: {
    back: "Atgal"
  },
  Form: {
    optional: "(neprivaloma)",
    defaultValidateMessages: {
      default: "Klaida laukelyje ${label}",
      required: "Prašome įvesti ${label}",
      enum: "${label} turi būti vienas iš [${enum}]",
      whitespace: "${label} negali likti tuščias",
      date: {
        format: "${label} neteisingas datos formatas",
        parse: "${label} negali būti konvertuotas į datą",
        invalid: "${label} neatitinka datos formato"
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
        len: "${label} turi būti ${len} simbolių",
        min: "${label} turi būti bent ${min} simbolių",
        max: "${label} turi būti ne ilgesnis nei ${max} simbolių",
        range: "Laukelio ${label} reikšmės ribos ${min}-${max} simbolių"
      },
      number: {
        len: "${label} turi būti lygi ${len}",
        min: "${label} turi būti lygus arba didesnis už ${min}",
        max: "${label} turi būti lygus arba mažesnis už ${max}",
        range: "${label} turi būti tarp ${min}-${max}"
      },
      array: {
        len: "Pasirinktas kiekis ${label} turi būti lygus ${len}",
        min: "Pasirinktas kiekis ${label} turi būti bent ${min}",
        max: "Pasirinktas kiekis ${label} turi būti ne ilgesnis nei ${max}",
        range: "Pasirinktas ${label} kiekis turi būti tarp ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} neatitinka modelio ${pattern}"
      }
    }
  },
  Image: {
    preview: "Peržiūrėti"
  },
  QRCode: {
    expired: "QR kodo galiojimas baigėsi",
    refresh: "Atnaujinti"
  },
  ColorPicker: {
    presetEmpty: "Tuščia"
  }
};
l.default = j;
var L = l;
const Y = /* @__PURE__ */ c(L);
export {
  Y as default
};
