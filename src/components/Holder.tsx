"use client" ; 
import React from 'react' ; 


type LayoutProps = {
    children: React.ReactNode;
    className?: string;
}

const Holder = ({ children, className="" }: LayoutProps) => {

    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark dark:text-light  ${className}`}>
            {children}
        </div>
    );

}

export default Holder;