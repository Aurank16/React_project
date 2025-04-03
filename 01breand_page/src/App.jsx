import React from 'react';
// import logo from '../image/brand_logo.png';  // Ensure correct import

const Navbar = () => {
  return (
    <nav className='flex justify-between  w-[1280px] m-auto '>
      <div> 
        <img src= "image/brand_logo.png" alt="lauda" />
      </div >
      <ul className='flex gap-24' >
        <li><a href="#">Menu</a></li>
        <li><a href="#">Location</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <button className=''>Login</button>
    </nav>
  );
};

export default Navbar;
