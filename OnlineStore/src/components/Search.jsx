import React from 'react'

const Search = ({value ,dataOnchange}) => {
  return (
    <div>
      <input 
        className='focus:outline-pink-400 w-fit px-4 py-1 border-cyan-300 border-x-2 border-y-2 rounded-md'
        placeholder='Enter Product Name'
        type="text" 
        value={value}
        onChange={dataOnchange}
      />
      
    </div>
  )
}

export default Search
