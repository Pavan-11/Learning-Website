import axios from 'axios';
import React, { useState } from 'react'

const SendEnquiry = () => {

  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")
  const [message, setMessage] = useState("");
  let nameStatus= false;
  let mobileStatus= false;
  let emailStatus= false;


  const validateForm = (e) => {
    e.preventDefault();
    const nameError = document.getElementById("nameError")
    const mobileError = document.getElementById("mobileError")
    const emailError = document.getElementById("emailError");
    const alphaExp = /^[a-zA-Z]+$/;
    const numExp = /^[0-9]+$/;
    const emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(username === ""){
      nameError.innerHTML = ("Name is Mandatory");
    }else{
      if(username.match(alphaExp)){
        nameError.innerHTML = "";
        nameStatus = true;
      }else{
        nameError.innerHTML = "Only Characters"
      }
    }

    //mobile
    if(mobile === ""){
      mobileError.innerHTML = ("Mobile Number is Mandatory");
    }else{
      if(mobile.match(numExp)){
        if(mobile.length === 10){
          mobileError.innerHTML = ""
          mobileStatus = true;
        }else{
          mobileError.innerHTML = "10 Digits Mobile Number";
        }
      }else{
        mobileError.innerHTML = "Only Digits";
      }
    }

    //email

    if(email === ""){
      emailError.innerHTML = ("Email is Mandatory")
    }else{
      if(email.match(emailExp)){
        emailError.innerHTML = ""
        emailStatus = true;
      }else{
        emailError.innerHTML = "Invalid Format : Ex - Pavan123@gmail.com"
      }
    }

    if(nameStatus && mobileStatus && emailStatus){
      axios.post(`http://localhost:4000/enquires`,{username,mobile,email,course,message})
      .then((res) => alert("Thanks for contacting. We'll get back to you soon!"))
      .catch((err) => console.log(err))
    }

    setUsername("")
    setEmail("")
    setCourse("")
    setMessage("")
    setMobile("")
  }
  
  return (
    <div>
        <form onSubmit={validateForm}>
            <input type="text" placeholder='Your Name' className='form-control mb-3' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <p id="nameError" className='text-danger'></p>
            <input type="text" placeholder='Your Number' className='form-control mb-3' name='mobile' value={mobile} onChange={(e) => setMobile(e.target.value)} />
            <p id="mobileError" className='text-danger'></p>
            <input type="text" placeholder='Your Email' className='form-control mb-3' name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <p id="emailError"className='text-danger'></p>
            <input type="text" placeholder='Intrested Course' className='form-control mb-3' name='course' value={course} onChange={(e) => setCourse(e.target.value)} />
            <textarea placeholder='Message' name='message'  className=' form-control mb-3' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <input type="submit" value="Send Enquiry" className='btn btn-danger mb-3' />
        </form>
    </div>
  )
}

export default SendEnquiry;