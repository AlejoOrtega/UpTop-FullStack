import './App.css';
import React, {useEffect} from 'react';
import Landing from './pages/Landing';
import LandingBody from './pages/LandingBody';
import ContactUs from './pages/ContactUs';
import Plan from './pages/Plan';
import MyCourse from './pages/MyCourse';
import Profile from './pages/Profile';


import { Routes, Route } from 'react-router-dom';
import {autoLogin} from './components/utils/fetchs';

import {useDispatch} from 'react-redux';
import { saveUser } from './components/utils/stores/user';

function App() {

  const dispatch = useDispatch()
  useEffect(()=> {

    const checkCookies = async()=> {
      let response = await autoLogin()
      if(response.hasOwnProperty('username')){
        dispatch(saveUser(response.username))
      }
    }

    checkCookies()
  },[dispatch])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>}>
          <Route index element={<LandingBody/>}/>
          <Route path='contact-us' element={<ContactUs/>}/>
          <Route path='plans' element={<Plan/>}/>
          <Route path='my-courses' element={<MyCourse/>}/>
          <Route path='profile' element={<Profile/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
