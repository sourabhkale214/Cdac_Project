import './Style.css';
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from "react-router-dom";
import NavBar from './NavBar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function  Signin(){
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

   const  handleApi =async () =>{
       if(email === ""){
              document.getElementById('passErrorMsg').innerHTML = "email should not be blank"
       }
       if(password === ""){
              document.getElementById('passErrorMsg').innerHTML = "password should not be blank"
       }
        if(email === "" && password === ""){
              document.getElementById('passErrorMsg').innerHTML = "password and email should not be blank"
        }

        let user1 =await axios.post('http://localhost:8080/',
        {
            email : email,
            password : password
        })
        .then(result =>{
               console.log(result.data)
               //setUser(result.data);
              // alert('success')
               //localStorage.setItem("user", JSON.stringify(result.data));
               
               return result.data;

              //  .catch(error => {
              //   alert('service error')
              //   console.log(error)
                
               })
               //console.log(JSON.stringify(user1));
               sessionStorage.setItem("userName",user1.data.name)
               sessionStorage.setItem("userId",user1.data.id)
               sessionStorage.setItem("userRole",user1.data.role)
               sessionStorage.setItem("userName",user1.data.name)
               console.log(user1.data.name);
               if(user1.data.role==="ROLE_STUDENT")
               navigate('/student');
               else if(user1.data.role==="ROLE_FACULTY")
               navigate('/faculty');
               if(user1.data.role==="ROLE_ADMIN")
               navigate('/admin');
              // navigate('/student',{state:{user:user1}})
            
        }
        
        return(
              <div>
                     <NavBar></NavBar>
                     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
            <div className="container-fluid">
            <div className="row justify-content-around align-items-center" style={{height :"98vh"}}>
                    <div className="col-4 p-5 shadow">
                                   {/* <div id="logOutMsg"></div>   */}
                                   <h3 className="head">Login</h3>
                                   <div className="ui form">
                                      <div className="field">
                                   <label>Email Address</label>
                                  <div className="mb-3">
                                         <input type="email" name="email" className="form-control" placeholder="Enter Email" onChange={handleEmail} value= {email} required/>
                                         <div id="emailErrorMsg"></div>
                                  </div>
                                 
                                      </div>
                                      <div className="field">
                                  <label>Password</label>
                                  <div className="mb-3">
                                         <input type="password" name="pass" className="form-control" placeholder="Enter Password" onChange={handlePassword} value={password} required/>
                                  </div>
                                         <div id="passErrorMsg"></div>
                                  </div>
                                
                                  
                                  <div className="mb-3 py-3" style={{textAlign:"center"}}>
                                         <button className="btn btn-primary form-control" onClick={handleApi} disabled={!email || !password}>Sign in</button>
                                  </div>
                                  </div>
                                  
                              
                    </div>
                   
            </div>
     </div>
     </div>
     )
            
   }

   export default Signin;
  
