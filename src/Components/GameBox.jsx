import React from 'react'

const GameBox = ({element,playerClick,index}) => {
    // console.log(element)
  return (
    <div className='gamebox'
    onClick={()=>playerClick()}
    >
        {element}
        {/* {index} */}
    </div>
  )
}

export default GameBox