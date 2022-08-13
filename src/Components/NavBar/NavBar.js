import React, { useEffect, useState } from 'react';
import "./NavBar.css"

function NavBar() {
 const [show, handleShow] = useState(false);



  useEffect(() => {
    window.addEventListener("scroll", () =>  {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    })
    return () => {
      window.removeEventListener("scroll", null);
    }
  }, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Netflix Logo" />
      <img className='nav__avatar' src="https://cdn-icons-png.flaticon.com/512/189/189618.png" alt="User" />
    </div>
  )
}

export default NavBar;
