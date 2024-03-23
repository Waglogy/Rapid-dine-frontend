import React from 'react'

function Card() {
    return (
        <>
            <div className='flex max-w-xl bg-orange-300 h-44 my-[3vh] mx-auto rounded-l-full content-normal items-center'>
                <div className='w-[33%] mx-auto'>
                    <img src="pizza.png" alt="" srcset="" />
                </div>
                <div className=''>
                    <div className="text text-center flex flex-col align- ">
                        <p className='text-amber-900 font-bold text-3xl'>Mushroom pizza</p>
                        <p className='text-red-600'>Delicious pizza with mushroom and
                            savory sausage
                        </p>
                    </div>
                    <div className="max-w-[100%] flex justify-around">
                        <button className='border-2 rounded-xl p-3 border-red-700 w-24'>price</button>
                        <button className='border-2 p-3 border-red-700 w-24 bg-red-700 rounded-xl'>₹300</button>
                    </div>
                </div>
                <div className='w-[10%] m-auto'>add to cart</div>
            </div>
        </>
    )
}

export default Card