import React from 'react'
import './contact.css'
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'


const Contact = () => {
    return (
        <>
            <div className='contactcontainer'>
                <div className='contactConataineChild'>

                    <div className="leftpannelOfConatct">

                        <div className='upperpart'>
                            <span className='bestplaces'>Our Values</span>
                            <span className='popularResidencies'>Value We Give to you</span>
                            <span className='carddetail'>We always ready to providing best services for you <br /> We believe to good blace to live can make your life better</span>
                        </div>

                        <div className='contacatswaysdiv'>
                            <div className='contacatswaysdivpart1'>
                                <Contactboxes chatway="call" number="7827443304" iconss={ <MdCall size={ 25 } /> } />
                                <Contactboxes chatway="chat" number="7827443304" iconss={ <BsFillChatDotsFill size={ 25 } /> } />
                            </div>
                            <div className='contacatswaysdivpart2'>
                                <Contactboxes chatway="Video Call" number="7827443304" iconss={ <BsFillChatDotsFill size={ 25 } /> } />
                                <Contactboxes chatway="Message" number="7827443304" iconss={ <HiChatBubbleBottomCenter size={ 25 } /> } />
                            </div>
                        </div>

                    </div>
                    <div className="rightpannelOfconatct">
                    
                            <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;


const Contactboxes = ({ chatway, number, iconss }) => {
    return <>
        <div className='chatandmessagemobilediv'>
            <div className='insidedivofcall icons'>
                { iconss }
                <div className='spandivofcall'>
                    <span className='callandmessage'>{ chatway } </span>
                    <span className='contactways'>{ number } </span>
                </div>
            </div>
            <button>call now</button>
        </div>
    </>
}
