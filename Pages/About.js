import React from 'react';
import sideImg from '../assets/peter-fogden-z7oytXGI6VI-unsplash.jpg'
const About = () => {
  return (
    <div className='container p-5'>
        <div className='row'>
            <div className='col-12 col-lg-8'>
                <h2>Welcome to Hyderabad IT Trainings</h2>
                <p className='p'>Hyderabad IT Trainings is a Hyderabad based Training Institute delivering classroom and online trainings in India, USA and UK, Australia. We are Providing high quality training is our core value. We offer both classroom and online training on niche technologies which are in high demand. All our trainers are IT professionals with rich experience.</p>
                <p>Hyderabad IT Trainings is a leading training and placement company in hyderabad managed by industry experts with more than 9+ years of experience in leading MNC Companies. We are wellknown for our practical approach towards training that enables students to gain realtime exposure.</p>
                <p>Hyderabad IT Trainings is a one-stop shop for IT courses, Web Development services & Recruitment services. Hyderabad IT Trainings concentrates on its vision of building up strong client and business partnerships. To this end, Hyderabad IT Trainings offers Real-time and placement focuses training services.</p>
            </div>
            <div className='col-12 col-lg-4'>
                <img src={sideImg} alt="" className='w-75' />
            </div>
        </div>
    </div>
  )
}

export default About