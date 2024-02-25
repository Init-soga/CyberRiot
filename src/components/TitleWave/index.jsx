import React from 'react'
import BioContainer from '../BioContainer'

const TitleWave = () => {
  return (
    <>
      <div className='flex justify-center flex-col items-center pt-10'>
        <span className='text-white text-7xl font-KodeMono font-bold'>
          CYBER RIOT
        </span>
        <span className='text-white text-lg font-KodeMono'>
          Unleash the power inside your mind.
        </span>
      </div>

      <div>
        <BioContainer></BioContainer>
      </div>
    </>
  )
}

export default TitleWave
