import { useState } from "react";
import "./App.css";

function App() {
  // let [isLiked, setIsLiked] = useState(false);


  // function isClicked() {
  //   setIsLiked(!isLiked);
  // }

  // let style = {color:"red"};

  // return (
  //   <div>
  //     <h4>Are you intersted!</h4>
  //     <p onClick={isClicked}>
  //       {isLiked? <i class="fa-solid fa-heart " style={style}></i>:<i class="fa-regular fa-heart"></i>}
  //     </p>
  //     <p>{isLiked.toString()}</p>
  //   </div>
  // );

  let [moves,setMoves] = useState({
    blue:0,
    red:0,
    yellow:0,
    green:0
  })

  function blue(){
    moves.blue += 1;
    setMoves({...moves});
  }
  function green(){
    moves.green += 1;
    setMoves({...moves});
  }
  function yellow(){
    moves.yellow += 1;
    setMoves({...moves});
  }
  function red(){
    setMoves((preValue)=>{
      return{...preValue,red:preValue.red+1}
    });
  }

  return (
    <div>
      <div className="blue">
        <h5>Blue count = {moves.blue} </h5>
        <button style={{backgroundColor:"blue"}} onClick={()=>{
          blue();
        }}>Blue</button>
      </div>
      <div className="red">
        <h5>Red count = {moves.red} </h5>
        <button onClick={()=>{
          red();
        }} style={{backgroundColor:"Red"}}>Red</button>
      </div>
      <div className="green">
        <h5>Green count = </h5>
        <button style={{backgroundColor:"green"}}>Green</button>
      </div>
      <div className="yellow">
        <h5>Yellow count = </h5>
        <button style={{backgroundColor:"orange"}}>Yellow</button>
      </div>
    </div>
  )


}

export default App;
