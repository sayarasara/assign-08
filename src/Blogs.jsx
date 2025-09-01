import React from 'react'

const Blogs = () => {
  return (
    <div>
<section>
 
  <div class="card bg-base-200 card-xs shadow-sm m-6">
    <div class="card-body">
      <p class="font-bold text-xl">1. What is useState and how does it work in React? </p>
      <div class="justify-end card-actions">
        <p class="text-xl">

useState is a React Hook that allows you to add state to functional components. You call it with the initial state value, and it returns an array with two elements: the current state value and a function to update that state. When the update function is called, it schedules a re-render of the component, and the new state value is used. This is the fundamental way to make components dynamic and interactive.
        </p>
      </div>
    </div>
  </div>

  <div class="card bg-base-200 card-xs shadow-sm m-6">
    <div class="card-body">
      <p class="font-bold text-xl">2. What is the purpose of useEffect in React?</p>
      <div class="justify-end card-actions">
        <p class="text-xl">

The purpose of useEffect is to handle side effects in functional components. Side effects are operations that interact with the outside world, such as data fetching, subscriptions, or manually changing the DOM. It runs after the render is committed to the screen. You can control when it runs by providing a dependency array; if the array is empty, it runs only once after the initial render, and if it contains values, it runs whenever those values change.
        </p>
      </div>
    </div>
  </div>


  <div class="card bg-base-200 card-xs shadow-sm m-6">
    <div class="card-body">
       
      <p class="font-bold text-xl">4. Difference between controlled and uncontrolled components? Which one is better?</p>
      <div class="justify-end card-actions">
        <p class="text-xl">
4. Difference between controlled and uncontrolled components? Which one is better?
In a controlled component, form data is handled by React via state; the input's value is tied to a state variable and changes are handled by an onChange handler. In an uncontrolled component, form data is handled by the DOM itself using refs. There is no single "better" option; controlled components offer more control and are easier to validate and test, while uncontrolled components can be simpler for integrating with non-React code and for one-time value retrieval (like file inputs).
        </p>
      </div>
    </div>
  </div>

  <div class="card bg-base-200 card-xs shadow-sm m-6">
    <div class="card-body">
      <p class="font-bold text-xl">5. Tell us something about useFormStatus </p>
      <div class="justify-end card-actions">
        <p class="text-xl">
that are part of a rendered by a Server Action. It provides status information (like a pending boolean) about the last form submission. This is incredibly uuseFormStatus is a relatively new Hook provided by React specifically for use within components seful for providing user feedback, such as disabling a submit button or showing a loading indicator while the form is being processed, without needing to manage that pending state manually.
        </p>
      </div>
    </div>
  </div>


    </section>
    </div>
  )
}

export default Blogs
