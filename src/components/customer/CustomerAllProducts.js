import React from 'react';
import CustomerProductCard from './CustomerProductCard'

export default function CustomerAllProducts() {
    return (
        <div className='m-4 mx-auto container'>
            <div className='my-5 flex justify-center'>
                <div className='w-[500px]'>
                    <label for="search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Tìm kiếm</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="search" class="block w-full p-4 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50" placeholder="Nhập tên sản phẩm" required />
                        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-black hover:bg-gray-800 font-medium uppercase rounded-lg text-sm px-4 py-2 ">Tìm kiếm</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-wrap justify-center'>
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
                <CustomerProductCard />
            </div>
        </div>
    );
}