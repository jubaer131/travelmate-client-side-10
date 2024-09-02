import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialInstagram } from 'react-icons/sl';
import { FaFacebookF } from "react-icons/fa";
import { SiWhatsapp } from 'react-icons/si';
const Header = () => {
    return (

        <div className='max-sm:hidden flex justify-between items-center w-[82%] mx-auto p-2'>

            <div className='flex items-center gap-8'>
                <h1 className='text-white'> Phone: (012)-345-6789</h1>
                <h1 className='text-white'> Mail: tourntravel@testmail.com</h1>
            </div>
            <div className='flex items-center gap-8'>
                <h1 className='text-white'><SiWhatsapp /> </h1>
                <h1 className='text-white'><FaLinkedinIn /> </h1>
                <h1 className='text-white'><SlSocialInstagram /></h1>
                <h1 className='text-white'><FaFacebookF /></h1>
            </div>
        </div>

    );
};

export default Header;