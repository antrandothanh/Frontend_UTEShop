import React from 'react';
import CustomerProductInCart from './CustomerProductInCart';

export default function CustomerCart() {
    return (
        <div className='my-4 mx-96'>
            <div className='mb-5'>
                <p className='font-bold text-2xl'>Giỏ hàng của tôi</p>
            </div>
            <div className='flex'>
                <div className='w-1/2'>
                    <CustomerProductInCart />
                    <CustomerProductInCart />
                    <CustomerProductInCart />
                </div>
                <div className='w-[300px] ml-[100px]'>
                    <div className='mb-5'>
                        <p className='text-3xl font-semibold'>Bảng tóm tắt</p>
                    </div>
                    <div className='grid grid-cols-2 items-center text-base'>
                        <div>
                            Tổng tiền
                        </div>
                        <div className='flex justify-end'>
                            1100000 <span className='underline'>đ</span>
                        </div>
                    </div>
                    <hr className='my-5' />
                    <div>
                        <button
                            type="button"
                            class="text-white bg-gray-900 hover:bg-gray-800 font-medium text-lg uppercase w-full px-5 py-4 me-2 mb-2 ">
                            Thanh toán
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}