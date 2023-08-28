import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footercontainer">
                <div className="leftfooterpannel">
                    <img src="./logo2.png" alt="" />
                    <span className='footerText'>Subscribe and find super attractive price quotes from us. <br />Find your residence soon</span>
                </div>
                <div className="rigthtfooterpannel">
                    <span className='popularResidencies'>Information</span>
                    <span className='carddetail'>145, plot no.24 delhi</span>
                    <div className='linksconatianeroffooter'>
                        <Link>Property</Link>
                        <Link> Services</Link>
                        <Link>Values</Link>
                        <Link>About us</Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer
