import React from 'react'
import LineChartt from './LineChart'
import SimpleAreaChart from './SimpleAreaChart'
import LineBarChart from './LineBarchart'
import PieChartt from './PieChartt'

export default function Chart() {
  return (
   <div className="bg-[#2a3447] text-[#fff]">
    <div className="container grid md:grid-cols-2 sm:grid-cols-1 gap-10 mt-0">
        <LineChartt/>
        <SimpleAreaChart/>
        <LineBarChart/>
        <PieChartt/>
    </div>
   </div>
  )
}
