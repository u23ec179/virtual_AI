import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Customize from './pages/Customize'
import { userDataContext } from './context/UserContext'
import Home from './pages/Home'
import Customize2 from './pages/Customize2'

function App() {
  const {userData,setUserData}=useContext(userDataContext)
  return (
   <Routes>
     <Route path='/' element={userData ? ((userData.assistantImage && userData.assistantName) ? <Home/> : <Navigate to={"/customize"}/>) : <Navigate to={"/signin"}/>}/>
    <Route path='/signup' element={!userData?<SignUp/>:<Navigate to={"/"}/>}/>
     <Route path='/signin' element={!userData?<SignIn/>:<Navigate to={"/"}/>}/>
     <Route path='/customize' element={userData?<Customize/>:<Navigate to={"/signin"}/>}/>
       <Route path='/customize2' element={userData?<Customize2/>:<Navigate to={"/signin"}/>}/>
   </Routes>
  )
}

export default App
