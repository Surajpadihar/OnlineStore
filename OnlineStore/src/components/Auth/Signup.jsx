import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

 


const Signup = ({changeRegister}) => {
  const navigate = useNavigate();
  
  const [name,setname] = useState("");
  const [email,setemail] = useState("");
  const [pass,setpass] = useState("");
  
//   const [form,setform] = useState({})

//   const register = ()=>{
//     const obj = {
//         name:name,
//         email:email,
//         pass:pass
//     }
//     setform({...form,obj})
//     navigate('/')
//     console.log(form)
   
//   }

  return (
    <div className=" w-full flex flex-col justify-center items-center h-96">
      <h1 className="font-bold text-2xl">Sign up</h1>
      
        <>
          <div className="p-2 w-full md:w-80 ">
            <div className="relative  capitalize">
              <label for="message" className="leading-7 text-sm ">
                Name
              </label>
              <input
                value={name}
                onChange={(e)=>setname(e.target.value)}
                type={"text"}
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full md:w-80 ">
            <div className="relative  capitalize">
              <label for="message" className="leading-7 text-sm ">
                Email
              </label>
              <input
                value={email}
                onChange={(e)=>setemail(e.target.value)}
                type='email'
                id="message"
                name="message"
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
                value={pass}
                onChange={(e)=>setpass(e.target.value)}
                type={'password'}
                id="message"
                name="message"
               className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="p-2 w-full">
            <button  onClick={changeRegister} className="flex mx-auto text-white bg-green-500 border-0 py-1 px-5 focus:outline-none hover:bg-green-700 rounded text-lg">
              Signup
            </button>
          </div>
        </>
      
      <p>
        Already have an Account ?{" "}
        <Link to={"/Login"}>
          <span className="text-blue-600">Login</span>
        </Link>
      </p>
      
     </div>
  );
};

export default Signup;
