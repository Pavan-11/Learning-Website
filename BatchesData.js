import React, { useEffect, useState } from 'react'
import axios from "axios";
import NewBatches from './NewBatches';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { toast, Bounce, ToastContainer } from 'react-toastify';

const BatchesData = () => {

    const [id,setId] = useState("")
    const [course, setCourse] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [duration, setDuration] = useState("")
    const [trainer, setTrainer] = useState("")


    const [batches, setBatches] = useState([]);
    
    useEffect(() => {
        axios.get(`http://localhost:4000/batches`)
        .then((res) => {
            setBatches(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    })


    const deleteBatch = (batchId) => {
        axios.delete(`http://localhost:4000/batches/${batchId}`)
        .then(()=>{
            toast.success('Batch deleted', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        })
        .catch((err) => {
            toast.error('Could not delete', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
                console.log(err)
        })
    }

    const editBatch = (batchId) => {
        axios.get(`http://localhost:4000/batches/${batchId}`)
        .then((res)=>{
            setId(res.data.id)
            setCourse(res.data.course)
            setDate(res.data.date)
            setTime(res.data.time)
            setDuration(res.data.duration)
            setTrainer(res.data.trainer)
        })
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:4000/batches/${id}`,{id,course,date,time,duration,trainer})
        .then(() => {
            toast.success('Batch updated', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
        })
        .catch((err) => {
            toast.error('Could not update', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "colored",
                transition: Bounce,
                });
                console.log(err)
        })
    }
  return (
    <div className='container-fluid p-5'>
        <button className='btn btn-success w-25' data-bs-target = "#addBatch" data-bs-toggle = "modal">Add Batch</button>
        <ToastContainer />
        <div className='modal fade' id='addBatch'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4>Add Batch</h4>
                    </div>
                    <div className='modal-body'>
                        <NewBatches />
                    </div>
                </div>
            </div>
        </div>

        <div className='modal fade' id='updateBatch'>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h4>Update Batch</h4>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={handleUpdate}>
                            <input type="text" placeholder='Course-Name'  name='course'value={course} onChange={(e) => setCourse(e.target.value)} className='form-control mb-3'    />
                            <input type="date" placeholder='Date' name='date'  value={date} onChange={(e) => setDate(e.target.value)} className='form-control mb-3'    />
                            <input type="text" placeholder='Time' name='time'  value={time} onChange={(e) => setTime(e.target.value)} className='form-control mb-3'    />
                            <input type="text" placeholder='Duration' name='duration' value={duration} onChange={(e) => setDuration(e.target.value)} className='form-control mb-3'    />
                            <input type="text" placeholder='Trainer' name='trainer' value={trainer} onChange={(e) => setTrainer(e.target.value)} className='form-control mb-3'    />
                            <input type="submit" className='form-control mb-3 btn btn-danger' placeholder='Course-Name' name='course' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <table className='table table-bordered '>
            <thead className='table-dark'>
                <tr>
                    <th>course</th>
                    <th>date</th>
                    <th>time</th>
                    <th>duration</th>
                    <th>trainer</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {batches.map((batch) => {
                    return (
                        <tr key={batch.id}>
                            <td>{batch.course}</td>
                            <td>{batch.date}</td>
                            <td>{batch.time}</td>
                            <td>{batch.duration}</td>
                            <td>{batch.trainer}</td>
                            <td>
                                <button className='btn btn-primary me-2 w-25 h-25 m-0' data-bs-target="#updateBatch" onClick={() => editBatch(batch.id)} data-bs-toggle = "modal"><i className="bi bi-pencil"></i></button>
                                <button className='btn btn-danger w-25 h-25 m-0' onClick={() => deleteBatch(batch.id)}><i className="bi bi-trash3-fill"></i></button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>

        </table>
    </div>
  )
}

export default BatchesData