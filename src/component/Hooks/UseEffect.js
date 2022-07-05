import React, { useState, useEffect } from 'react'
import "./style.css";

const UseEffect = () => {

  const [myNum, setMyNum] = useState(0);

  //   ---------------------------------------------------------------------------------------
  /*     usecase 1:
        here we can see without [] we can see output in console multiple time
  */
  //     useEffect(() => {
  //         console.log("hi");
  //     } );
  // -----------------------------------------------------------------------------------------





  // -----------------------------------------------------------------------------------------
  /*
          usecse 2:
          here with [] we can print console.log only once after log
   */

  //        useEffect(()=>{
  //         console.log("hi")      
  //     },[])
  // -----------------------------------------------------------------------------------------


  // -----------------------------------------------------------------------------------------
  /*      usecase 3:
          here if we want to display message count(/chat count) like whats app in title
  */

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });
  // -----------------------------------------------------------------------------------------

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div className="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
      </div>
    </>
  )
}

export default UseEffect
