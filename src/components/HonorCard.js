// import React from "react";

// export default function HonorCard(props) {
//     return (
//         <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100" className="w-full md:w-1/3 bg-dark-100 rounded-md py-4 px-4">
//             {/* <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img> */}
//             <div className="mt-2 flex-grow">
//                 <h1 className="font-bold md:text-xl">{props.name}</h1>
//                 <p className="font-light md:text-lg">Issued by {props.issued}</p>
//                 <p className="font-light    text-gray-400">{props.desc}</p>
//                 <a href={props.github} className="btn btn-primary">Github</a>
//                 <a href={props.deployment} className="btn btn-primary">Deployment</a>
//             </div>
//         </div>
//     )
// }

import React from "react";

export default function TestimonialCard(props) {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-offset="100"
            className="flex w-full bg-dark-100 rounded-md py-6 px-6"
        >
            <img
                src={props.img}
                className="h-full w-40 mr-4"
                alt={props.name}
            />
            <div className="flex-grow">
                <h1 className="font-bold md:text-xl">{props.projectHeading}</h1>
                <p className="font-light md:text-lg">{props.desc}</p>
                <div className="flex justify-between items-center mt-4">
                    <a href={props.github} className="btn btn-primary">
                        Github
                    </a>
                    <a href={props.deployment} className="btn btn-primary">
                        Deployment
                    </a>
                </div>
            </div>
        </div>


    )
};



