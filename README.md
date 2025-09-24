# 👁️ HORROR(가제)

외주 제작한 공포 분위기 연출용 웹 페이지입니다. 랜덤 메시지 팝업, 배경 노이즈, 오디오 효과를 통해 **불안감을 조성하는 인터랙션**을 제공합니다.

🔗 [배포 주소](https://lifetospare.dothome.co.kr/)

---

## 🖥️ 프로젝트 개요
- **유형**: 웹 인터랙티브 페이지  
- **의뢰 목적**: 개인 사용
- **작업 범위**: 프론트엔드 개발(HTML/CSS/JavaScript)  

---

## ✨ 주요 기능
- **랜덤 팝업 메시지**
  - 페이지 클릭 시 팝업 창 생성  
  - 준비된 슬로건/문구 배열에서 무작위 선택  
  - 닫기(`×`) 또는 `obey` 버튼으로 종료  

- **오디오 효과**
  - 첫 클릭 시 배경음(`bgm.m4a`) 시작  
  - 매 클릭마다 효과음(`se.m4a`) 재생  

- **비주얼 효과**
  - 메인 이미지가 클릭 시 교체 → 2초 후 원복  
  - Canvas API 기반 **실시간 노이즈 패턴** 렌더링 (CRT/공포 연출 효과)  

- **스타일링**
  - 메인 페이지 → 검은 배경 + 노이즈 오버레이  
  - 팝업 → 흰색 UI + 단순 버튼 (의도적 대비)  

---

## ⚙️ 기술적 구현
- **HTML5 / CSS3 / JavaScript (Vanilla)**  
- **Canvas API**: 픽셀 단위 랜덤 grayscale 노이즈 생성  
- **Window API**: `window.open` + `postMessage`로 팝업 메시지 전달  
- **Audio API**: `HTMLAudioElement` (`play`, `loop`, `currentTime`) 활용  
- **Event Handling**: `DOMContentLoaded`, `click`, `resize`, `message` 등

_사이트 기획과 디자인은 클라이언트 측에서 제공했습니다._
