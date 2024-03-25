import React, { useState, useEffect, Component } from 'react'
import { titleList, itemController } from './constants'
function Card(props) {
    const [quantity, setQuantity] = React.useState(1)
    const addQuantity = () => {
        setQuantity((prev) => ++prev)
    }
    const subtractQuantity = () => {
        if (quantity > 1) {
            setQuantity((prev) => --prev)
        }
    }
    return (
        <>
            <div className={props.isVisible ? "visible" : "hidden"}>
                {/* tilte start */}
                <div className='font-bold text-3xl flex max-w-xl m-auto'>
                    <img src={props.menuData.titleImg} alt="" className='max-w-32 rounded-full ml-5 bg-black text-left ' />
                    <p className='my-auto px-5'>{props.menuData.titleText}</p>
                </div>

                {/* card component start */}
                <div >

                    <div className='flex max-w-xl bg-[#F1E4C1] h-48 my-[3vh] mx-auto rounded-l-full content-normal items-center'>
                        <div className='w-[33%] mx-auto'>
                            <img src="pizza.png" alt="" />
                        </div>
                        <div className=''>
                            <div className="text text-left px-3 flex flex-col align- ">
                                <p className='text-amber-900 font-bold text-3xl'>Mushroom pizza</p>
                                <p className='text-red-600'>Delicious pizza with mushroom and
                                    savory sausage
                                </p>


                            </div>
                            <div className="max-w-[100%] flex justify-around mt-3">
                                <div className='border-2  border-red-700 flex w-24 justify-around items-center'>

                                    <button onClick={subtractQuantity}>-</button>
                                    <p>{quantity}</p>
                                    <button onClick={addQuantity}>+</button>
                                </div>
                                <button className='border-2 p-3 border-red-700  bg-red-700 w-24 '>₹300</button>
                            </div>

                        </div>
                        <div className='w-[10%] m-auto w-15'>
                            <img src="addTocart.png" alt="" className='mx-auto w-9' />
                        </div>
                    </div>
                </div>
                <div className='max-w-32 h-32 rounded-full bg-red-700  sticky left-[80%] bottom-5 '>
                    <button className='w-full  m-auto h-full rounded-full flex justify-center items-center' onClick={props.cartHandler}>
                        <img src="cart.png" alt="" className=' w-16' />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Card