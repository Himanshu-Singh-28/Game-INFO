import React, { useContext, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import InformationPage from './components/Information/InformationPage';
import Search from './components/Search/Search';
import { UserContext } from './main';

const App = () => {

  const {isAuth,setIsAuth,user,setUser}=useContext(UserContext);

  useEffect(()=>{
    const data=localStorage.getItem("user");
    console.log(data);
    if(data!=null){
      setIsAuth(true);
      const d=JSON.parse(data);
      setUser(d);
    }
  },[]);
  
  return (
    <>
        <Header/>
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path='/information' element={<InformationPage/>}/>
          <Route path='/search' element={<Search/>}/>
        </Routes>
        {/* <Footer/> */}
    </>
  )
}

export default App