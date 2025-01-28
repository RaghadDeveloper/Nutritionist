import { Route, Routes } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About';
import Team from './Pages/Team/Team';
import Process from './Pages/Process/Process';
import Pricing from './Pages/Pricing/Pricing';
import Blogs from './Pages/Blogs/Blogs';
import Contact from './Pages/Contact/Contact';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';



function App() {
  
  return ( 
    <>
      <ScrollToTop />
      <NavBar /> 
      <Routes>
        <Route path="/Nutritionist/" element={<Home />} />
        <Route path="/Nutritionist/about" element={<About />} />
        <Route path="/Nutritionist/team" element={<Team />} />
        <Route path="/Nutritionist/process" element={<Process />} />
        <Route path="/Nutritionist/pricing" element={<Pricing />} />
        <Route path="/Nutritionist/blogs" element={<Blogs />} />
        <Route path="/Nutritionist/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
