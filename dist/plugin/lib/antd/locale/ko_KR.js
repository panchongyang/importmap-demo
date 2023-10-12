function _(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var o = {}, p = { exports: {} };
(function(a) {
  function f(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  a.exports = f, a.exports.__esModule = !0, a.exports.default = a.exports;
})(p);
var c = p.exports, n = {};
Object.defineProperty(n, "__esModule", {
  value: !0
});
n.default = void 0;
var m = {
  // Options.jsx
  items_per_page: "/ 페이지",
  jump_to: "이동하기",
  jump_to_confirm: "확인하다",
  page: "페이지",
  // Pagination.jsx
  prev_page: "이전 페이지",
  next_page: "다음 페이지",
  prev_5: "이전 5 페이지",
  next_5: "다음 5 페이지",
  prev_3: "이전 3 페이지",
  next_3: "다음 3 페이지",
  page_size: "페이지 크기"
};
n.default = m;
var i = {}, t = {}, u = {};
Object.defineProperty(u, "__esModule", {
  value: !0
});
u.default = void 0;
var $ = {
  locale: "ko_KR",
  today: "오늘",
  now: "현재 시각",
  backToToday: "오늘로 돌아가기",
  ok: "확인",
  clear: "지우기",
  month: "월",
  year: "년",
  timeSelect: "시간 선택",
  dateSelect: "날짜 선택",
  monthSelect: "달 선택",
  yearSelect: "연 선택",
  decadeSelect: "연대 선택",
  yearFormat: "YYYY년",
  dateFormat: "YYYY-MM-DD",
  dayFormat: "Do",
  dateTimeFormat: "YYYY-MM-DD HH:mm:ss",
  monthBeforeYear: !1,
  previousMonth: "이전 달 (PageUp)",
  nextMonth: "다음 달 (PageDown)",
  previousYear: "이전 해 (Control + left)",
  nextYear: "다음 해 (Control + right)",
  previousDecade: "이전 연대",
  nextDecade: "다음 연대",
  previousCentury: "이전 세기",
  nextCentury: "다음 세기"
}, v = $;
u.default = v;
var l = {};
Object.defineProperty(l, "__esModule", {
  value: !0
});
l.default = void 0;
const b = {
  placeholder: "시간 선택",
  rangePlaceholder: ["시작 시간", "종료 시간"]
};
l.default = b;
var s = c.default;
Object.defineProperty(t, "__esModule", {
  value: !0
});
t.default = void 0;
var x = s(u), g = s(l);
const k = {
  lang: Object.assign({
    placeholder: "날짜 선택",
    rangePlaceholder: ["시작일", "종료일"]
  }, x.default),
  timePickerLocale: Object.assign({}, g.default)
};
t.default = k;
var y = c.default;
Object.defineProperty(i, "__esModule", {
  value: !0
});
i.default = void 0;
var R = y(t);
i.default = R.default;
var d = c.default;
Object.defineProperty(o, "__esModule", {
  value: !0
});
o.default = void 0;
var h = d(n), P = d(i), T = d(t), D = d(l);
const e = "${label} 유효하지 않은 ${type}", M = {
  locale: "ko",
  Pagination: h.default,
  DatePicker: T.default,
  TimePicker: D.default,
  Calendar: P.default,
  global: {
    placeholder: "선택하세요"
  },
  Table: {
    filterTitle: "필터 메뉴",
    filterConfirm: "확인",
    filterReset: "초기화",
    filterEmptyText: "필터 없음",
    filterCheckall: "전체 선택",
    filterSearchPlaceholder: "필터 검색",
    emptyText: "데이터 없음",
    selectAll: "전체 선택",
    selectInvert: "선택 반전",
    selectNone: "없음",
    selectionAll: "전체 선택",
    sortTitle: "정렬",
    expand: "펼치기",
    collapse: "접기",
    triggerDesc: "내림차순으로 정렬하기",
    triggerAsc: "오름차순으로 정렬하기",
    cancelSort: "정렬 취소하기"
  },
  Tour: {
    Next: "다음",
    Previous: "이전",
    Finish: "종료"
  },
  Modal: {
    okText: "확인",
    cancelText: "취소",
    justOkText: "확인"
  },
  Popconfirm: {
    okText: "확인",
    cancelText: "취소"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "여기에 검색하세요",
    itemUnit: "개",
    itemsUnit: "개",
    remove: "삭제",
    selectCurrent: "현재 페이지 선택",
    removeCurrent: "현재 페이지 삭제",
    selectAll: "전체 선택",
    removeAll: "전체 삭제",
    selectInvert: "선택 반전"
  },
  Upload: {
    uploading: "업로드 중...",
    removeFile: "파일 삭제",
    uploadError: "업로드 실패",
    previewFile: "파일 미리보기",
    downloadFile: "파일 다운로드"
  },
  Empty: {
    description: "데이터 없음"
  },
  Icon: {
    icon: "아이콘"
  },
  Text: {
    edit: "수정",
    copy: "복사",
    copied: "복사 됨",
    expand: "확장"
  },
  PageHeader: {
    back: "뒤로"
  },
  Form: {
    optional: "(선택사항)",
    defaultValidateMessages: {
      default: "필드 유효성 검사 오류 ${label}",
      required: "${label} 값을 입력해 주세요",
      enum: "${label} [${enum}] 중에 하나여야 합니다",
      whitespace: "${label} 비워둘 수 없습니다",
      date: {
        format: "${label} 유효하지 않은 날짜 형식입니다",
        parse: "${label} 날짜 형식으로 변환될 수 없습니다",
        invalid: "${label} 유효하지 않은 날짜입니다"
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
        len: "${label} ${len}글자여야 합니다",
        min: "${label} 적어도 ${min}글자 이상이어야 합니다",
        max: "${label} ${max}글자 이하여야 합니다",
        range: "${label} ${min}-${max}글자 사이어야 합니다"
      },
      number: {
        len: "${label} 값은 ${len}이어야 합니다",
        min: "${label} 최솟값은 ${min}입니다",
        max: "${label} 최댓값은 ${max}입니다",
        range: "${label} 값은 ${min}-${max} 사이어야 합니다"
      },
      array: {
        len: "${len}이어야 합니다 ${label}",
        min: "최소 ${min}이어야 합니다 ${label}",
        max: "최대 ${max}이어야 합니다 ${label}",
        range: "${label} ${min}-${max} 사이어야 합니다"
      },
      pattern: {
        mismatch: "${label} ${pattern} 패턴과 일치하지 않습니다"
      }
    }
  },
  Image: {
    preview: "미리보기"
  },
  QRCode: {
    expired: "만료된 QR 코드",
    refresh: "새로고침"
  },
  ColorPicker: {
    presetEmpty: "미정"
  }
};
o.default = M;
var K = o;
const Y = /* @__PURE__ */ _(K);
export {
  Y as default
};
