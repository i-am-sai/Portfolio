import { useState } from 'react'
import profile from '../assets/profile.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { TiLocationArrow } from "react-icons/ti";
import { RxDividerVertical } from "react-icons/rx";

import hr from '../assets/curve-hr.svg'

export default function Hiro() {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
            {loaded ?
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
                >Loading...</div>
                :
                null
            }
            <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
                <div className='md:w-3/6 md:p-4'>
                    <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" src={profile} alt="profile" onLoad={() => setLoaded(false)} />
                </div>
                <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                    <div className="flex flex-col w-full mt-8">
                        <h1 className=" text-6xl font-bold mb-8 text-gray-400">Hi, I am Sai, </h1>
                        <h1 className="text-4xl font-bold"></h1>
                        {/* <p class="text-xl font-bold text-gray-300">Web Enthusiast</p> */}
                        {/* <p className="text-md font-light text-gray-400 ">Motivated self-learning in Information Technology. Interested in exploring about Computer Network, Cloud Computing, DevSecops, and Web Development. Now I am looking for more experience in my field.</p> */}
                        {<p className="text-md font-light text-gray-400 mb-6 ">I code web apps just to let out my creative thoughts & whatever helps make my life easier.</p>}

                    </div>


                    <ul className='flex mt-2 gap-4 items-center'>
                        <li>
                            <TiLocationArrow className="inline-block mr-2 dark:text-white  dark:group-hover:text-black text-lg" /> {TiLocationArrow}Bengaluru Karnataka, INDIA
                        </li>
                        <li>
                            <RxDividerVertical className="inline-block mr-2 dark:text-white  dark:group-hover:text-black text-xl" /> {RxDividerVertical}
                        </li>
                        <li>
                            <a href='https://github.com/i-am-sai' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/i-am-sai/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                        </li>
                        {/* <li>
                            <a href='https://www.instagram.com/s.w.a.r.o.o.p_7/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
                        </li> */}
                        {/* <li>
                            <a href='https://twitter.com/i__am__sai' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faTwitter} /></a>
                        </li> */}
                    </ul>
                </div>
                <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
            </div>
        </>
    )
}
