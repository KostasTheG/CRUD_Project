import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

export default function Home() {

  const [users,setUsers] = useState([])

  const {id}= useParams()

  useEffect(() =>{
    loadUsers()
  }, [])

  const loadUsers = async () =>{
    const result = axios.get("http://localhost:8080/users")
    setUsers((await result).data)
  }

  const userDelete = async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loadUsers()
  }

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Address</th>
            <th scope="col">Zip Code</th>
          </tr>
        </thead>
        <tbody>

          {
            users.map((user,index)=>(
            <tr>
              <th scope="row" key={index}>{user.id}</th>
              <td>{user.firstname}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.address}</td>
              <td>{user.zipcode}</td>
              <td>              
                <Link className='btn btn-outline-primary mx-3' to={`/edituser/${user.id}`}>Edit</Link>
                <button className='btn btn-danger mx-2' onClick={()=> userDelete(user.id)}>Delete</button>
              </td>
            </tr>
            ))
          }
          
        
        </tbody>
</table>
        </div>
    </div>
  )
}
