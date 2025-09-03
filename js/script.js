// 네비게이션 스크롤 효과
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// 햄버거 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// 네비게이션 링크 클릭 시 메뉴 닫기
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// 부드러운 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// 스크롤 인디케이터 클릭 이벤트
document.addEventListener('DOMContentLoaded', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            // 페이지 가장 하단으로 스크롤
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        });
    }
});

// 스크롤 애니메이션
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// 애니메이션 대상 요소들 관찰
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .about-text, .about-image');
    animateElements.forEach(el => {
        observer.observe(el);
    });
});

// 타이핑 효과
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<' && text.substring(i, i + 4) === '<br>') {
                element.innerHTML += '<br>';
                i += 4;
            } else {
            element.innerHTML += text.charAt(i);
            i++;
            }
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 모바일 환경 감지
function isMobile() {
    return window.innerWidth <= 768 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// 페이지 로드 시 타이핑 효과 적용
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // 모든 디바이스에서 타이핑 애니메이션 (두 줄로 나누어서)
        typeWriter(heroTitle, 'Backend<br>Developer', 100);
    }
});

// 스킬 아이템 호버 효과는 CSS로만 처리

// 프로젝트 카드 호버 효과
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
        this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // 카드 내부 요소들에 미묘한 애니메이션 추가
        const title = this.querySelector('.project-title');
        const description = this.querySelector('.project-description');
        const techStack = this.querySelector('.project-tech');
        
        if (title) {
            title.style.transform = 'translateY(-2px)';
            title.style.transition = 'transform 0.3s ease';
        }
        if (description) {
            description.style.transform = 'translateY(-1px)';
            description.style.transition = 'transform 0.3s ease';
        }
        if (techStack) {
            techStack.style.transform = 'translateY(-1px)';
            techStack.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
        this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        
        // 카드 내부 요소들 원래 위치로 복원
        const title = this.querySelector('.project-title');
        const description = this.querySelector('.project-description');
        const techStack = this.querySelector('.project-tech');
        
        if (title) {
            title.style.transform = 'translateY(0)';
        }
        if (description) {
            description.style.transform = 'translateY(0)';
        }
        if (techStack) {
            techStack.style.transform = 'translateY(0)';
        }
    });
});

// EmailJS 설정 (사용자가 나중에 설정해야 함)
const EMAILJS_CONFIG = {
    PUBLIC_KEY: 'YOUR_PUBLIC_KEY',      // EmailJS 대시보드에서 복사
    SERVICE_ID: 'YOUR_SERVICE_ID',      // 이메일 서비스 ID
    TEMPLATE_ID: 'YOUR_TEMPLATE_ID'     // 이메일 템플릿 ID
};

// EmailJS 초기화
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
})();

// 폼 제출 처리 (EmailJS 사용)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
    
    // 폼 데이터 수집
            const name = this.querySelector('input[name="user_name"]').value;
            const email = this.querySelector('input[name="user_email"]').value;
            const subject = this.querySelector('input[name="subject"]').value;
            const message = this.querySelector('textarea[name="message"]').value;
    
    // 간단한 유효성 검사
    if (!name || !email || !subject || !message) {
        alert('모든 필드를 입력해주세요.');
        return;
    }
    
    // 이메일 형식 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('올바른 이메일 주소를 입력해주세요.');
        return;
    }
    
            // EmailJS가 설정되지 않은 경우
            if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
                alert('EmailJS가 아직 설정되지 않았습니다. 개발자에게 문의하세요.');
                return;
            }
            
            // 버튼 상태 변경
            submitBtn.textContent = '전송 중...';
            submitBtn.disabled = true;
            
            // EmailJS로 이메일 전송
            emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
                user_name: name,
                user_email: email,
                subject: subject,
                message: message,
                to_email: 'your.email@example.com' // 받을 이메일 주소
            })
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
    alert('메시지가 성공적으로 전송되었습니다!');
                contactForm.reset();
            })
            .catch(function(error) {
                console.log('FAILED...', error);
                alert('메시지 전송에 실패했습니다. 다시 시도해주세요.');
            })
            .finally(function() {
                // 버튼 상태 복원
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
});

