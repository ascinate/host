import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'


//Image


//Image
import ione from "/o.png";
import ithree from "/o2.png";
import ifour from "/o3.png";
import isix from "/o4.png";
import CustomCursor from '../components/CustomCursor';


function Home() {
    return (
        <>
            <CustomCursor/>
            <Navbar />
            <main className='float-left w-full'>
                <section className='section-hero'>

                    <div className='wrapper'>
                        <div className='container-hero relative'>
                            <div className='banner-tms01'>
                                <h1 className='hero-main-text'>Hosting and <span> oracle </span> <strong> Services </strong> with Hosts</h1>
                                <p className='sub-text mb-11'>Decentralizes hosting and oracle services by aggregating on and off-chain data.</p>
                                <button className='theme-color-btn' id=''>Get Started</button>
                                <button className='white-color-btn ' id=''>Try Demo</button>
                            </div>
                           

                            <div className='ithree'>
                                <img src={ithree} alt="b" />
                            </div>
                            <div className='ifour'>
                                <img src={ifour} alt="b" />
                            </div>
                            <div className='ione-face'>
                                <img src={ione} alt="g" />
                            </div>
                            <div className='isix'>
                                <img src={isix} alt="h" />
                            </div>
                            
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}

export default Home