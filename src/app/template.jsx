'use client'
import TransitionProvider from './components/transition'
export default function PageTransition({children}){
    return(
        <div>
            <TransitionProvider/>
            {children}
        </div>
    )
}