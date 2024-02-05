import React from 'react'

export default function Contact() {
  return <>
    <h2 className='text-danger'>CONTACT US</h2>
    <div className='d-flex justify-content-center align-items-center'>
        <span className='line'></span>
        <span><i className="text-danger fa-solid fa-star"></i></span>
        <span className='line'></span>
      </div>
    <div className="container">
      <div className="row">
        <form>
          <div className="col-md-12 my-5">
            <input type="text" placeholder='Your Name' required className='input ' />
          </div>
          <div className="col-md-12 my-5">
            <input type="number" placeholder='Your Age' required className='input ' />
          </div>
          <div className="col-md-12 my-5">
            <input type="email" placeholder='Your Email' required className='input ' />
          </div>
          <div className="col-md-12 my-5">
            <input type="password" placeholder='Your Password' required className='input ' />
          </div>
          <button type='submit' className='btn btn-outline-secondary ' > Send Message</button>
        </form>
      </div>
    </div>
  </>
}


