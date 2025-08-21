'use client'
import gsap from "gsap";
import { ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase} from "gsap/all";
import { useGSAP } from '@gsap/react';
import '../components/menu.css'
export default function Menu(){
    gsap.registerPlugin(ScrollTrigger,Draggable,Observer,ScrollToPlugin,CustomEase)
    useGSAP(()=>{
        Observer.create({
        target:'.menu',
        onClick:() => {
            gsap.to('.menu_container',{
                height:'40vh',
                duration:0.7,
                delay:0.2,
            })
            gsap.to('.menu_back',{
                height:'100vh',
                padding:'4rem 0',
                duration:0.7,
                delay:0.2,
            })
            gsap.to('.menu_main_container',{
                height:'40vh',
                duration:0.7,
                delay:0.2
            })
            gsap.fromTo('.link',{
               yPercent:100, 
               stagger:0.3,
               ease:'power4.out',
               duration:0.7,
               delay:0.3
            },{
                yPercent:0,
                stagger:0.3,
               ease:'power4.out',
               duration:0.7,
               delay:0.5
            })
        }
    })
    Observer.create({
        target:'.close',
        onClick:() => {
            gsap.to('.menu_container',{
                height:'0%',
                delay:1
            })
            gsap.to('.menu_main_container',{
                height:'0%',
                delay:1
            })
            gsap.to('.menu_back',{
                height:'0%',
                padding:0,
                delay:1
            })
            gsap.to('.link',{
                yPercent:100,
                stagger:{
                    each:0.3,
                    from:3,
                },
                overwrite:true
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
            })
            gsap.to('.menu_main_container',{
                height:'0%',
                delay:1
            })
            gsap.to('.menu_back',{
                height:'0%',
                padding:0,
                delay:1
            })
            gsap.to('.link',{
                overwrite:true,
                yPercent:100,
                stagger:{
                    each:0.3,
                    from:3
                },
                ease:'power4.out',
            })
        }
    })
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
             <div className="logo txt" onClick={() => {navigate('.main_container')}} style={{fontFamily:'poppins'}}><span className="logotxt">Rt</span><span className='dot'>.</span></div>
                    <div className="menu">MENU</div>
                    <div className="menu_main_container">
                        <div className="copyright">
                        TSIORY RAPHAEL <br />
                        </div>
                        <div className="menu_container">
                            <span className='close'>CLOSE</span>
                            <div className='link_container' onClick={() => {navigate('.services')}}><p className='link'>ABOUT</p></div>
                            <div className='link_container' onClick={() => {navigate('.begin')}}><p className='link'>WORK</p></div>
                            <div className='link_container' onClick={() => {navigate('.another_container')}}><p className='link'>CONTACT</p></div>
                        </div>
                    </div>
                    <div className="menu_back">
                        Copyright &copy; 2025
                    </div>
        </div>
    )
}