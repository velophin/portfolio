# 포트폴리오 웹사이트

개인 이력서 및 포트폴리오를 보여주는 모던한 웹사이트입니다.

## ✨ 주요 기능

- **반응형 디자인**: 모든 디바이스에서 완벽하게 작동
- **모던한 UI/UX**: 최신 디자인 트렌드 적용
- **부드러운 애니메이션**: 스크롤 기반 애니메이션 효과
- **인터랙티브 요소**: 3D 카드 효과, 타이핑 애니메이션 등
- **다크 모드 지원**: 사용자 선호에 따른 테마 변경
- **SEO 최적화**: 검색엔진 친화적 구조

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **디자인**: CSS Grid, Flexbox, CSS Animations
- **아이콘**: Font Awesome
- **폰트**: Google Fonts (Noto Sans KR)

## 📁 프로젝트 구조

```
portfolio-website/
├── index.html          # 메인 HTML 파일
├── css/
│   └── style.css       # 메인 스타일시트
├── js/
│   └── script.js       # JavaScript 기능
├── images/             # 이미지 파일들
├── README.md           # 프로젝트 설명
└── .gitignore         # Git 무시 파일
```

## 🚀 시작하기

1. **저장소 클론**
   ```bash
   git clone [repository-url]
   cd portfolio-website
   ```

2. **로컬에서 실행**
   - 브라우저에서 `index.html` 파일을 직접 열기
   - 또는 Live Server 확장 프로그램 사용

3. **개발 서버 실행** (선택사항)
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js (http-server 설치 필요)
   npx http-server
   ```

## 📝 커스터마이징

### 개인 정보 수정
`index.html` 파일에서 다음 내용들을 수정하세요:

- 이름 및 타이틀
- 소개 텍스트
- 연락처 정보
- 프로젝트 정보
- 기술 스택

### 스타일 변경
`css/style.css` 파일에서 CSS 변수를 수정하여 색상 테마를 변경할 수 있습니다:

```css
:root {
    --primary-color: #3b82f6;    /* 메인 컬러 */
    --primary-dark: #1e40af;     /* 어두운 메인 컬러 */
    --text-color: #1f2937;       /* 텍스트 컬러 */
    /* ... 기타 변수들 */
}
```

### 프로젝트 추가
`index.html`의 프로젝트 섹션에 새로운 프로젝트 카드를 추가하세요:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="project-content">
        <h3>프로젝트 제목</h3>
        <p>프로젝트 설명...</p>
        <!-- 기술 스택 및 링크 -->
    </div>
</div>
```

## 📱 반응형 브레이크포인트

- **Desktop**: 1024px 이상
- **Tablet**: 768px - 1023px  
- **Mobile**: 767px 이하

## 🎨 포함된 애니메이션

- 페이지 로드 시 페이드 인 효과
- 스크롤 기반 요소 애니메이션
- 호버 효과 (3D 변형, 색상 변경)
- 타이핑 애니메이션
- 숫자 카운터 애니메이션
- 부드러운 스크롤 네비게이션

## 🌟 추가 기능

- **스크롤 진행 표시기**: 페이지 상단에 진행률 표시
- **활성 섹션 표시**: 현재 보고 있는 섹션을 네비게이션에서 하이라이트
- **다크 모드 토글**: 우하단 버튼으로 테마 변경
- **햄버거 메뉴**: 모바일에서 접을 수 있는 네비게이션

## 🚀 배포

### GitHub Pages
1. GitHub에 저장소 생성
2. 파일들을 푸시
3. Repository Settings > Pages에서 배포 설정

### Netlify
1. 프로젝트를 ZIP으로 압축
2. Netlify에 드래그 앤 드롭으로 배포

### Vercel
```bash
npm i -g vercel
vercel --static
```

## 📞 연락처

프로젝트에 대한 질문이나 제안사항이 있으시면 언제든 연락주세요!

- **Email**: your.email@example.com
- **GitHub**: [your-github-username]
- **LinkedIn**: [your-linkedin-profile]

## 📄 라이센스

이 프로젝트는 MIT 라이센스 하에 배포됩니다. 자유롭게 사용, 수정, 배포하실 수 있습니다.

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
