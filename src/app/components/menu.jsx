'use client'
import gsap from "gsap";
import { ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase} from "gsap/all";
import { useGSAP } from '@gsap/react';
import '../components/menu.css'
import {FaArrowRight} from 'react-icons/fa6'
export default function Menu(){
    gsap.registerPlugin(ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase)
    useGSAP(()=>{
        Observer.create({
        target:'.menu',
        onClick:() => {
            gsap.to('.menu_container',{
                height:'40vh',
                duration:0.5,
                delay:0.2,
                ease:'slide'
            })
            gsap.to('.menu_back',{
                height:'100vh',
                padding:'4rem 0',
                duration:0.5,
                delay:0.3,
                ease:'slide'
            })
            gsap.to('.menu_main_container',{
                height:'40vh',
                duration:0.5,
                delay:0.6,
                ease:'slide'
            })
            gsap.fromTo('.link',{
               yPercent:100, 
               stagger:0.3,
               ease:'slide',
            },{
                yPercent:0,
                stagger:0.3,
               ease:'slide',
               duration:0.3,
               delay:0.7
            })
        }
    })
    Observer.create({
        target:'.close',
        onClick:() => {
            gsap.to('.menu_container',{
                height:'0%',
                delay:1,
                ease:'slide'
            })
            gsap.to('.menu_main_container',{
                height:'0%',
                delay:1,
                ease:'slide'
            })
            gsap.to('.menu_back',{
                height:'0%',
                padding:0,
                delay:1.4,
                ease:'slide'
            })
            gsap.to('.link',{
                yPercent:100,
                stagger:{
                    each:0.3,
                    from:3,
                },
                overwrite:true,
                 ease:'slide'
            })
        }
    })
    //Click link
    var links = gsap.utils.toArray('.link');
    links.forEach((ele)=>{
        Observer.create({
        target:ele,
        onClick:() => {
            gsap.to('.menu_container',{
                height:'0%',
                delay:1,
                 ease:'slide'
            })
            gsap.to('.menu_main_container',{
                height:'0%',
                delay:1,
                 ease:'slide'
            })
            gsap.to('.menu_back',{
                height:'0%',
                padding:0,
                delay:1.4,
                 ease:'slide'
            })
            gsap.to('.link',{
                overwrite:true,
                yPercent:100,
                stagger:{
                    each:0.3,
                    from:3,
                },
                ease:'slide',
            })
        }
    })
    })
    Observer.create({
        target:'.main_container',
        onDown:() => {
            gsap.to(['.menu','.logo'],{
                yPercent:-200,
                duration:1,
                ease:'power4.out',
                overwrite:true
            })
        },
        onUp:() => {
            gsap.to(['.menu','.logo'],{
                yPercent:0,
                duration:1,
                ease:'power4.out',
                overwrite:true
            })
        }
    })
    },[])
    const navigate = (link) => {
    gsap.to(window,{
            scrollTo:document.querySelector(link),
            duration:0.5
        })
}
    return(
        <div>
             <div className="logo txt" onClick={() => {gsap.to(window,{scrollTo:'.main_container',duration:1.5})}} style={{fontFamily:'Trebuchet MS'}}><span className="logotxt">RT</span><span className='dot'>.</span></div>
                    <div className="menu">MENU</div>
                    <div className="menu_main_container">
                        <div className="copyright">
                        RAPHAEL <br /> WEB DEVELOPER
                        </div>
                        <div className="menu_container">
                            <span className='close'>CLOSE</span>
                            <div className='link_container' onClick={() => {navigate('.services')}}><p className='link'>ABOUT</p></div>
                            <div className='link_container' onClick={() => {navigate('.begin')}}><p className='link'>WORK</p></div>
                            <div className='link_container' onClick={() => {navigate('.another_container')}}><p className='link'>CONTACT</p></div>
                        </div>
                    </div>
                    <div className="menu_back">
                        <div style={{fontSize:'30px'}}>
                           <a href="https://www.linkedin.com/in/tsiory-raphaël-ravelonomenjanahary-632b47270" className="menu_link"> LinkdIn <FaArrowRight className='icon'/></a>
                            <a href="https://www.facebook.com/tsiory.raphael.907824" className="menu_link">Facebook <FaArrowRight className='icon'/></a> 
                            <a href='https://github.com/Tsiory15' className="menu_link">Github <FaArrowRight className='icon'/></a>
                        </div>
                        <div>&copy; 2025</div>
                    </div>
        </div>
    )
}