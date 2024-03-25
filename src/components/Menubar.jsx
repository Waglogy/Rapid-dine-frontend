import React from 'react'
import { arr } from './constants'

const Menu = (props) => {

    return (
        <>
            <div className={props.isVisible ? "visible" : "hidden"}>
                <div className='h-40 w-auto pt-7'>
                    <div className='max-w-2xl h-24 mx-auto flex justify-around align-middle'>
                        {
                            arr.map((arr, i) => (<div id='redButton' onClick={() => props.onclickHandler(i)} key={i} className='bg-[#A80303] w-[15%] rounded-full pt-3'>
                                <img src={arr} alt="" className='aspect-[3/2] ' />
                            </div>

                            ))
                        }
                    </div>
                </div >
            </div>
        </>
    )
}

export default Menu
