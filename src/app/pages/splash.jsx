'use client'
import gsap from 'gsap'
import './splash.css'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

export default function Splash (){
    const welcome = useRef()
    const welcome_container = useRef()
    const splash_content = useRef()
    const splash_contents = useRef()
    const splash_main_container = useRef()
    useGSAP(()=>{
        window.scrollTo(0,0)
       const tl = gsap.timeline()

       tl
       .to(welcome.current,{
            translateY:'75%',
            duration:0.3,
            ease:'power1.out',
       })
       .to(welcome.current,{
            translateY:'50%',
            duration:0.5,
            delay:1,
            ease:'power4.out',
       },'<')
       .to(welcome.current,{
            translateY:'25%',
            duration:0.5,
            ease:'power4.out',
            delay:0.3
       },'<')
       .to(welcome.current,{
            translateY:0,
            duration:0.5,
            ease:'power4.out',
            delay:0.5
       },'<')
       .to(welcome_container.current,{
            width:0,
            duration:0.7,
            ease:'slide',
            delay:1,
            right:0
       })
       .to(splash_content.current,{
            width:'100%',
            duration:0.7,
            ease:'slide',
       },'<')
       .to(splash_contents.current,{
            width:'100%',
            duration:0.7,
            delay:0.3,
            ease:'slide',
       },'<')
        .to(splash_contents.current,{
        width:0,
        duration:0.5,
        ease:'slide',
        left:'initial',
        right:0,
        onComplete:()=>{
            gsap.to(['.splash_contents','welcome_container'],{
        display:'none'
       })
        }
       })
       .to(splash_content.current,{
        height:0,
        duration:0.5,
        delay:0.6,
        opacity:1,
        ease:'slide',
       },'<')
       .to('.main_container',{
        ease:'power3.out',
        duration:0.5,
        delay:0.3,
        opacity:1,
        height:'max-content',
       },'<')
       .from(['.intropic','.logo','.menu','.logo','.itext'],{
        ease:'power3.Out',
        duration:0.5,
        opacity:0,
        y:'10px',
       },'<')
       .to('.splash_main_container',{
        display:'none',
       })
    },[])
    return(
        <div>
            <div className="splash_main_container" ref={splash_main_container}>
                <div className='welcome_container' ref={welcome_container}>
                    <div className="sub_container">
                        <div className="welcome" ref={welcome}>
                            HELLO <br /> WELCOME <br /> TO MY <br /> PORTFOLIO
                        </div>
                    </div>
                </div>
                <div className="splash_content" ref={splash_content}>
                </div>
                <div className="splash_contents" ref={splash_contents}>
                </div>
            </div>
        </div>
    )
}