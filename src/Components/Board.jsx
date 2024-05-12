import React, { useState } from 'react'
import GameBox from './GameBox'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

const Board = ({boardVal,setBoardVal}) => {
  //xturn
  const [isxturn,setisXturn]=useState(true)

  const handleClick=(index)=>{
    console.log("GameBox Data Enetered",index)
    // null value > board values
    //borad values update > setBoardVal
    const boardValCopy=[...boardVal]
    //console.log(boardValCopy)
    if(boardValCopy[index]==null){
      //x turn
      // x :true || "X" :"O"
      boardValCopy[index]=isxturn?"X":"O"
      //console.log(boardValCopy[index])// X update
      //console.log(boardValCopy)
      setBoardVal(boardValCopy)// X 
      setisXturn(!isxturn)// true -fale || false-true
    }
  }
  // Winner 
  const decideWinner=(boardVal)=>{
  const listItems=[[0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]]
  // console.log(listItems.length)
  
    for(var i=0;i<listItems.length;i++){
      // console.log(i)
      const [a,b,c]=listItems[i]
     // console.log(a,b,c)
      if(boardVal[a]==boardVal[b] && boardVal[b]==boardVal[c] && boardVal[a]!==null){
        console.log("winner")
        return boardVal[a]//x 0
      }
    }
    return null // match draw
}
const winner=decideWinner(boardVal)
// console.log(winner)
const { width, height } = useWindowSize()// react-use
  return (
    <>
    {winner && <Confetti 
    gravity	={0.08}
    width={width} height={height}/>}
    
    <div className='board'>
    {
      boardVal.map((element,index)=><GameBox element={element} playerClick={()=>handleClick(index)} index={index}/>)
    }
   {winner &&  <div>Winner is:{winner}</div>}
    </div>
    </>
  )
}

export default Board