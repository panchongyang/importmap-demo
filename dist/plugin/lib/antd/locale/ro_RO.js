function f(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var n = {}, s = { exports: {} };
(function(a) {
  function m(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  a.exports = m, a.exports.__esModule = !0, a.exports.default = a.exports;
})(s);
var d = s.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var _ = {
  // Options.jsx
  items_per_page: "/ pagină",
  jump_to: "Mergi la",
  jump_to_confirm: "confirm",
  page: "",
  // Pagination.jsx
  prev_page: "Pagina Anterioară",
  next_page: "Pagina Următoare",
  prev_5: "5 Pagini Anterioare",
  next_5: "5 Pagini Următoare",
  prev_3: "3 Pagini Anterioare",
  next_3: "3 Pagini Următoare",
  page_size: "Page Size"
};
o.default = _;
var i = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var v = {
  locale: "ro_RO",
  today: "Azi",
  now: "Acum",
  backToToday: "Înapoi la azi",
  ok: "OK",
  clear: "Șterge",
  month: "Lună",
  year: "An",
  timeSelect: "selectează timpul",
  dateSelect: "selectează data",
  weekSelect: "Alege o săptămână",
  monthSelect: "Alege o lună",
  yearSelect: "Alege un an",
  decadeSelect: "Alege un deceniu",
  yearFormat: "YYYY",
  dateFormat: "D/M/YYYY",
  dayFormat: "D",
  dateTimeFormat: "D/M/YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Luna anterioară (PageUp)",
  nextMonth: "Luna următoare (PageDown)",
  previousYear: "Anul anterior (Control + stânga)",
  nextYear: "Anul următor (Control + dreapta)",
  previousDecade: "Deceniul anterior",
  nextDecade: "Deceniul următor",
  previousCentury: "Secolul anterior",
  nextCentury: "Secolul următor"
}, g = v;
u.default = g;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const $ = {
  placeholder: "Selectează ora"
};
r.default = $;
var p = d.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var b = p(u), x = p(r);
const O = {
  lang: Object.assign({
    placeholder: "Selectează data",
    rangePlaceholder: ["Data start", "Data sfârșit"]
  }, b.default),
  timePickerLocale: Object.assign({}, x.default)
};
t.default = O;
var P = d.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = P(t);
i.default = y.default;
var c = d.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var R = c(o), z = c(i), A = c(t), D = c(r);
const e = "${label} nu conține tipul corect (${type})", S = {
  locale: "ro",
  Pagination: R.default,
  DatePicker: A.default,
  TimePicker: D.default,
  Calendar: z.default,
  global: {
    placeholder: "Selectează"
  },
  Table: {
    filterTitle: "Filtrează",
    filterConfirm: "OK",
    filterReset: "Resetează",
    filterEmptyText: "Fără filtre",
    emptyText: "Nu există date",
    selectAll: "Selectează pagina curentă",
    selectInvert: "Inversează pagina curentă",
    selectNone: "Șterge selecția",
    selectionAll: "Selectează toate datele",
    sortTitle: "Ordonează",
    expand: "Extinde rândul",
    collapse: "Micșorează rândul",
    triggerDesc: "Apasă pentru ordonare descrescătoare",
    triggerAsc: "Apasă pentru ordonare crescătoare",
    cancelSort: "Apasă pentru a anula ordonarea"
  },
  Modal: {
    okText: "OK",
    cancelText: "Anulare",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Anulare"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Căutare",
    itemUnit: "element",
    itemsUnit: "elemente",
    remove: "Șterge",
    selectCurrent: "Selectează pagina curentă",
    removeCurrent: "Șterge pagina curentă",
    selectAll: "Selectează toate datele",
    removeAll: "Șterge toate datele",
    selectInvert: "Inversează pagina curentă"
  },
  Upload: {
    uploading: "Se transferă...",
    removeFile: "Înlătură fișierul",
    uploadError: "Eroare la upload",
    previewFile: "Previzualizare fișier",
    downloadFile: "Descărcare fișier"
  },
  Empty: {
    description: "Fără date"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "editează",
    copy: "copiază",
    copied: "copiat",
    expand: "extinde"
  },
  PageHeader: {
    back: "înapoi"
  },
  Form: {
    optional: "(opțional)",
    defaultValidateMessages: {
      default: "Eroare la validarea câmpului ${label}",
      required: "Vă rugăm introduceți ${label}",
      enum: "${label} trebuie să fie una din valorile [${enum}]",
      whitespace: "${label} nu poate fi gol",
      date: {
        format: "${label} - data nu este în formatul corect",
        parse: "${label} nu poate fi convertit la o dată",
        invalid: "${label} este o dată invalidă"
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
        len: "${label} trebuie să conțină ${len} caractere",
        min: "${label} trebuie să conțină cel puțin ${min} caractere",
        max: "${label} trebuie să conțină cel mult ${max} caractere",
        range: "${label} trebuie să conțină între ${min}-${max} caractere"
      },
      number: {
        len: "${label} trebuie să conțină ${len} cifre",
        min: "${label} trebuie să fie minim ${min}",
        max: "${label} trebuie să fie maxim ${max}",
        range: "${label} trebuie să fie între ${min}-${max}"
      },
      array: {
        len: "${label} trebuie să conțină ${len} elemente",
        min: "${label} trebuie să conțină cel puțin ${min} elemente",
        max: "${label} trebuie să conțină cel mult ${max} elemente",
        range: "${label} trebuie să conțină între ${min}-${max} elemente"
      },
      pattern: {
        mismatch: "${label} nu respectă șablonul ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  }
};
n.default = S;
var M = n;
const T = /* @__PURE__ */ f(M);
export {
  T as default
};
