import React from 'react';
import './App.css';

// Import components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Features from './components/Features';
import Testimonials2 from './components/Testimonials2';
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
import ForWhom from './components/ForWhom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Metrics />
      <ForWhom />
      <Testimonials />
      {/* <Gallery />  */}
      {/* <News /> */}
      <Pricing />
      <FAQ />
      {/* <Partners /> */}
      <Testimonials2 />
      <Newsletter />
      <ContactForm />
      <ContactInfo /> {/* Добавлен новый компонент ContactInfo */}
      <Footer />
    </div>
  );
}

export default App;