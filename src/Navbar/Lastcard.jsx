import React from 'react'

const Lastcard = () => {
  return (
 
<div className='card-container'>

  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
</div>

      <div className="stats stats-vertical lg:stats-horizontal shadow grid grid-gaps-3 p-5">
  <div className=" stats card bg-base-100 w-80 shadow-sm p-4 ">
    <div className="stat-title">
        <div className="w-10 rounded-full">
          <img  
            alt=""
            src="/public/success-doctor.png
            "/>
            </div>
    </div>
    <div className="stat-value">31K</div>
    <div className="stat-desc">Total-doctors</div>
  </div>

  <div className="card bg-base-100 w-80 shadow-sm p-4">
    <div className="stat-title">
         <div className="w-10 rounded-full">
          <img  
            alt=""
            src="/public/success-review.png
            "/>
            </div>
    </div>
    <div className="stat-value">4,200</div>
    <div className="stat-desc">Total-review</div>
  </div>

  <div className=" card bg-base-100 w-80 shadow-sm">
    <div className="stat-title">
         <div className="w-10 rounded-full">
          <img  
            alt=""
            src="/public/success-patients.png
            "/>
            </div>
    </div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">Patients</div>
  </div>

  <div className="stat card bg-base-100 w-80 shadow-sm">
    <div className="stat-title">
         <div className="w-10 rounded-full">
          <img  
            alt=""
            src="/public/success-staffs.png
            "/>
            </div>
    </div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">Total-staffs</div>
  </div>
</div>

    </div>
  )
}

export default Lastcard
