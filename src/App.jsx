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
              <img src="/images/logo-01.webp" alt="SignVerse Logo" className="logo" />
            </div>
            <h1 className="headline">{t.hero.headline}</h1>
            <p className="subheadline">{t.hero.subheadline}</p>
            
            <div className="download-group">
              <a href="/downloads/SignVerse.apk" download="SignVerse.apk" className="btn btn-primary">
                <img src="/images/apk.webp" alt="Android" style={{ borderRadius: '50%' }} />
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
          <div className="rr-layout">
            <img src="/images/Untitled-1-05.webp" alt="Rana" className="char-img float-anim rr-char" />
            <div className="text-content text-center rr-text">
              <h2 className="char-name">{t.characters.ranaRayan.name}</h2>
              <p className="char-desc">{t.characters.ranaRayan.description}</p>
            </div>
            <img src="/images/Untitled-1-06.webp" alt="Rayan" className="char-img float-anim-delayed rr-char" />
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
              <img src="/images/Untitled-1-08.webp" alt="Musleh" className="char-img float-anim musleh-img" />
            </div>
          </div>
        </section>

        {/* Wijdan Sisters Section */}
        <section className="scroll-section characters-section bg-dark snap-center">
          <div className="wijdan-scene">
            {/* Left sisters */}
            <div className="wijdan-col">
              <div className="wijdan-char-wrap red">
                <img src="/images/Untitled-1-01.webp" alt="Anger" className="char-img float-anim wijdan-char" />
                <span className="emotion-label">{t.characters.wijdan.red.name}</span>
              </div>
              <div className="wijdan-char-wrap blue">
                <img src="/images/Untitled-1-02.webp" alt="Happiness" className="char-img float-anim-delayed wijdan-char" />
                <span className="emotion-label">{t.characters.wijdan.blue.name}</span>
              </div>
            </div>

            {/* Center text */}
            <div className="wijdan-center-text">
              <h2 className="char-name mega">{t.characters.wijdan.title}</h2>
              <p className="char-desc">{t.characters.wijdan.description}</p>
            </div>

            {/* Right sisters */}
            <div className="wijdan-col">
              <div className="wijdan-char-wrap green">
                <img src="/images/Untitled-1-04.webp" alt="Surprise" className="char-img float-anim wijdan-char" />
                <span className="emotion-label">{t.characters.wijdan.green.name}</span>
              </div>
              <div className="wijdan-char-wrap purple">
                <img src="/images/Untitled-1-03.webp" alt="Sadness" className="char-img float-anim-delayed wijdan-char" />
                <span className="emotion-label">{t.characters.wijdan.purple.name}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Siraj Section */}
        <section className="scroll-section characters-section bg-gold snap-center">
          <div className="section-content flex-col center-text siraj-content">
            <div className="image-content">
              <img src="/images/Untitled-1-07.webp" alt="Siraj" className="char-img float-anim siraj-img" />
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
