import React, { useState } from 'react'
import Layout from '../components/Layouts/Layout'
import axious from 'axios'
import {toast} from "react-toastify";

const Register = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [adress, setAdress] = useState("")


//handleSubmit
const handleSubmit =   async (e) => {
    e.preventDefault();
  try{
    const res = await axious.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{
      name,
      email,
      password,
      phone,
      adress
    })
    if(res && res.data.success){
      toast.success(res.data.message)
      toast.success('User Register Successfully')
    }


}catch(error){
    toast.error(error.response.data.message)
    toast.error('Something went wrong')
  }
}
  return (
    <Layout>
       <div className="register">
        <h1>Register page </h1>
     <form className="register-form" onSubmit={handleSubmit}>
        {/* Name */}
         <div className="mb-3">
            <input type="text" onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" 
            placeholder='Enter your Name' value={name} required />
         </div>
    {/* Email */}
        <div className="mb-3">
            <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" 
            id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your Email' value={email} required />
        </div>

    {/* password*/}
        <div className="mb-3">
            <input type="password" onChange={(e) => setPassword(e.target.value)} 
            className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' value={password} required/>
        </div>
    {/* phone */}
       <div className="mb-3">
            <input type="int" onChange={(e) => setPhone(e.target.value)} 
            className="form-control" id="exampleInputEmail1" placeholder='Enter your Phone' value={phone} required />
        </div>
    {/* phone */}
        <div className="mb-3">
            <input type="text" onChange={(e) => setAdress(e.target.value)} 
            className="form-control" id="exampleInputEmail1"  placeholder='Enter your Adress' value={adress} required/>
        </div>


    <button type="submit" className="btn btn-primary">Submit</button>
</form>

       </div>
    </Layout>
  )
}

export default Register;