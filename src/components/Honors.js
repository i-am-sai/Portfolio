import HonorCard from "./HonorCard.js"
import ChatVerse from '../assets/ChatVerse.svg';
import Weather from '../assets/Weather.svg';
import CFD from '../assets/CFD.svg';
import hr from "../assets/curve-hr.svg"

export default function Honors() {
    return (
        // <div id="honors" className="mt-4 text-white">
        //     <h1 className="text-2xl font-bold">My Work</h1>
        //     <p className="font-light text-gray-400">Here are some of my projects</p>

        //     <div className="flex flex-col md:flex-row mt-4 gap-5">
        //         <HonorCard name="Top 10 SELEKNAS ASEAN Skills Competition ITNSA 2022" issued="KEMENAKER RI" desc="Linux Server, Windows Server, Linux Routing, Cisco Troubleshooting, Cisco Network Analysis, Network and System Programmabillity, Containerized Service." />
        //         <HonorCard name="3rd Place Winner of IT Network System Administration - LKS Jawa Tengah" issued="KEMENDIKBUD RI" desc="Linux Server, Windows Server, Cisco Configuration, Cisco Troubleshooting, Network and System Programmabillity, Containerized Service." />
        //         <HonorCard name="3rd Place Winner of IT Network System Administration - LKS Jawa Tengah" issued="KEMENDIKBUD RI" desc="Linux Server, Windows Server, Cisco Configuration, Cisco Troubleshooting, Network and System Programmabillity, Containerized Service." />

        //     </div>
        //     <div className="flex flex-col md:flex-row mt-4 gap-5">
        //         <HonorCard name="3rd Place Winner of IT Network System Administration - LKS Jawa Tengah" issued="KEMENDIKBUD RI" desc="Linux Server, Windows Server, Cisco Configuration, Cisco Troubleshooting, Network and System Programmabillity, Containerized Service." />

        //     </div>
        //     <div className="flex flex-col md:flex-row mt-4 gap-5">
        //         <HonorCard name="1st Place Winner of IT Network System Administration - LKS Kab. Tegal" issued="KEMENDIKBUD RI" desc="Linux Server, Cisco Configuration." />

        //     </div>
        //     <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        // </div>

        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">My Work</h1>
            <p className="font-light text-gray-400">Here are some of my projects</p>

            <div className="flex flex-col md:flex-row mt-4 gap-5">

                <HonorCard img={ChatVerse} projectHeading="ChatVerse" desc="A real-time chat application using Node.js, Express, and Socket.io, leveraging websockets for instant messaging. The app includes a room feature, allowing users to join and participate in different chat rooms. User data, including usernames, is stored in a MongoDB database, ensuring efficient and reliable communication across rooms." github="https://github.com/i-am-sai/ChatVerse" deployment="https://chat-verse-iw0r.onrender.com/" />
            </div>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard img={Weather} projectHeading="Weather Report Web Application" desc="This is a web application that uses HTML, CSS, JavaScript, and Express.js to fetch and display weather information for a specified city using a weather API. The application is designed to run on a local host and can be easily accessed through a web browser." github="https://github.com/i-am-sai/WeatherSphere" deployment="https://weather-app-zyc3.onrender.com/" />
            </div>

            <div className="flex flex-col md:flex-row mt-4 gap-5">
                <HonorCard img={CFD} projectHeading="Custom Form Builder" desc="This project is a custom form builder application that allows users to create forms with three unique question types: Categorize, Cloze, and Comprehension. The frontend is built using the MERN stack (MongoDB, Express, React, Node.js), and Tailwind CSS is used for styling." github="https://github.com/i-am-sai/Custom_Form_Builder" deployment="https://customformbuilder.netlify.app/" />
            </div>

            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}
