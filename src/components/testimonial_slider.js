import React from "react";

const TestimonialSlider = ({ dataa }) => {
  // console.log(dataa);
  return (
    <>
      {dataa.map((elem) => {
        return (
          // <>
            <div className="s-item">
            <div>
              <img src={elem.img} alt="" />
            </div>
            <div className="t-desc">
              <p className="t-name">{elem.name}</p>
              <p className="t-msg">{elem.msg}</p>
            </div>
            </div>
            
         
        );
      })}
    
  
    </>);
};

export default TestimonialSlider;
