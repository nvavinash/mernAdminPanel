import React from 'react'
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../store/auth';
import {toast} from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username:"",
    phone:"",
    email:"",
  });

  const params = useParams();
  const {authorizationToken} = useAuth();

  const handleInput =(e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data, [name]:value,
    })
  }
   const getSingleUserData = async()=>{
      try{
        const response = await fetch(`http://localhost:8080/api/admin/users/${params.id}`,{
          method:"GET",
          headers:{
            // 'Content-Type': 'application/json',
            Authorization: authorizationToken,
          },
        });
        const data = await response.json();
         
          console.log(`users SINGLE ${data}`);
          setData(data);
        
      }catch(error){
        console.error(error);
      }
    }

  //handle updated data---------
    const handleSubmit = async(e)=>{
      e.preventDefault();

      try {
        const response = await fetch(`http://localhost:8080/api/admin/users/update/${params.id}`,{
          method: "PATCH",
          headers:{
            Authorization: authorizationToken,
            "Content-Type":"application/json"
          },
          body: JSON.stringify(data),
        });
        if(response.ok){
          toast.success("Data Update Successfully...")
        }else{
          toast.error("Some error while updating data..")
        }
       
        
      } catch (error) {
        console.log(error);
      }
    }

  useEffect(()=>{
    getSingleUserData();
  },[]);

  return (
    <>
    <section>
      <div className="section-contact">
      <h1>Update User Data</h1>
        <div className='content-contact container'>
        
          <div className='contact-form'>
            <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Username</label>
                  <input type="text"  id='username' name='username' value={data.username} onChange={handleInput}/>
                </div>
                <div>
                  <label htmlFor="Phone">Phone</label>
                  <input type="text"  id='Phone' name='phone' value={data.phone} onChange={handleInput} maxLength={10}/>
                </div>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="text"  id='email' name='email' value={data.email} onChange={handleInput}/>
                </div>
                <div>
                  <button type='submit'>
                    Update 
                  </button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}


