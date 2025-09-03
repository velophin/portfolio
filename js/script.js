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
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 페이지 로드 시 타이핑 효과 적용
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        typeWriter(heroTitle, '안녕하세요!', 150);
    }
});

// 스킬 아이템 호버 효과
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05) rotate(2deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

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

// 다크 모드 토글 (선택사항)
function createDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.className = 'dark-mode-toggle';
    toggle.style.cssText = `
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
        box-shadow: var(--shadow);
        transition: all 0.3s ease;
        z-index: 1000;
    `;
    
    toggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const icon = this.querySelector('i');
        if (document.body.classList.contains('dark-mode')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    });
    
    document.body.appendChild(toggle);
}

// 다크 모드 토글 생성
createDarkModeToggle();

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

// 페이지 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 로딩 애니메이션 추가
    document.body.style.opacity = '0';
    
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    });
});
