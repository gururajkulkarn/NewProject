import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Add = () => {
  const [inputData, setInputData] = useState({
    name:'',
    email:''
  })

  const navigat = useNavigate();

const handlesubmit = (event) => {

  event.preventDefault();

  axios.post('http://localhost:3000/data',inputData)
  .then(response => {
    alert("Data added Succesfully")
    navigat('/')
  }).catch(error => console.log(error))

}

  return (
    <>


<div className='container mt-5'>
<form onSubmit={handlesubmit}>

<div className='container mt-5' style={{width:"50%"}}>

  <label>Firstname</label>
  <input type="text" className='form-control' name="name" onChange={e =>setInputData({...inputData,name: e.target.value})}/>
  <label>Email</label>
  <input type="text" className='form-control' name="email" onChange={e =>setInputData({...inputData,email: e.target.value})}/>
 <button className='btn btn-warning'>Submit</button>

</div>

</form>
    </div>
    </>
  )
}

export default Add
