import React from 'react'

export default function Footer() {
  return <>
    <div className="d-flex bg-secondary-subtle text-center  py-5   justify-content-center align-items-center">
      <div className="col-md-3 my-2">
        <h3>LOCATION</h3>
        <p>2215 John Daniel Drive</p>
        <p>Clark, MO 65243</p>
      </div>
      <div className="col-md-3 my-2">
        <h3>AROUND THE WEB</h3>
        <div>
          <p>
            <i class="p-2 border border-black mx-1 text-danger rounded-circle fa-brands fa-facebook"></i>
            <i class="p-2 border border-black mx-1 text-danger rounded-circle fa-brands fa-twitter"></i>
            <i class="p-2 border border-black mx-1 text-danger rounded-circle fa-brands fa-linkedin"></i>
            <i class="p-2 border border-black mx-1 text-danger rounded-circle fa-solid fa-globe"></i>
          </p>
        </div>
      </div>
      <div className="col-md-3 my-2">
        <h3>ABOUT FREELANCER</h3>
        <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
      </div>
    </div>
    <div className='bg-secondary  p-3 text-center text-white'>Copyright <span className='text-black'>©</span> Your Website 2021</div>
  </>
}
