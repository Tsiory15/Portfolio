'use client'
import gsap from 'gsap'
import './splash.css'
import { useGSAP } from '@gsap/react'

export default function Splash (){
    useGSAP(()=>{
        window.scrollTo(0,0)
       const tl = gsap.timeline()

       tl
       .to('.welcome',{
            translateY:'75%',
            duration:0.3,
            ease:'power1.out',
       })
       .to('.welcome',{
            translateY:'50%',
            duration:0.5,
            delay:1,
            ease:'power4.out',
       },'<')
       .to('.welcome',{
            translateY:'25%',
            duration:0.5,
            ease:'power4.out',
            delay:0.3
       },'<')
       .to('.welcome',{
            translateY:0,
            duration:0.5,
            ease:'power4.out',
            delay:0.5
       },'<')
       .to('.welcome_container',{
            width:0,
            duration:1,
            ease:'slide',
            delay:1,
            right:0
       })
       .to('.splash_content',{
            width:'100%',
            duration:1,
            ease:'slide',
       },'<')
       .to('.splash_contents',{
            width:'100%',
            duration:1,
            delay:0.3,
            ease:'slide',
       },'<')
       .to('.welcome',{
           display:'none'
       },'<')
        .to('.splash_contents',{
        width:0,
        duration:0.5,
        ease:'slide',
        left:'initial',
        right:0
       })
       .to('.splash_content',{
        height:0,
        duration:0.5,
        delay:0.6,
        ease:'slide',
       },'<')
       .to('.main_container',{
        ease:'none',
        duration:2,
        delay:1,
        opacity:1,
        height:'max-content',
       },'<')
       .to('.splash_main_container',{
        display:'none',
       },'<')
    },[])
    return(
        <div>
            <div className="splash_main_container">
                <div className='welcome_container'>
                    <div className="sub_container">
                        <div className="welcome">
                            HELLO <br /> WELCOME <br /> TO MY <br /> PORTFOLIO
                        </div>
                    </div>
                </div>
                <div className="splash_content">
                </div>
                <div className="splash_contents">
                </div>
            </div>
        </div>
    )
}