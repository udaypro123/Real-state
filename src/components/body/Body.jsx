import React from 'react'
import './body.css'
import CountUp from 'react-countup';

const Body = () => {
    return (
        <>
            <div className='bodyconatiner'>

                <div className='bodyLeftSection'>
                    <div className='headingDIscover'>
                        <h3>Discover <br /> Most Suitable <br /> Property</h3>
                        <div className='orangecolor-div'>

                        </div>
                    </div>

                    <div className='para1ofbody'>                 <span>  find the variety of property that suit you very easily</span>
                        <span>
                            forget all dificcullties in finding residence for you
                        </span>
                    </div>

                    <div className='inputSearch'>
                        <img src="https://e7.pngegg.com/pngimages/230/805/png-clipart-blue-google-map-arrow-icon-computer-icons-location-icon-miscellaneous-blue.png" alt="loc" />
                        <input type="text" placeholder="search...." />
                        <button>search</button>
                    </div>

                    <div className='propertyMemeber'>

                        <div className='spanPart1'>
                            <span>
                                <CountUp start={ 8500 } end={ 9000 } duration={ 4 }>8000 </CountUp><span>+</span>
                            </span>
                            <p className='sapnttitle'>premium products</p>
                        </div>
                        <div className='spanPart1'>
                            <span>
                                <CountUp start={ 1950 } end={ 2000 } duration={ 4 }>2000 </CountUp><span>+</span>
                            </span>
                            <p className='sapnttitle'>Happy Customer</p>
                        </div>
                        <div className='spanPart1'>
                            <span>   <CountUp end={ 28 }>28</CountUp>  <span>+</span></span>
                            <p className='sapnttitle'>Award Winning</p>
                        </div>

                    </div>
                </div>


                <div className='bodyRightSection'>
                    <img src="./hero-image.png" alt="" />
                </div>

            </div>
        </>
    )
}

export default Body
