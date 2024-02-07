import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useAuth } from '../store/auth';

export const AdminContacts = () => {

  const {authorizationToken} = useAuth();
  const [contactData, setContactData] = useState([]);

  const getAllContacts = async()=> {
    try {
      const response = await fetch(`http://localhost:8080/api/admin/contact`,{
        method: "GET",
        headers:{
          Authorization: authorizationToken,
        }
      });

      const data = await response.json();
      if(response.ok){
        console.log(`data is coming form contact data admin ${data}`)
        setContactData(data);
      }
      

    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    getAllContacts();
  },[])
  return (
    <>
    <h1>Contact data</h1>
    
      <div className="container admin-user">
      <table>
        <thead>
          <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
          <th>Message</th>
          </tr>
        </thead>
        <tbody>
        { contactData.map((elem,index)=>{
      return(
        <tr key={index}>
          <td>{elem.username}</td>
          <td>{elem.email}</td>
          <td></td>
          <td>{elem.message}</td>
          </tr>
      )  
      
      })}
          
        </tbody>
      </table>
      </div>
     
    
    </>
  )
}


