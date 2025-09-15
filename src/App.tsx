import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './screens/HomePage/HomePage';
import { AboutPage } from './screens/AboutPage/AboutPage';
import { EducationPage } from './screens/EducationPage/EducationPage';
import { EventsPage } from './screens/EventsPage/EventsPage';
import { NewsroomPage } from './screens/NewsroomPage/NewsroomPage';
import { PartnersPage } from './screens/PartnersPage/PartnersPage';
import { HighlightsPage } from './screens/HighlightsPage/HighlightsPage';
import { CareersPage } from './screens/CareersPage/CareersPage';
import { ContactPage } from './screens/ContactPage/ContactPage';
import { FAQPage } from './screens/FAQPage/FAQPage';
import { GalleryPage } from './screens/GalleryPage/GalleryPage';
import { EventDetailPage } from './screens/EventDetailPage/EventDetailPage';
import { ProgramDetailPage } from './screens/ProgramDetailPage/ProgramDetailPage';
import { RegistrationPage } from './screens/RegistrationPage/RegistrationPage';
import { NewsletterPage } from './screens/NewsletterPage/NewsletterPage';
import { TermsPage } from './screens/TermsPage/TermsPage';
import { PrivacyPage } from './screens/PrivacyPage/PrivacyPage';

// 1. Import your Header component
import { Sidebar } from './components/Header/Sidebar';
// 2. (Optional) Import your LanguageProvider if you want language support
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider> {/* Uncomment if using language context */}
      <Router>
        <div className="App">
          {/* 3. Place Header above Routes so it shows on every page */}
          <Sidebar />
          <div style={{ paddingTop: '80px' }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/education" element={<EducationPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/newsroom" element={<NewsroomPage />} />
              <Route path="/partners" element={<PartnersPage />} />
              <Route path="/highlights" element={<HighlightsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/event/:id" element={<EventDetailPage />} />
              <Route path="/program/:id" element={<ProgramDetailPage />} />
              <Route path="/register" element={<RegistrationPage />} />
              <Route path="/newsletter" element={<NewsletterPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </div>
        </div>
      </Router>
     </LanguageProvider>
  );
}

export default App;