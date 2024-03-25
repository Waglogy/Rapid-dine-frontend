import React from 'react'

const Cart = (props) => {

    return (
        <>
            <div className={props.isVisible ? "visible" : "hidden"}>
                <div>
                    <img src="Cartpic.png" alt="" className='w-60 m-auto ' />
                </div>
                {/* card section for vewing and removing items from cart 
                For developer: needs to be fetched from API (rn its static) */}
                <div >

                    <div className='flex max-w-xl bg-[#F1E4C1] h-48 my-[3vh] mx-auto rounded-l-full content-normal items-center'>
                        <div className='w-[39%] mx-auto'>
                            <img src="pizza.png" alt="" />
                        </div>
                        <div className=''>
                            <div className="text text-left px-3 flex flex-col align- ">
                                <p className='text-amber-900 font-bold text-3xl'>Mushroom pizza</p>
                                <p className='text-red-600'>Delicious pizza with mushroom and
                                    savory sausage
                                </p>


                            </div>


                        </div>
                        {/* button for removing items from cart
                        for developer: non functional */}
                        <div className='w-20 h-16 m-auto w-15 bg-red-700 rounded-full flex'>
                            <div className=' w-8 h-2 m-auto bg-[#F1E4C1]'></div>
                        </div>
                    </div>
                    {/* button for add more content to cart */}
                    <div className='bg-red-700 h-32 max-w-[30rem] mx-auto flex justify-center items-center rounded-r-full' onClick={props.cartHandler}>
                        <button className='text-white text-3xl font-extrabold flex justify-evenly gap-10 items-center' >
                            <p className='underline'>Add More Items </p>
                            <img src="arrow.png" alt="" className='w-16'/>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart