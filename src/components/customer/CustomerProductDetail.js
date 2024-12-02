import React from 'react';

export default function CustomerProductDetail() {
    return (
        <div className='m-4 mx-auto container'>
            <div className='mb-2'>
                <img class="h-auto max-w-lg mx-auto" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c388c571-5bdb-4283-aee6-99a2a7086da7/CBF+M+NK+REISSUE+SS+JSY+EX2.png" alt="image description" />
            </div>
            <div className='mb-2'>
                <p class="text-xl underline text-gray-500 mb-3">Áo</p>
                <p class="text-5xl font-bold text-gray-900 mb-3">Brazil 1998 Reissue</p>
                <p class="text-xl font-semibold text-gray-900 mb-3">1100000<span className='underline'>đ</span></p>
            </div>
            <div className='w-[500px] mb-2'>
                <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex">
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                        <div class="flex items-center ps-3">
                            <input id="size-1" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label class="w-full py-3 ms-2 text-sm font-medium text-gray-900">M</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div class="flex items-center ps-3">
                            <input id="size-2" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label class="w-full py-3 ms-2 text-sm font-medium text-gray-900">L</label>
                        </div>
                    </li>
                    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r">
                        <div class="flex items-center ps-3">
                            <input id="size-3" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label class="w-full py-3 ms-2 text-sm font-medium text-gray-900">XL</label>
                        </div>
                    </li>
                    <li class="w-full">
                        <div class="flex items-center ps-3">
                            <input id="size-4" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 " />
                            <label class="w-full py-3 ms-2 text-sm font-medium text-gray-900">XXL</label>
                        </div>
                    </li>
                </ul>

            </div>
            <div className='flex mb-10'>
                <div>
                    <button
                        type="button"
                        class="text-white bg-gray-900 hover:bg-gray-800 font-medium text-2xl uppercase px-5 py-4 me-2 mb-2 ">
                        Thêm vào giỏ hàng
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        class="text-white bg-white hover:bg-red-200 font-medium border border-black text-sm px-5 py-2.5 me-2 mb-2 ">
                        <img className='w-11' src='images/heart.jpg' />
                    </button>
                </div>
            </div>
            <div class="inline-flex items-center justify-center w-full mb-10">
                <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
                    <svg class="w-4 h-4 text-gray-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                    </svg>
                </div>
            </div>
            <div className=''>
                <div className='text-center mb-5'>
                    <p className='text-4xl font-semibold'>Thông tin chi tiết</p>
                </div>
                <div className='flex justify-center'>
                    <div className='text-center max-w-[700px]'>
                        <p className='text-lg'>Chiếc áo đấu Reissue này trông như vừa được lấy thẳng từ kho lưu trữ. Với màu sắc đặc trưng,
                            logo thêu và các chi tiết cổ điển khác, bản làm lại từng mũi khâu này tôn vinh những chiếc áo đấu mang tính biểu tượng mà Nike đã làm cho đội tuyển quốc gia Brazil năm 1998. Nó cũng tôn vinh một trong những cầu thủ vĩ đại nhất mọi thời đại, người có sức mạnh, tốc độ và kỹ năng đã làm cả thế giới bóng đá chao đảo cùng năm đó.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}