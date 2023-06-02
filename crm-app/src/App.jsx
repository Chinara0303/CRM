import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from "./pages/Home";
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <Router>
        <header>
          <Header />
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    )

  );
}

export default App;
