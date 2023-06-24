import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function AddUser() {

    let navigate = useNavigate()

    const [user,setUser] = useState({
        firstname:"",
        lastname:"",
        email:"",
        phone:"",
        address:"",
        zipcode:""
    })

    const{firstname,lastname,email,phone,address,zipcode}=user

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit = async (e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }


  return (
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h3 className='text-center m-2 p-4'>Register</h3>

                <form onSubmit={(e)=> onSubmit(e)}>
                <div className='mb-3'>
                    <label htmlFor='firstname' className='form-label'>First Name</label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your first name'
                        name='firstname'
                        value={firstname}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='lastname' className='form-label'>Last Name</label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your last name'
                        name='lastname'
                        value={lastname}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='email' className='form-label'>Email</label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your email'
                        name='email'
                        value={email}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='phone' className='form-label'>Phone</label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your phone'
                        name='phone'
                        value={phone}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='address' className='form-label'>Address</label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your address'
                        name='address'
                        value={address}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <div className='mb-3'>
                    <label htmlFor='zipcode' className='form-label'>Zip Code</label>
                    <input
                        type={"text"}
                        className='form-control'
                        placeholder='Enter your zip code'
                        name='zipcode'
                        value={zipcode}
                        onChange={(e)=>onInputChange(e)}
                    />
                </div>

                <button type='submit' className='btn btn-outline-primary'>Submit</button>
                <Link className='btn btn-outline-danger mx-3' to="/">Cancel</Link>
                </form>

            </div>
        </div>
    </div>
  )
}
