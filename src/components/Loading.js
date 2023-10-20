import React from 'react'
import './Loading.css'
import loading from '../assets/loading.png'

const Loading = () => {
  return (
    <div className='loading'>
      <div className='ball'>
          <img src={loading} alt=''/>
      </div>
      <p>Loading some awesome images...</p>
    </div>
  )
}

export default Loading