import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submitCheck = (e) => {
        e.preventDefault();
        if(username === "Pavan" && password === "1234"){
            navigate("/dashboardloginxyz")
        }else{
            alert("Invalid details")
        }
    }

  return (
    <div className='container p-5'>
        <div className='col-8 col-lg-6 mx-auto login'>
            <form onSubmit={submitCheck}>
                <input type="text" name='username' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' className='form-control mb-3' />
                <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' className='form-control mb-3' />
                <input type="submit" value="Login" className='btn btn-secondary mb-3'  />
            </form>
        </div>
    </div>
  )
}

export default AdminLogin