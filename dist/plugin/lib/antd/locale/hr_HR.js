function v(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var i = {}, m = { exports: {} };
(function(a) {
  function p(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  a.exports = p, a.exports.__esModule = !0, a.exports.default = a.exports;
})(m);
var s = m.exports, o = {};
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var j = {
  // Options.jsx
  items_per_page: "/ str",
  jump_to: "Idi na",
  jump_to_confirm: "potvrdi",
  page: "",
  // Pagination.jsx
  prev_page: "Prijašnja stranica",
  next_page: "Sljedeća stranica",
  prev_5: "Prijašnjih 5 stranica",
  next_5: "Sljedećih 5 stranica",
  prev_3: "Prijašnje 3 stranice",
  next_3: "Sljedeće 3 stranice",
  page_size: "Page Size"
};
o.default = j;
var n = {}, t = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var b = {
  locale: "hr_HR",
  today: "Danas",
  now: "Sad",
  backToToday: "Natrag na danas",
  ok: "OK",
  clear: "Očisti",
  month: "Mjesec",
  year: "Godina",
  timeSelect: "odaberite vrijeme",
  dateSelect: "odaberite datum",
  weekSelect: "Odaberite tjedan",
  monthSelect: "Odaberite mjesec",
  yearSelect: "Odaberite godinu",
  decadeSelect: "Odaberite desetljeće",
  yearFormat: "YYYY",
  dateFormat: "D.M.YYYY",
  dayFormat: "D",
  dateTimeFormat: "D.M.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Prošli mjesec (PageUp)",
  nextMonth: "Sljedeći mjesec (PageDown)",
  previousYear: "Prošla godina (Control + left)",
  nextYear: "Sljedeća godina (Control + right)",
  previousDecade: "Prošlo desetljeće",
  nextDecade: "Sljedeće desetljeće",
  previousCentury: "Prošlo stoljeće",
  nextCentury: "Sljedeće stoljeće"
}, f = b;
d.default = f;
var r = {};
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
const _ = {
  placeholder: "Odaberite vrijeme",
  rangePlaceholder: ["Vrijeme početka", "Vrijeme završetka"]
};
r.default = _;
var c = s.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var $ = c(d), g = c(r);
const h = {
  lang: Object.assign({
    placeholder: "Odaberite datum",
    yearPlaceholder: "Odaberite godinu",
    quarterPlaceholder: "Odaberite četvrtinu",
    monthPlaceholder: "Odaberite mjesec",
    weekPlaceholder: "Odaberite tjedan",
    rangePlaceholder: ["Početni datum", "Završni datum"],
    rangeYearPlaceholder: ["Početna godina", "Završna godina"],
    rangeMonthPlaceholder: ["Početni mjesec", "Završni mjesec"],
    rangeWeekPlaceholder: ["Početni tjedan", "Završni tjedan"]
  }, $.default),
  timePickerLocale: Object.assign({}, g.default)
};
t.default = h;
var P = s.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var k = P(t);
n.default = k.default;
var u = s.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var O = u(o), x = u(n), y = u(t), R = u(r);
const e = "${label} nije valjan ${type}", M = {
  locale: "hr",
  Pagination: O.default,
  DatePicker: y.default,
  TimePicker: R.default,
  Calendar: x.default,
  global: {
    placeholder: "Molimo označite"
  },
  Table: {
    filterTitle: "Filter meni",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "Nema filtera",
    emptyText: "Nema podataka",
    selectAll: "Označi trenutnu stranicu",
    selectInvert: "Invertiraj trenutnu stranicu",
    selectionAll: "Odaberite sve podatke",
    sortTitle: "Sortiraj",
    expand: "Proširi redak",
    collapse: "Sažmi redak",
    triggerDesc: "Kliknite za sortiranje silazno",
    triggerAsc: "Kliknite za sortiranje uzlazno",
    cancelSort: "Kliknite da biste otkazali sortiranje"
  },
  Modal: {
    okText: "OK",
    cancelText: "Odustani",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Odustani"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Pretraži ovdje",
    itemUnit: "stavka",
    itemsUnit: "stavke",
    remove: "Ukloniti",
    selectCurrent: "Odaberite trenutnu stranicu",
    removeCurrent: "Ukloni trenutnu stranicu",
    selectAll: "Odaberite sve podatke",
    removeAll: "Uklonite sve podatke",
    selectInvert: "Obrni trenutnu stranicu"
  },
  Upload: {
    uploading: "Upload u tijeku...",
    removeFile: "Makni datoteku",
    uploadError: "Greška kod uploada",
    previewFile: "Pogledaj datoteku",
    downloadFile: "Preuzmi datoteku"
  },
  Empty: {
    description: "Nema podataka"
  },
  Icon: {
    icon: "ikona"
  },
  Text: {
    edit: "Uredi",
    copy: "Kopiraj",
    copied: "Kopiranje uspješno",
    expand: "Proširi"
  },
  PageHeader: {
    back: "Natrag"
  },
  Form: {
    optional: "(neobavezno)",
    defaultValidateMessages: {
      default: "Pogreška provjere valjanosti polja za ${label}",
      required: "Molimo unesite ${label}",
      enum: "${label} mora biti jedan od [${enum}]",
      whitespace: "${label} ne može biti prazan znak",
      date: {
        format: "${label} format datuma je nevažeći",
        parse: "${label} ne može se pretvoriti u datum",
        invalid: "${label} je nevažeći datum"
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
        len: "${label} mora biti ${len} slova",
        min: "${label} mora biti najmanje ${min} slova",
        max: "${label} mora biti do ${max} slova",
        range: "${label} mora biti između ${min}-${max} slova"
      },
      number: {
        len: "${label} mora biti jednak ${len}",
        min: "${label} mora biti minimalano ${min}",
        max: "${label} mora biti maksimalano ${max}",
        range: "${label} mora biti između ${min}-${max}"
      },
      array: {
        len: "Mora biti ${len} ${label}",
        min: "Najmanje ${min} ${label}",
        max: "Najviše ${max} ${label}",
        range: "Količina ${label} mora biti između ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} ne odgovara obrascu ${pattern}"
      }
    }
  },
  Image: {
    preview: "Pregled"
  }
};
i.default = M;
var z = i;
const H = /* @__PURE__ */ v(z);
export {
  H as default
};
