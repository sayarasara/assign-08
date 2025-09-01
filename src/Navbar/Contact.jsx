import React from 'react'

const Contact = () => {
  return (
    <div>
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://pwd.org.au/wp-content/uploads/2020/09/visitstothehospital.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Our Goal</h1>
      <p className="mb-5">
    A hospital serves as a critical pillar of community health, providing comprehensive medical care to individuals in need. It functions as a centralized hub where skilled professionals like doctors, nurses, and specialists diagnose illnesses, perform life-saving surgeries, and manage ongoing treatments. Beyond emergency intervention, hospitals offer preventive care through check-ups and vaccinations, promote recovery through rehabilitation services, and provide essential support for chronic conditions. Ultimately, a hospital's primary purpose is to heal the sick, alleviate suffering, and safeguard the well-being of the population it serves, acting as a cornerstone of a functioning society.
      </p>
         <div className="w-10 rounded-full">
          <img  
            alt=""
            src="/public/logo.png
            "/>  
            </div>
    <a className="btn btn-ghost text-xl">Phudu</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Contact
