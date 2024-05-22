import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SendEnquiry from './SendEnquiry';

const CourseDetails = () => {
    const {id} = useParams();
    const [course, setCourse] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/courses/${id}`)
        .then((res) => setCourse(res.data))
        .catch((err) => console.log(err))
    })

  return (
    <div className='container p-5'>
        <div className='row'>
            <div className='col-12 col-xl-8'>
                <h2>{course.course}</h2>
                <p ><strong>SKILLS YOU LEARN :</strong> <span>{course.skills}</span></p>
                <p ><strong>Duration :</strong><span className='text-bg-danger p-2'>{course.duration} Days</span></p>
                <p ><span>{course.description}</span></p>
                <img src={course.courseImg} alt="" />
            </div>

            <div className='col-12 col-xl-4'>
                <SendEnquiry />
            </div>
        </div>
    </div>
  )
}

export default CourseDetails