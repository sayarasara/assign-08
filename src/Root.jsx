import React from 'react'
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router';
import Footerr from './Navbar/Footerr';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footerr></Footerr>
    </div>
  )
}

export default Root;
