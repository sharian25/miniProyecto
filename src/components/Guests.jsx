import React, { useState } from "react";

function Guests({ updateFamily }) {
  const [adulto, setAdulto] = useState(0);
  const [child, setChild] = useState(0);

  const suma = () => {
    setAdulto(adulto + 1);
    updateFamily(adulto + 1, child);
  };

  const resta = () => {
    setAdulto(adulto - 1 < 0 ? 0 : adulto - 1);
    updateFamily(adulto - 1 < 0 ? 0 : adulto - 1, child);
  };

  const sumaChild = () => {
    setChild(child + 1);
    updateFamily(adulto, child + 1);
  };
  const restaChild = () => {
    setChild(child - 1 < 0 ? 0 : child - 1);
    updateFamily(adulto, child - 1 < 0 ? 0 : child - 1);
  };
  const family = adulto + child;
  return (
    <div>
      <div> 
        <span className="Guests" >Adult</span> <br />
        <span className="age" >Age 13 or above</span>
        <div className="btn-guest counter">
          <button onClick={resta} type="button" className="btn btn-light">
            -
          </button>
          <h2>{adulto}</h2>
          <button onClick={suma} type="button" className="btn btn-light">
            +
          </button>
        </div>
      </div>
      <div>
         <span className="Guests" >Children</span> <br />
        <span className="age" >Age 2-12</span>
        <div className="btn-guest" >
          <button onClick={restaChild} type="button" className="btn btn-light">
            -
          </button>
          <h2>{child}</h2>
          <button onClick={sumaChild} type="button" className="btn btn-light">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Guests;
