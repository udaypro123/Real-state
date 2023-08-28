import React, { Fragment } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton,
    AccordionItemState
} from 'react-accessible-accordion';

import "react-accessible-accordion/dist/fancy-example.css"
import { MdOutlineArrowDropDown } from 'react-icons/md';

import './value.css'
import data from '../../utils/accordion'

const Value = () => {
    return (
        <>
            <div className='Valueconatiner'>

                <div className='bodyRightSection'>
                    <img src="./value.png" alt="" />
                </div>

                <div className='valueLeftSection'>
                    <div className='upperpart'>
                        <span className='bestplaces'>Our Values</span>
                        <span className='popularResidencies'>Value We Give to you</span>
                        <span className='carddetail'>We always ready to providing best services for you <br /> We believe to good blace to live can make your life better</span>
                    </div>

                    <Accordion
                        allowMultipleExpanded={ false }
                        preExpanded={ [0] }>
                        {
                            data.map((item, i) => {
                                return <Fragment key={ i }>
                                    <AccordionItem className='accordionitem' uuid={ i }>
                                        <AccordionItemHeading>
                                            <AccordionItemButton className='accordionbutton'>
                                            <div className='icon'>{ item.icon }</div>
                                            <span className='popularResidencies'>{ item.heading }</span>

                                            <div className='icon'>
                                            <MdOutlineArrowDropDown size={ 20 } />
                                            </div>

                                            </AccordionItemButton>
                                        </AccordionItemHeading>
                                        <AccordionItemPanel>
                                            <span>{item.detail}</span>
                                        </AccordionItemPanel>
                                    </AccordionItem>
                                </Fragment>
                            })
                        }
                    </Accordion>
                </div>

            </div>
        </>
    )
}

export default Value
