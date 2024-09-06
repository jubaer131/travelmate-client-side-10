import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { SlSocialInstagram } from 'react-icons/sl';
import { FaFacebookF } from "react-icons/fa";
import { SiWhatsapp } from 'react-icons/si';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className='max-sm:hidden flex  items-center w-[82%] mx-auto p-2 '>

            <div className='flex items-center gap-8 w-[45%]'>
                <h1 className='text-white'> Phone: (012)-345-6789</h1>
                <h1 className='text-white'> Mail: tourntravel@testmail.com</h1>
            </div>
            <div>
                <Marquee className='text-white text-sm'>

                    <p> Get 20% off guided tours this month !</p>

                </Marquee>
            </div>
            <div className='flex justify-end items-center gap-8 w-[30%]'>
                <h1 className='text-white'><Link><SiWhatsapp /></Link> </h1>
                <h1 className='text-white'><Link><FaLinkedinIn /> </Link></h1>
                <h1 className='text-white'><Link><SlSocialInstagram /></Link></h1>
                <h1 className='text-white'><Link><FaFacebookF /></Link></h1>
            </div>
        </div>

    );
};

export default Header;