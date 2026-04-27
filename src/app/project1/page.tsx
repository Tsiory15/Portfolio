'use client'
import '../project1/project.css'
import {FaChevronLeft} from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { animate } from '../components/transition'
import Image from 'next/image'
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from '@/components/ui/carousel'
import { BsGithub } from 'react-icons/bs'


export default function Project(){
    const project = ['pre1','pre2','pre3','pre4','pre5','pre6','pre7','pre8','pre9','pre10','pre11','pre12','pre13',]
    const router = useRouter()
    return(
        <div>
            <div className="back_button">
                            <FaChevronLeft size={30} color='white' onClick={()=>animate(router,'/')}/>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100vw',height:'100vh',backgroundColor:'var(--background)'}}>
                <div className="showcase_container">
                    <div>
                    <Carousel opts={{loop:true}}>
                        <CarouselContent>
                            {
                                project.map((item)=>(
                                        <CarouselItem key={item} className='showcase_content'>
                                                <Image
                                            src={`/zarahay/${item}.png`}
                                            alt='project image'
                                            width={0}
                                            height={0}
                                            sizes='100vw'
                                            style={{width:'100%',height:'100%'}}
                                            />
                                        </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                    </Carousel>
                    <div  style={{color:'var(--foreground)',padding:'2rem 0',fontSize:'1.3vw',textAlign:'right'}}>
                        Zarahay Doctorant e-learning website
                    </div>
                    </div>
                    <div style={{color:'var(--foreground)'}}>
                       An online training platform for the Zarahay Doctorant Community
                       <span style={{display:'flex'}}>
                            <br />Key Features : <br />
                        - Secured registration and authentication system. <br />
                        - Course management with videos lessons and downloadable materials. <br />
                        - Role based account system.
                       </span>
                        <span style={{display:'flex'}}>
                            <br />Technologies Used : <br />
                        React js(frontend), Nodejs(backend) and MySQL database
                        </span>
                            <span style={{position:'absolute',bottom:40,right:40,whiteSpace:'nowrap'}}>
                                <a href="https://github.com/Tsiory15/Zarahay_doctorant"><BsGithub size={35}></BsGithub></a>
                            </span>
                    </div>
            </div>
            </div>
        </div>
    )
}