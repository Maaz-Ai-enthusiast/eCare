import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import ForTherapist from './pages/ForTherapist';
import PaitentLogin from './pages/PaitentLogin';
import TherapistLogin from './pages/TherapistLogin';
import FindTherapist from './pages/FindTherapist';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <Router>
      <div
      className='relative'
      >
      <Navbar />
      </div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/for-therapist" element={<ForTherapist />} />
        <Route path="/find-therapist" element={<FindTherapist />} />
        <Route path="/paitent-login" element={<PaitentLogin />} />
        <Route path="/therapist-login" element={<TherapistLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/login-form" element={<LoginForm />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
