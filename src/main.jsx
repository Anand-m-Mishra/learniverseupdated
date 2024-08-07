import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/home.jsx'
import About from './Components/About/about.jsx'
import Contact from './Components/Contact/contact.jsx'
import Login from './Components/Login/Login.jsx'
import Logout from './Components/Logout/Logout.jsx'
import Register from './Components/Register/Register.jsx'
import Github, {githubInfoLoader} from './Components/Github/github.jsx'
import PrivacyPolicy from './Components/PirivacyPolicy/PrivacyPolicy.jsx'
import Terms from './Components/Terms&Conditons/Terms.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path ="login" element={<Login/>}/>
        <Route path ="logout" element={<Logout/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="PrivacyPolicy" element={<PrivacyPolicy/>}/>
        <Route path="Terms" element={<Terms/>}/>
        <Route
        loader={githubInfoLoader}
        path="github" 
        element={<Github />} />
        <Route path="*" element={<div>Page not Found</div>} />
      </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
