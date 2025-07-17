import React from 'react';
const Navbar = () => {
    return (
        <div className='container mx-auto rounded-5xl my-5 '>
            <div className='flex justify-between p-3 cursor-pointer bg-[#77cd5b] '>
                <h1 className='hover:bg-amber-300 p-2 rounded-2xl duration-300'>Hosain</h1>

                <ul className='flex gap-5   '>
                    <li className='hover:bg-[#a1f585] p-2 rounded-2xl duration-300'>Home</li>
                    <li className='hover:bg-300 p-2 rounded-2xl duration-300'>About</li>
                    <li className='hover:bg-amber-300 p-2 rounded-2xl duration-300'>Porjects</li>
                    <li className='hover:bg-amber-300 p-2 rounded-2xl duration-300'>Contacs</li>
                    <li className='hover:bg-amber-300 p-2 rounded-2xl duration-300'>Resume</li>
                  
                </ul>
            </div>
        </div>
    );
};

export default Navbar;