'use client'
import gsap from "gsap";
import { ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase} from "gsap/all";
import { useGSAP } from '@gsap/react';
export default function Menu(){
    gsap.registerPlugin(ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase)
    useGSAP(()=>{
        Observer.create({
        target:'.menu',
        onClick:() => {
            gsap.to('.menu_container',{
                width:'30%',
                duration:0.7,
                delay:0.2,
            })
            gsap.to('.menu_back',{
                width:'100%',
                duration:0.7,
                delay:0.2,
            })
            gsap.to('.menu_main_container',{
                width:'100%',
                duration:0.7,
                delay:0.2
            })
            gsap.fromTo('.link',{
               yPercent:100, 
               stagger:0.2,
               ease:'power4.out',
               duration:0.5,
               delay:0.3
            },{
                yPercent:0,
                stagger:0.2,
               ease:'power4.out',
               duration:0.5,
               delay:0.5
            })
        }
    })
    Observer.create({
        target:'.close',
        onClick:() => {
            gsap.to('.menu_container',{
                width:'0%',
                delay:1
            })
            gsap.to('.menu_main_container',{
                width:'0%',
                delay:1
            })
            gsap.to('.menu_back',{
                width:'0%',
                delay:1
            })
            gsap.to('.link',{
                yPercent:100,
                stagger:{
                    each:0.2,
                    from:3,
                },
                duration:0.3,
                delay:0.3
            })
        }
    })
    var links = gsap.utils.toArray('.link');
    links.forEach((ele)=>{
        Observer.create({
        target:ele,
        onClick:() => {
            gsap.to('.menu_container',{
                width:'0%',
                delay:1,
            })
            gsap.to('.menu_main_container',{
                width:'0%',
                delay:1
            })
            gsap.to('.menu_back',{
                width:'0%',
                delay:1
            })
            gsap.to('.link',{
                yPercent:100,
                stagger:{
                    each:0.2,
                    from:3
                },
                duration:0.5,
                ease:'power4.in',
            })
        }
    })
    })
    },[])
    const navigate = (link) => {
    gsap.to(window,{
            scrollTo:document.querySelector(link),
            duration:1
        })
}
    return(
        <div>
             <div className="logo txt" onClick={() => {navigate('.main_container')}} style={{fontFamily:'poppins'}}><span className="logotxt">RT</span></div><span className='dot'>.</span>
                    <div className="menu">MENU</div>
                    <div className="menu_main_container">
                        <div className="menu_container">
                            <span className='close'>CLOSE</span>
                            <div className='link_container' onClick={() => {navigate('.services')}}><p className='link'>ABOUT</p></div>
                            <div className='link_container' onClick={() => {navigate('.another_section')}}><p className='link'>WORK</p></div>
                            <div className='link_container' onClick={() => {navigate('.another_container')}}><p className='link'>CONTACT</p></div>
                        </div>
                    </div>
                    <div className="menu_back">
                    </div>
        </div>
    )
}