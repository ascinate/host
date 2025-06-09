import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


//Image


//Image
import oone from "/o.png"
import otwo from "/o2.png"
import othree from "/o3.png"
import ofour from "/o4.png"


function Home() {
    return (
        <>
            <Navbar />
            <main>
                <section className='section-hero'>

                    <div className='wrapper'>
                        <div className='container-hero flex items-center gap-52 '>
                            <div>
                                <h1 className='hero-main-text'>Hosting and oracle services with Hosts</h1>
                                <p className='sub-text mb-11'>Decentralizes hosting and oracle services by aggregating on and off-chain data.</p>
                                <button className='theme-color-btn' id=''>Get Started</button>
                                <button className='white-color-btn ' id=''>Try Demo</button>
                            </div>
                            <div className='hero-img'>
                                <img src={othree} alt="" className='othree'/>
                                <img src={ofour} alt="" className='ofour'/>
                                <img src={oone} alt="" className='oone'/>
                                <img src={otwo} alt="" className='otwo'/>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Home