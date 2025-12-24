import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import LoadingScreen from './components/LoadingScreen';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Services from './sections/Services';
import Contact from './sections/Contact';
import ProfileSection from './sections/ProfileSection';

const AppContent = () => {
  const location = useLocation();
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Don't show navbar and footer on blog pages
  const isBlogPage = location.pathname.startsWith('/blog');
  const showNavbar = !isBlogPage;
  const showFooter = !isBlogPage;

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark' : ''
    }`}>
      <div className="bg-gray-900">
        {showNavbar && <Navbar />}
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <TechStack />
                <About />
                <Experience />
                <Projects />
                <Services />
                <Contact />
                <ProfileSection />
              </>
            } />
          </Routes>
        </main>
        {showFooter && <Footer />}
        <BackToTop />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;