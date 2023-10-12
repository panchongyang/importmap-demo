function f(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, p = { exports: {} };
(function(a) {
  function _(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = _, a.exports.__esModule = !0, a.exports.default = a.exports;
})(p);
var c = p.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var $ = {
  // Options.jsx
  items_per_page: "件 / ページ",
  jump_to: "移動",
  jump_to_confirm: "確認する",
  page: "ページ",
  // Pagination.jsx
  prev_page: "前のページ",
  next_page: "次のページ",
  prev_5: "前 5ページ",
  next_5: "次 5ページ",
  prev_3: "前 3ページ",
  next_3: "次 3ページ",
  page_size: "ページサイズ"
};
n.default = $;
var i = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var m = {
  locale: "ja_JP",
  today: "今日",
  now: "現在時刻",
  backToToday: "今日に戻る",
  ok: "決定",
  timeSelect: "時間を選択",
  dateSelect: "日時を選択",
  weekSelect: "週を選択",
  clear: "クリア",
  month: "月",
  year: "年",
  previousMonth: "前月 (ページアップキー)",
  nextMonth: "翌月 (ページダウンキー)",
  monthSelect: "月を選択",
  yearSelect: "年を選択",
  decadeSelect: "年代を選択",
  yearFormat: "YYYY年",
  dayFormat: "D日",
  dateFormat: "YYYY年M月D日",
  dateTimeFormat: "YYYY年M月D日 HH時mm分ss秒",
  previousYear: "前年 (Controlを押しながら左キー)",
  nextYear: "翌年 (Controlを押しながら右キー)",
  previousDecade: "前の年代",
  nextDecade: "次の年代",
  previousCentury: "前の世紀",
  nextCentury: "次の世紀"
}, v = m;
u.default = v;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const b = {
  placeholder: "時間を選択",
  rangePlaceholder: ["開始時間", "終了時間"]
};
l.default = b;
var s = c.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var P = s(u), x = s(l);
const j = {
  lang: Object.assign({
    placeholder: "日付を選択",
    rangePlaceholder: ["開始日付", "終了日付"]
  }, P.default),
  timePickerLocale: Object.assign({}, x.default)
};
t.default = j;
var g = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var y = g(t);
i.default = y.default;
var d = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var J = d(n), h = d(i), M = d(t), O = d(l);
const e = "${label}は有効な${type}ではありません", T = {
  locale: "ja",
  Pagination: J.default,
  DatePicker: M.default,
  TimePicker: O.default,
  Calendar: h.default,
  Table: {
    filterTitle: "フィルター",
    filterConfirm: "OK",
    filterReset: "リセット",
    filterEmptyText: "フィルターなし",
    selectAll: "ページ単位で選択",
    selectInvert: "ページ単位で反転",
    selectionAll: "すべてを選択",
    sortTitle: "ソート",
    expand: "展開する",
    collapse: "折り畳む",
    triggerDesc: "クリックで降順にソート",
    triggerAsc: "クリックで昇順にソート",
    cancelSort: "ソートをキャンセル"
  },
  Modal: {
    okText: "OK",
    cancelText: "キャンセル",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "キャンセル"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "ここを検索",
    itemUnit: "アイテム",
    itemsUnit: "アイテム"
  },
  Upload: {
    uploading: "アップロード中...",
    removeFile: "ファイルを削除",
    uploadError: "アップロードエラー",
    previewFile: "ファイルをプレビュー",
    downloadFile: "ダウンロードファイル"
  },
  Empty: {
    description: "データがありません"
  },
  Form: {
    defaultValidateMessages: {
      default: "${label}のフィールド検証エラー",
      required: "${label}を入力してください",
      enum: "${label}は[${enum}]のいずれかである必要があります",
      whitespace: "${label}は空白文字にすることはできません",
      date: {
        format: "${label}の日付形式は不正です",
        parse: "${label}は日付に変換できません",
        invalid: "${label}は不正な日付です"
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
        len: "${label}は${len}文字である必要があります",
        min: "${label}は${min}文字以上である必要があります",
        max: "${label}は${max}文字以下である必要があります",
        range: "${label}は${min}-${max}文字の範囲である必要があります"
      },
      number: {
        len: "${label}は${len}と等しい必要があります",
        min: "${label}の最小値は${min}です",
        max: "${label}の最大値は${max}です",
        range: "${label}は${min}-${max}の範囲である必要があります"
      },
      array: {
        len: "${label}は${len}である必要があります",
        min: "${label}の最小は${min}です",
        max: "${label}の最大は${max}です",
        range: "${label}の合計は${min}-${max}の範囲である必要があります"
      },
      pattern: {
        mismatch: "${label}はパターン${pattern}と一致しません"
      }
    }
  }
};
o.default = T;
var D = o;
const Y = /* @__PURE__ */ f(D);
export {
  Y as default
};
