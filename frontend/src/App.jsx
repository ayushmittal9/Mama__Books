
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
      </Routes>
    </BrowserRouter>
  )
}

export default App;
