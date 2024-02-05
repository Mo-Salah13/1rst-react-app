import React from 'react';
import img from '../../Assist/images/images1.svg'

export default function Home() {
  return <>
    <div className="container my-5 py-5">
      <img src={img} alt="home logo" width={220} />
      <div className='text-danger container'><h1>START FRAMEWORK</h1></div>
      <div className='d-flex justify-content-center align-items-center'>
        <span className='line'></span>
        <span><i className="text-danger fa-solid fa-star"></i></span>
        <span className='line'></span>
      </div>
      <p className='text-muted'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </>
}
