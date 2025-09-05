# 개발자 포트폴리오 웹사이트

백엔드 개발자의 경력과 프로젝트를 소개하는 반응형 포트폴리오 웹사이트입니다.

## ✨ 주요 특징

- **반응형 디자인**: 데스크톱, 태블릿, 모바일 모든 기기에서 최적화된 사용자 경험
- **인터랙티브 UI**: 부드러운 스크롤 애니메이션과 호버 효과
- **모던 디자인**: 깔끔하고 전문적인 UI/UX 디자인
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원
- **성능 최적화**: 빠른 로딩 속도와 부드러운 애니메이션

## 🚀 기능

### 네비게이션
- 고정 헤더 네비게이션
- 모바일 햄버거 메뉴
- 부드러운 스크롤 이동

### 섹션 구성
- **홈**: 개인 소개 및 핵심 정보
- **소개**: 상세한 경력 및 전문성 소개
- **기술 스택**: 보유 기술을 카테고리별로 정리
- **프로젝트**: 회사 프로젝트 및 개인 프로젝트
- **연락처**: 이메일 연락처 및 소셜 링크

### 인터랙션
- 프로젝트 상세 모달
- 이메일 연락처 폼 (EmailJS 연동)
- 반응형 이미지 갤러리
- 동적 나이 계산

## 🛠️ 기술 스택

### Frontend
- **HTML5**: 시맨틱 마크업
- **CSS3**: 
  - CSS Grid & Flexbox 레이아웃
  - CSS 변수 (Custom Properties)
  - 반응형 미디어 쿼리
  - CSS 애니메이션 및 트랜지션
- **JavaScript (ES6+)**:
  - 모듈화된 코드 구조
  - DOM 조작 및 이벤트 처리
  - 비동기 처리 (Promise, async/await)

### 외부 라이브러리
- **Font Awesome**: 아이콘 라이브러리
- **EmailJS**: 이메일 전송 서비스
- **Google Fonts**: Noto Sans KR 폰트

### 개발 도구
- **Git**: 버전 관리
- **GitHub**: 코드 저장소 및 배포

## 📁 프로젝트 구조

```
portfolio-website/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 통합 스타일시트 (2300+ 라인)
├── js/
│   └── script.js          # JavaScript 기능 (770+ 라인)
├── images/                # 이미지 리소스
│   └── dolphin.png        # 파비콘 이미지
├── EMAILJS_SETUP.md       # EmailJS 설정 가이드
├── .gitignore            # Git 무시 파일 목록
└── README.md             # 프로젝트 문서
```

## 🚀 시작하기

### 1. 저장소 클론
```bash
git clone https://github.com/velophin/portfolio.git
cd portfolio
```

### 2. 로컬 서버 실행
```bash
# Python 3 사용
python -m http.server 8000

# 또는 Node.js 사용
npx http-server

# 또는 Live Server 확장 사용 (VS Code)
```

### 3. 브라우저에서 확인
```
http://localhost:8000
```

## ⚙️ 설정

### EmailJS 연동 (선택사항)
연락처 폼에서 실제 이메일을 발송하려면 `EMAILJS_SETUP.md` 파일을 참고하여 EmailJS를 설정하세요.

### 개인 정보 수정
- `index.html`에서 개인 정보, 프로젝트 내용 수정
- `css/style.css`에서 색상, 폰트 등 디자인 커스터마이징
- `images/` 폴더에 프로필 이미지 및 프로젝트 이미지 추가

## 📱 반응형 지원

- **데스크톱**: 1200px 이상 (3열 그리드)
- **태블릿**: 768px - 1199px (2열 그리드)
- **모바일**: 767px 이하 (1열 그리드)

## 🎨 디자인 시스템

### 색상 팔레트
- **Primary**: #2c2c2c (다크 그레이)
- **Secondary**: #d4af37 (골드)
- **Background**: #f8f9fa (라이트 그레이)
- **Text**: #333333 (다크 그레이)

### 타이포그래피
- **Primary Font**: Noto Sans KR
- **Heading**: 2.4rem - 1.8rem
- **Body**: 1.1rem
- **Small**: 0.9rem

## 📄 라이선스

이 프로젝트는 개인 포트폴리오 용도로 제작되었습니다.

## 📞 연락처

- **이메일**: velophino@gmail.com
- **GitHub**: [velophin](https://github.com/velophin)
- **Notion**: [개발 블로그](https://velophin.notion.site)
