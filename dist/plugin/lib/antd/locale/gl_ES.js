function f(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, s = { exports: {} };
(function(a) {
  function m(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  a.exports = m, a.exports.__esModule = !0, a.exports.default = a.exports;
})(s);
var c = s.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var v = {
  // Options.jsx
  items_per_page: "/ páxina",
  jump_to: "Ir a",
  jump_to_confirm: "confirmar",
  page: "",
  // Pagination.jsx
  prev_page: "Páxina anterior",
  next_page: "Páxina seguinte",
  prev_5: "5 páxinas previas",
  next_5: "5 páxinas seguintes",
  prev_3: "3 páxinas previas",
  next_3: "3 páxinas seguintes",
  page_size: "Page Size"
};
n.default = v;
var i = {}, r = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var _ = {
  locale: "gl_ES",
  today: "Hoxe",
  now: "Agora",
  backToToday: "Voltar a hoxe",
  ok: "Aceptar",
  clear: "Limpar",
  month: "Mes",
  year: "Ano",
  timeSelect: "Seleccionar hora",
  dateSelect: "Seleccionar data",
  monthSelect: "Elexir un mes",
  yearSelect: "Elexir un año",
  decadeSelect: "Elexir unha década",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Mes anterior (PageUp)",
  nextMonth: "Mes seguinte (PageDown)",
  previousYear: "Ano anterior (Control + left)",
  nextYear: "Ano seguinte (Control + right)",
  previousDecade: "Década anterior",
  nextDecade: "Década seguinte",
  previousCentury: "Século anterior",
  nextCentury: "Século seguinte"
}, g = _;
d.default = g;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const $ = {
  placeholder: "Escolla hora"
};
t.default = $;
var p = c.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var b = p(d), x = p(t);
const E = {
  lang: Object.assign({
    placeholder: "Escolla data",
    rangePlaceholder: ["Data inicial", "Data final"]
  }, b.default),
  timePickerLocale: Object.assign({}, x.default)
};
r.default = E;
var S = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var h = S(r);
i.default = h.default;
var u = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var y = u(n), P = u(i), D = u(r), M = u(t);
const e = "${label} non é un ${type} válido", T = {
  locale: "gl",
  Pagination: y.default,
  DatePicker: D.default,
  TimePicker: M.default,
  Calendar: P.default,
  global: {
    placeholder: "Escolla"
  },
  Table: {
    filterTitle: "Filtrar menú",
    filterConfirm: "Aceptar",
    filterReset: "Reiniciar",
    selectAll: "Seleccionar todo",
    selectInvert: "Invertir selección",
    sortTitle: "Ordenar"
  },
  Modal: {
    okText: "Aceptar",
    cancelText: "Cancelar",
    justOkText: "Aceptar"
  },
  Popconfirm: {
    okText: "Aceptar",
    cancelText: "Cancelar"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Buscar aquí",
    itemUnit: "elemento",
    itemsUnit: "elementos"
  },
  Upload: {
    uploading: "Subindo...",
    removeFile: "Eliminar arquivo",
    uploadError: "Error ao subir o arquivo",
    previewFile: "Vista previa",
    downloadFile: "Descargar arquivo"
  },
  Empty: {
    description: "Non hai datos"
  },
  Icon: {
    icon: "icona"
  },
  Text: {
    edit: "editar",
    copy: "copiar",
    copied: "copiado",
    expand: "expandir"
  },
  PageHeader: {
    back: "voltar"
  },
  Form: {
    defaultValidateMessages: {
      default: "Error de validación do campo ${label}",
      required: "Por favor complete ${label}",
      enum: "${label} ten que ser un de [${enum}]",
      whitespace: "${label} non pode ter ningún caracter en branco",
      date: {
        format: "O formato de data ${label} non é válido",
        parse: "${label} non se pode convertir a unha data",
        invalid: "${label} é unha data inválida"
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
        len: "${label} debe ter ${len} caracteres",
        min: "${label} debe ter como mínimo ${min} caracteres",
        max: "${label} debe ter ata ${max} caracteres",
        range: "${label} debe ter entre ${min}-${max} caracteres"
      },
      number: {
        len: "${label} debe ser igual a ${len}",
        min: "${label} valor mínimo é ${min}",
        max: "${label} valor máximo é ${max}",
        range: "${label} debe estar entre ${min}-${max}"
      },
      array: {
        len: "Debe ser ${len} ${label}",
        min: "Como mínimo ${min} ${label}",
        max: "Como máximo ${max} ${label}",
        range: "O valor de ${label} debe estar entre ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} non coincide co patrón ${pattern}"
      }
    }
  }
};
o.default = T;
var Y = o;
const O = /* @__PURE__ */ f(Y);
export {
  O as default
};
