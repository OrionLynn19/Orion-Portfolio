import React from 'react' ; 
import Holder from './Holder';
import Link from 'next/link' ; 

const Footer = () => {
    return (
        <footer className='w-full    font-medium text-lg  ' > 
            <div className='py-4 flex items-center justify-between p-32' >
                <span> {new Date().getFullYear()}&copy; All Rights Reserved</span>
                <div className="flex items-center"> 
                    Built by&nbsp; <span className="underline underline-offset-2" >Orion Lynn</span>
                </div> 
                <Link href="/" >Hello</Link>
            </div>
        </footer> 

    ) 

}

export default Footer  ; 