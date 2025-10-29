import React from 'react';
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Banner from './components/Banner'
import Info from './components/Info'
import Banner2 from './components/Banner2'
import Info2 from './components/Info2'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <ThemeProvider theme={theme}>
            <Header />
            <Hero />
            <Banner />
            <Info />
            <Banner2 />
            <Info2 />
            <Footer />
          </ThemeProvider>
        } />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}