function v(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var i = {}, u = { exports: {} };
(function(a) {
  function m(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  a.exports = m, a.exports.__esModule = !0, a.exports.default = a.exports;
})(u);
var s = u.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var f = {
  // Options.jsx
  items_per_page: "/ pagina",
  jump_to: "vai a",
  jump_to_confirm: "Conferma",
  page: "Pagina",
  // Pagination.jsx
  prev_page: "Pagina precedente",
  next_page: "Pagina successiva",
  prev_5: "Precedente 5 pagine",
  next_5: "Prossime 5 pagine",
  prev_3: "Precedente 3 pagine",
  next_3: "Prossime 3 pagine",
  page_size: "dimensioni della pagina"
};
o.default = f;
var n = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = {
  locale: "it_IT",
  today: "Oggi",
  now: "Adesso",
  backToToday: "Torna ad oggi",
  ok: "OK",
  clear: "Cancella",
  month: "Mese",
  year: "Anno",
  timeSelect: "Seleziona l'ora",
  dateSelect: "Seleziona la data",
  monthSelect: "Seleziona il mese",
  yearSelect: "Seleziona l'anno",
  decadeSelect: "Seleziona il decennio",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Il mese scorso (PageUp)",
  nextMonth: "Il prossimo mese (PageDown)",
  previousYear: "L'anno scorso (Control + sinistra)",
  nextYear: "L'anno prossimo (Control + destra)",
  previousDecade: "Ultimo decennio",
  nextDecade: "Prossimo decennio",
  previousCentury: "Secolo precedente",
  nextCentury: "Prossimo secolo"
}, $ = _;
d.default = $;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const g = {
  placeholder: "Selezionare l'orario"
};
r.default = g;
var p = s.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var b = p(d), T = p(r);
const x = {
  lang: Object.assign({
    placeholder: "Selezionare la data",
    rangePlaceholder: ["Data d'inizio", "Data di fine"]
  }, b.default),
  timePickerLocale: Object.assign({}, T.default)
};
t.default = x;
var P = s.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var I = P(t);
n.default = I.default;
var c = s.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = c(o), S = c(n), z = c(t), h = c(r);
const e = " ${label} non è un ${type} valido", C = {
  locale: "it",
  Pagination: y.default,
  DatePicker: z.default,
  TimePicker: h.default,
  Calendar: S.default,
  global: {
    placeholder: "Selezionare"
  },
  Table: {
    filterTitle: "Menù Filtro",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "Senza filtri",
    filterCheckall: "Seleziona tutti",
    filterSearchPlaceholder: "Cerca nei filtri",
    emptyText: "Senza dati",
    selectAll: "Seleziona pagina corrente",
    selectInvert: "Inverti selezione nella pagina corrente",
    selectNone: "Deseleziona tutto",
    selectionAll: "Seleziona tutto",
    sortTitle: "Ordina",
    expand: "Espandi riga",
    collapse: "Comprimi riga ",
    triggerDesc: "Clicca per ordinare in modo discendente",
    triggerAsc: "Clicca per ordinare in modo ascendente",
    cancelSort: "Clicca per eliminare l'ordinamento"
  },
  Modal: {
    okText: "OK",
    cancelText: "Annulla",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Annulla"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Cerca qui",
    itemUnit: "elemento",
    itemsUnit: "elementi",
    remove: "Elimina",
    selectCurrent: "Seleziona la pagina corrente",
    removeCurrent: "Rimuovi la pagina corrente",
    selectAll: "Seleziona tutti i dati",
    removeAll: "Rimuovi tutti i dati",
    selectInvert: "Inverti la pagina corrente"
  },
  Upload: {
    uploading: "Caricamento...",
    removeFile: "Rimuovi il file",
    uploadError: "Errore di caricamento",
    previewFile: "Anteprima file",
    downloadFile: "Scarica file"
  },
  Empty: {
    description: "Nessun dato"
  },
  Icon: {
    icon: "icona"
  },
  Text: {
    edit: "modifica",
    copy: "copia",
    copied: "copia effettuata",
    expand: "espandi"
  },
  PageHeader: {
    back: "Torna"
  },
  Form: {
    optional: "(opzionale)",
    defaultValidateMessages: {
      default: "Errore di convalida del campo ${label}",
      required: "Si prega di inserire ${label}",
      enum: "${label} deve essere uno di [${enum}]",
      whitespace: "${label} non può essere un carattere vuoto",
      date: {
        format: "Il formato della data ${label} non è valido",
        parse: "${label} non può essere convertito in una data",
        invalid: "${label} non è una data valida"
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
        len: "${label} deve avere ${len} caratteri",
        min: "${label} deve contenere almeno ${min} caratteri",
        max: "${label} deve contenere fino a ${max} caratteri",
        range: "${label} deve contenere tra ${min}-${max} caratteri"
      },
      number: {
        len: "${label} deve essere uguale a ${len}",
        min: "${label} valore minimo è ${min}",
        max: "${label} valor e massimo è ${max}",
        range: "${label} deve essere compreso tra ${min}-${max}"
      },
      array: {
        len: "Deve essere ${len} ${label}",
        min: "Almeno ${min} ${label}",
        max: "Massimo ${max} ${label}",
        range: "Il totale di ${label} deve essere compreso tra ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} non corrisponde al modello ${pattern}"
      }
    }
  },
  Image: {
    preview: "Anteprima"
  }
};
i.default = C;
var D = i;
const M = /* @__PURE__ */ v(D);
export {
  M as default
};
