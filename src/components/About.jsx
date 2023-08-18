import React from "react";
import me1 from '../assets/me1.png';
import hr from '../assets/curve-hr.svg'


const About = () => {

    return (
        <div id="about" className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">

            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-7/12 flex flex-col justify-center pr-4">
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">About</h1>
                    <p className="text-lg font-light text-gray-400 mb-6 ">I'm a Web Enthusiast who is passionate about developing things aesthetically pleasing and creative to elevate people's interaction with the product. Some technologies I enjoy working with include HTML5, CSS, ReactJS, Redux, JavaScript. My interest in technology, combined with my constantly ideating mind, finds its best expression in the field of web development. Here, I convert my imaginative concepts into tangible realities through crafting and construction.</p>
                </div>
                <div className="w-5/12 lg:w-3/12">
                    <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" className="w-full h-auto" src={me1} alt="A group of People" />
                </div>
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
};

export default About;
