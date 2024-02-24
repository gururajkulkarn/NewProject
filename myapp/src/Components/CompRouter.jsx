import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginForm from './Login';
import RegisterForm from './Register';
import Apllform from './Apllform';
import Applications from './Applications';


const CompRouter = () => {
  return (
    <>
      
<BrowserRouter>
<Routes>
    <Route exact path="/" element={<LoginForm/>} />
    <Route exact path="/register" element={<RegisterForm/>} />
    <Route exact path="/apform" element={<Apllform/>} />
    <Route exact path="/applctns" element={<Applications/>} />
</Routes>
</BrowserRouter>



    </>
  )
}

export default CompRouter
