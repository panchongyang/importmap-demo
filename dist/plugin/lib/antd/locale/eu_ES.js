function m(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var u = {}, b = { exports: {} };
(function(a) {
  function c(l) {
    return l && l.__esModule ? l : {
      default: l
    };
  }
  a.exports = c, a.exports.__esModule = !0, a.exports.default = a.exports;
})(b);
var k = b.exports, i = {};
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var p = {
  // Options.jsx
  items_per_page: "/ orrialde",
  jump_to: "-ra joan",
  jump_to_confirm: "baieztatu",
  page: "Orrialde",
  // Pagination.jsx
  prev_page: "Aurreko orrialdea",
  next_page: "Hurrengo orrialdea",
  prev_5: "aurreko 5 orrialde",
  next_5: "hurrengo 5 orrialde",
  prev_3: "aurreko 3 orrialde",
  next_3: "hurrengo 3 orrialde",
  page_size: "orrien tamaina"
};
i.default = p;
var o = {}, r = {}, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var f = {
  locale: "eu_ES",
  today: "Gaur",
  now: "Orain",
  backToToday: "Gaur itzuli",
  ok: "OK",
  clear: "Garbitu",
  month: "Hilabete",
  year: "Urte",
  timeSelect: "Ordua aukeratu",
  dateSelect: "Eguna aukeratu",
  weekSelect: "Astea aukeratu",
  monthSelect: "Hilabetea aukeratu",
  yearSelect: "Urtea aukeratu",
  decadeSelect: "Hamarkada aukeratu",
  yearFormat: "YYYY",
  dateFormat: "YYYY/M/D",
  dayFormat: "D",
  dateTimeFormat: "YYYY/M/D HH:mm:ss",
  monthBeforeYear: !1,
  previousMonth: "Aurreko hilabetea (RePag)",
  nextMonth: "Urrengo hilabetea (AvPag)",
  previousYear: "Aurreko urtea (Control + ezkerra)",
  nextYear: "Urrento urtea (Control + eskuina)",
  previousDecade: "Aurreko hamarkada",
  nextDecade: "Urrengo hamarkada",
  previousCentury: "Aurreko mendea",
  nextCentury: "Urrengo mendea"
}, _ = f;
n.default = _;
var t = {};
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
const g = {
  placeholder: "Aukeratu ordua"
};
t.default = g;
var s = k.default;
Object.defineProperty(r, "__esModule", {
  value: !0
});
r.default = void 0;
var $ = s(n), z = s(t);
const v = {
  lang: Object.assign({
    placeholder: "Hautatu data",
    rangePlaceholder: ["Hasierako data", "Amaiera data"]
  }, $.default),
  timePickerLocale: Object.assign({}, z.default)
};
r.default = v;
var h = k.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var x = h(r);
o.default = x.default;
var d = k.default;
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var E = d(i), y = d(o), S = d(r), A = d(t);
const e = "${label} ez da ${type} balioduna", O = {
  locale: "eu",
  Pagination: E.default,
  DatePicker: S.default,
  TimePicker: A.default,
  Calendar: y.default,
  global: {
    placeholder: "Aukeratu"
  },
  Table: {
    filterTitle: "Iragazi menua",
    filterConfirm: "Onartu",
    filterReset: "Berrasi",
    filterEmptyText: "Iragazkirik gabe",
    filterCheckall: "Autatu dena",
    filterSearchPlaceholder: "Bilatu iragazkietan",
    emptyText: "Daturik gabe",
    selectAll: "Autatu dena",
    selectInvert: "Alderantzikatu hautaketa",
    selectNone: "Hustu dena",
    selectionAll: "Autatu datu guztiak",
    sortTitle: "Ordenatu",
    expand: "Zabaldu ilera",
    collapse: "Ilera kolapsatu",
    triggerDesc: "Klik beheranzko ordenan ordenatzeko",
    triggerAsc: "Klik goranzko ordenan ordenatzeko",
    cancelSort: "Egin klik ordenamendua ezeztatzeko"
  },
  Modal: {
    okText: "Onartu",
    cancelText: "Ezeztatu",
    justOkText: "Onartu"
  },
  Popconfirm: {
    okText: "Onartu",
    cancelText: "Ezeztatu"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Bilatu hemen",
    itemUnit: "Elementu",
    itemsUnit: "Elementuak",
    remove: "Ezabatu",
    selectCurrent: "Hautatu uneko orria",
    removeCurrent: "Uneko orria ezabatu",
    selectAll: "Datu guztiak hautatu",
    removeAll: "Ezabatu datu guztiak",
    selectInvert: "Uneko orrialdea alderantzikatu"
  },
  Upload: {
    uploading: "Eguneratzen...",
    removeFile: "Fitxategi ezabatu",
    uploadError: "Errore bat gertate da fitxategia igotzerakoan",
    previewFile: "Aurrebista",
    downloadFile: "Fitxategia deskargatu"
  },
  Empty: {
    description: "Ez dago daturik"
  },
  Icon: {
    icon: "ikono"
  },
  Text: {
    edit: "Editatu",
    copy: "Kopiatu",
    copied: "Kopiatuta",
    expand: "Zabaldu"
  },
  PageHeader: {
    back: "Itzuli"
  },
  Form: {
    optional: "(aukerakoa)",
    defaultValidateMessages: {
      default: "${label} eremuaren balidazio errore",
      required: "Mesedez, sartu ${label}",
      enum: "${label} [${enum}] -tako bat izan behar da",
      whitespace: "${label} ezin da izan karaktere zuri bat",
      date: {
        format: "${label} dataren formatua baliogabea da",
        parse: "${label} ezin da data batera deitu",
        invalid: "${label} data baliogabea da"
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
        len: "${label} ${len} karaktere izan dehar ditu",
        min: "${label} gutxienez ${min} karaktere izan behar ditu",
        max: "${label} gehienez ${max} karaktere izan behar ditu",
        range: "${label} ${min}-${max} karaktere artean izan behar ditu"
      },
      number: {
        len: "${label} -ren balioa ${len} izan behar da",
        min: "${label} -ren balio minimoa ${min} da",
        max: "${label} -ren balio maximoa ${max} da",
        range: "${label} -ren balioa ${min}-${max} -ren artean izan behar da"
      },
      array: {
        len: "${len} ${label} izan behar du",
        min: "Gutxienez ${min} ${label}",
        max: "Gehienez ${max} ${label}",
        range: "${label} kopuruak ${min}-${max} -ra bitartekoa izan behar du"
      },
      pattern: {
        mismatch: "${label} ez dator bat ${pattern} patroiarekin"
      }
    }
  },
  Image: {
    preview: "Arruebista"
  }
};
u.default = O;
var P = u;
const T = /* @__PURE__ */ m(P);
export {
  T as default
};
