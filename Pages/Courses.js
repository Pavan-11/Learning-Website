import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const Courses = () => {
  const [coursesData, setCoursesData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:4000/courses`)
    .then((res) => setCoursesData(res.data))
    .catch((err) => console.log(err))
  })
  return (
    <div className='container p-5 text-center'>
        <h1>Courses</h1>
        <div className='row'>
          {coursesData.map((cou) => {
            return (
              <div className='col-12 col-md-6 col-lg-4 col-xl-3'>
                <div className='card'>
                  <img src={cou.courseImg} alt="" className='w-100' />
                  <div className='card-body'>
                    <h4 className='card-title'>{cou.course}</h4>
                  </div>
                  <div className='card-footer'>
                    <NavLink to={`/coursesDetails/${cou.id}`} ><button className='btn btn-danger w-100'>Know more</button></NavLink>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Courses