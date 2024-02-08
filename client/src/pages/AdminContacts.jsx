import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'
import { useAuth } from '../store/auth';
import {toast} from 'react-toastify';

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
  //========delelteMessage function ------
  const deleteMessage = async (id)=>{
    try {
      const response = await fetch(`http://localhost:8080/api/admin/contact/delete/${id}`,{
        method :"DELETE",
        headers:{
          Authorization : authorizationToken,
        }
      });
      if(response.ok){
        toast.success('Message Deleted Successfully..');
        getAllContacts();
      }else{
        toast.error('Sorry some Problem is there..');
      }
    } catch (error) {
      
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
          <td></td>
          <td> <button onClick={()=>{deleteMessage(elem._id)}}>Delete</button></td>
          </tr>
       
      )  
      
      })}
          
        </tbody>
      </table>
      </div>
     
    
    </>
  )
}


