import React from 'react';
import NavBar from "./NavBar"
import {NavLink} from 'react-router-dom';

function Contact() {
    return (
        <div>
            <NavBar/>
            <div className='cotainer-fluid'>
                    <div className="row justify-content-around align-items-center" style={{height :"98vh" , marginTop:10 , marginLeft:'20px'}}>
                    
                    <div className="col-9 p-5 shadow bg-white" >
                    <center><span className='fw-light fs-1'>Contact Us</span></center>
                    <table  style={{marginLeft:40 , marginTop:20}}>
                        <tr>
                            <td className='p-1 px-5 ' >
                            
                                <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>

                                        <div className="card-body">
                                            <h5 class="card-title">Sourabh Kale</h5>
                                            <p class="card-text">Gmail:  sourabhkale1713@gmail.com</p>
                                            <a href="https://linkedin.com/in/sourabh-kale-b66a62202/" class="card-link"> <i class="bi bi-linkedin"></i></a>   
                                    </div>
                                </div>
                         </td>
                 <td>
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Shubham Mandekar</h5>
                                <p class="card-text">Gmail: shubham254@gmail.com</p>
                                <a href="#" class="card-link"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </td>

                <td className='p-1 px-5 ' >
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title"> Rutik Kshirsager </h5>
                                <p class="card-text">Gmail: rutikkshirsagar1@gmail.com</p>
                                <a href="#" class="card-link"><i class="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </td>
          </tr>
     </table>
     <table  style={{marginLeft:40 , marginTop:20}}>
                    <tr>
                        <td className='p-3 px-5'>
                            <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                                    <div className="card-body">
                                        <h5 class="card-title">Manjushree Kamble Diwakar</h5>
                                        
                                        <p class="card-text">Gmail:<b/><br></br> manjushreeKamble162@gmail.com          </p>
                                        <a href="#" class="card-link"><i class="bi bi-linkedin"></i></a>
                                    
                                </div>
                            </div>
                    </td>

                <td>
                    <div className="card text-bg-white mb-3" style={{Width: '200px', marginLeft:'-20px'}}>
                            <div className="card-body">
                                <h5 class="card-title">Abhishek Tukan</h5>
                                
                                <p class="card-text">Gmail:<b/> <br></br>abhitukan12@gmail.com</p>
                                <a href="#" class="card-link"><i class="bi bi-linkedin"></i></a>
                            
                        </div>
                    </div>
                </td>
            </tr>
        </table>
     </div>
    </div>
 </div>
</div>
        );
}
export default Contact;