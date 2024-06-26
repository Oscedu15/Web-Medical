import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import Img1 from "../assets/img/doc1.png"
import Img2 from "../assets/img/doc2.png"
import Img3 from "../assets/img/doc3.png"
import Img4 from "../assets/img/doc4.png"
import Img5 from "../assets/img/doc5.png"
import Img6 from "../assets/img/doc6.png"

const Doctors = () => {

  const data = [
    {
      img: Img1,
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: Img2,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: Img3,
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
    },
    {
      img: Img4,
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
    },
    {
      img: Img5,
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      img: Img6,
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
    },
  ];

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive : [
      {
        breakpoint: 1023,
        settings : {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings : {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings : {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const slider = useRef(null);

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">Our Doctors</h1>
          <p className="mt-2 text-center lg:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Amet rerum iure, ipsa voluptate cupiditate assumenda?</p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
          onClick={() => slider.current.slickPrev()}>
            <FaArrowLeft size={25}/>
          </button>
          <button className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
          onClick={() => slider.current.slickNext()}>
            <FaArrowRight size={25}/>
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data?.map(({name, specialties, img, index}) => (
            <div key={index} className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer">
              <div>
                <img src={img} alt="img" className="h-56 rounded-t-xl w-full" />
              </div>

              <div className="flex flex-col justify-center items-center">
                <h1 className="font-semibold text-xl pt-4">{name}</h1>
                <h3 className="pt-2">{specialties}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    
  );
};

export default Doctors