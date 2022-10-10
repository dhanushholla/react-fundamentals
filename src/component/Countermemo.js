import userEvent from "@testing-library/user-event";
import React, { useMemo, useState } from "react";

function Countermemo() {
  const [counterone, setCounterone] = useState(0);
  const [countertwo, setCountertwo] = useState(0);

  const incrementone = () => {
    setCounterone(counterone + 1);
  };
  const incrementtwo = () => {
    setCountertwo(countertwo + 1);
  };

  //   const iseven = () => {
  //     let i = 0;
  //     while (i < 50000000) {
  //       i++;
  //     }
  //     return counterone % 2 === 0;
  //   };

  //here dependencies is counterone..as for each counterone value we need to compute the changes... thus this function is called again
  const iseven = useMemo(() => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return counterone % 2 === 0;
  }, [counterone]);

  return (
    <div>
      <button onClick={incrementone}>
        Counter1 -{counterone} <span>{iseven ? "even" : "odd"}</span>
      </button>
      <button onClick={incrementtwo}>Counter2 -{countertwo}</button>
    </div>
  );
}

export default Countermemo;
