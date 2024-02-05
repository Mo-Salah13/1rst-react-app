import React from 'react'
import img1 from '../../Assist/images/images1.png'
import img2 from '../../Assist/images/images2.png'
import img3 from '../../Assist/images/images3.png'

export default function Portfolio() {
    return <>
        <div className="container">
            <h2 className='text-danger'>PORTFOLIO</h2>
            <div className='d-flex justify-content-center align-items-center'>
                <span className='line'></span>
                <span><i className="text-danger fa-solid fa-star"></i></span>
                <span className='line'></span>
            </div>
            <div className="row g-4 mt-1">
                <div className="col-md-4">
                    <div className="image">
                        <img src={img1} alt="profile img" />
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal-1" className="title"><i className="fa-solid fa-add"></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image">
                        <img src={img2} alt="profile img" />
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal-2" className="title"><i className="fa-solid fa-add"></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image">
                        <img src={img3} alt="profile img" />
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal-3" className="title"><i className="fa-solid fa-add"></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image">
                        <img src={img1} alt="profile img" />
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal-1" className="title"><i className="fa-solid fa-add"></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image">
                        <img src={img2} alt="profile img" />
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal-2" className="title"><i className="fa-solid fa-add"></i></a>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="image">
                        <img src={img3} alt="profile img" />
                        <a data-bs-toggle="modal" data-bs-target="#exampleModal-3" className="title"><i className="fa-solid fa-add"></i></a>
                    </div>
                </div>
            </div>
        </div >


        {/* modal Section */}
        <div className="modal fade bg-dark bg-opacity-75" id="exampleModal-1" tabIndex="-1"
            aria-labelledby="exampleModalLabel-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content ">
                    <div className="modal-body p-0 ">
                        <img src={img1} className="w-100" alt="profile img1" />
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade bg-dark bg-opacity-75" id="exampleModal-2" tabIndex="-1"
            aria-labelledby="exampleModalLabel-2" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content ">
                    <div className="modal-body p-0 ">
                        <img src={img2} className="w-100" alt="profile img2" />
                    </div>
                </div>
            </div>
        </div>
        <div className="modal fade bg-dark bg-opacity-75" id="exampleModal-3" tabIndex="-1"
            aria-labelledby="exampleModalLabel-3" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content ">
                    <div className="modal-body p-0 ">
                        <img src={img3} className="w-100" alt="profile img3" />
                    </div>
                </div>
            </div>
        </div>
    </>


}
