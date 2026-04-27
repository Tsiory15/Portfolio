'use client'
import './transition.css'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const animate = (router:AppRouterInstance,route:string) =>{
    gsap.to('.divs',{
        width:'100%',
        duration:0.5,
        ease:'power3.out',
    }).then(()=>
        router.push(route,{scroll:false})
    )
}
export default function TransitionProvider(){
useGSAP(()=>{
    gsap.from('.divs',{
        width:'100%',
        duration:0.5,
        ease:'power3.out',
    })
},[])
    return (
        <div>
            <div className="transition">
               <div className="divs">

               </div>
            </div>
        </div>
    )
}