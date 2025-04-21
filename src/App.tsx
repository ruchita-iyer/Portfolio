import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
// import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
// import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);
  
  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loader"></div>
        <p>Loading amazing content...</p>
      </div>
    );
  }
  
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        {/* <Skills /> */}
        <Experience />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;