import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#77cd5b] container mx-auto p-5 flex justify-between '>
           <div>
            <h1>
                Our Address : <br/> Kuril Chowrasta, Vatara, Dhaka - 1229
            </h1>
           </div>
           <div>
            <ul className=' flex gap-5 '>
                <li>
                    fecebook
                </li>
                <li>
                    Youtube
                </li>
                <li>
                    WhatsUp
                </li>
                <li>
                    Telegram
                </li>
            </ul>
           </div>
        </div>
    );
};

export default Footer;