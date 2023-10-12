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
var b = {
  // Options.jsx
  items_per_page: "/ strani",
  jump_to: "Idi na",
  page: "",
  // Pagination.jsx
  prev_page: "Prethodna strana",
  next_page: "Sledeća strana",
  prev_5: "Prethodnih 5 Strana",
  next_5: "Sledećih 5 Strana",
  prev_3: "Prethodnih 3 Strane",
  next_3: "Sledećih 3 Strane",
  page_size: "Page Size"
};
o.default = b;
var n = {}, r = {}, d = {};
Object.defineProperty(d, "__esModule", {
  value: !0
});
d.default = void 0;
var f = {
  locale: "sr_RS",
  today: "Danas",
  now: "Sada",
  backToToday: "Vrati se na danas",
  ok: "U redu",
  clear: "Obriši",
  month: "Mesec",
  year: "Godina",
  timeSelect: "Izaberi vreme",
  dateSelect: "Izaberi datum",
  monthSelect: "Izaberi mesec",
  yearSelect: "Izaberi godinu",
  decadeSelect: "Izaberi deceniju",
  yearFormat: "YYYY",
  dateFormat: "DD.MM.YYYY",
  dayFormat: "D",
  dateTimeFormat: "DD.MM.YYYY HH:mm:ss",
  monthBeforeYear: !0,
  previousMonth: "Prethodni mesec (PageUp)",
  nextMonth: "Sledeći mesec (PageDown)",
  previousYear: "Prethodna godina (Control + left)",
  nextYear: "Sledeća godina (Control + right)",
  previousDecade: "Prethodna decenija",
  nextDecade: "Sledeća decenija",
  previousCentury: "Prethodni vek",
  nextCentury: "Sledeći vek"
}, _ = f;
d.default = _;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const k = {
  placeholder: "Izaberi vreme",
  rangePlaceholder: ["Vreme početka", "Vreme završetka"]
};
t.default = k;
var c = s.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var $ = c(d), g = c(t);
const P = {
  lang: Object.assign({
    placeholder: "Izaberi datum",
    yearPlaceholder: "Izaberi godinu",
    quarterPlaceholder: "Izaberi tromesečje",
    monthPlaceholder: "Izaberi mesec",
    weekPlaceholder: "Izaberi sedmicu",
    rangePlaceholder: ["Datum početka", "Datum završetka"],
    rangeYearPlaceholder: ["Godina početka", "Godina završetka"],
    rangeMonthPlaceholder: ["Mesec početka", "Mesec završetka"],
    rangeWeekPlaceholder: ["Sedmica početka", "Sedmica završetka"]
  }, $.default),
  timePickerLocale: Object.assign({}, g.default)
};
r.default = P;
var S = s.default;
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var h = S(r);
n.default = h.default;
var u = s.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var z = u(o), x = u(n), j = u(r), y = u(t);
const e = "${label} nije važeći ${type}", M = {
  locale: "sr",
  Pagination: z.default,
  DatePicker: j.default,
  TimePicker: y.default,
  Calendar: x.default,
  global: {
    placeholder: "Izaberi"
  },
  Table: {
    filterTitle: "Meni filtera",
    filterConfirm: "U redu",
    filterReset: "Poništi",
    filterEmptyText: "Nema filtera",
    emptyText: "Nema podataka",
    selectAll: "Izaberi trenutnu stranicu",
    selectInvert: "Obrni izbor trenutne stranice",
    selectNone: "Obriši sve podatke",
    selectionAll: "Izaberi sve podatke",
    sortTitle: "Sortiraj",
    expand: "Proširi red",
    collapse: "Skupi red",
    triggerDesc: "Klikni da sortiraš po padajućem redosledu",
    triggerAsc: "Klikni da sortiraš po rastućem redosledu",
    cancelSort: "Klikni da otkažeš sortiranje"
  },
  Modal: {
    okText: "U redu",
    cancelText: "Otkaži",
    justOkText: "U redu"
  },
  Popconfirm: {
    okText: "U redu",
    cancelText: "Otkaži"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Pretraži ovde",
    itemUnit: "stavka",
    itemsUnit: "stavki",
    remove: "Ukloni",
    selectCurrent: "Izaberi trenutnu stranicu",
    removeCurrent: "Ukloni trenutnu stranicu",
    selectAll: "Izaberi sve podatke",
    removeAll: "Ukloni sve podatke",
    selectInvert: "Obrni izbor trenutne stranice"
  },
  Upload: {
    uploading: "Otpremanje...",
    removeFile: "Ukloni datoteku",
    uploadError: "Greška pri otpremanju",
    previewFile: "Pregledaj datoteku",
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
    copied: "Kopirano",
    expand: "Proširi"
  },
  PageHeader: {
    back: "Nazad"
  },
  Form: {
    optional: "(opcionalno)",
    defaultValidateMessages: {
      default: "Greška pri proveri valjanosti za ${label}",
      required: "Unesi ${label}",
      enum: "${label} mora da bude nešto od [${enum}]",
      whitespace: "${label} ne može biti prazan znak",
      date: {
        format: "${label} format datuma je nevažeći",
        parse: "${label} se ne može konvertovati u datum",
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
        len: "${label} mora da sadrži ${len} znakova",
        min: "${label} mora da sadrži bar ${min} znakova",
        max: "${label} mora da sadrži do ${max} znakova",
        range: "${label} mora da sadrži između ${min} i ${max} znakova"
      },
      number: {
        len: "${label} mora biti jednak ${len}",
        min: "${label} mora biti najmanje ${min}",
        max: "${label} mora biti najviše ${max}",
        range: "${label} mora biti između ${min} i ${max}"
      },
      array: {
        len: "Mora biti ${len} ${label}",
        min: "Najmanje ${min} ${label}",
        max: "najviše ${max} ${label}",
        range: "Iznos ${label} mora biti između ${min} i ${max}"
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
var R = i;
const I = /* @__PURE__ */ v(R);
export {
  I as default
};
