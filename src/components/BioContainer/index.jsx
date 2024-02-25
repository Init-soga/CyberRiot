import React from 'react'
import Course from '../Course'

const BioContainer = () => {
  const realTechDescription =
    'The war against large corporations that hold information needs to be waged. This course will give you the best weapon for this battle: critical thinking and the importance you have for the big machine.'

  const musicDescription =
    'Every epic fight needs a soundtrack to match. Access our official playlist and integrate with the organization internal producers!'

  return (
    <>
      <div className='flex flex-row items-center justify-center pt-10'>
        <div className='h-full w-2/3 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-white text-center'>
          <div className='mt-5'>
            <Course
              imageUrl={'/src/assets/cyber.png'}
              title={'THE REAL TECH REVOLUTION'}
              description={realTechDescription}
              inverted={true}
              buttonText={'ARM YOURSELF!'}
            />
            <Course
              imageUrl={'/src/assets/music.png'}
              title={'RIOT SOUNDTRACK'}
              description={musicDescription}
              inverted={false}
              buttonText={'GET IN!'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BioContainer
