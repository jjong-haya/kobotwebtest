import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <span style={{ fontSize: '24px' }}>🤖</span>
          Cobot
        </div>
        <nav className="nav-links">
          <button onClick={() => handleScrollTo('about')}>소개</button>
          <button onClick={() => handleScrollTo('activities')}>활동</button>
        </nav>
        <button className="btn-primary">가입하기</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1>코딩을 즐겁게,<br />세상을 바꾸는 우리는 코봇</h1>
            <p>
              코봇(Cobot)은 개발의 즐거움을 함께 나누고 성장하는 IT 동아리입니다. 뜨거운 열정으로 모인 사람들과 반짝이는 아이디어를 현실로 만들어보세요.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => handleScrollTo('about')}>더 알아보기</button>
              <button className="btn-secondary" onClick={() => handleScrollTo('activities')}>프로젝트 보기</button>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <h2 className="section-title">코봇은 이런 곳이에요</h2>
          <p className="section-subtitle">단순한 스터디를 넘어, 함께 협력하고 실질적인 결과물을 만들어내는 문화를 지향합니다.</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>자유로운 아이디어</h3>
              <p>평소 만들어보고 싶었던 서비스, 기술들을 자유롭게 제안하고 팀 빌딩을 통해 실제로 개발합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>네트워킹 & 성장</h3>
              <p>개발자, 디자이너, 기획자 등 다양한 분야의 사람들이 모여 지식을 공유하고 동반 성장합니다.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>실전 프로젝트 경험</h3>
              <p>기획부터 배포, 운영까지 하나의 완벽한 라이프사이클을 경험하며 실무 역량을 키웁니다.</p>
            </div>
          </div>
        </section>

        <section id="activities" className="activities">
          <div className="section">
            <h2 className="section-title">주요 활동 프로그램</h2>
            <p className="section-subtitle">우리는 매 주 만나서 이런 것들을 합니다.</p>
            
            <div className="activity-list">
              <div className="activity-item">
                <div className="activity-info">
                  <h4>💻 정기 스터디 및 세미나</h4>
                  <p>최신 기술 트렌드, 언어 기초, 디자인 패턴 등 매주 주제를 선정해 발표하고 학습합니다.</p>
                </div>
                <div className="activity-tag">Every Week</div>
              </div>
              <div className="activity-item">
                <div className="activity-info">
                  <h4>🛠️ 메인 프로젝트 (해커톤)</h4>
                  <p>팀을 이루어 3개월 간 하나의 프로덕트를 완성하는 단기 집중형 프로젝트를 진행합니다.</p>
                </div>
                <div className="activity-tag">Season</div>
              </div>
              <div className="activity-item">
                <div className="activity-info">
                  <h4>🍻 네트워킹 데이</h4>
                  <p>선배 기수와의 만남, 외부 현직자 초청 강연 및 구성원 간의 친목 도모를 위한 시간을 갖습니다.</p>
                </div>
                <div className="activity-tag">Monthly</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <h2>지금 바로 코봇과 함께하세요</h2>
          <p>새로운 도전을 즐길 준비가 되셨나요? 언제든 환영합니다.</p>
          <button className="btn-primary" style={{ padding: '12px 32px', fontSize: '1.125rem' }}>지원하기</button>
          
          <div className="footer-copy">
            &copy; {new Date().getFullYear()} Cobot Club. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
