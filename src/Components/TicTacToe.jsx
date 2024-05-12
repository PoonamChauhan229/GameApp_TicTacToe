import { useState } from 'react'
import Board from './Board'

const TicTacToe = () => {
    const [boardVal,setBoardVal]=useState([
        null,null,null,
        null,null,null,
        null,null,null
    ])
    // const [boardVal,setBoardVal]=useState([
    //     "X","O","X",
    //     "X","O","X",
    //     "X","O","X",
    // ])
  return (
    <>
        <Board boardVal={boardVal} setBoardVal={setBoardVal}/>
    </>
  )
}

export default TicTacToe