import React from 'react'

function Title() {
  return (
    <div className='card-container'>
      <div className="card bg-base-200 min-h-screen ">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">
        Dependable Care, Backed by Trusted Professionals.</h1>
      <p className="py-6">
Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
      <label className="input">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="none"
      stroke="currentColor"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search" />
</label>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
<br></br>
<div className='grid grid-cols-2'>
      <figure>
    <img
      src="/public/banner-img-1.png"
      alt="Shoes" />
  </figure>
      <figure>
    <img
      src="/public/banner-img-1.png"
      alt="Shoes" />
  </figure>
  </div>
</div>
    </div>
  )
}

export default Title
