import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CustomerProductCard() {
    const navigate = useNavigate();
    
    const handleClick = (e) => {
        e.preventDefault();
        navigate('/product-detail');
    }

    return (
        <div class="m-2 w-[300px] max-w-sm bg-white border hover:border-gray-900 hover:border-2">
            <div onClick={handleClick} className='cursor-pointer'>
                <div className=''>
                    <img class="h-full" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c388c571-5bdb-4283-aee6-99a2a7086da7/CBF+M+NK+REISSUE+SS+JSY+EX2.png" alt="product image" />
                </div>
                <div>
                    <div className='mx-2 my-3 text-center'>
                        <p class="text-base text-gray-900 dark:text-white">Brazil 1998 Reissue</p>
                        <p class="text-sm text-gray-500 dark:text-white">Áo</p>
                        <p class="text-base text-gray-900 dark:text-white">1100000 đồng</p>
                    </div>
                </div>
            </div>
        </div>

    );
}
