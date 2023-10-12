function f(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var n = {}, u = { exports: {} };
(function(a) {
  function m(t) {
    return t && t.__esModule ? t : {
      default: t
    };
  }
  a.exports = m, a.exports.__esModule = !0, a.exports.default = a.exports;
})(u);
var s = u.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var v = {
  // Options.jsx
  items_per_page: "/ pàgina",
  jump_to: "Anar a",
  jump_to_confirm: "Confirma",
  page: "",
  // Pagination.jsx
  prev_page: "Pàgina prèvia",
  next_page: "Pàgina següent",
  prev_5: "5 pàgines prèvies",
  next_5: "5 pàgines següents",
  prev_3: "3 pàgines prèvies",
  next_3: "3 pàgines següents",
  page_size: "mida de la pàgina"
};
i.default = v;
var o = {}, r = {}, c = {};
Object.defineProperty(c, "__esModule", {
  value: !0
});
c.default = void 0;
var _ = {
  locale: "ca_ES",
  today: "Avui",
  now: "Ara",
  backToToday: "Tornar a avui",
  ok: "Acceptar",
  clear: "Netejar",
  month: "Mes",
  year: "Any",
  timeSelect: "Seleccionar hora",
  dateSelect: "Seleccionar data",
  monthSelect: "Escollir un mes",
  yearSelect: "Escollir un any",
  decadeSelect: "Escollir una dècada",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Mes anterior (PageUp)",
  nextMonth: "Mes següent (PageDown)",
  previousYear: "Any anterior (Control + left)",
  nextYear: "Mes següent (Control + right)",
  previousDecade: "Dècada anterior",
  nextDecade: "Dècada següent",
  previousCentury: "Segle anterior",
  nextCentury: "Segle següent"
}, g = _;
c.default = g;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const $ = {
  placeholder: "Seleccionar hora"
};
l.default = $;
var p = s.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var x = p(c), b = p(l);
const h = {
  lang: Object.assign({
    placeholder: "Seleccionar data",
    rangePlaceholder: ["Data inicial", "Data final"]
  }, x.default),
  timePickerLocale: Object.assign({}, b.default)
};
r.default = h;
var S = s.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var E = S(r);
o.default = E.default;
var d = s.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var y = d(i), D = d(o), P = d(r), M = d(l);
const e = "${label} no és un ${type} vàlid", T = {
  locale: "ca",
  Pagination: y.default,
  DatePicker: P.default,
  TimePicker: M.default,
  Calendar: D.default,
  global: {
    placeholder: "Seleccionar"
  },
  Table: {
    filterTitle: "Filtrar el menú",
    filterConfirm: "D’acord",
    filterReset: "Reiniciar",
    filterEmptyText: "Sense filtres",
    selectAll: "Seleccionar la pàgina actual",
    selectInvert: "Invertir la selecció",
    selectionAll: "Seleccionar-ho tot",
    sortTitle: "Ordenar",
    expand: "Ampliar la fila",
    collapse: "Plegar la fila",
    triggerDesc: "Ordre descendent",
    triggerAsc: "Ordre ascendent",
    cancelSort: "Desactivar l’ordre"
  },
  Modal: {
    okText: "D’acord",
    cancelText: "Cancel·lar",
    justOkText: "D’acord"
  },
  Popconfirm: {
    okText: "D’acord",
    cancelText: "Cancel·lar"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Cercar",
    itemUnit: "ítem",
    itemsUnit: "ítems",
    remove: "Eliminar",
    selectCurrent: "Seleccionar la pàgina actual",
    removeCurrent: "Eliminar la selecció",
    selectAll: "Seleccionar-ho tot",
    removeAll: "Eliminar-ho tot",
    selectInvert: "Invertir la selecció"
  },
  Upload: {
    uploading: "Carregant…",
    removeFile: "Eliminar el fitxer",
    uploadError: "Error de càrrega",
    previewFile: "Vista prèvia del fitxer",
    downloadFile: "Baixar el fitxer"
  },
  Empty: {
    description: "Sense dades"
  },
  Icon: {
    icon: "icona"
  },
  Text: {
    edit: "Editar",
    copy: "Copiar",
    copied: "Copiat",
    expand: "Ampliar"
  },
  PageHeader: {
    back: "Enrere"
  },
  Form: {
    optional: "(opcional)",
    defaultValidateMessages: {
      default: "Error de validació del camp ${label}",
      required: "Introdueix ${label}",
      enum: "${label} ha de ser un de [${enum}]",
      whitespace: "${label} no pot ser un caràcter en blanc",
      date: {
        format: "El format de la data de ${label} és invàlid",
        parse: "${label} no es pot convertir a cap data",
        invalid: "${label} és una data invàlida"
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
        len: "${label} ha de ser de ${len} caràcters",
        min: "${label} ha de tenir com a mínim ${min} caràcters",
        max: "${label} ha de tenir com a màxim ${max} caràcters",
        range: "${label} ha d’estar entre ${min} i ${max} caràcters"
      },
      number: {
        len: "${label} ha de ser igual a ${len}",
        min: "${label} ha de tenir un valor mínim de ${min}",
        max: "${label} ha de tenir un valor màxim de ${max}",
        range: "${label} ha de tenir un valor entre ${min} i ${max}"
      },
      array: {
        len: "La llargada de ${label} ha de ser de ${len}",
        min: "La llargada de ${label} ha de ser com a mínim de ${min}",
        max: "La llargada de ${label} ha de ser com a màxim de ${max}",
        range: "La llargada de ${label} ha d’estar entre ${min} i ${max}"
      },
      pattern: {
        mismatch: "${label} no coincideix amb el patró ${pattern}"
      }
    }
  }
};
n.default = T;
var C = n;
const Y = /* @__PURE__ */ f(C);
export {
  Y as default
};
