import React from 'react';
const Navbar = () => {
    return (
        <div className='bg-black'>
            <div className='container mx-auto rounded-5xl my-5 '>
            <div className='flex justify-between p-3 cursor-pointer  text-white'>
                <h1 className='hover:bg-[#a1f585] p-2 rounded-2xl duration-300'>Hosain</h1>

                <ul className='flex gap-5   '>
                    <li className='hover:bg-[rgb(246,246,246)]  p-2 rounded-2xl duration-300'>Home</li>
                    <li className='hover:bg-[#a1f585] p-2 rounded-2xl duration-300'>Porjects</li>
                    <li className='hover:bg-[#a1f585] p-2 rounded-2xl duration-300'>Contacs</li>
                    <li className='hover:bg-[#a1f585] p-2 rounded-2xl duration-300'>Resume</li>
                  
                </ul>
            </div>
        </div>
        </div>
    );
};

export default Navbar;