import React from 'react'
import WorkCard from './WorkCard'
import { jobListings } from '@/dataBase'
function AvailableWorks() {
  console.log(jobListings)
  return (
    <section className="w-full min-h-min-screen px-4 py-20">
      <div>
        <h1 className='text-4xl'>Available Works</h1>
        <div className='mt-8 divide-y divide-slate-500/50 flex flex-col'>
          {
            jobListings.map((job)=>(
               <WorkCard key={job.title} job={job}/>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default AvailableWorks
