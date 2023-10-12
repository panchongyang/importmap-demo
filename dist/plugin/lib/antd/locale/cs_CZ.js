function v(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var n = {}, c = { exports: {} };
(function(t) {
  function m(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  t.exports = m, t.exports.__esModule = !0, t.exports.default = t.exports;
})(c);
var u = c.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var b = {
  // Options.jsx
  items_per_page: "/ strana",
  jump_to: "Přejít",
  jump_to_confirm: "potvrdit",
  page: "",
  // Pagination.jsx
  prev_page: "Předchozí strana",
  next_page: "Následující strana",
  prev_5: "Předchozích 5 stran",
  next_5: "Následujících 5 stran",
  prev_3: "Předchozí 3 strany",
  next_3: "Následující 3 strany",
  page_size: "velikost stránky"
};
o.default = b;
var s = {}, a = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var f = {
  locale: "cs_CZ",
  today: "Dnes",
  now: "Nyní",
  backToToday: "Zpět na dnešek",
  ok: "OK",
  clear: "Vymazat",
  month: "Měsíc",
  year: "Rok",
  timeSelect: "Vybrat čas",
  dateSelect: "Vybrat datum",
  monthSelect: "Vyberte měsíc",
  yearSelect: "Vyberte rok",
  decadeSelect: "Vyberte dekádu",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Předchozí měsíc (PageUp)",
  nextMonth: "Následující (PageDown)",
  previousYear: "Předchozí rok (Control + left)",
  nextYear: "Následující rok (Control + right)",
  previousDecade: "Předchozí dekáda",
  nextDecade: "Následující dekáda",
  previousCentury: "Předchozí století",
  nextCentury: "Následující století"
}, _ = f;
d.default = _;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const y = {
  placeholder: "Vybrat čas"
};
l.default = y;
var p = u.default;
Object.defineProperty(a, "__esModule", {
  value: !0
});
a.default = void 0;
var $ = p(d), h = p(l);
const k = {
  lang: Object.assign({
    placeholder: "Vybrat datum",
    rangePlaceholder: ["Od", "Do"]
  }, $.default),
  timePickerLocale: Object.assign({}, h.default)
};
a.default = k;
var x = u.default;
Object.defineProperty(s, "__esModule", {
  value: !0
});
s.default = void 0;
var z = x(a);
s.default = z.default;
var i = u.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var g = i(o), P = i(s), C = i(a), j = i(l);
const e = "${label} není platný ${type}", Z = {
  locale: "cs",
  Pagination: g.default,
  DatePicker: C.default,
  TimePicker: j.default,
  Calendar: P.default,
  global: {
    placeholder: "Prosím vyber"
  },
  Table: {
    filterTitle: "Filtr",
    filterConfirm: "Potvrdit",
    filterReset: "Obnovit",
    filterEmptyText: "Žádné filtry",
    filterCheckall: "Vybrat všechny položky",
    filterSearchPlaceholder: "Vyhledat ve filtrech",
    emptyText: "Žádná data",
    selectAll: "Vybrat všechny řádky na současné stránce",
    selectInvert: "Invertovat výběr na současné stránce",
    selectNone: "Odznačit vše",
    selectionAll: "Vybrat všechny řádky",
    sortTitle: "Řadit",
    expand: "Rozbalit řádek",
    collapse: "Zabalit řádek",
    triggerDesc: "Klikni pro sestupné řazení",
    triggerAsc: "Klikni pro vzestupné řazení",
    cancelSort: "Klikni pro zrušení řazení"
  },
  Modal: {
    okText: "OK",
    cancelText: "Zrušit",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Zrušit"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Vyhledávání",
    itemUnit: "položka",
    itemsUnit: "položek",
    remove: "Odstranit",
    selectCurrent: "Vybrat aktuální stranu",
    removeCurrent: "Smazat aktuální stranu",
    selectAll: "Označit vše",
    removeAll: "Odznačit vše",
    selectInvert: "Opačný výběr"
  },
  Upload: {
    uploading: "Nahrávání...",
    removeFile: "Odstranit soubor",
    uploadError: "Chyba při nahrávání",
    previewFile: "Zobrazit soubor",
    downloadFile: "Stáhnout soubor"
  },
  Empty: {
    description: "Žádná data"
  },
  Icon: {
    icon: "ikona"
  },
  Text: {
    edit: "Upravit",
    copy: "Kopírovat",
    copied: "Zkopírované",
    expand: "Zvětšit"
  },
  PageHeader: {
    back: "Zpět"
  },
  Form: {
    optional: "(nepovinné)",
    defaultValidateMessages: {
      default: "Validační chyba pole pro ${label}",
      required: "Prosím vložte ${label}",
      enum: "${label} musí být jeden z [${enum}]",
      whitespace: "${label} nemůže být prázdný znak",
      date: {
        format: "${label} formát datumu je neplatný",
        parse: "${label} není možné konvertovat na datum",
        invalid: "${label} je neplatné datum"
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
        len: "${label} musí být ${len} znaků",
        min: "${label} musí být alespoň ${min} znaků",
        max: "${label} musí být do ${max} znaků",
        range: "${label} musí být mezi ${min}-${max} znaky"
      },
      number: {
        len: "${label} musí být stejný jako ${len}",
        min: "${label} musí být minimálně ${min}",
        max: "${label} musí být maximálně ${max}",
        range: "${label} musí být mezi ${min}-${max}"
      },
      array: {
        len: "Musí být ${len} ${label}",
        min: "Alespoň ${min} ${label}",
        max: "Nejvíc ${max} ${label}",
        range: "Počet ${label} musí být mezi ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} neodpovídá vzoru ${pattern}"
      }
    }
  },
  Image: {
    preview: "Náhled"
  }
};
n.default = Z;
var O = n;
const D = /* @__PURE__ */ v(O);
export {
  D as default
};
