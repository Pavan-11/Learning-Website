import React, {useState} from 'react'
import axios from 'axios';
import { Slide,ToastContainer, toast } from 'react-toastify';
const NewBatches = () => {

    const [course, setCourse] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [duration, setDuration] = useState("")
    const [trainer, setTrainer] = useState("")

    const postBatch = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:4000/batches`,{course,date,time,duration,trainer})
        .then(() => toast.success('Batch addedd', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            }))
        .catch()
    }
  return (
    <div className='container'>
        <ToastContainer />
        <div className='addBatch'>
            <form onSubmit={postBatch}>
                <input type="text" placeholder='Course-Name' value={course} onChange={(e) => setCourse(e.target.value)} name='course' className='form-control mb-3'    />
                <input type="date" placeholder='Date' name='course' value={date} onChange={(e) => setDate(e.target.value)} className='form-control mb-3'    />
                <input type="text" placeholder='Time' name='course' value={time} onChange={(e) => setTime(e.target.value)} className='form-control mb-3'    />
                <input type="text" placeholder='Duration' name='course' value={duration} onChange={(e) => setDuration(e.target.value)} className='form-control mb-3'    />
                <input type="text" placeholder='Trainer' name='course' value={trainer} onChange={(e) => setTrainer(e.target.value)} className='form-control mb-3'    />
                <input type="submit" className='form-control mb-3 btn btn-danger' placeholder='Course-Name' name='course' />
            </form>
        </div>
        
    </div>
  )
}

export default NewBatches