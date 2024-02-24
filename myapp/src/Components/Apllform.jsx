import React, { useState } from 'react'
import axios from 'axios';
import { Link, Outlet } from 'react-router-dom';

const Apllform = () => {

    const[inputData,setInputData] = useState({
        fname:'',
        lname:'',
        dob:'',
        mobile:'',
        category:'',
        edu:'',
        email:'',
        country:'',
        state:'',
        city:''

    });

const handlesubmit = (e) => {

    axios.post('http://localhost:5000/apldataform',inputData)
    .then(()=>{
        alert("Form submitted succefully.")
    })
    .catch((error)=>{
        console.log(error)
    })

}


  return (
    <>
        <Link to="/"><button className='btn btn-primary m-4'>Login</button> </Link>

      <h1 className='mt-4' style={{color:"red",display:"flex",alignItems:"center",justifyContent:"center"}}>Application Form</h1>
      <div className='container w-50'>

<form onSubmit={handlesubmit}>
<div className="row mb-4">
  <div className="col">
    <input type="text" className="form-control" name="fname" placeholder="First name" onChange={e => setInputData({...inputData,fname:e.target.value})} />
  </div>
  <div className="col">
    <input type="text" className="form-control"  name="lname" placeholder="Last name"  onChange={e => setInputData({...inputData,lname:e.target.value})}/>
  </div>
</div>
<div className="row mb-4">
  <div className="col">
    <input type="date" className="form-control" name="dob" placeholder="Date of birth"  onChange={e => setInputData({...inputData,dob:e.target.value})}/>
  </div>
  <div className="col">
    <input type="number" className="form-control"  name="mobile" placeholder="Mobile"  onChange={e => setInputData({...inputData,mobile:e.target.value})}/>
  </div>
</div>
<div className="row mb-4">
  <div className="col">
    <input type="text" className="form-control" name="category" placeholder="Category"  onChange={e => setInputData({...inputData,category:e.target.value})}/>
  </div>
  <div className="col">
    <input type="text" className="form-control" name="edu" placeholder="Education"  onChange={e => setInputData({...inputData,edu:e.target.value})}/>
  </div>
</div>
<div className="row mb-4">
  <div className="col">
    <input type="email" className="form-control" name="email" placeholder="Email ID"  onChange={e => setInputData({...inputData,email:e.target.value})}/>
  </div>
  <div className="col">
    <input type="text" className="form-control" name="country" placeholder="Country"  onChange={e => setInputData({...inputData,country:e.target.value})}/>
  </div>
</div>
<div className="row mb-4">
  <div className="col">
    <input type="text" className="form-control" name="state" placeholder="State"  onChange={e => setInputData({...inputData,state:e.target.value})}/>
  </div>
  <div className="col">
    <input type="text" className="form-control" name="city" placeholder="City"  onChange={e => setInputData({...inputData,city:e.target.value})}/>
  </div>
</div>


<button className='btn btn-primary w-25'>Submit</button>
</form>

<Link to="/applctns"><button className='btn btn-success m-5'>Total Applications</button></Link>

</div>

<Outlet/>
    </>
  )
}

export default Apllform
