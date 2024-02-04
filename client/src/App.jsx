import './App.css'
import {BrowserRouter,Routes, Route} from "react-router-dom";
import {Home} from './pages/Home';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import {Service} from "./pages/Service";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Navbar} from "./components/Navbar";
import { Footer } from './components/Footer';
import { Error } from './pages/error';
import { Logout } from './pages/Logout';
import { AdminLayout } from './components/layouts/Admin-Layout';
import { AdminContacts } from './pages/AdminContacts';
import { AdminUsers } from './pages/AdminUsers';


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/>
        <Route path= "/*" element={<Error/>}/>

        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='users' element={<AdminUsers/>}/>
          <Route path="contacts" element={<AdminContacts/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
