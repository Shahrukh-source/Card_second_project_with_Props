import React from 'react'
import Card from './Card'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import { useState } from 'react'

export default function Testmonial(props) {
let [index,setindex] = useState(0)

    let reviews = props.reviews


    function leftShiftHandler(){
  if(index-1 >0){
    setindex(reviews.length-1)
  }
else{
  setindex(index-1)
}
    }
//reviews.length = n
    function rightShiftHandler(){
if(index+1 >= reviews.length){
  setindex(0)
}
else{
  setindex(index+1)
}
    }

    function surpriseHandler(){
let randomIndex = Math.floor(Math.random()*reviews.length)
setindex(randomIndex)

    }
  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center item-center mt-10 p-10 transition-all duration-700 hover:shadow-lg rounded-lg'>
        <Card review ={reviews[index]} />

        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
            <button className='cursor-point hover:text-violet-500' onClick={leftShiftHandler}><FiChevronLeft/></button>
            <button className='cursor-point hover:text-violet-500' onClick={rightShiftHandler}><FiChevronRight/></button>
        </div>
        <div className='mt-6'>
            <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg' onClick={surpriseHandler}>Surprise Me</button>
        </div>
    </div>
  )
}
