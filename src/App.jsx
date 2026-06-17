import React, { useState, useEffect, useRef } from 'react';
import { translations } from './translations';
import './App.css';
import './index.css';

function App() {
  const [lang, setLang] = useState('ar');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLanguage = () => {
    setLang(prev => prev === 'ar' ? 'en' : 'ar');
  };

  return (
    <div className={`app-container ${lang}`}>
      <button className="lang-switch-btn" onClick={toggleLanguage}>
        {t.hero.langSwitch}
      </button>

      <div className="scroll-container">
        
        {/* Hero Section */}
        <section className="scroll-section hero-section snap-center">
          <div className="stars"></div>
          <div className="hero-content">
            <div className="logo-container">
              <img src="/images/logo-01.png" alt="SignVerse Logo" className="logo" />
            </div>
            <h1 className="headline">{t.hero.headline}</h1>
            <p className="subheadline">{t.hero.subheadline}</p>
            
            <div className="download-group">
              <a href="/downloads/SignVerse.apk" download="SignVerse.apk" className="btn btn-primary">
                <img src="/images/apk.jpg" alt="Android" style={{ borderRadius: '50%' }} />
                {t.hero.downloadAndroid}
              </a>
              <a href="/downloads/SignVerse.zip" download="SignVerse.zip" className="btn btn-secondary">
                <img src="/images/windows.png" alt="Windows" />
                {t.hero.downloadWindows}
              </a>
            </div>
            
            <div className="scroll-indicator">
              <span>{t.hero.meetGuides}</span>
              <div className="arrow-down"></div>
            </div>
          </div>
        </section>

        {/* Rana & Rayan Section */}
        <section className="scroll-section characters-section bg-purple snap-center">
          <div className="section-content flex-row">
            <div className="text-content">
              <h2 className="char-name">{t.characters.ranaRayan.name}</h2>
              <p className="char-desc">{t.characters.ranaRayan.description}</p>
            </div>
            <div className="image-content duo-images">
              <img src="/images/Untitled-1-05.png" alt="Rana" className="char-img float-anim" />
              <img src="/images/Untitled-1-06.png" alt="Rayan" className="char-img float-anim-delayed" />
            </div>
          </div>
        </section>

        {/* Musleh Section */}
        <section className="scroll-section characters-section bg-orange snap-center">
          <div className="section-content flex-row reverse">
            <div className="text-content">
              <h2 className="char-name">{t.characters.musleh.name}</h2>
              <p className="char-desc">{t.characters.musleh.description}</p>
            </div>
            <div className="image-content">
              <img src="/images/Untitled-1-08.png" alt="Musleh" className="char-img float-anim large" />
            </div>
          </div>
        </section>

        {/* Wijdan Sisters Section */}
        <section className="scroll-section characters-section bg-dark snap-center">
          <div className="section-content flex-row align-start wijdan-layout">
            <div className="text-content wijdan-text">
              <h2 className="char-name mega">{t.characters.wijdan.title}</h2>
              <p className="char-desc">{t.characters.wijdan.description}</p>
            </div>
            <div className="image-content wijdan-grid">
              <div className="wijdan-card red">
                <img src="/images/Untitled-1-01.png" alt="Red - Anger" className="char-img" />
                <div className="emotion-label">{t.characters.wijdan.red.name}</div>
              </div>
              <div className="wijdan-card blue">
                <img src="/images/Untitled-1-02.png" alt="Blue - Happiness" className="char-img" />
                <div className="emotion-label">{t.characters.wijdan.blue.name}</div>
              </div>
              <div className="wijdan-card green">
                <img src="/images/Untitled-1-04.png" alt="Green - Surprise" className="char-img" />
                <div className="emotion-label">{t.characters.wijdan.green.name}</div>
              </div>
              <div className="wijdan-card purple">
                <img src="/images/Untitled-1-03.png" alt="Purple - Sadness" className="char-img" />
                <div className="emotion-label">{t.characters.wijdan.purple.name}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Siraj Section */}
        <section className="scroll-section characters-section bg-gold snap-center">
          <div className="section-content flex-col center-text">
            <div className="image-content">
              <img src="/images/Untitled-1-07.png" alt="Siraj" className="char-img float-anim siraj-img" />
            </div>
            <div className="text-content text-center">
              <h2 className="char-name">{t.characters.siraj.name}</h2>
              <p className="char-desc max-width-p">{t.characters.siraj.description}</p>
            </div>
          </div>
          
          <footer className="snap-footer">
            <p>&copy; {new Date().getFullYear()} {t.footer.copyright}</p>
          </footer>
        </section>

      </div>
    </div>
  );
}

export default App;
