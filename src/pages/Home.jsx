import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';


import ione from "/image-01.png";
import ithree from "/image-02.png";
import ifour from "/o3.png";
import isix from "/hero-img-two.png";
import CustomCursor from '../components/CustomCursor';


function Home() {
     const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(true);
    setTimeout(() => setShow(false), 3000); 
  };
    const styles = {
  notification: {
    position: 'fixed',
    top: '20px',
    right: '20px',
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
    zIndex: 1000,
  }
};
    return (
        <>
            <CustomCursor/>
            <Navbar />
            <main className='float-left w-full'>
                <section className='section-hero'>

                    <div className='wrapper'>
                        <div className='container-hero relative'>
                            <div className='banner-tms01 text-center w-full mx-auto'>
                                <h6>Welcome to our site</h6>
                                <h1 className='hero-main-text'>Hosting and <span> oracle </span> <strong> Services </strong> with Hosts</h1>
                                <p className='sub-text mx-auto mb-11'>Decentralizes hosting and oracle services by aggregating on and off-chain data.</p>
                                <button type='button' onClick={handleClick} className='theme-color-btn brn-btn' id=''>Get Started</button>
                                <button type='button' onClick={handleClick} className='white-color-btn brn-btn' id=''>Try Demo</button>
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
                    {show && (
                        <div style={styles.notification}>
                        🔔 Feature coming soon!
                        </div>
                    )}
            </main>

        </>
    )
}

export default Home