import React, { useState } from 'react'
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
const Rating = ({rating,onClick}) => {

  return (
    <div>
      {
        [...Array(5)].map((_,i)=>{
          return  <span key={i} >
                {rating>i?(
                    <AiFillStar fontSize='15px'/>
                ):(
                    <AiOutlineStar fontSize='15px'/>
                )}
            </span>
        })
      }
    </div>
  )
}

export default Rating
