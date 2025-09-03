# EmailJS 설정 가이드

포트폴리오 웹사이트의 연락처 폼에서 실제 이메일을 발송하기 위한 EmailJS 설정 방법입니다.

## 1단계: EmailJS 계정 생성

1. **EmailJS 웹사이트 방문**: [https://www.emailjs.com/](https://www.emailjs.com/)
2. **"Sign Up" 클릭**하여 무료 계정 생성
3. **이메일 인증** 완료

## 2단계: 이메일 서비스 연결

1. **EmailJS 대시보드**에 로그인
2. **"Email Services"** 메뉴 클릭
3. **"Add New Service"** 클릭
4. **Gmail, Outlook, Yahoo** 등 원하는 이메일 서비스 선택
5. **서비스 연결** 및 **Service ID 복사**

## 3단계: 이메일 템플릿 생성

1. **"Email Templates"** 메뉴 클릭
2. **"Create New Template"** 클릭
3. **템플릿 내용 설정**:

```
Subject: {{subject}} - 포트폴리오 연락

안녕하세요,

{{user_name}}님으로부터 포트폴리오 웹사이트를 통해 메시지가 도착했습니다.

발신자: {{user_name}}
이메일: {{user_email}}
제목: {{subject}}

메시지:
{{message}}

---
포트폴리오 웹사이트 자동 발송
```

4. **Template ID 복사**

## 4단계: Public Key 확인

1. **"Account"** 메뉴 클릭
2. **"API Keys"** 탭에서 **Public Key 복사**

## 5단계: 웹사이트 설정 업데이트

`js/script.js` 파일의 다음 부분을 수정:

```javascript
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'your_actual_public_key',        // 4단계에서 복사한 Public Key
    SERVICE_ID: 'your_actual_service_id',        // 2단계에서 복사한 Service ID  
    TEMPLATE_ID: 'your_actual_template_id'       // 3단계에서 복사한 Template ID
};
```

**받을 이메일 주소도 변경**:
```javascript
to_email: 'your.actual.email@example.com' // 실제 받을 이메일 주소
```

## 6단계: 테스트

1. 웹사이트에서 연락처 폼 작성
2. "메시지 보내기" 버튼 클릭
3. 설정한 이메일 주소로 메시지 도착 확인

## 주의사항

- **무료 플랜**: 월 200회 전송 제한
- **보안**: Public Key는 공개되어도 안전함
- **템플릿 변수**: 폼의 name 속성과 템플릿 변수명이 일치해야 함

## 문제 해결

### 이메일이 오지 않는 경우:
1. **스팸 폴더** 확인
2. **EmailJS 대시보드**에서 전송 로그 확인
3. **브라우저 콘솔**에서 오류 메시지 확인

### 설정 값 확인:
1. Service ID, Template ID, Public Key 재확인
2. 템플릿의 변수명과 JavaScript 코드의 변수명 일치 확인

---

설정 완료 후 이 파일은 삭제하셔도 됩니다.
