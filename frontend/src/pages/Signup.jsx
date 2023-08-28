import React, { useState } from 'react'
import validator from "validator";
import { postSignup } from '../api/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState(null);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async () => {
      if (name === "" || phone === "" || age === null || gender === "" || email === "" || password === "" || confirmPassword === "") {
          alert("Please fill all the * marked fields");
          return;
      }
      if (password !== confirmPassword) {
          alert("Password and confirm password does not match");
          return;
      }
      const passRisk = validator.isStrongPassword(password);
      if (!passRisk) {
          alert("password should be of minimum 8 characters and should contain at least '1 lowecase, 1 uppercase, 1 numeric and 1 symbol'");
          return;
      }
      
      let response = await postSignup({name,gender,age,phone,email,password,address})
      

      if(response?.data.token){
        localStorage.setItem("token", response.data.token);
        dispatch(setUser(response.data?.data));
        navigate('/')
      }
      else if(response?.data.message === "User already exists"){
        alert("User alredy exists Please login");
        navigate('/login');
      }
     
      setName("");
      setGender("");
      setPhone("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAge(null);
      setAddress("");


  };
  const onClear = () => {
    setName("");
    setGender("");
    setPhone("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setAge(null);
    setAddress("");
  };
  return (
    <div className='bg-slate-100 h-[100vh]'>
      <div className='w-[70%] md:w-[30%] m-auto'>
      <p className='text-3xl font-bold'>Signup</p>
        <div className='flex flex-col gap-3 font-bold'>
          <label htmlFor="name">*Name:</label>
          <input type="text" required onChange={(e)=>setName(e.target.value)} value={name} name="name" id="name" className='bg-slate-200 p-2 rounded-md'/>

          <div className='flex flex-col md:flex-row md:items-center'>
          <label htmlFor="gender">*Gender:</label>
          <select name="gender" id="gender" onChange={(e)=>setGender(e.target.value)} value={gender} className='bg-slate-200 p-2 rounded-md md:ml-3'>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>

          <label htmlFor="age" className='md:ml-5'>*Age:</label>
          <input type="number" onChange={(e)=>setAge(e.target.value)} value={age} name="age" id="age" className='bg-slate-200 p-2 rounded-md md:w-20'/>
          </div>
          <label htmlFor="phone">*Phone:</label>
          <input type="text" required onChange={(e)=>setPhone(e.target.value)} value={phone} name="phone" id="phone" className='bg-slate-200 p-2 rounded-md'/>

          <label htmlFor="address">Address:</label>
          <textarea name="address" onChange={(e)=>setAddress(e.target.value)} value={address} id="address" cols="30" rows="3" className='bg-slate-200 p-2 rounded-md'></textarea>

          <label htmlFor="email">*Email:</label>
          <input type="text" required onChange={(e)=>setEmail(e.target.value)} value={email} name="email" id="email" className='bg-slate-200 p-2 rounded-md'/>

          <label htmlFor="password">*Password:</label>
          <input type="password" required onChange={(e)=>setPassword(e.target.value)} value={password} name="password" id="password" className='bg-slate-200 p-2 rounded-md'/>

          <label htmlFor="confirmPassword">*Confirm Password</label>
          <input type="password" required onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} name="confirmPassword" id="confirmPassword" className='bg-slate-200 p-2 rounded-md'/>

          <div className='flex gap-2 items-center justify-center'>
          <button onClick={onSubmit} className='bg-blue-500 w-20 h-8 rounded-md'>Submit</button>
          <button onClick={onClear} className='bg-slate-500 w-20 h-8 rounded-md'>Clear</button>
          </div>

          <p>Already have an account! <Link to={'/login'} className='text-blue-400'>Login!</Link></p>

        </div>
      </div>
    </div>
  )
}

export default Signup