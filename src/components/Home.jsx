import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[rgb(10,25,47)]">
      {/* {Conatainer} */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hello , my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Abhijeet Ranjan
        </h1>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-End Web Developer
        </h1>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a passionate front-end developer with expertise in HTML, CSS,
          JavaScript and React.js, and I specialize in creating responsive and
          visually appealing web experiences.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600  hover:border-pink-600">
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home