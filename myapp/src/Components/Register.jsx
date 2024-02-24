import React, { useState } from 'react';
import axios from 'axios';
import {Link, Outlet, useNavigate } from 'react-router-dom';
// import { ToastContainer,toast} from 'react-toastify';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous error message
    setError('');

   
    // Send the registration data to the server using Axios
    axios.post('http://localhost:5000/api/register', formData)
      .then((response) => {
        // alert("Registered successfully!");
        alert("Registered successfully!")
        navigate('/')
        // Registration successful, you can add any additional logic here
      })
      .catch((error) => {
        console.log(error);
        setError('An error occurred during registration. Please try again later.');
      });
  };

  return (
    <>
       {/* <ToastContainer/> */}

      <main className="form-signin w-100 m-auto" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
  <form onSubmit={handleSubmit}>
    <h1 className=" m-5 fw-normal">Please Register</h1>
    <div className="form-floating mb-2">
      <input type="text" className="form-control" placeholder="Firstname" name="firstname" value={formData.firstname} onChange={handleChange} required />
      <label htmlFor="floatingInput">Firstname</label>
    </div>
    <div className="form-floating mb-2">
      <input type="text" className="form-control" placeholder="Password" name="password"  value={formData.password} onChange={handleChange}  required/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
   
<div className='row'>
<div className='col'>
    <button className="btn btn-success w-100 py-2" type="submit">Register</button>
    </div>
    <div className='col'>
   <Link to="/"><button className="btn btn-primary w-50 py-2" type="submit">Login</button></Link> 
    </div>
    </div>
    <p className="mt-5 mb-3 text-body-secondary">@2023</p>
  </form>
</main>

<Outlet/>
    </>
  );
};

export default RegisterForm;
