import React, { useState } from 'react';

export default function CustomerProductInCart() {
    const [quantity, setQuantity] = useState(1);

    const handleIncreaseQuantity = async (e) => {
        setQuantity(quantity + 1);
    }

    const handleDecreaseQuantity = async (e) => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div class="mb-10 flex bg-white border border-gray-900 md:flex-row md:max-w-xl">
            <img class="object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c388c571-5bdb-4283-aee6-99a2a7086da7/CBF+M+NK+REISSUE+SS+JSY+EX2.png" alt="hình áo" />
            <div class="p-5">
                <div className='mb-5'>
                    <p className='text-base '>Brazil 1998 Reissue</p>
                    <p className='text-base mb-3'>1100000<span className='underline'>đ</span></p>
                    <p className='text-base uppercase'>Size: XXL</p>
                </div>
                <div>
                    <div class="max-w-xs mx-auto">
                        <label for="quantity-input" class="block mb-2 text-base text-gray-900">Choose quantity:</label>
                        <div class="relative flex items-center max-w-[8rem]">
                            <button onClick={handleDecreaseQuantity} type="button" id="decrement-button" class="bg-gray-100 hover:bg-gray-200 border border-gray-300 p-3 h-11 ">
                                <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16" />
                                </svg>
                            </button>
                            <input value={quantity} onChange={(e) => setQuantity(e.target.value)} type="text" class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm block w-full py-2.5" readOnly />
                            <button onClick={handleIncreaseQuantity} type="button" id="increment-button" data-input-counter-increment="quantity-input" class="bg-gray-100 hover:bg-gray-200 border border-gray-300 p-3 h-11 ">
                                <svg class="w-3 h-3 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        type="button"
                        class="text-white bg-gray-900 hover:bg-gray-800 font-medium text-sm uppercase px-4 py-3 me-2 mt-3 transform hover:scale-110 transition duration-200">
                        Xóa
                    </button>
                </div>
            </div>
        </div>
    );
}