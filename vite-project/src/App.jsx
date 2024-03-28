import './App.css'
import {Routes, Route} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage/HomePage'
import LoginPage from './Pages/Login/LoginPage'
import RegisterPage from './Pages/Register/RegisterPage'
import BoardPage from './Pages/Board/BoardPage'
import 'bootstrap/dist/css/bootstrap.min.css';
import DiaryPage from './Pages/Diary/DiaryPage'
import Navbar from './AppLayout/Navbar'
import { useState } from 'react'

function App() {
  const [LoginTrue, setLoginTrue] = useState(false);

  return (
    <>
    <Navbar LoginTrue = {LoginTrue}/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage setLoginTrue = {setLoginTrue}/>}/>
      <Route path='/Register' element={<RegisterPage/>}/>
      <Route path='/Board' element = {<BoardPage/>}/>
      <Route path='/Diary' element = {<DiaryPage/>}/>
    </Routes>
    </>
  )
}

export default App
