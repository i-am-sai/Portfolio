import CertCard from "./CertCard.js"

import hr from "../assets/curve-hr.svg"
import Hackathon from "../assets/certs/Hackathon.png"
import WebDevelopment from "../assets/certs/WebDevelopment.png"
import JSFundamentals from "../assets/certs/JSFundamentals.png"


// import 

export default function Certs() {
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Web Development Complete Bootcamp" img={WebDevelopment} issued="Udemy" date="May 2023" />
                <CertCard name="• IEEE WIE Social Hackathon League" img={Hackathon} issued="IEEE" date="Jun 2022" />
                <CertCard name="JavaScript Basics" img={JSFundamentals} issued="Codedamn" date="April 2023" />

            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
