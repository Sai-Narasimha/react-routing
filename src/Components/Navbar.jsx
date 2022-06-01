import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div style = {{width: '100%', height: '30px', backgroundColor:"black", color:"white",display:"flex", justifyContent:"space-around"}}>
      
      <Link to="/" style = {{color : 'yellow'}}>Home</Link>
      <Link to="/allProducts" style = {{color : 'yellow'}} >Products</Link>
    </div>
  );
};
