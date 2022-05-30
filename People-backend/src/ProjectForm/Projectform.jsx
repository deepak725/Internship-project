import React from 'react'
import {FaPlus,FaMinus} from 'react-icons/fa'
import axios from 'axios';

import { useState,useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import ViewProject from './ProjectData/ViewProject'
import './Projectform.css'

const getDatafromLS=()=>{
        const data = localStorage.getItem('projects');
        if(data){
          return JSON.parse(data);
        }
        else{
          return []
        }
      }


const Projectform = () => {
    const [visible,setVisible] = useState(false);
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [desc,setDesc] = useState("");
//     const items = [];
    const[proStartingDate , setproStartingDate] = useState("");
    const[proEndingDate,setproEndingDate] = useState("");
    const apiGet = async () => {
        const req = await fetch('http://localhost:3001/project/getData', {
          method:"GET",
           
        })
    
        const data = await req.json()
                    console.log(data);
        // console.log(data.data[0].note);
        setProjects(data.data);
       
      };
    const [projects, setProjects]=useState([]);
    let project={
        title,
        desc,
        // imgurl,
        proStartingDate,
        proEndingDate,

      }
//     const [books, setbooks]=useState(getDatafromLS());

    const formhandler = (e) =>{ 
        
       

        if(title.length === 0)
        {
                alert("Title must be provided");
                return;
        }else if(desc.length === 0)
        {
                alert("Description must be provided, small description will also work!");
                return;
        }
        else if(!proStartingDate || !proEndingDate || (proEndingDate < proStartingDate) )
        {
                alert("Please provide valid duration! ");
                return;
        }
        
        else{
                // console.log(title);
                // console.log(desc);
                console.log(proStartingDate);
                console.log(proEndingDate);
                
               
                
                //       setbooks([...books,book]);
                // setProjects([...projects,project]);
                const formData = new FormData();
                formData.append('title', title);
                formData.append('description', desc);
                formData.append('proStartingDate',proStartingDate );
                formData.append('proEndingDate',proEndingDate );
                formData.append('image',image);
                

                axios.post('http://localhost:3001/project/add/', formData)
                .then( (res) => {
                          console.log(res);
                          apiGet();
                })
                .catch(err => {
                        console.log(err);
                        alert(err);
                });

                
                console.log(projects);
                setTitle("");
                setDesc("");
                setproEndingDate("");
                setproStartingDate("");
                e.target.reset();         
                setVisible(!visible);
        }
        // console.log(title);
        // console.log(desc);
        // console.log(proEndingDate);
        // console.log(proStartingDate);
    }
    const handlePhoto = (e) => {
        // const [image,setImage] = useState("");
        setImage(e.target.files[0]);
        // setProjects({...projects, imgurl: e.target.files[0]});
    }
    useEffect(()=>{
           
        apiGet();
      },[])
    return (
        <>
    <div className='form-main'>
           
            <div className='addbtn'>
                    <center className='btn-logo'>Add new Project<div className='logo'> { visible ? <FaMinus className='minus' onClick={(e) => {
                        e.preventDefault();     
                        setVisible(!visible);}} /> : 
                        
                        <FaPlus onClick={(e) => {
                                e.preventDefault();
                                setVisible(!visible);
                        }}  className='plus' /> }</div></center> 
                    <div className={visible? "people-form" : "people-form2" }>
                            <form onSubmit= {(e) => {
                                    e.preventDefault();
                                   formhandler(e);
                                       
                                     }} encType='multipart/form-data' >
                                 
                                  <input type="text" className='' onChange={(e)=>{    
                                        setTitle(e.target.value);
                                  }} placeholder="Enter Project title!"  />

                                  < textarea rows={"5"} cols={"50"}  type={"textarea"} className='' onChange={(e)=>{
                                      
                                        setDesc(e.target.value);
                                  }} placeholder="Enter project description.."  />
                                 
                        <label className='date-label'  >
                                Project duration :  
                        </label>
                        <br/>
                        <label className='date-label2'   >
                               From  
                        </label > <input type={"date"} format={'YYYY-MM-DD'} onChange={ (e) =>{setproStartingDate(e.target.value)}}  /> 
                        <label className='date-label2'> To (Estimated)  </label> 
                        <input type={"date"} format={'YYYY-MM-DD'} onChange={ (e) =>{setproEndingDate(e.target.value)}}  />
                         

                          <label className='file-input' >
                                Upload an image regarding your project! </label>    
                              {/* <input type="file" className='file-input-image' title="Upload an image "  />
                         */}
                         
                         <input className="form-control" name='image' type="file" onChange={handlePhoto}  accept=".png, .jpg, .jpeg"  id="formFile" required />
                                  <button type={'submit'}  className={'submit-btn'} >Save</button>
                            </form>
                    </div>   
            </div>
            <br/>
        
          
           </div>
                         <center className='btn-logo'>Available projects</center>
           <div className='table-view' style={{"margin":"10%","marginTop":"5%"}}>
           {projects.length>0&&<>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Starting date</th>
                    <th>ending date</th>
                    <th>Project image</th>
                    <th>Edit data</th>
                    <th>Delete data</th>
                  </tr>
                </thead>
                <tbody>
                  <ViewProject projects= {projects} />
                </tbody>
              </table>
            </div>
            <button className='btn btn-danger btn-md'
            onClick={()=>setProjects([])}>Remove All</button>
          </>}
          {projects.length < 1 && <div>No Projects are added yet</div>}
        </div>
                        
                        
         </>
                         
  
    
  )
}

export default Projectform