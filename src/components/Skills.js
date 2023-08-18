import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"
import javascript from "../assets/skills/javascript.svg"
import bash from "../assets/skills/bash.svg"
import python from "../assets/skills/python.svg"
import tailwind from "../assets/skills/tailwind.svg"
import windows from "../assets/skills/windows.svg"
import react from "../assets/skills/react.svg"
import git from "../assets/skills/git.svg"
import express from "../assets/skills/express.svg"
import html from "../assets/skills/html.svg"
import nodejs from "../assets/skills/nodejs.svg"
import mongodb from "../assets/skills/mongodb.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
    };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Tech Stacks and Tools</p>

            <div className="mt-4">
                <Slider {...settings}>
                    <SkillCard name="bash" experience="1 years" img={bash} />
                    <SkillCard name="python" experience="1 years" img={python} />
                    <SkillCard name="javascript" experience="1 years" img={javascript} />
                    <SkillCard name="tailwind" experience="1 years" img={tailwind} />
                    <SkillCard name="windows" experience="1 years" img={windows} />
                    <SkillCard name="react" experience="1 years" img={react} />
                    <SkillCard name="git" experience="1 years" img={git} />
                    <SkillCard name="express" experience="1 years" img={express} />
                    <SkillCard name="html" experience="1 years" img={html} />
                    <SkillCard name="nodejs" experience="1 years" img={nodejs} />
                    <SkillCard name="mongodb" experience="1 years" img={mongodb} />

                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}