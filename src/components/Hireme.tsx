import React from 'react';
import { CircularText } from './icon';
import Link from 'next/link';

const Hireme = () => {
    return (
        <div className="
            fixed
            top-4 right-4
            sm:top-auto sm:right-auto sm:left-8 sm:bottom-8
            md:left-10 md:bottom-10
            w-30 h-30 
            md:w-45 md:h-45
            flex items-center justify-center
            overflow-hidden
            z-50
        ">
            <div className="w-full h-full flex items-center justify-center relative">
                <CircularText className="animate-spin-slow w-full h-full" />
                <Link
                    href="mailto:lynn.orion19@gmail.com"
                    className="absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-16 h-16 rounded-full font-semibold hover:bg-light hover:text-dark"
                >
                    Hire Me
                </Link>
            </div>
        </div>
    );
};

export default Hireme;
