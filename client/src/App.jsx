import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
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
import CustomCursor from './components/CustomCursor'; 
import DomainRedirect from './components/DomainRedirect';

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className={`min-h-screen transition-colors duration-300`}>
      <div className="bg-gray-900">
        <Navbar />
        <CustomCursor />
        <DomainRedirect />
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
        <Footer />
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