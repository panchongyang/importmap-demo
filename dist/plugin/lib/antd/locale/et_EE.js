function c(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var i = {}, m = { exports: {} };
(function(a) {
  function v(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = v, a.exports.__esModule = !0, a.exports.default = a.exports;
})(m);
var s = m.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var k = {
  // Options.jsx
  items_per_page: "/ leheküljel",
  jump_to: "Hüppa",
  jump_to_confirm: "Kinnitage",
  page: "",
  // Pagination.jsx
  prev_page: "Eelmine leht",
  next_page: "Järgmine leht",
  prev_5: "Eelmised 5 lehekülge",
  next_5: "Järgmised 5 lehekülge",
  prev_3: "Eelmised 3 lehekülge",
  next_3: "Järgmised 3 lehekülge",
  page_size: "lehe suurus"
};
o.default = k;
var u = {}, l = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var f = {
  locale: "et_EE",
  today: "Täna",
  now: "Praegu",
  backToToday: "Tagasi tänase juurde",
  ok: "OK",
  clear: "Tühista",
  month: "Kuu",
  year: "Aasta",
  timeSelect: "Vali aeg",
  dateSelect: "Vali kuupäev",
  monthSelect: "Vali kuu",
  yearSelect: "Vali aasta",
  decadeSelect: "Vali dekaad",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Eelmine kuu (PageUp)",
  nextMonth: "Järgmine kuu (PageDown)",
  previousYear: "Eelmine aasta (Control + left)",
  nextYear: "Järgmine aasta (Control + right)",
  previousDecade: "Eelmine dekaad",
  nextDecade: "Järgmine dekaad",
  previousCentury: "Eelmine sajand",
  nextCentury: "Järgmine sajand"
}, _ = f;
n.default = _;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const g = {
  placeholder: "Vali aeg"
};
t.default = g;
var p = s.default;
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
var $ = p(n), h = p(t);
const E = {
  lang: Object.assign({
    placeholder: "Vali kuupäev",
    rangePlaceholder: ["Algus kuupäev", "Lõpu kuupäev"]
  }, $.default),
  timePickerLocale: Object.assign({}, h.default)
};
l.default = E;
var b = s.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var x = b(l);
u.default = x.default;
var d = s.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = d(o), T = d(u), P = d(l), O = d(t);
const e = "${label} ei ole kehtiv ${type}", j = {
  locale: "et",
  Pagination: y.default,
  DatePicker: P.default,
  TimePicker: O.default,
  Calendar: T.default,
  global: {
    placeholder: "Palun vali"
  },
  Table: {
    filterTitle: "Filtri menüü",
    filterConfirm: "OK",
    filterReset: "Nulli",
    filterEmptyText: "Filtreid pole",
    filterCheckall: "Vali kõik",
    filterSearchPlaceholder: "Otsi filtritest",
    emptyText: "Andmed puuduvad",
    selectAll: "Vali kõik",
    selectInvert: "Inverteeri valik",
    selectNone: "Kustuta kõik andmed",
    selectionAll: "Vali kõik andmed",
    sortTitle: "Sorteeri",
    expand: "Laienda rida",
    collapse: "Ahenda rida",
    triggerDesc: "Klõpsa kahanevalt sortimiseks",
    triggerAsc: "Klõpsa kasvavalt sortimiseks",
    cancelSort: "Klõpsa sortimise tühistamiseks"
  },
  Modal: {
    okText: "OK",
    cancelText: "Tühista",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Tühista"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Otsi siit",
    itemUnit: "kogus",
    itemsUnit: "kogused",
    remove: "Eemalda",
    selectCurrent: "Vali praegune leht",
    removeCurrent: "Eemalda praegune leht",
    selectAll: "Vali kõik",
    removeAll: "Eemalda kõik andmed",
    selectInvert: "Inverteeri valik"
  },
  Upload: {
    uploading: "Üleslaadimine...",
    removeFile: "Eemalda fail",
    uploadError: "Üleslaadimise tõrge",
    previewFile: "Faili eelvaade",
    downloadFile: "Lae fail alla"
  },
  Empty: {
    description: "Andmed puuduvad"
  },
  Icon: {
    icon: "ikoon"
  },
  Text: {
    edit: "Muuda",
    copy: "Kopeeri",
    copied: "Kopeeritud",
    expand: "Laienda"
  },
  PageHeader: {
    back: "Tagasi"
  },
  Form: {
    optional: "(valikuline)",
    defaultValidateMessages: {
      default: "${label} välja valideerimise viga",
      required: "Palun sisesta ${label}",
      enum: "${label} peab olema üks järgmistest: [${enum}]",
      whitespace: "${label} ei saa olla tühi märk",
      date: {
        format: "${label} kuupäevavorming on kehtetu",
        parse: "${label} ei saa kuupäevaks teisendada",
        invalid: "${label} on vale kuupäev"
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
        len: "${label} peab koosnema ${len} tähemärgist",
        min: "${label} peab olema vähemalt ${min} tähemärki",
        max: "${label} peab olema kuni ${max} tähemärki",
        range: "${label} peab olema vahemikus ${min}–${max} tähemärki"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} peab olema vähemalt ${min}",
        max: "${label} peab olema maksimaalne ${max}",
        range: "${label} peab olema vahemikus ${min}–${max}"
      },
      array: {
        len: "Peab olema ${len} ${label}",
        min: "Vähemalt ${min} ${label}",
        max: "Maksimaalselt ${max} ${label}",
        range: "${label} summa peab olema vahemikus ${min}–${max}"
      },
      pattern: {
        mismatch: "${label} ei vasta mustrile ${pattern}"
      }
    }
  },
  Image: {
    preview: "Eelvaade"
  }
};
i.default = j;
var M = i;
const D = /* @__PURE__ */ c(M);
export {
  D as default
};
