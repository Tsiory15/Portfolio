'use client'
import gsap from 'gsap'
import './splash.css'
import { useGSAP } from '@gsap/react'

export default function Splash (){
    useGSAP(()=>{
        window.scrollTo(0,0)
       const tl = gsap.timeline()

       tl
       .to('.splash_content',{
            width:5,
            height:'100%',
            duration:0.5,
            delay:0.3,
            ease:'power1.out',
       })
       .to('.splash_content',{
            width:'100%',
            duration:0.7,
            delay:0.2,
            ease:'slide',
       })
       .to('.welcome > div',{
            yPercent:-100,
            ease:'sine.out',
            duration:0.7
       })
       .to('.welcome > div',{
            opacity:0,
            duration:0.5
       })
       .to('.splash_main_container',{
        height:0,
        duration:0.5,
        delay:0.3,
        ease:'slide',
       })
       .to('.splash_main_container',{
        display:'none'
       })
       .to('.main_container',{
        ease:'power4.out',
        duration:2,
        opacity:1,
       })
    },[])
    return(
        <div>
            <div className="splash_main_container">
                <div className="splash_content">
                    <div className="welcome">
                        <div>Hello.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}