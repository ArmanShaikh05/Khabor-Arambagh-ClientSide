import React, { useEffect } from 'react'
import errorImg from "../Assets/errorPage.jpg";

const ErrorPage = () => {

    useEffect(()=>{
        window.scrollTo(0, 0)
    }, [])

  return (
    <div className='errorPage-container'>
        <h2 >We ran into some Error! Please go to Home page or wait for the error to be fixed</h2>
        <img src={errorImg} className="errorImage" alt=''>

        </img>
    </div>
  )
}

export default ErrorPage