import React from 'react';
import { Row, Col, Title, TitleBox } from './modules/helper.js'
import Header from './components/Header.js'
import Hero from './components/Hero.js'
import Services from './components/Services.js'
import Testimonials from './components/Testimonials.js'
import Footer from './components/Footer.js'
import About from './components/About.js'
import { CssBaseline } from "@mui/material"

export default function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}