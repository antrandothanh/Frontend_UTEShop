import React, { useState } from 'react';

export default function CustomerSignUp() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className='m-4 flex justify-center'>
            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
                <form class="space-y-6" action="#">
                    <h5 class="text-xl font-medium text-gray-900 ">Đăng nhập</h5>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Mật khẩu</label>
                        <input type={showPassword ? 'text' : 'password'} name="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " required />
                    </div>
                    <div class="flex items-start">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                                <input id="remember" checked={showPassword} onChange={() => setShowPassword(!showPassword)} type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 " required />
                            </div>
                            <label for="remember" class="ms-2 text-sm font-medium text-gray-900 ">Hiện mật khẩu</label>
                        </div>
                    </div>
                    <button type="submit" class="w-full text-white bg-black hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center uppercase">Đăng nhập</button>
                    <div class="text-sm font-medium text-gray-500 ">
                        Chưa đăng ký? <a href="#" class="text-black hover:underline">Tạo tài khoản</a>
                    </div>
                </form>
            </div>
        </div>
    );
}