import React, {  useState } from "react";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  
    const navigate = useNavigate();

  return (
    <div className=" w-full flex flex-col justify-center items-center h-96">
      <h1 className="font-bold text-2xl">Login</h1>
      <div className="p-2 w-full md:w-80 ">
        <div className="relative  capitalize">
          <label for="message" className="leading-7 text-sm ">
            mobile number
          </label>
          <input
            
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full md:w-80">
        <div className="relative  capitalize">
          <label for="message" className="leading-7 text-sm ">
            password
          </label>
          <input
            id="message"
            name="message"
            // value={form.password}
            // onChange={(e) => setform({ ...form, password: e.target.value })}
            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
      <div className="p-2 w-full">
                <button 
                //   onClick={login}
                 onClick={()=>navigate('/')}
                  className="flex mx-auto text-white bg-green-500 border-0 py-1 px-5 focus:outline-none hover:bg-green-700 rounded text-lg">
                   Login
                </button>
         </div>
         <p>Don't have an Account ? <Link to={'/signup'}><span className="text-blue-600">Sign up</span></Link></p>
    </div>
  );
};

export default Login;
