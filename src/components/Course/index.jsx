import React from 'react'

const Course = ({ title, imageUrl, description, buttonText, inverted }) => {
  const courseRender = inverted => {
    if (inverted) {
      return (
        <>
          <div className='h-full mr-5 p-5'>
            <div className='flex content-center'>
              <div className=' flex flex-col items-center justify-center'>
                <div className='font-KodeMono text-4xl text-white pb-5'>
                  {title}
                </div>
                <div className='font-KodeMono text-lg text-white px-10 pb-8'>
                  {description}
                </div>
                <div className='font-KodeMono text-white'>
                  <button className='rounded-full px-4 py-2 bg-transparent border'>
                    {buttonText}
                  </button>
                </div>
              </div>
              <img src={imageUrl} alt='Course Image' className='w-1/4 ' />
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className='h-full ml-5 p-5'>
            <div className='bg-[##100e27] flex content-center'>
              <img src={imageUrl} alt='Course Image' className='w-1/4' />
              <div className=' flex flex-col items-center justify-center'>
                <div className='font-KodeMono text-4xl text-white pb-5'>
                  {title}
                </div>
                <div className='font-KodeMono text-lg text-white px-10 pb-8'>
                  {description}
                </div>
                <div className='font-KodeMono text-white'>
                  <button className='rounded-full px-4 py-2 bg-transparent border'>
                    {buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )
    }
  }

  return <>{courseRender(inverted)}</>
}

export default Course
