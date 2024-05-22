import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Slider from './Slider'
import About from './About';
import Batches from './Batches';
import Courses from './Courses';
import Contact from './Contact'
import AdminLogin from '../adminLogin/AdminLogin';
import NoPage from './NoPage';
import AdminDashboard from '../adminLogin/AdminDashboard';
import CourseDetails from './CourseDetails';


const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Slider />} />
            <Route path='/about' element = {<About />} />
            <Route path='/batches' element={<Batches />} />
            <Route path='/courses' element= {<Courses />} />
            <Route path='/coursesDetails/:id' element= {<CourseDetails />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<AdminLogin />} />
            <Route path='/dashboardloginxyz' element={<AdminDashboard />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    </div>
  )
}

export default Routing