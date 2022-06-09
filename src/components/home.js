import React from 'react'
import Headers from "./header.js";
import Crausel from "./crausel";
import I_about from "./index_about";
import Product from "./product";
import Testimonial from "./testimonial";
const home = () => {
  return (
    
    <main>
    <Headers />
    <Crausel />
    <I_about />
    <Product />
    <Testimonial />
    </main>
  )
}

export default home