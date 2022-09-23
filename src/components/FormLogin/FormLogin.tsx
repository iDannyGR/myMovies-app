import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import userLogo from '../../assets/img/user.svg';
const FormLogin = () => {
    const [data, setData] = useState({ email: '', password: '' })
    const navigation = useNavigate();
     const handlerSubmit = async (e) => { 
        e.preventDefault()
         const login = await axios.post('https://reqres.in/api/login', data )
         const { data: { token }, status } = login
         if (status === 200) { 
             localStorage.setItem('token', token)
             navigation('/home')
         }
         
    }

  return (
    <div className="relative flex px-5 justify-center items-center min-h-screen overflow-hidden">
    <div className="w-full  p-6 m-auto bg-white rounded-md shadow-2xl shadow-indigo-500/50 lg:max-w-xl">
    <h5 className=' text-xl mb-5 text-center'>Login with your Email and Password</h5>
    <div className='flex item-center justify-center'>
        <img src={userLogo} alt="" className='h-32'/>
    </div>
              <form className="mt-6" onSubmit={(e) => handlerSubmit(e)} >
            <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800">Email</label>
                <input
                          type="email"
                          className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          name='email'
                          id='email'
                          value={data.email}
                          onChange={(e) => setData({...data, email:e.target.value })}
                      />
            </div>
            <div className="mb-2">
                <label className="block text-sm font-semibold text-gray-800"> Password </label>
                <input
                    type="password"
                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                          name='password'
                          id='password'
                          value={data.password}
                          onChange={(e) => setData ({ ...data, password:e.target.value})}
                      />
            </div>
            <a href="#" className="text-xs text-purple-600 hover:underline">Forget Password?</a>
            <div className="mt-6">
                <button type='submit' className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                    Login
                </button>
            </div>
        </form>
  
    </div>

</div>
  )
}

export default FormLogin
