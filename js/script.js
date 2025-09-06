// 기본 보안 설정
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

document.addEventListener('dragstart', function(e) {
    e.preventDefault();
    return false;
});

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


// 페이지 로드 시 제목 설정
window.addEventListener('load', function() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // 이름과 같은 fadeInUp 애니메이션 효과로 표시
        heroTitle.innerHTML = 'Backend<br>Developer';
    }
});


// 프로젝트 카드 호버 효과 (상세보기 오버레이만 표시)

// 개인 프로젝트 카드 호버 효과 (상세보기 오버레이만 표시)

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
        background: linear-gradient(135deg, #2c2c2c 0%, #404040 100%);
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
    if (projectId === 'project1') {
        return `
            <div class="coming-soon-demo">
                <div class="coming-soon-content">
                    <div class="coming-soon-icon">🔧</div>
                    <h3>개발 중입니다</h3>
                    <p>혁신적인 웹 애플리케이션을<br>열심히 개발하고 있습니다.</p>
                    <div class="coming-soon-badge">COMING SOON</div>
                </div>
            </div>
        `;
    } else if (projectId === 'couponpree') {
        return `
            <div class="project-demo-content">
                <div class="demo-section">
                    <h3>서비스 개요</h3>
                    <p>상품권 디자인 관리 및 생성 기능을 포함한 자사 어드민 관리 시스템입니다. 상품권의 디자인을 관리하고, 새로운 상품권을 생성하는 기능을 제공하여 비즈니스 운영을 효율화합니다.</p>
                </div>
                
                <div class="demo-section">
                    <h3>주요 기능</h3>
                    <div class="features-grid">
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">디자인 관리</div>
                                <div class="feature-desc">상품권 디자인 관리</div>
                    </div>
                            </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">상품권 생성</div>
                                <div class="feature-desc">새로운 상품권 생성</div>
                            </div>
                            </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">템플릿 관리</div>
                                <div class="feature-desc">디자인 템플릿 관리</div>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">카테고리 분류</div>
                                <div class="feature-desc">상품권 카테고리 관리</div>
                    </div>
                        </div>
                    </div>
                    </div>
                    
                <div class="demo-section">
                    <h3>개발 기술</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">Spring Boot</span>
                        <span class="tech-tag">Java</span>
                        <span class="tech-tag">MSSQL</span>
                        <span class="tech-tag">iOS</span>
                        <span class="tech-tag">Firebase</span>
                        <span class="tech-tag">.NET</span>
                        <span class="tech-tag">JavaScript</span>
                        <span class="tech-tag">jQuery</span>
                    </div>
                </div>
            </div>
        `;
    } else if (projectId === 'ecommerce') {
        return `
            <div class="project-demo-content">
                <div class="demo-section">
                    <h3>서비스 개요</h3>
                    <p>기존 SOAP 기반 스마트스토어 API를 REST API 기반 네이버커머스 API로 마이그레이션하여 구축한 전자상거래 플랫폼으로, 제휴 업체의 상품을 효율적으로 관리하고 자사 상품 관리 어드민 시스템을 개발하여 교보생명 회원 SSO 연동을 통한 통합적인 쇼핑 경험을 제공합니다.</p>
                </div>
                
                <div class="demo-section">
                    <h3>주요 기능</h3>
                    <div class="features-grid">
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">API 마이그레이션</div>
                                <div class="feature-desc">SOAP → REST API</div>
                    </div>
                            </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">제휴 업체 관리</div>
                                <div class="feature-desc">상품 등록 및 재고 관리</div>
                            </div>
                            </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">SSO 연동</div>
                                <div class="feature-desc">교보생명 회원 SSO</div>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">자사 상품 관리</div>
                                <div class="feature-desc">어드민 시스템 개발</div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                <div class="demo-section">
                    <h3>개발 기술</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">Spring Boot</span>
                        <span class="tech-tag">Node.js</span>
                        <span class="tech-tag">Vue.js</span>
                        <span class="tech-tag">Jenkins</span>
                        <span class="tech-tag">MariaDB</span>
                        <span class="tech-tag">MyBatis</span>
                        <span class="tech-tag">JPA</span>
                        <span class="tech-tag">JavaScript</span>
                    </div>
                    </div>
                    
            </div>
        `;
    } else if (projectId === 'fintech') {
        return `
            <div class="project-demo-content">
                <div class="demo-section">
                    <h3>서비스 개요</h3>
                    <p>온투업 및 부동산 PF 서비스를 개발하며, 투자 회원들의 투자 관리부터 매월 정산 처리, 한신정 배치를 통한 연체 관리, CS 문제 해결을 위한 개발 지원까지 전 과정을 담당했습니다.</p>
                </div>
                
                <div class="demo-section">
                    <h3>주요 기능</h3>
                    <div class="features-grid">
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">투자 회원 관리</div>
                                <div class="feature-desc">회원 정보 및 투자 현황 관리</div>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">매월 정산 시스템</div>
                                <div class="feature-desc">자동화된 정산 처리</div>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">한신정 배치</div>
                                <div class="feature-desc">연체 및 기한이익상실 관리</div>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">금결원 연동</div>
                                <div class="feature-desc">공시정보 전송</div>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">Nice 정보 등록</div>
                                <div class="feature-desc">신용정보 등록 시스템</div>
                            </div>
                        </div>
                        <div class="feature-item">
                            <div class="feature-content">
                                <div class="feature-title">CS 지원</div>
                                <div class="feature-desc">문제 해결을 위한 개발 지원</div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="demo-section">
                    <h3>개발 기술</h3>
                    <div class="tech-tags">
                        <span class="tech-tag">Spring Boot</span>
                        <span class="tech-tag">Vue.js</span>
                        <span class="tech-tag">PostgreSQL</span>
                        <span class="tech-tag">MySQL</span>
                        <span class="tech-tag">Jenkins</span>
                        <span class="tech-tag">Docker</span>
                        <span class="tech-tag">SVN</span>
                        <span class="tech-tag">Linux</span>
                        <span class="tech-tag">Kubernetes</span>
                        <span class="tech-tag">Elasticsearch</span>
                        <span class="tech-tag">JPA</span>
                    </div>
                </div>
            </div>
        `;
    }
    return '<div>데모를 준비 중입니다.</div>';
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
            description: '현재 개발 중인 혁신적인 웹 애플리케이션입니다. 곧 공개될 예정이며, 사용자 친화적인 인터페이스와 강력한 기능을 제공할 예정입니다.',
            features: [
                '준비 중인 반응형 웹 디자인',
                '개발 예정인 실시간 데이터 처리',
                '구현 예정인 사용자 인증 시스템',
                '모바일 최적화 예정',
                'API 연동 개발 중'
            ],
            webUrl: '#', // 준비 중
            appUrl: '#', // 준비 중
            demoUrl: '#', // 준비 중
            customDemo: true // 준비중 데모 표시
        },
        couponpree: {
            title: '자사 어드민 관리 시스템',
            description: '상품권 디자인 관리 및 생성 기능을 포함한 자사 어드민 관리 시스템입니다. 상품권의 디자인을 관리하고, 새로운 상품권을 생성하는 기능을 제공하여 비즈니스 운영을 효율화합니다.',
            features: [
                '상품권 디자인 관리 시스템',
                '상품권 생성 및 발행 기능',
                '디자인 템플릿 관리',
                '상품권 카테고리 분류',
                '디자인 미리보기 기능',
                '상품권 상태 관리',
                '사용자 권한 관리',
                '시스템 로그 및 모니터링'
            ],
            webUrl: '#',
            appUrl: '#',
            demoUrl: 'custom',
            customDemo: true
        },
        ecommerce: {
            title: '전자상거래 플랫폼',
            description: 'Spring Boot를 활용하여 제휴 업체 상품 판매 사이트를 개발하고, 기존 SOAP 기반 스마트스토어 API를 REST API 기반 네이버커머스 API로의 마이그레이션 작업, 교보생명 회원 SSO 연동, 어드민 사이트 개선 등의 업무를 수행했습니다.',
            features: [
                'SOAP → REST API 마이그레이션',
                '제휴 업체 상품 관리 시스템',
                '교보생명 회원 SSO 연동 서비스',
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
        
        // 모달 바디에 프로젝트 내용을 직접 삽입
        const modalBody = document.getElementById('modalBody');
        if (modalBody) {
        if (project.customDemo) {
                // 커스텀 데모 내용을 모달 바디에 직접 삽입
                modalBody.innerHTML = createCustomDemo(projectId);
        } else {
                // iframe 사용하는 경우
                modalBody.innerHTML = `
                    <div class="project-demo">
                        <iframe id="projectIframe" src="${project.demoUrl}" frameborder="0"></iframe>
                    </div>
                    <div class="project-details">
                        <p class="project-description">${project.description}</p>
                        <div class="project-features">
                            <h4>주요 기능</h4>
                            <ul id="modalFeatures">
                                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                            </ul>
                        </div>
                        <div class="project-links">
                            <a href="${project.webUrl}" class="btn btn-primary" target="_blank">
                                <i class="fas fa-external-link-alt"></i>
                                자세히 보기
                            </a>
                            <a href="${project.appUrl}" class="btn btn-secondary" target="_blank">
                                <i class="fas fa-code"></i>
                                기술 문서
                            </a>
                        </div>
                    </div>
                `;
            }
        }
        
        modal.style.display = 'block';
        
        // 모달 내용을 맨 위로 스크롤 (부드럽게)
        const modalContent = modal.querySelector('.modal-content');
        if (modalContent) {
            modalContent.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
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
    
    // 모달 바디 내용 초기화
    const modalBody = document.getElementById('modalBody');
    if (modalBody) {
        modalBody.innerHTML = '';
    }
    
    // 스크롤 복원
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    
    // 저장된 스크롤 위치로 복원
    window.scrollTo(0, scrollPosition);
}

// 모달 외부 클릭 시 닫기
window.addEventListener('click', function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
        closeProjectModal();
    }
});

// 섹션 접기/펼치기 기능
function toggleSection(sectionId) {
    const sectionTitle = document.querySelector(`#${sectionId} .section-title`);
    const sectionContent = document.getElementById(`${sectionId}-content`);
    
    if (sectionTitle && sectionContent) {
        sectionTitle.classList.toggle('collapsed');
        sectionContent.classList.toggle('collapsed');
    }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeProjectModal();
    }
});

// 나이 자동 계산 함수
function calculateAge() {
    const birthDate = new Date(1996, 11, 8); // 1996년 12월 8일 (월은 0부터 시작)
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

// 페이지 로드 시 항상 상단으로 스크롤
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0);
});

// 페이지 로드 완료 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    // 페이지 상단으로 스크롤
    window.scrollTo(0, 0);
    
    // 나이 업데이트
    const ageElement = document.getElementById('age');
    if (ageElement) {
        ageElement.textContent = calculateAge() + '세';
    }
    
    // 로딩 애니메이션 추가
    document.body.style.opacity = '0';
    
    window.addEventListener('load', function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
        // 로드 완료 후에도 상단으로 스크롤
        window.scrollTo(0, 0);
    });
});
