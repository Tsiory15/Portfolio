"use client";

import './hero.css'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { relative } from 'path';
import { useEffect, useRef } from "react";
import Image from 'next/image';
import Pic from '../../../public/Leonardo_Phoenix_10_A_person_with_a_futuristic_and_focused_exp_2.jpg'
import Pic2 from '../../../public/Leonardo_Phoenix_10_A_person_with_a_futuristic_and_focused_exp_3.jpg'

export default function Hero(){
    gsap.registerPlugin(ScrollTrigger)
useEffect(() =>{
    gsap.timeline({
        scrollTrigger:{
            trigger:'.main_container',
            start:'top top',
            end:'+=500',
            scrub:3,
        }
    }).to('.services_text',{
        x:'-100%',
        ease:'none',
    })
    gsap.timeline({
        scrollTrigger:{
            trigger:'.another_section',
            start:'top top',
            end:'+=4000',
            scrub:1,
            pin:true,
        }
    }).to('.back',{
        x:() => -(document.querySelector('.another_section').scrollWidth - document.documentElement.clientWidth)+'px',
        duration:1,
        ease:'none'
    })
},[])
    return (
        <div>
            <div className="main_container">
                    <div className="logo">Sc</div>
                    <div className="menu">MENU</div>
                <div className="hero_section">
                    <div className="intro">
                        THINK. <br /> CODE. <br /> DELIVER.
                    </div>
                    <div className="service_container">
                        <div className="services">
                            <div className="services_text">
                                <p>WEB DEV & DESIGN</p>
                            </div>
                              <div className="services_text">
                                <p>WEB DEV & DESIGN</p>
                            </div>
                        </div>
                        <div className="about">
                             <div>
                                
                            </div>
                            <div className='text'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam necessitatibus eligendi rem dolores recusandae!
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="another_section">
                      <div className='project'>
                        <span className='p'>P</span>
                        <span className='r'>R</span>
                        <span className='o'>O</span>
                        <span className='j'>J</span>
                        <span className='e'>E</span>
                        <span className='c'>C</span>
                        <span className='t'>T</span>
                    </div>
                    <div className="back">
                        <div className="project1">
                        <Image
                            src={Pic}
                            alt=''
                            className='image'
                            />
                    </div>
                       <div className="project2">
                        <Image
                            src={Pic2}
                            alt=''
                            className='image'
                            />
                    </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <div className="section">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>  
                <div className="another_container" style={{backgroundColor:'white',marginTop:'-100vh'}}>
                        CONTACT SECTION
                </div>
            </div>           
       </div>
    )
}