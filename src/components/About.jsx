import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi. I'm Abhijeet Ranjan, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am a passionate web developer with expertise in HTML, CSS,
              Tailwind, JavaScript, and React.js. Committed to creating visually
              appealing and user-friendly websites, I bring a creative approach
              to problem-solving and a keen eye for detail to every project.🌐
              Feel free to explore my portfolio to see some of the exciting
              projects I've worked on. Let's connect and collaborate on the next
              big thing in the digital realm!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
