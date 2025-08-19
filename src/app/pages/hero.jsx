"use client";

import './hero.css'
import gsap from "gsap";
import { ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase, ScrollSmoother} from "gsap/all";
import Image from 'next/image';
import Pic from '../../../public/Leonardo_Phoenix_10_A_person_with_a_futuristic_and_focused_exp_2.jpg'
import Pic2 from '../../../public/Leonardo_Phoenix_10_A_person_with_a_futuristic_and_focused_exp_3.jpg'
import Link from 'next/link';
import Menu from "../components/menu";
import { useGSAP } from '@gsap/react';
import { FaGithub,FaPhone } from 'react-icons/fa';
// import { MailIcon } from 'lucide-react';

export default function Hero(){
    
    gsap.registerPlugin(ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase,ScrollSmoother)
useGSAP(() =>{
    gsap.to('.services_text',{
        xPercent:-57,
        scrollTrigger:{
            trigger:'.main_container',
            start:'top top',
            end:'+=550',
            scrub:3,
        }
    })
    gsap.timeline({
        scrollTrigger:{
            trigger:'.another_section',
            start:'top top',
            end:'+=3300',
            scrub:1,
            pin:true,
        }
    }).to('.back',{
        x:() => -(document.querySelector('.another_section').scrollWidth - document.documentElement.clientWidth)+'px',
        duration:1,
        ease:'none',
    })
    gsap.timeline({
        scrollTrigger:{
            trigger:'.intro',
            start:'top top',
            end:'+=500',
            scrub:true
        }
    }).to('.itext',{
        ease:'power1.out',
        yPercent:100,
        opacity:0
    })
    gsap.to('.images',{
        scrollTrigger:{
            trigger:'.intro',
            start:'top top',
            scrub:3
        },
        yPercent:-10
    })
    gsap.timeline({
        scrollTrigger:{
            trigger:'.trigger',
            start:'top top',
            end:'+=2700',
            toggleActions:'play reverse play reverse',
        }
    }).to('.main_container',{
        backgroundColor:'var(--background)'
    }).to('.project > span',{
        color:'var(--foreground)'
    }).to('.back',{
        opacity:1
    })
    gsap.timeline({
        scrollTrigger:{
            trigger:'.trigger',
            start:'top top',
            end:'+=4000',
            scrub:2.5,
            pin:true,
            pinSpacing:false,
        }
    }).to('.pj',{
        x:() => -(document.querySelector('.another_section').scrollWidth - document.documentElement.clientWidth)+'px',
        duration:1,
        ease:'none',
    })
    Observer.create({
        target:'.project',
        type:'wheel,touch',
        onUp:() =>{
            gsap.to('.pj',{scaleX:1.05})
        },
        onDown:() =>{
            gsap.to('.pj',{scaleX:1.05})
        },
        onStop:() =>{
        gsap.to('.pj',{scaleX:1})}
    })
},[])
    return (
        <div>
            <Menu/>
            <div>
            <div className= "main_container">
                <div className="hero_section">
                    <div className="intro">
                        <div className="backdrop"></div>
                        <div><p className='itext'>THINK.</p></div><div><p className='itext'>CODE.</p></div><div><p className='itext' >DEPLOY.</p></div>
                    </div>

                    <div className="service_container">
                        <div className="services">
                            <div className="services_text">
                                TURNING IDEAS INTO WEB EXPERIENCES
                            </div>
                        </div>
                        <div className="about" id='about'>
                             <div>
                                
                            </div>
                            <div className='text'>
                                Hello, I'm Tsiory Raphaël a web developer.
                                Passionate about creating modern, responsive, and user-friendly websites.
                                <br />
                               <br /> Skilled in HTML,CSS,JavaScript,React,Next js and Node.js and always eager to learn new technologies to push my limits
                            </div>
                        </div>
                    </div>
                </div>  
                <div className='trigger'></div>
                <div className="another_section">
                        <div className='project'>
                            <span className='p'>P</span>
                            <span className='r'>R</span>
                            <span className='o'>O</span>
                            <span className='j'>J</span>
                            <span className='e'>E</span>
                            <span className='c'>C</span>
                            <span className='t'>T</span>
                        <div className="project1 pj">
                            <div className="card">
                                <p className='title'>Zarahay doctorant</p>
                            </div>
                        <Image
                            src={Pic}
                            alt=''
                            className='image pji'
                            />
                        </div>
                       <div className="project2 pj">
                        <Image
                            src={Pic2}
                            alt=''
                            className='image pji'
                            />
                             <div className="card">
                                <p className='title'>Relaxation App</p>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>  
                <div className="another_container">
                    <div className="contact_us">
                        CONTACT <br />ME.
                    </div>
                    <div className="contact">
                        <Link href='https://github.com/Tsiory15' className='git'><FaGithub size={30}></FaGithub>Tsiory15</Link>
                        <p className='git'><FaPhone></FaPhone>034 48 967 23</p>
                        {/* <p className='git'><MailIcon size={30}></MailIcon>raphaeltsiory15@gmail.com</p> */}
                    </div>
                </div>
            </div>     
            </div>      
       </div>
    )
}