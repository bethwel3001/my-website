import React, { useState, useEffect } from 'react';
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
import Blog from './pages/Blog';

function App() {
  const { isDark } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('portfolio');

  useEffect(() => {
    // Check if we're on blog page
    const path = window.location.pathname;
    if (path === '/blog') {
      setCurrentPage('blog');
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (currentPage === 'blog') {
    return <Blog />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'dark' : ''
    }`}>
      <div className="bg-gray-900">
        <Navbar />
        <main>
          <Hero />
          <TechStack />
          <About />
          <Experience />
          <Projects />
          <Services />
          <Contact />
          <ProfileSection />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;