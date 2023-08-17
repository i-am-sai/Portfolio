import hr from '../assets/curve-hr.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { MdCall, MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className="mt-4 bg-dark-200 rounded-md px-8 py-4 text-white">
      <div className='text-2xl font-bold'>Contact Me</div>

      <ul className='flex justify-center mt-2 mb-6 gap-4 items-center text-center ml-70'>
        <li className='mr-4'>
          <a href='https://github.com/i-am-sai' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
        </li>
        <li className='mr-4'>
          <a href='https://www.linkedin.com/in/i-am-sai/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
        </li>
        <li className='mr-4'>
          <a href='https://www.instagram.com/s.w.a.r.o.o.p_7/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faInstagram} /></a>
        </li>
        <li>
          <a href='https://twitter.com/i__am__sai' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faTwitter} /></a>
        </li>
      </ul>
      <div>
        <ul className='flex justify-center  mt-2 mb-6 gap-4 items-center text-center ml-70'>
          <li>
            <MdCall className="inline-block mr-2 text-white  group-hover:text-black text-xl" /> {MdCall}
            : +918951560542
          </li>
          <li>
            <MdEmail className="inline-block mr-2 text-white  group-hover:text-black text-xl" /> {MdEmail}
            : saiswaroopkd@gmail.com
          </li>
        </ul>
      </div>

      <img src={hr} className="mb-8 mt-4 w-full md:h-1 text-white bottom-0" alt="hr" />

      <p className="text-sm font-light text-center">Copyright © 2023 All rights reserved</p>

    </div>
  )
}