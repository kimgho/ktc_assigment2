ktc_assignment2
---
# 🧩 Pokemon Dex

React의 상태 관리와 라우팅, 컴포넌트 구조화를 연습하기 위한 프로젝트입니다.  
prop drilling과 Context API를 비교 구현하며, 기본 CRUD 기능을 통해 작은 포켓몬 도감 애플리케이션을 완성합니다.

---

## ✅ 기능 구현 체크리스트

### 1. Git 브랜치 전략 사용
- [x] `prop-drilling` 브랜치: props를 통한 상태 전달 방식 구현
- [x] `context` 브랜치: Context API를 이용한 전역 상태 관리 구현
- [x] 두 방식의 차이 비교 및 이해

---

### 2. 페이지 라우팅 구현
- [x] `Home` → `Dex` 페이지 이동 구현 (`react-router-dom`)
- [x] 포켓몬 카드 클릭 시 디테일 페이지로 이동
- [x] `useNavigate` 또는 `Link` 컴포넌트 사용

---

### 3. 도감 페이지 구성
- [x] `Dashboard`, `PokemonList`, `PokemonCard` 컴포넌트 구성
- [x] MOCK_DATA로 포켓몬 리스트 렌더링
- [x] 포켓몬 `추가` 시 대시보드에 추가, `삭제` 시 제거
- [x] 최대 6마리까지만 선택 가능 (초과 시 alert)

---

### 4. 디테일 페이지 구현
- [x] query string으로 포켓몬 ID 받아오기
- [x] 포켓몬 상세 정보(이미지, 이름, 타입, 설명) 표시
- [x] "뒤로 가기" 버튼 구현

---

### 5. 알림 기능
- [x] 중복 선택 시 "이미 선택된 포켓몬입니다." alert
- [x] 최대 수 초과 시 "더 이상 선택할 수 없습니다." alert

---

### 6. 스타일링 (styled-components)
- [x] `PokemonCard`, `Dashboard`에 styled-components 적용
- [x] 여백/색상 등 UI 정리
- [x] 반응형 레이아웃 고려

---

## 🧪 도전 과제 (선택 사항)

### 🔄 Redux Toolkit 리팩터링
- [x] `redux-toolkits` 브랜치 생성
- [x] Redux Toolkit으로 포켓몬 선택 상태 관리

### ➕ 디테일 페이지에서 포켓몬 추가
- [x] '추가' / '삭제' 버튼으로 상태 반영

### 🔁 리스트 페이지 상태 유지
- [x] 디테일 페이지 방문 후 상태 유지 (localStorage 등 활용)

### 💬 alert 대신 UI 라이브러리 사용
- [x] Modal 또는 toast로 피드백 제공  
- [x] 예: `react-toastify`, `sweetalert2`, `sonner` 등

---

## 🚀 배포
- [x] Vercel을 이용해 배포 완료

---

## 💡 기술 스택
- React
- react-router-dom
- styled-components
- sweetalert2
- Redux Toolkit
