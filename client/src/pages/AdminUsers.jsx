import React from 'react'
import { useEffect,useState } from 'react'
import { useAuth } from "../store/auth"
import { Link } from 'react-router-dom'

export const AdminUsers = () => {
  const [users,setUsers] =useState([])
  const {authorizationToken} = useAuth();
  const getAllUsersData= async()=>{
    try{
      const response = await fetch("http://localhost:8080/api/admin/users",{
        method : "GET",
        headers:{
          Authorization: authorizationToken,
        },
      });
      if(response.ok){
        const data = await response.json();
        console.log(`users ${data}`);
        setUsers(data);
      }
    }catch(error){
      console.log(error);
    }
  };
  const deleteUser = async (id)=>{
    try{
        const response = await fetch(`http://localhost:8080/api/admin/users/delete/${id}`,{
          method : "DELETE",
          headers : {
            Authorization: authorizationToken,
          },
        });
        if(response.ok){
          console.log(`deleted successfully,${id}`)
          getAllUsersData();
        }else{
          console.log(`error in finding data`)
        }
    }catch(error){
      console.log("error deleting item",error);
    }
  }

  useEffect(()=>{
    getAllUsersData();
  },[])
  return (
   <>
   <section className='admin-user-section'>
    <div className="container">
      <h1>Admin Users Data</h1>
    </div>
    <div className="container admin-user">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th>Phone</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
        {users.map((elem,index) =>{
        return (<tr key={index}>
                   <td>{elem.username}</td>
                   <td>{elem.email}</td>
                   <td></td>
                   <td>{elem.phone}</td>
                   <td><Link to={`/admin/users/${elem._id}/edit`}>Edit</Link></td>
                   <td><button onClick={()=>deleteUser(elem._id)}>Delete</button></td>
                </tr>)
         })}
          
        </tbody>
      </table>
    </div>

   </section>
   
   </>
  )
}

