import React from 'react'

const Loader = ({label="Loading"}) => {
  return (
    <div className='flex items-center justify-center text-red-500'>
      <span>{label}</span>
    </div>
  )
}

export default Loader
