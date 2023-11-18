import Image from 'next/image';
import React from 'react'

const HeroSection = () => {
  return (
    <section className="py-8 container mx-auto bg-radial">
      <div className="flex  gap-6 md:flex-row xs:flex-col text-center md:text-start justify-around items-center">
        {/* Slogan */}
        <div>
          <h2 className='text-4xl  font-Kanit font-bold mb-5'>From Goals to Greatness</h2>
          <span className='text-sm md:text-lg md:tracking-widest  font-Rale'>Where Mentors and Students <br /> Unite for Success.</span>
        </div>
              {/* image */}
              <div>
                  <Image src="/hero/hero.jpg" alt="hero" width={500} height={500} className='object-cover rounded-md shadow-lg shadow-primary' />
              </div>
      </div>
    </section>
  );
}

export default HeroSection