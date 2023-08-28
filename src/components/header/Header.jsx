import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import {BiMenuAltRight} from 'react-icons/bi'

import './header.css'

const Header = () => {

    const [openedmenu, setOpenedmenu]=useState(false)


    const getmenustyes=(openedmenu)=>{
        if(document.documentElement.clientWidth <=800){
            return {right: !openedmenu && "-100%"}
        }
    }

    return (
        <>
            <div className="headercontainer">

                <div className='headerinsideconatiner'>
                    <img src="./logo.png" alt="" />

                    <div className='linksconatianer' style={getmenustyes(openedmenu)}>
                        <Link>Residencies</Link>
                        <Link> Our Values</Link>
                        <Link>Contact us </Link>
                        <Link>Get started</Link>
                        <button>contact</button>
                    </div>
                </div>

                <div className='menu-icon' onClick={()=>setOpenedmenu((prev)=> !prev)}>
                    <BiMenuAltRight size={30}/>
                </div>

            </div>
        </>
    )
}

export default Header
