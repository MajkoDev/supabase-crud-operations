import React from 'react'

const Card = () => {
  return (
    <div className='m-2 p-2 border rounded-md border-black min-w-[350px]'>
        <h2 className="text-md font-semibold mb-2">
            Title
        </h2>
        <p className="text-sm font-normal mb-5">
            Paragraph
        </p>
        <div className='flex flex-row gap-2 justify-end'>
        <button className='py-1 px-3 m-1 rounded-lg bg-blue-400 hover:bg-blue-600 text-white'>Edit</button>
        <button className='py-1 px-3 m-1 rounded-lg bg-red-400 hover:bg-red-600 text-white'>Delete</button>
        </div>
    </div>
  )
}

export default Card