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
import { useEffect, useRef, useState } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from '@/components/ui/carousel'
import  { CgClose } from 'react-icons/cg';
import { FaGithub,FaPhone } from 'react-icons/fa';
import { MailIcon } from 'lucide-react';

const imgs = ['1','2','3','4','5','6','7','8','9','10','11','12','13']
const scrn = ['r1','r2','r3']
export default function Hero(){
    const [pj1,setPj1] = useState(true)
    const [pj2,setPj2] = useState(true)
    gsap.registerPlugin(ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase,ScrollSmoother)
useGSAP(() =>{
    CustomEase.create('top','0.9,0,0.1,1')
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
        backgroundColor:'oklch(0.145 0 0)'
    }).to('.project > span',{
        color:'oklch(0.985 0 0)'
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
            <div className={pj1 ? 'hidecase' : 'showcase'}>
                <div className="closebtn" onClick={()=>setPj1(true)}><CgClose></CgClose></div>
                    <div className="project_content">
                    <Carousel className='slider' opts={{loop:true}}>
                        <CarouselContent>
                            {imgs.map((img,index) => (
                            <CarouselItem style={{height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} key={index}>
                                <Image
                            src={`/zarahay/${img}.png`}
                            alt=''
                            width={900}
                            height={100}
                            />
                            </CarouselItem>
                            ))}
                            
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="description">
                    This project is an online training platform made for Zarahay doctorant community. <br /> It aims to provide members
                    with a smooth and engaging learning experience <br /> through a variety of courses.
                    <br /> 
                    <ul>
                        Key features :
                        <li>Secure registration and authentication</li>
                        <li>Course with video and downloadable file</li>
                        <li>Upload and authorization management for admin account</li>
                        <li>Course catalog</li>
                    </ul>
                    <ul>
                        <div>Technologie used : </div>
                        <li>React,Node.js and MySQL</li>
                    </ul>
                </div>
            </div>
            <div className={pj2 ? 'hidecase' : 'showcase'}>
                <div className="closebtn" onClick={()=>setPj2(true)}> <CgClose></CgClose></div>
                    <div className="project_content">
                    <Carousel className='slider' opts={{loop:true}}>
                        <CarouselContent>
                            {scrn.map((img,index) => (
                            <CarouselItem style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} key={index}>
                                <Image
                            src={`/relaxation/${img}.png`}
                            alt=''
                            width={300}
                            height={100}
                            />
                            </CarouselItem>
                            ))}
                            
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="description">
                    This project is a mobile application designed to help users reduce stress, <br />
                    improve focus, and enhance overall well-being through guided meditation techniques
                    <br /> 
                    <ul>
                        Key features :
                        <li>Relaxing music</li>
                        <li>Guided meditation and breathing exercices for stress relief, sleep and focus</li>
                    </ul>
                    <ul>
                        <div>Technologie used : </div>
                        <li>React native</li>
                    </ul>
                </div>
            </div>
            <Menu/>
            <div>
            <div className= "main_container">
                <div className="hero_section">
                    <div className="intro">
                        <div className="backdrop"></div>
                        <div><p className='itext'>THINK.</p></div><div><p className='itext'>CODE.</p></div><div><p className='itext' >DEPLOY.</p></div>
                    </div>
                    {/* TEMPORARY */}
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
                                Hello, I'm Tsiory Raphaël a web developer. <br />
                                Passionate about creating modern, responsive, and user-friendly websites.
                                <br />
                               <br /> Skilled in HTML,CSS,JavaScript,React,Next js and Node.js and always eager to learn new technologies to push my limits
                                <div className="download_button">
                                   <a href='../../../CV_RAVELONOMENAJANAHARY_Tsiory_Raphael.pdf'>Curriculum vitae</a>
                                </div>
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
                        <div className="project1 pj" onClick={()=>setPj1(false)}>
                            <div className="card">
                                <p className='title'>Zarahay doctorant</p>
                            </div>
                        <Image
                            src={Pic}
                            alt=''
                            className='image pji'
                            />
                        </div>
                       <div className="project2 pj" onClick={()=>setPj2(false)}>
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
                        <p className='git'><MailIcon size={30}></MailIcon>raphaeltsiory15@gmail.com</p>
                    </div>
                </div>
            </div>     
            </div>      
       </div>
    )
}