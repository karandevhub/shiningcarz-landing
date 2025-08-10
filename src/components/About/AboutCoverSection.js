import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png" // Replace with a real Shining CarZ studio or car detailing image for better effect

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
      
      {/* Left Side - Image */}
      <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
        <Image 
          src={profileCharacter} 
          alt="Shining CarZ Studio" 
          className='w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center'
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      {/* Right Side - Text */}
      <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
        <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left'>
          From 2013 to Today — Making Every Car Shine Brighter
        </h2>
        <p className='font-medium mt-4 text-base leading-relaxed'>
          At <strong>Shining CarZ</strong>, we believe every car carries a story — 
          the first long drive, the road trips, the late-night rides, and the everyday journeys. 
          Since 2013, we’ve dedicated ourselves to keeping those stories shining, one wash at a time.
          <br /><br />
          From our humble beginnings as a small steam wash outlet in Noida to becoming a full-fledged 
          <strong> car cleaning & detailing studio</strong>, our mission has remained the same — 
          to give your car the love, care, and perfection it truly deserves.
          <br /><br />
          Whether it’s a quick wash, deep detailing, or paint protection, we treat your vehicle like our own. 
          Because for us, it’s not just about cleaning cars — it’s about keeping memories alive and 
          making sure your car feels brand new, every single time.
        </p>
      </div>
    </section>
  )
}

export default AboutCoverSection
