/* eslint-disable */

import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animasyon süresi
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
      <script src="assets/vendor/php-email-form/validate.js"></script>
      <script src="assets/vendor/aos/aos.js"></script>
      <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
      <script src="assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"></script>
      <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
      <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>

      <script src="assets/js/main.js"></script>
    </>
  );
};

export default App;