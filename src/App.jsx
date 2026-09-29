import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainPage from './MainPage'
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import Contact from './Pages/Contact/Contact';
import Profile from './Pages/Profile/Profile';
import AddProduct from './Pages/AddProduct/AddProduct';
import ViewProduct from './Pages/ViewProduct/ViewProduct';
import Beg from './Pages/YourBeg/Beg';
import Footer from './Components/Footer/Footer';
import TermsOfUse from './Pages/TermsOfUse/TermsOfUse';
import PrivacyPolicy from './Pages/PrivacyPolicy/PrivacyPolicy';
import CookiePolicy from './Pages/CookiePolicy/CookiePolicy';
import AboutUs from './Pages/AboutUs/AboutUs';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} /> 
        <Route path='/contact' element={<Contact />} />
        <Route path='/profile/:id' element={<Profile />} />
        <Route path='/:id/addproduct' element={<AddProduct />} />
        <Route path="/viewproduct/:id" element={<ViewProduct />} />
        <Route path='/yourbeg' element={<Beg />} />
        <Route path='/footer' element={<Footer />} />
        <Route path='/terms-of-use' element={<TermsOfUse />} />
        <Route path='/terms' element={<TermsOfUse />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/cookie-policy' element={<CookiePolicy />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