// 스크롤 진행 표시기
function createScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        z-index: 9999;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// 페이지 로드 시 스크롤 진행 표시기 생성
createScrollProgress();

// 현재 활성 섹션 표시
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// 활성 네비게이션 링크 업데이트 초기화
updateActiveNavLink();

// 상단으로 가기 버튼
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-chevron-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        background: var(--primary-color);
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        box-shadow: var(--shadow-lg);
        transition: all 0.3s ease;
        z-index: 1000;
        opacity: 0;
        visibility: hidden;
    `;
    
    button.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 스크롤 시 버튼 표시/숨김
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    document.body.appendChild(button);
}

// 상단으로 가기 버튼 생성
createScrollToTopButton();

// 파티클 효과 생성
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return; // 모든 디바이스에서 파티클 생성
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // 랜덤 위치 설정
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // 랜덤 애니메이션 지연
        particle.style.animationDelay = Math.random() * 6 + 's';
        
        // 랜덤 크기
        const size = Math.random() * 3 + 1;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
    }
}

// 파티클 효과 생성
createParticles();

// 커스텀 데모 HTML 생성 함수
function createCustomDemo(projectId) {
    if (projectId === 'couponpree') {
        return `
            <div style="
                width: 100%; 
                height: 500px; 
                background: #f8f9fa;
                border-radius: 12px;
                overflow-y: auto;
                position: relative;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            ">
                <!-- 상단 헤더 -->
                <div style="
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    padding: 20px;
                    color: white;
                    text-align: center;
                    border-radius: 12px 12px 0 0;
                ">
                    <div style="font-size: 24px; font-weight: bold; margin-bottom: 8px;">모바일 상품권 플랫폼</div>
                    <div style="font-size: 14px; opacity: 0.9;">소상공인과 소비자를 연결하는 디지털 상품권 서비스</div>
                </div>
                
                <!-- 메인 컨텐츠 -->
                <div style="padding: 25px;">
                    <!-- 서비스 소개 -->
                    <div style="
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    ">
                        <h3 style="margin: 0 0 15px; color: #333; font-size: 18px;">🎯 서비스 개요</h3>
                        <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">
                            모바일 상품권 구매부터 사용까지 전 과정을 디지털화하여 편의성을 높이고, 
                            가맹점에게는 안정적인 매출 확보와 마케팅 도구를 제공하는 플랫폼입니다.
                        </p>
                    </div>
                    
                    <!-- 주요 기능 -->
                    <div style="
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    ">
                        <h3 style="margin: 0 0 15px; color: #333; font-size: 18px;">⚡ 주요 기능</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                            <div style="
                                background: #f8f9ff;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #667eea;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">📱 모바일 상품권</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">할인 구매 및 발송</div>
                            </div>
                            <div style="
                                background: #fff8f0;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #ff9500;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">🎁 리워드 시스템</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">추가 적립 혜택</div>
                            </div>
                            <div style="
                                background: #f0fff4;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #28a745;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">🏪 가맹점 관리</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">매출 확보 도구</div>
                            </div>
                            <div style="
                                background: #f0f8ff;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #007bff;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">📊 마케팅 분석</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">통계 및 분석</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 기술 스택 -->
                    <div style="
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    ">
                        <h3 style="margin: 0 0 15px; color: #333; font-size: 18px;">🛠️ 개발 기술</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            <span style="
                                background: linear-gradient(135deg, #667eea, #764ba2);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Spring Boot</span>
                            <span style="
                                background: linear-gradient(135deg, #f093fb, #f5576c);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Java</span>
                            <span style="
                                background: linear-gradient(135deg, #4facfe, #00f2fe);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">MSSQL</span>
                            <span style="
                                background: linear-gradient(135deg, #fa709a, #fee140);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">iOS</span>
                            <span style="
                                background: linear-gradient(135deg, #a8edea, #fed6e3);
                                color: #333;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Firebase</span>
                            <span style="
                                background: linear-gradient(135deg, #6c5ce7, #a29bfe);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">.NET</span>
                            <span style="
                                background: linear-gradient(135deg, #f7b731, #f39c12);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">JavaScript</span>
                            <span style="
                                background: linear-gradient(135deg, #2ecc71, #27ae60);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">jQuery</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (projectId === 'ecommerce') {
        return `
            <div style="
                width: 100%; 
                height: 500px; 
                background: #f8f9fa;
                border-radius: 12px;
                overflow-y: auto;
                position: relative;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            ">
                <!-- 상단 헤더 -->
                <div style="
                    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                    padding: 20px;
                    color: white;
                    text-align: center;
                    border-radius: 12px 12px 0 0;
                ">
                    <div style="font-size: 24px; font-weight: bold; margin-bottom: 8px;">전자상거래 플랫폼</div>
                    <div style="font-size: 14px; opacity: 0.9;">네이버 커머스 연동 및 제휴 업체 관리 시스템</div>
                </div>
                
                <!-- 메인 컨텐츠 -->
                <div style="padding: 25px;">
                    <!-- 서비스 소개 -->
                    <div style="
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    ">
                        <h3 style="margin: 0 0 15px; color: #333; font-size: 18px;">🛒 서비스 개요</h3>
                        <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">
                            네이버 스마트스토어 API를 활용한 전자상거래 플랫폼으로, 제휴 업체의 상품을 효율적으로 관리하고 
                            자사 상품 관리 어드민 시스템을 개발하여 교보생명 회원과 연동된 통합적인 쇼핑 경험을 제공합니다.
                        </p>
                    </div>
                    
                    <!-- 주요 기능 -->
                    <div style="
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    ">
                        <h3 style="margin: 0 0 15px; color: #333; font-size: 18px;">⚡ 주요 기능</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                            <div style="
                                background: #fff0f5;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #e91e63;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">🛍️ 네이버 커머스</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">스마트스토어 API 연동</div>
                            </div>
                            <div style="
                                background: #f0f8ff;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #2196f3;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">🏢 제휴 업체 관리</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">상품 등록 및 재고 관리</div>
                            </div>
                            <div style="
                                background: #f0fff4;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #4caf50;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">👥 회원 연동</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">교보생명 회원 시스템</div>
                            </div>
                            <div style="
                                background: #fff8e1;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #ff9800;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">📊 자사 상품 관리</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">어드민 시스템 개발</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 기술 스택 -->
                    <div style="
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    ">
                        <h3 style="margin: 0 0 15px; color: #333; font-size: 18px;">🛠️ 개발 기술</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            <span style="
                                background: linear-gradient(135deg, #667eea, #764ba2);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Spring Boot</span>
                            <span style="
                                background: linear-gradient(135deg, #f093fb, #f5576c);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Node.js</span>
                            <span style="
                                background: linear-gradient(135deg, #4facfe, #00f2fe);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Vue.js</span>
                            <span style="
                                background: linear-gradient(135deg, #fa709a, #fee140);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Jenkins</span>
                            <span style="
                                background: linear-gradient(135deg, #a8edea, #fed6e3);
                                color: #333;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">MariaDB</span>
                            <span style="
                                background: linear-gradient(135deg, #6c5ce7, #a29bfe);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">REST API</span>
                            <span style="
                                background: linear-gradient(135deg, #f7b731, #f39c12);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">JavaScript</span>
                        </div>
                    </div>
                    
                    <!-- 네이버 커머스 연동 예시 -->
                    <div style="
                        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                        padding: 20px;
                        border-radius: 10px;
                        color: white;
                        text-align: center;
                        margin-bottom: 20px;
                    ">
                        <h3 style="margin: 0 0 15px; font-size: 18px;">🔗 네이버 커머스 연동</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
                            <div>
                                <div style="font-size: 20px; font-weight: bold; color: #ffd700;">API</div>
                                <div style="font-size: 12px; opacity: 0.9;">스마트스토어 연동</div>
                            </div>
                            <div>
                                <div style="font-size: 20px; font-weight: bold; color: #ffd700;">실시간</div>
                                <div style="font-size: 12px; opacity: 0.9;">상품 동기화</div>
                            </div>
                            <div>
                                <div style="font-size: 20px; font-weight: bold; color: #ffd700;">통합</div>
                                <div style="font-size: 12px; opacity: 0.9;">주문 관리</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 하단 정보 -->
                    <div style="
                        background: #f8f9fa;
                        padding: 15px;
                        border-radius: 8px;
                        text-align: center;
                        border: 1px solid #e9ecef;
                    ">
                        <div style="color: #666; font-size: 13px;">
                            🛒 네이버 커머스 연동과 자사 상품 관리 어드민을 통한 통합 전자상거래 플랫폼으로 효율적인 상품 관리와 매출 증대를 실현
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else if (projectId === 'fintech') {
        return `
            <div style="
                width: 100%; 
                height: 500px; 
                background: #f8f9fa;
                border-radius: 12px;
                overflow-y: auto;
                position: relative;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                box-shadow: 0 4px 20px rgba(0,0,0,0.1);
            ">
                <!-- 상단 헤더 -->
                <div style="
                    background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                    padding: 20px;
                    color: white;
                    text-align: center;
                    border-radius: 12px 12px 0 0;
                ">
                    <div style="font-size: 24px; font-weight: bold; margin-bottom: 8px;">부동산 PF 및 핀테크 서비스</div>
                    <div style="font-size: 14px; opacity: 0.9;">투자 회원 관리 및 정산 시스템 개발</div>
                </div>
                
                <!-- 메인 컨텐츠 -->
                <div style="padding: 25px;">
                    <!-- 서비스 소개 -->
                    <div style="
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    ">
                        <h3 style="margin: 0 0 15px; color: #333; font-size: 18px;">💰 서비스 개요</h3>
                        <p style="margin: 0; color: #666; font-size: 14px; line-height: 1.6;">
                            온투업 및 부동산 PF 서비스를 개발하며, 투자 회원들의 투자 관리부터 매월 정산 처리, 
                            한신정 배치를 통한 연체 관리, CS 문제 해결을 위한 개발 지원까지 전 과정을 담당했습니다.
                        </p>
                    </div>
                    
                    <!-- 주요 기능 -->
                    <div style="
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    ">
                        <h3 style="margin: 0 0 15px; color: #333; font-size: 18px;">⚡ 주요 기능</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                            <div style="
                                background: #f0f8ff;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #2196f3;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">👥 투자 회원 관리</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">회원 정보 및 투자 현황 관리</div>
                            </div>
                            <div style="
                                background: #f0fff4;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #4caf50;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">📊 매월 정산 시스템</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">자동화된 정산 처리</div>
                            </div>
                            <div style="
                                background: #fff8e1;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #ff9800;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">🔍 한신정 배치</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">연체 및 기한이익상실 관리</div>
                            </div>
                            <div style="
                                background: #fff0f5;
                                padding: 12px;
                                border-radius: 8px;
                                border-left: 4px solid #e91e63;
                            ">
                                <div style="font-weight: 600; color: #333; font-size: 13px;">🛠️ CS 지원</div>
                                <div style="color: #666; font-size: 11px; margin-top: 4px;">문제 해결을 위한 개발 지원</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 기술 스택 -->
                    <div style="
                        background: white;
                        padding: 20px;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    ">
                        <h3 style="margin: 0 0 15px; color: #333; font-size: 18px;">🛠️ 개발 기술</h3>
                        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                            <span style="
                                background: linear-gradient(135deg, #667eea, #764ba2);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Spring Boot</span>
                            <span style="
                                background: linear-gradient(135deg, #4facfe, #00f2fe);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Vue.js</span>
                            <span style="
                                background: linear-gradient(135deg, #a8edea, #fed6e3);
                                color: #333;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">PostgreSQL</span>
                            <span style="
                                background: linear-gradient(135deg, #fa709a, #fee140);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Jenkins</span>
                            <span style="
                                background: linear-gradient(135deg, #6c5ce7, #a29bfe);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">Linux</span>
                            <span style="
                                background: linear-gradient(135deg, #f093fb, #f5576c);
                                color: white;
                                padding: 6px 12px;
                                border-radius: 20px;
                                font-size: 12px;
                                font-weight: 500;
                            ">MSSQL</span>
                        </div>
                    </div>
                    
                    <!-- 핀테크 특화 기능 -->
                    <div style="
                        background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                        padding: 20px;
                        border-radius: 10px;
                        color: white;
                        text-align: center;
                        margin-bottom: 20px;
                    ">
                        <h3 style="margin: 0 0 15px; font-size: 18px;">🏦 핀테크 특화 기능</h3>
                        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px;">
                            <div>
                                <div style="font-size: 20px; font-weight: bold; color: #ffd700;">한신정</div>
                                <div style="font-size: 12px; opacity: 0.9;">배치 연동</div>
                            </div>
                            <div>
                                <div style="font-size: 20px; font-weight: bold; color: #ffd700;">금결원</div>
                                <div style="font-size: 12px; opacity: 0.9;">공시정보 전송</div>
                            </div>
                            <div>
                                <div style="font-size: 20px; font-weight: bold; color: #ffd700;">Nice</div>
                                <div style="font-size: 12px; opacity: 0.9;">정보 등록</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- 하단 정보 -->
                    <div style="
                        background: #f8f9fa;
                        padding: 15px;
                        border-radius: 8px;
                        text-align: center;
                        border: 1px solid #e9ecef;
                    ">
                        <div style="color: #666; font-size: 13px;">
                            💰 투자 회원 관리부터 정산, 연체 관리까지 핀테크 서비스의 전 과정을 개발적으로 지원하는 통합 시스템
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    return '<div>데모를 준비 중입니다.</div>';
}

// 숫자 카운터 애니메이션
function animateCounter(element, target, duration = 2000, addPlus = false) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + (addPlus ? '+' : '');
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + (addPlus ? '+' : '');
        }
    }
    
    updateCounter();
}

// 통계 섹션이 보일 때 카운터 애니메이션 시작
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat h4');
            const targets = [4, 3, 15]; // 4년 경력, 3개 회사, 15+ 프로젝트
            const addPlus = [false, false, true]; // 프로젝트에만 + 붙이기
            
            statNumbers.forEach((stat, index) => {
                animateCounter(stat, targets[index], 2000, addPlus[index]);
            });
            statsObserver.unobserve(entry.target);
        }
    });
});

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    statsObserver.observe(aboutStats);
}

// 프로젝트 모달 기능
let scrollPosition = 0;

function openProjectModal(projectId) {
    console.log('Opening modal for project:', projectId);
    
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalFeatures = document.getElementById('modalFeatures');
    const modalWebLink = document.getElementById('modalWebLink');
    const modalAppLink = document.getElementById('modalAppLink');
    const modalIframe = document.getElementById('projectIframe');
    
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    
    // 현재 스크롤 위치 저장
    scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    // 프로젝트 데이터 (실제 프로젝트 정보로 교체)
    const projectData = {
        project1: {
            title: '개인 웹 애플리케이션',
            description: '개인적으로 개발한 혁신적인 웹 애플리케이션입니다. 사용자 친화적인 인터페이스와 강력한 기능을 제공합니다.',
            features: [
                '반응형 웹 디자인',
                '실시간 데이터 처리',
                '사용자 인증 시스템',
                '모바일 최적화',
                'API 연동'
            ],
            webUrl: '#', // 실제 웹사이트 URL로 교체
            appUrl: '#', // 앱스토어 URL로 교체
            demoUrl: '#' // 데모 URL로 교체
        },
        couponpree: {
            title: '모바일 상품권 플랫폼',
            description: '소상공인과 소비자를 연결하는 모바일 상품권 서비스입니다. 상품권 구매부터 사용까지 전 과정을 디지털화하여 편의성을 높이고, 가맹점에게는 안정적인 매출 확보와 마케팅 도구를 제공합니다.',
            features: [
                '모바일 상품권 구매 및 발송',
                '가맹점 입점 및 관리 시스템',
                '소비자 리워드 적립 서비스',
                '실시간 알림 및 푸시 서비스',
                '통합 결제 시스템',
                '가맹점용 전용 앱 제공',
                '상품권 조회 및 관리',
                '소상공인 마케팅 플랫폼'
            ],
            webUrl: '#',
            appUrl: '#',
            demoUrl: 'custom',
            customDemo: true
        },
        ecommerce: {
            title: '전자상거래 플랫폼',
            description: 'Spring Boot를 활용하여 제휴 업체 상품 판매 사이트를 개발하고, 네이버 스마트스토어 API 마이그레이션, 교보생명 회원 연동, 어드민 사이트 개선 등의 업무를 수행했습니다.',
            features: [
                '네이버 스마트스토어 API 연동',
                '제휴 업체 상품 관리 시스템',
                '교보생명 회원 연동 서비스',
                '자사 상품 관리 어드민 개발',
                '상품 등록 및 재고 관리',
                '주문 처리 및 배송 관리',
                '결제 시스템 연동',
                '매출 통계 및 분석'
            ],
            webUrl: '#',
            appUrl: '#',
            demoUrl: 'custom',
            customDemo: true
        },
        fintech: {
            title: '부동산 PF 및 핀테크 서비스',
            description: '온투업 및 부동산 PF 서비스를 개발하며, 투자 회원 관리, 매월 정산 시스템, 한신정 배치를 통한 연체 관리, CS 문제 해결을 위한 개발 지원 등을 담당했습니다.',
            features: [
                '투자 회원 관리 시스템',
                '매월 정산 처리 시스템',
                '한신정 배치 연동',
                '연체 및 기한이익상실 관리',
                'CS 문제 해결 지원',
                '한국신용정보원 채권자 변동 정보 전송',
                '금결원 공시정보 전송 배치',
                'Nice 정보 등록 개발'
            ],
            webUrl: '#',
            appUrl: '#',
            demoUrl: 'custom',
            customDemo: true
        }
    };
    
    const project = projectData[projectId];
    if (project) {
        console.log('Project found:', project.title);
        
        if (modalTitle) modalTitle.textContent = project.title;
        if (modalDescription) modalDescription.textContent = project.description;
        if (modalWebLink) modalWebLink.href = project.webUrl;
        if (modalAppLink) modalAppLink.href = project.appUrl;
        
        // 커스텀 데모인 경우 HTML 콘텐츠로 교체
        if (project.customDemo) {
            const demoContainer = document.querySelector('.project-demo');
            if (demoContainer) {
                // 기존 iframe 숨기기
                const existingIframe = demoContainer.querySelector('iframe');
                if (existingIframe) {
                    existingIframe.style.display = 'none';
                }
                
                // 커스텀 데모 내용 추가
                demoContainer.innerHTML = createCustomDemo(projectId);
            }
        } else {
            // iframe을 다시 찾아서 설정
            const currentIframe = document.getElementById('projectIframe');
            if (currentIframe) {
                currentIframe.style.display = 'block';
                currentIframe.src = project.demoUrl;
            }
        }
        
        // 기능 목록 업데이트
        if (modalFeatures) {
            modalFeatures.innerHTML = '';
            project.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                modalFeatures.appendChild(li);
            });
        }
        
        modal.style.display = 'block';
        
        // 스크롤 방지 및 위치 고정
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
    } else {
        console.error('Project not found:', projectId);
    }
}

function closeProjectModal() {
    console.log('Closing modal');
    
    const modal = document.getElementById('projectModal');
    if (!modal) {
        console.error('Modal element not found');
        return;
    }
    
    modal.style.display = 'none';
    
    // iframe 리소스 해제 (존재하는 경우에만)
    const modalIframe = document.getElementById('projectIframe');
    if (modalIframe) {
        modalIframe.src = '';
    }
    
    // 스크롤 복원
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // 저장된 스크롤 위치로 복원
    window.scrollTo(0, scrollPosition);
    
    // 커스텀 데모 내용 초기화 - 애니메이션 유지를 위해 iframe으로 복원하지 않음
    // const demoContainer = document.querySelector('.project-demo');
    // if (demoContainer) {
    //     demoContainer.innerHTML = '<iframe id="projectIframe" src="" frameborder="0" style="width: 100%; height: 400px; border: none; border-radius: 8px;"></iframe>';
    // }
}

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// 페이지 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 로딩 애니메이션 추가
    document.body.style.opacity = '0';
    
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
});
