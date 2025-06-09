import React, { useState } from 'react'

import { AlignJustify } from 'lucide-react'


function Navbar() {


    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <>
            <header>
                <nav className=' shadow-sm'>
                    <div className='wrapper'>
                        <div className='navBar flex items-center justify-between'>
                            <h2 className='navLogo'>Hosts</h2>
                            <div className={`navLink flex justify-between ${isMenuOpen ? 'showManu' : 'hideManu'}`}>
                                <ul className=' flex items-center'>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Pages</li>
                                    <li>Pricing</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                                <div className='m-nav-btn-hide'>
                                    <button className='secondary-theme-btn'>Sign up</button>
                                    <AlignJustify className='m-theebar' onClick={handleNavMenu} />
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar