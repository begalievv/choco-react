import React from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery'; // Секция "Наши шедевры"
import RunningText from './components/RunningText';
import News from './components/News';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Partners from './components/Partners';
import Newsletter from './components/Newsletter';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ContactInfo from './components/ContactInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      {/* <Gallery />  */}
      <RunningText /> {/* Бегущая строка после "Наших шедевров" */}
      <Metrics />
      <News />
      <FAQ />
      <Pricing />
      <Partners />
      <Newsletter />
      <ContactForm />
      <ContactInfo /> {/* Добавлен новый компонент ContactInfo */}
      <Footer />
    </div>
  );
}

export default App;