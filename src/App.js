import React , {Fragment} from 'react';
import { Route, BrowserRouter ,Routes, Link } from 'react-router-dom';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import Login from './Pages/Login/Login';
import Google from './Pages/Google/Google';
import Yourlink from './Pages/Yourlink/Yourlink';
import Account from './Pages/Account/Account';
import Notificitions from './Pages/Notificitions/Notificitions';

function App() {
  return (
    
    <BrowserRouter>

  
   <Routes>
            <Route path="/" element ={<Yourlink/>}/>
            <Route path="/Account" element ={<Account/>}/>

            <Route path="/Notificitions" element ={<Notificitions/>}/>

            <Route path="/Main" element={<Main/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Signup" element={<Signup/>}/>


            
        </Routes>
       

    </BrowserRouter>




  );
}

export default App;
