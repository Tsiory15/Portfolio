"use client";

import './hero.css'
import gsap from "gsap";
import { ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase, ScrollSmoother,SplitText} from "gsap/all";
import Image from 'next/image';
import Pic from '../../../public/Leonardo_Phoenix_10_A_person_with_a_futuristic_and_focused_exp_2.jpg'
import Pic2 from '../../../public/Leonardo_Phoenix_10_A_person_with_a_futuristic_and_focused_exp_3.jpg'
import Menu from "../components/menu";
import { useGSAP } from '@gsap/react';

export default function Hero(){
gsap.registerPlugin(ScrollTrigger,Draggable,Observer,ScrollToPlugin,ScrollSmoother,SplitText)

useGSAP(() =>{
    gsap.to('.services_text',{
        xPercent:-55,
        scrollTrigger:{
            trigger:'.main_container',
            start:'top top',
            end:'+=550',
            scrub:3,
        }
    })
    gsap.to('.back',{
        scrollTrigger:{
            trigger:'.another_section',
            start:'top top',
            end:'+=3300',
            scrub:1,
            pin:true,
        },
         x:() => -(document.querySelector('.another_section').scrollWidth - document.documentElement.clientWidth)+'px',
        duration:1,
        ease:'none',
    })
    gsap.to('.itext',{
        scrollTrigger:{
            trigger:'.intro',
            start:'top top',
            end:'+=500',
            scrub:true
        },
        ease:'power1.out',
        yPercent:100,
        opacity:0
    })
    gsap.to('.back',{
        scrollTrigger:{
            trigger:'.trigger',
            start:'top top',
            end:'+=2700',
            toggleActions:'play reverse play reverse',
        },
        opacity:1
    })
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:'.trigger',
            start:'top top',
            end:'+=2700',
            toggleActions:'play reverse play reverse'
        },
    })
    tl.to('.another_section',{
        backgroundColor:'var(--background)',
        ease:'power1.inOut',
        duration:0.1
    })
    tl.to('.project > span',{
        color:'var(--foreground)',
        ease:'power1.inOut',
        duration:0.1
    })
    gsap.to('.pj',{
        scrollTrigger:{
            trigger:'.trigger',
            start:'top top',
            end:'+=4000',
            scrub:2.5,
            pin:true,
            pinSpacing:false,
        },
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
                                Hello, I'm Tsiory Raphaël a web developer. Passionate about creating modern, responsive, and user-friendly websites.
                                Skilled in HTML, CSS, JavaScript, React, Next js and Node.js and always eager to learn new technologies to push my limits.
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="begin"></div>
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
                       <div className="project2 pj" id='smooth-wrapper'>
                        <Image
                            src={Pic2}
                            alt=''
                            className='image pji'
                            id='smooth-content'
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
                <div className="another_container" style={{marginTop:'-33%'}}>
                    <div className="contact_us">
                        CONTACT <br />ME.
                    </div>
                    <div className="contact">
                        
                    </div>
                </div>
            </div>     
            </div>      
            </div>
    )
}