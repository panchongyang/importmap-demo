function v(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var n = {}, m = { exports: {} };
(function(t) {
  function c(a) {
    return a && a.__esModule ? a : {
      default: a
    };
  }
  t.exports = c, t.exports.__esModule = !0, t.exports.default = t.exports;
})(m);
var s = m.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var p = {
  // Options.jsx
  items_per_page: "/ side",
  jump_to: "Gå til side",
  page: "Side",
  // Pagination.jsx
  prev_page: "Forrige side",
  next_page: "Neste side",
  prev_5: "5 forrige",
  next_5: "5 neste",
  prev_3: "3 forrige",
  next_3: "3 neste",
  page_size: "sidestørrelse"
};
i.default = p;
var o = {}, l = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var f = {
  locale: "nb_NO",
  today: "I dag",
  now: "Nå",
  backToToday: "Gå til i dag",
  ok: "OK",
  clear: "Annuller",
  month: "Måned",
  year: "År",
  timeSelect: "Velg tidspunkt",
  dateSelect: "Velg dato",
  weekSelect: "Velg uke",
  monthSelect: "Velg måned",
  yearSelect: "Velg år",
  decadeSelect: "Velg tiår",
  yearFormat: "YYYY",
  dateFormat: "DD.MM.YYYY",
  dayFormat: "DD",
  dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Forrige måned (PageUp)",
  nextMonth: "Neste måned (PageDown)",
  previousYear: "Forrige år (Control + venstre)",
  nextYear: "Neste år (Control + høyre)",
  previousDecade: "Forrige tiår",
  nextDecade: "Neste tiår",
  previousCentury: "Forrige århundre",
  nextCentury: "Neste århundre"
}, b = f;
d.default = b;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const _ = {
  placeholder: "Velg tid",
  rangePlaceholder: ["Starttid", "Sluttid"]
};
r.default = _;
var g = s.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var $ = g(d), k = g(r);
const y = {
  lang: Object.assign({
    placeholder: "Velg dato",
    yearPlaceholder: "Velg år",
    quarterPlaceholder: "Velg kvartal",
    monthPlaceholder: "Velg måned",
    weekPlaceholder: "Velg uke",
    rangePlaceholder: ["Startdato", "Sluttdato"],
    rangeYearPlaceholder: ["Startår", "Sluttår"],
    rangeMonthPlaceholder: ["Startmåned", "Sluttmåned"],
    rangeWeekPlaceholder: ["Start uke", "Sluttuke"]
  }, $.default),
  timePickerLocale: Object.assign({}, k.default)
};
l.default = y;
var h = s.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var x = h(l);
o.default = x.default;
var u = s.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var O = u(i), P = u(o), N = u(l), S = u(r);
const e = "${label} er ikke et gyldig ${type}", F = {
  locale: "nb",
  Pagination: O.default,
  DatePicker: N.default,
  TimePicker: S.default,
  Calendar: P.default,
  global: {
    placeholder: "Vennligst velg"
  },
  Table: {
    filterTitle: "Filtermeny",
    filterConfirm: "OK",
    filterReset: "Nullstill",
    filterEmptyText: "Ingen filtre",
    selectAll: "Velg alle",
    selectInvert: "Inverter gjeldende side",
    selectionAll: "Velg all data",
    sortTitle: "Sorter",
    expand: "Utvid rad",
    collapse: "Skjul rad",
    triggerDesc: "Sorter data i synkende rekkefølge",
    triggerAsc: "Sorterer data i stigende rekkefølge",
    cancelSort: "Klikk for å avbryte sorteringen"
  },
  Modal: {
    okText: "OK",
    cancelText: "Avbryt",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Avbryt"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Søk her",
    itemUnit: "element",
    itemsUnit: "elementer",
    remove: "Fjern",
    selectCurrent: "Velg gjeldende side",
    removeCurrent: "Fjern gjeldende side",
    selectAll: "Velg all data",
    removeAll: "Fjern all data",
    selectInvert: "Inverter gjeldende side"
  },
  Upload: {
    uploading: "Laster opp...",
    removeFile: "Fjern fil",
    uploadError: "Feil ved opplastning",
    previewFile: "Forhåndsvisning",
    downloadFile: "Last ned fil"
  },
  Empty: {
    description: "Ingen data"
  },
  Icon: {
    icon: "ikon"
  },
  Text: {
    edit: "Rediger",
    copy: "Kopier",
    copied: "Kopiert",
    expand: "Utvid"
  },
  PageHeader: {
    back: "Tilbake"
  },
  Form: {
    defaultValidateMessages: {
      default: "Feltvalideringsfeil ${label}",
      required: "Vennligst skriv inn ${label}",
      enum: "${label} må være en av [${enum}]",
      whitespace: "${label} kan ikke være et blankt tegn",
      date: {
        format: "${label} datoformatet er ugyldig",
        parse: "${label} kan ikke konverteres til en dato",
        invalid: "${label} er en ugyldig dato"
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
        len: "${label} må være ${len} tegn",
        min: "${label} må minst ha ${min} tegn",
        max: "${label} opp til ${max} tegn",
        range: "${label} må være mellom ${min}-${max} tegn"
      },
      number: {
        len: "${label} må være lik ${len}",
        min: "${label} minimumsverdien er ${min}",
        max: "${label} maksimumsverdien er ${max}",
        range: "${label} må være mellom ${min}-${max}"
      },
      array: {
        len: "Må være ${len} ${label}",
        min: "Må være minst ${min} ${label}",
        max: "På det meste ${max} ${label}",
        range: "Totalt av ${label} må være mellom ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} stemmer ikke overens med mønsteret ${pattern}"
      }
    }
  }
};
n.default = F;
var M = n;
const V = /* @__PURE__ */ v(M);
export {
  V as default
};
