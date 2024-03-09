import './index.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AddTask from './pages/AddTask';
import Inbox from './pages/Inbox';
import Profile from './pages/accountPage/Profile';
import SignIn from './pages/accountPage/SignIn';
import SignUp from './pages/accountPage/SignUp';
import Sidebar from './components/Sidebar';

function App(props) {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path='/' element={<AddTask/>} />
          <Route path='/add-task' element={<AddTask/>} />
          <Route path='/inbox' element={<Inbox/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/login' element={<SignIn/>} />
          <Route path='/register' element={<SignUp/>} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;