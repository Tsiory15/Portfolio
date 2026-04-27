'use client'
import {FaChevronLeft} from 'react-icons/fa'
import { useRouter } from 'next/navigation'
import { animate } from '../components/transition'
import Image from 'next/image'
import { BsGithub } from 'react-icons/bs'
import {Carousel,CarouselContent,CarouselItem,CarouselNext,CarouselPrevious} from '@/components/ui/carousel'
import '../project2/project2.css'
export default function Project(){
    const project = ['pre1','pre2','pre3']
    const router = useRouter()
    return(
        <div>
            <div className="back_button">
                            <FaChevronLeft size={30} color='white' onClick={()=>animate(router,'/')}/>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100vw',height:'100vh',backgroundColor:'var(--background)'}}>
                <div className="showcase_container1">
                    <Carousel opts={{loop:true}}>
                        <CarouselContent>
                            {
                                project.map((item)=>(
                                        <CarouselItem key={item} className='showcase_content1'>
                                                    <Image
                                                    src={`/relax/${item}.png`}
                                                    alt='project image'
                                                    width={0}
                                                    height={0}
                                                    sizes='100vh'
                                                    style={{width:'50%',height:'100%'}}
                                                    />
                                        </CarouselItem>
                                ))
                            }
                        </CarouselContent>
                    </Carousel>
                    <div style={{color:'var(--foreground)'}}>
                        Relaxation App
                        <span style={{display:'flex'}}>
                            <br />
                            A mobile application designed to help users redure stress improve focus, and enhance overall well-being
through guided relaxation techniques.
                        </span>
                        <span style={{display:'flex'}}>
                            <br />
                            Key Features : <br />
                            - Relaxing music
                            <br />- Guided meditation and breathing exercices for stress relief, sleep and focus
                            <br />- Offline mode for use without internet connection
                        </span>
                        <span style={{display:'flex'}}>
                            <br />
                            Technologies Used : 
                            <br /> React Native
                        </span>
                        <span style={{position:'absolute',bottom:40,right:40,whiteSpace:'nowrap'}}>
                                                        <a href="https://github.com/Tsiory15/StitchcoderProject"><BsGithub size={35}></BsGithub></a>
                                                    </span>

                    </div>
            </div>
            </div>
        </div>
    )
}