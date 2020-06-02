
import React from 'react';
import '../styles/headline.scss';

import { NavLink } from 'reactstrap';

const Navbar = (props) => {
  return (
    <>
     <hr />
    <div >
        <h1 className="headline"> THE 300 WORKOUT </h1>
        
      
      {/* <Nav>
        <NavLink className="navBarLinks" href="#">New Workout </NavLink> • <NavLink style={{ fontWeight: "bold", color: 'black', textDecoration: 'none'}} href="#">History</NavLink> • <NavLink style={{ fontWeight: "bold", color: 'black', textDecoration: 'none'}} href="#">Personal Records</NavLink> • <NavLink style={{ fontWeight: "bold", color: 'black', textDecoration: 'none'}} href="#">Settings</NavLink>
      </Nav> */}
      {/* <hr /> */}
      <h1  className="link300link"  >
      
        <span> Before you get started: </span>
        <br></br>
        <NavLink className="link300link" href="https://www.menshealth.com/fitness/a19536290/muscle-building-10/" > The 300 Workout - Can you handle it? </NavLink> 
        
        {/* •  */}
        
        {/* <NavLink style={{color: 'rgb(20, 194, 107)', textDecoration: 'none'}}  href="#">Back Exercises </NavLink> • <NavLink style={{color: 'rgb(20, 194, 107)', textDecoration: 'none'}}  href="#">Leg Exercises </NavLink> • <NavLink style={{color: 'rgb(20, 194, 107)', textDecoration: 'none'}}  href="#">Cardio & HIIT</NavLink> */}
      </h1>
    </div>
    </>
  );
}

export default Navbar;