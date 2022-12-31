import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesGrid = () => {
    return (
        <div className="w-11/12 mx-auto p-5">
            <div>
                <h2 className="text-xl text-gray-500">Let’s make a quick start today</h2>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
                    Our top visited categories
                </h2>
                <p className="text-gray-500 text-center text-lg md:px-40">
                    Accusamus et iusidio dignissimos ducimus blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores etmquasa molestias
                    epturi sint occaecati cupiditate non providente mikume.
                </p>
            </div>
            <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-5 py-5'>
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="h-96 w-80">
                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-xl font-bold text-white">Science</h1>
                        <h3 class="font-dmserif text-sm font-bold text-white">Total Tutions: 20</h3>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We have 20 tutions for you. Don't missed out to take them.</p>
                        <Link to='/signup'>
                            <button className="text-white border border-white hover:border-secondary  px-2 py-1 hover:bg-gradient-to-r from-secondary to-primary hover:text-white">Read More</button>
                        </Link>
                    </div>
                </div>
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="h-96 w-80">
                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-xl font-bold text-white">Commerce</h1>
                        <h3 class="font-dmserif text-sm font-bold text-white">Total Tutions: 20</h3>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We have 20 tutions for you. Don't missed out to take them.</p>
                        <Link to='/signup'>
                            <button className="text-white border border-white hover:border-secondary  px-2 py-1 hover:bg-gradient-to-r from-secondary to-primary hover:text-white">Read More</button>
                        </Link>
                    </div>
                </div>
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="h-96 w-80">
                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-xl font-bold text-white">Humanities</h1>
                        <h3 class="font-dmserif text-sm font-bold text-white">Total Tutions: 20</h3>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We have 20 tutions for you. Don't missed out to take them.</p>
                        <Link to='/signup'>
                            <button className="text-white border border-white hover:border-secondary  px-2 py-1 hover:bg-gradient-to-r from-secondary to-primary hover:text-white">Read More</button>
                        </Link>
                    </div>
                </div>
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="h-96 w-80">
                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-xl font-bold text-white">ICT</h1>
                        <h3 class="font-dmserif text-sm font-bold text-white">Total Tutions: 20</h3>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We have 20 tutions for you. Don't missed out to take them.</p>
                        <Link to='/signup'>
                            <button className="text-white border border-white hover:border-secondary  px-2 py-1 hover:bg-gradient-to-r from-secondary to-primary hover:text-white">Read More</button>
                        </Link>
                    </div>
                </div>
                <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                    <div class="h-96 w-80">
                        <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1502675135487-e971002a6adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80" alt="" />
                    </div>
                    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                    <div class="absolute inset-0 flex translate-y-[40%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                        <h1 class="font-dmserif text-xl font-bold text-white">English</h1>
                        <h3 class="font-dmserif text-sm font-bold text-white">Total Tutions: 20</h3>
                        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">We have 20 tutions for you. Don't missed out to take them.</p>
                        <Link to='/signup'>
                            <button className="text-white border border-white hover:border-secondary  px-2 py-1 hover:bg-gradient-to-r from-secondary to-primary hover:text-white">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesGrid;