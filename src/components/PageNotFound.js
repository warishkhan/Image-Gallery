import React from 'react'
import pagenotfound from '../assets/pagenotfound.png'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
        <img src={pagenotfound} alt=''/>
        <p className='main-text'>WE ARE SORRY, IMAGE NOT FOUND!</p>
        <p className='error-text'>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME CHANGE OR ITS TEMPORARILY UNAVAILABLE</p>
        <p>Please enter right keywords...</p>
    </div>
  )
}

export default PageNotFound