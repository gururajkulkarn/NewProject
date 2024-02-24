import React, { useState } from 'react';
import { Link,Outlet, useNavigate  } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    password: '',
  });
  const [error, setError] = useState(null); // State for handling errors

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

// Perform client-side validation
if (!formData.firstname || !formData.password) {
  setError('Please fill in all fields.');
  return;
}

    axios.post('http://localhost:5000/api/login', formData)
      .then((response) => {
        console.log(response.data.message); // Login successful

        // Redirect to /home on successful login
        console.log('login successfull')
        navigate('/apform')
      })
      .catch((error) => {
        alert('Invalid Credentials')
        console.log(error);

        // Set the error message for unsuccessful login
        setError('Invalid credentials');
      });
  };


  return (
    <>
   

  <main className="form-signin w-100 m-auto" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
  <form onSubmit={handleSubmit}>
    <h1 className=" m-5 fw-normal">Please Log in</h1>
    <div className="form-floating mb-2">
      <input type="text" className="form-control" placeholder="Firstname" name="firstname" value={formData.firstname} onChange={handleChange} required/>
      <label htmlFor="floatingInput">Firstname</label>
    </div>
    <div className="form-floating mb-2">
      <input type="text" className="form-control" placeholder="Password" name="password"  value={formData.password} onChange={handleChange} required/>
      <label htmlFor="floatingPassword">Password</label>
    </div>
   
 <div className='row'>
 <div className='col'>
    <button className="btn btn-primary w-100 py-2" type="submit">Log in</button>
    </div>
    <div className='col'>
    <Link to="/register"><button className="btn btn-primary w-100 py-2" type="submit">Register</button></Link> 
  </div>
  </div>
    <p className="mt-5 mb-3 text-body-secondary">@2024</p>
  </form>
  </main>



      <Outlet />
    </>
  );
};

export default LoginForm;
