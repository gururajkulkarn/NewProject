import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Tabel from './Tabel'
import Add from './Add'
import Editform from './Edit'
const AppRouter = () => {
  return (
    <>

    <BrowserRouter>
    <Routes>
        <Route exact path = "/" element={<Tabel/>}/>
        <Route exact path = "/create" element={<Add/>} />
        <Route exact path = "/update/:id" element={<Editform/>} />
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default AppRouter
