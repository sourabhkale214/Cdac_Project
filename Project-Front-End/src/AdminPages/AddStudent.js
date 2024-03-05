import React, { useState } from 'react'
import axios from 'axios';
import AdminNavBar from './AdminNavBar';
import {useNavigate} from 'react-router-dom';

function AddStudent() {
    const url="http://localhost:8080/admin/addstudent"
    const navigate = useNavigate();
    const[data,setData]=useState({
        name:"",
        dob:"",
        mobNo:"",
        email:"",
        address:"",
        password:""
    })
    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name:data.name,
            dob: data.dob,
            mobNo: data.mobNo,
            email: data.email,
            address: data.address,
            password: data.password
        }).then(res=>
            console.log(res.data)
            )
            alert("Student Added Successfully!!")
            navigate('/admin')
    }
    

    function handle(e){
        const newData={...data}
        newData[e.target.id]=e.target.value
        setData(newData)
        console.log(newData)
    }
  return (

    <div>
        <AdminNavBar/>
        <div className='cotainer-fluid'>
       <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:0}}>
       <div className="col-4 p-4 shadow bg-white">
            <span className='fs-3 mb-3'><center>Add Student</center></span>
    <form onSubmit={(e)=>submit(e)}>
          <div className='mb-3'>
           <lable>Student Name</lable><br></br>
          
            <input type='text' placeholder='Enter Student Name'className='form-control' onChange={(e)=>handle(e)} id='name' value={data.value}></input>
           </div>
           <div className='mb-3'>
             <label>Date Of Birth</label>
             <input type ='date' className='form-control' placeholder='Enter date'onChange={(e)=>handle(e)} id='dob' value={data.value}></input>
           </div>
          
           <div className='mb-3'>
              <label>Mobile: </label>
              <input type='text' className='col-4' onChange={(e)=>handle(e)} id='mobNo' value={data.value}></input>
                &nbsp;
              <label>Email:</label> 
              <input type='email' className='col-5' onChange={(e)=>handle(e)} id='email' value={data.value}></input ><br></br>
              
           </div>
           <div className='mb-3'>
             <label>Address</label><br></br>
             <textarea className='col-100  form-control'onChange={(e)=>handle(e)} id='address' value={data.value}> </textarea>
           </div>

           <div className='mb-3'>
               <label>Password</label>
              <input type='password' className='form-control' onChange={(e)=>handle(e)} id='password' value={data.value}></input>
           </div>
           <br></br>
           <div className='mb-3'>
           <button className='btn btn-primary form-control'>Submit</button>
           </div>   
           </form>
       </div>
       </div>
       </div>
        </div>
  )
}

export default AddStudent