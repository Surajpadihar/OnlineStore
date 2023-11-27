import React from 'react'

const Button = ({click,num}) => {
  return (
    
    <button className="w-fit px-4 py-1 border-cyan-300 border-x-2 border-y-2 rounded-md" onClick={() => click(true)}>
      You Added <span className='text-xl' >{num}</span> {num <= 1 ? "item" : "items"}
    </button>
     
  )
}

export default Button
