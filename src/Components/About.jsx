import React from "react";
import image from "../assets/Images/pic1.webp"
import image1 from "../assets/Images/Pic2.jpeg"
import image2 from "../assets/Images/Pic3.jpg"
import image3 from "../assets/Images/Pic4.jpeg"
const About = () => {
  return (
    <div className="container mx-auto rounded-5xl my-5  ">
      <div className="grid md:grid-cols-4 gap-5 text-black">
        <div className="border p-5">
        <img className="w-full h-[300px] hover:scale-110 transition-transform duration-300 " src={image} alt="" />
          <h1 className="bg-[#040000ad] text-justify p-2 text-white ">

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quisquam impedit eaque veritatis corrupti non, itaque sapiente
            facilis corporis laborum eos laboriosam sit illo asperiores iure
            similique, cumque, officia voluptatibus ipsa tempora ipsum
            voluptatum? Illo consequuntur ullam error harum dignissimos, optio
            atque, itaque earum molestiae assumenda veritatis nesciunt suscipit
            qui.
          </h1>
        </div>
        <div className="border p-5">
           <img className="w-full h-[300px]  hover:scale-110 transition-transform duration-300 " src={image1} alt="" />
          <h1 className="bg-[#040000ad] text-justify p-2 text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quisquam impedit eaque veritatis corrupti non, itaque sapiente
            facilis corporis laborum eos laboriosam sit illo asperiores iure
            similique, cumque, officia voluptatibus ipsa tempora ipsum
            voluptatum? Illo consequuntur ullam error harum dignissimos, optio
            atque, itaque earum molestiae assumenda veritatis nesciunt suscipit
            qui.
          </h1>
        </div>
        <div className="border p-5">
          <img className="w-full h-[300px]  hover:scale-110 transition-transform duration-300 " src={image2} alt="" />
          <h1 className="bg-[#040000ad] text-justify p-2 text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quisquam impedit eaque veritatis corrupti non, itaque sapiente
            facilis corporis laborum eos laboriosam sit illo asperiores iure
            similique, cumque, officia voluptatibus ipsa tempora ipsum
            voluptatum? Illo consequuntur ullam error harum dignissimos, optio
            atque, itaque earum molestiae assumenda veritatis nesciunt suscipit
            qui.
          </h1>
        </div>
        <div className="border p-5 font-bold">
          <img className="w-full h-[300px] hover:scale-110 transition-transform duration-300 " src={image3} alt="" />
          <h1 className="bg-[#040000ad] text-justify p-2 text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quisquam impedit eaque veritatis corrupti non, itaque sapiente
            facilis corporis laborum eos laboriosam sit illo asperiores iure
            similique, cumque, officia voluptatibus ipsa tempora ipsum
            voluptatum? Illo consequuntur ullam error harum dignissimos, optio
            atque, itaque earum molestiae assumenda veritatis nesciunt suscipit
            qui.
          </h1>
        </div>
      </div>
      <br />
      
      <div className="grid md:grid-cols-4 gap-5 text-black">
        <div className="border p-5">
          <h1 className="bg-[#040000ad] text-justify p-2 text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quisquam impedit eaque veritatis corrupti non, itaque sapiente
            facilis corporis laborum eos laboriosam sit illo asperiores iure
            similique, cumque, officia voluptatibus ipsa tempora ipsum
            voluptatum? Illo consequuntur ullam error harum dignissimos, optio
            atque, itaque earum molestiae assumenda veritatis nesciunt suscipit
            qui.
          </h1>
        </div>
        <div className="border p-5">
          <h1 className="bg-[#040000ad] text-justify p-2 text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quisquam impedit eaque veritatis corrupti non, itaque sapiente
            facilis corporis laborum eos laboriosam sit illo asperiores iure
            similique, cumque, officia voluptatibus ipsa tempora ipsum
            voluptatum? Illo consequuntur ullam error harum dignissimos, optio
            atque, itaque earum molestiae assumenda veritatis nesciunt suscipit
            qui.
          </h1>
        </div>

        <div className="border p-5">
          <marquee behavior="" direction="">
            <h1 className="bg-[#040000ad] text-justify p-2 text-white ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto quisquam impedit eaque veritatis corrupti non, itaque
              sapiente facilis corporis laborum eos laboriosam sit illo
              asperiores iure similique, cumque, officia voluptatibus ipsa
              tempora ipsum voluptatum? Illo consequuntur ullam error harum
              dignissimos, optio atque, itaque earum molestiae assumenda
              veritatis nesciunt suscipit qui.
            </h1>
          </marquee>
        </div>
        <div className="border p-5 font-bold">
          <h1 className="bg-[#040000ad] text-justify p-2 text-white ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quisquam impedit eaque veritatis corrupti non, itaque sapiente
            facilis corporis laborum eos laboriosam sit illo asperiores iure
            similique, cumque, officia voluptatibus ipsa tempora ipsum
            voluptatum? Illo consequuntur ullam error harum dignissimos, optio
            atque, itaque earum molestiae assumenda veritatis nesciunt suscipit
            qui.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
