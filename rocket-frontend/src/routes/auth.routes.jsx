import { Routes, Route } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'

import { SignUp } from '../pages/SignUp'

import { All } from '../pages/All'

export function AuthRoutes() {
  return(
    <Routes>
      
      <Route path="/" element={<All/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/> *
    </Routes>
  )
}