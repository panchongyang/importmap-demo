function v(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, c = { exports: {} };
(function(a) {
  function m(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  a.exports = m, a.exports.__esModule = !0, a.exports.default = a.exports;
})(c);
var s = c.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ strana",
  jump_to: "Choď na",
  jump_to_confirm: "potvrdit",
  page: "",
  // Pagination.jsx
  prev_page: "Predchádzajúca strana",
  next_page: "Nasledujúca strana",
  prev_5: "Predchádzajúcich 5 strán",
  next_5: "Nasledujúcich 5 strán",
  prev_3: "Predchádzajúce 3 strany",
  next_3: "Nasledujúce 3 strany",
  page_size: "Page Size"
};
n.default = b;
var i = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var f = {
  locale: "sk_SK",
  today: "Dnes",
  now: "Teraz",
  backToToday: "Späť na dnes",
  ok: "OK",
  clear: "Vymazať",
  month: "Mesiac",
  year: "Rok",
  timeSelect: "Vybrať čas",
  dateSelect: "Vybrať dátum",
  monthSelect: "Vybrať mesiac",
  yearSelect: "Vybrať rok",
  decadeSelect: "Vybrať dekádu",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Predchádzajúci mesiac (PageUp)",
  nextMonth: "Nasledujúci mesiac (PageDown)",
  previousYear: "Predchádzajúci rok (Control + left)",
  nextYear: "Nasledujúci rok (Control + right)",
  previousDecade: "Predchádzajúca dekáda",
  nextDecade: "Nasledujúca dekáda",
  previousCentury: "Predchádzajúce storočie",
  nextCentury: "Nasledujúce storočie"
}, k = f;
d.default = k;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const y = {
  placeholder: "Vybrať čas"
};
r.default = y;
var p = s.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var _ = p(d), $ = p(r);
const h = {
  lang: Object.assign({
    placeholder: "Vybrať dátum",
    rangePlaceholder: ["Od", "Do"]
  }, _.default),
  timePickerLocale: Object.assign({}, $.default)
};
t.default = h;
var z = s.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var x = z(t);
i.default = x.default;
var u = s.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var j = u(n), g = u(i), P = u(t), S = u(r);
const e = "${label} nie je platný ${type}", O = {
  locale: "sk",
  Pagination: j.default,
  DatePicker: P.default,
  TimePicker: S.default,
  Calendar: g.default,
  global: {
    placeholder: "Prosím vyber"
  },
  Table: {
    filterTitle: "Filter",
    filterConfirm: "OK",
    filterReset: "Obnoviť",
    filterEmptyText: "Žiadne filtre",
    filterCheckall: "Vyber všetky položky",
    filterSearchPlaceholder: "Vyhľadaj vo filtroch",
    emptyText: "Žiadne dáta",
    selectAll: "Označ všetky položky",
    selectInvert: "Opačný výber položiek",
    selectNone: "Odznač všetko",
    selectionAll: "Označ všetko",
    sortTitle: "Zoradiť",
    expand: "Rozbaliť riadok",
    collapse: "Zbaliť riadok",
    triggerDesc: "Kliknutím zoradíš zostupne",
    triggerAsc: "Kliknutím zoradíš vzostupne",
    cancelSort: "Kliknutím zrušíš zoradenie"
  },
  Modal: {
    okText: "OK",
    cancelText: "Zrušiť",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Zrušiť"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Vyhľadávanie",
    itemUnit: "položka",
    itemsUnit: "položiek",
    remove: "Odstráň",
    selectCurrent: "Vyber aktuálnu stranu",
    removeCurrent: "Zmaž aktuálnu stranu",
    selectAll: "Označ všetko",
    removeAll: "Odznač všetko",
    selectInvert: "Opačný výber"
  },
  Upload: {
    uploading: "Nahrávanie...",
    removeFile: "Odstrániť súbor",
    uploadError: "Chyba pri nahrávaní",
    previewFile: "Zobraziť súbor",
    downloadFile: "Stiahnuť súbor"
  },
  Empty: {
    description: "Žiadne dáta"
  },
  Icon: {
    icon: "ikona"
  },
  Text: {
    edit: "Upraviť",
    copy: "Kopírovať",
    copied: "Skopírované",
    expand: "Zväčšiť"
  },
  PageHeader: {
    back: "Späť"
  },
  Form: {
    optional: "(nepovinné)",
    defaultValidateMessages: {
      default: "Validačná chyba poľa pre ${label}",
      required: "Prosím vlož ${label}",
      enum: "${label} musí byť jeden z [${enum}]",
      whitespace: "${label} nemôže byť prázdny znak",
      date: {
        format: "${label} formát dátumu je neplatný",
        parse: "${label} nie je možné konvertovať na dátum",
        invalid: "${label} je neplatný dátum"
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
        len: "${label} musí byť ${len} znakov",
        min: "${label} musí byť aspoň ${min} znakov",
        max: "${label} musí byť do ${max} znakov",
        range: "${label} musí byť medzi ${min}-${max} znakmi"
      },
      number: {
        len: "${label} musí byť rovnaký ako ${len}",
        min: "${label} musí byť minimálne ${min}",
        max: "${label} musí byť maximálne ${max}",
        range: "${label} musí byť medzi ${min}-${max}"
      },
      array: {
        len: "Musí byť ${len} ${label}",
        min: "Aspoň ${min} ${label}",
        max: "Najviac ${max} ${label}",
        range: "Počet ${label} musí byť medzi ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} nezodpovedá vzoru ${pattern}"
      }
    }
  },
  Image: {
    preview: "Náhľad"
  }
};
o.default = O;
var K = o;
const T = /* @__PURE__ */ v(K);
export {
  T as default
};
