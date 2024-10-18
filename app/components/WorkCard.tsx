import Link from 'next/link'
import React from 'react'

function WorkCard({job}:{
  job:{
    title:string,
    company:string,
    location:string,
    salary:string,
    description:string
  }
}) {
  return (
    <div className='w-full ming-h-12 py-6 '>
      <div className='flex gap-2 items-center'>
        <h2 className='dark:text-slate-200 text-slate-600 hover:underline'>
          <Link href={`/profile/${job.company.replace(/\s+/g, "-").toLowerCase()}`}>
            {job.company}
          </Link>
        </h2>
        <h2 className='text-slate-500'>1 day ago</h2>
      </div>
      <div className='mx-2  '>

      <h1 className='text-3xl mt-2'>{job.title}</h1>
      <h2 className='text-lg text-slate-700 dark:text-slate-300'>{job.description}</h2>
      <div className='flex gap-4 items-center my-2'>
        <h2 className='text-xl'> <span className='text-slate-500'>Location:</span>{job.location}</h2>
        <h2 className='text-xl text-sky-500'><span className='text-slate-500'> Salary:</span>{job.salary}</h2>
        <Link href={`/apply/${job.title.replace(/\s+/g, "-").toLowerCase()}`} className='text-xl text-sky-500 px-3 py-1 bg-slate-500/50 rounded-lg '>Apply</Link>
      </div>
      </div>
      
      
    </div>
  )
}

export default WorkCard
