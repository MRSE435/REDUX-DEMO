"use client"
import React from 'react'
import { useAppDispatch,useAppSelector } from '../redux/hooks/hooks'
const page = () => {
    const count=useAppSelector((state)=>state.counter)
  return (
    <div>
      <h1>this is the count which is being accessed from redux store {count}</h1>
    </div>
  )
}
export default page
