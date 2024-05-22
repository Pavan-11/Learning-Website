import React, { useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const AddCourse = () => {
    const [course, setCourse] = useState("");
    const [courseImg, setCourseImg] = useState("")
    const [skills, setSkiils] = useState("")
    const [duration, setDuration] = useState("")
    const [description, setDescription] = useState("");

    const postCourse = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/courses`,{course,courseImg,skills,duration,description})
        .then(() => toast("Course added successfully"))
        .catch((err) => console.log(err))

    }
  return (
    <div className='col-6'>
        <ToastContainer />
        <h1>Add Course</h1>
        <form onSubmit={postCourse}>
            <input type="text" name='course' placeholder='Course Name' value={course} onChange={(e) => setCourse(e.target.value)} className='form-control mb-3' />
            <input type="url" name='courseImg' placeholder='Course Ref Img' value={courseImg} onChange={(e) => setCourseImg(e.target.value)} className='form-control mb-3' />
            <input type="text" name='skills' placeholder='skills' value={skills} onChange={(e) => setSkiils(e.target.value)} className='form-control mb-3' />
            <input type="number" name='duration' placeholder='Course Duration' value={duration} onChange={(e) => setDuration(e.target.value)} className='form-control mb-3' />
            <input type="text" name='description' placeholder='Course discription' value={description} onChange={(e) => setDescription(e.target.value)} className='form-control mb-3' />
            <input type="submit" value="Add Course" className='btn btn-success' />
        </form>
    </div>
  )
}

export default AddCourse