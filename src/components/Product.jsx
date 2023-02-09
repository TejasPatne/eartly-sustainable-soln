import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { motion,useScroll } from 'framer-motion'
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiWhatsappFill } from 'react-icons/ri'
import { AiFillFacebook } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { AiFillTwitterCircle } from 'react-icons/ai'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

const Product = () => {
    const { scrollYProgress } = useScroll();
    const mySlides = [
        { image: "/pic1.webp" },
        { image: "/pic2.webp" },
        { image: "/pic3.webp" },
        { image: "/pic4.webp" },
        { image: "/pic5.webp" },
        { image: "/pic6.webp" },
    ];
    return (
        <div>
            <div className="flex flex-row space-between mx-5 mb-10 text-lg">
                <div className='w-1/2'>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        navigation={true}
                        cssMode={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
                        autoplay={{ delay: 4500, disableOnInteraction: false }}
                        loop={true}
                        className="mySwiper z-auto"
                    >
                        {mySlides.map((Slide, idx) => (
                            <>
                                <SwiperSlide key={idx}>
                                    <motion.img
                                        whileHover={{
                                            scale: 1.2
                                        }}
                                        className={"grid-cols-2 hidden px-4 md:inline"}
                                        src={Slide.image}
                                        alt="slide"
                                    />
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                    <h4 className='text-center mt-10 italic text-rose-400'>Scroll down</h4>
                </div>
                <div className='w-1/2 mx-8 space-y-5'>

                    <h1 className='text-4xl'>Sustainability Starter Kit</h1>
                    <h3 className='text-rose-500 text-xl'>This starter kit is all you need to start the revolution. </h3>

                    {/* Add to cart section */}
                    <div className='space-y-4'>
                        <h2 className='text-3xl text-gray-600'>€10.99</h2>
                        <button className='bg-yellow-300 w-10 h-10 hover:bg-yellow-400 rounded-sm'>-</button>
                        <input className='w-5 text-center mx-2' type="text" value={1} />
                        <button className='bg-yellow-300 w-10 h-10 hover:bg-yellow-400 rounded-sm'>+</button>

                        <div className='my-2'>
                            <button className='bg-gray-500 w-40 mr-4 p-2 text-white hover:bg-gray-800'>Add to Cart</button>
                            <button className='bg-green-500 w-40 mr-4 p-2 text-white hover:bg-green-700'>Buy Now</button>
                        </div>
                        <div className='flex flex-row space-x-2 my-4'>
                            <a href=""><RiWhatsappFill /></a>
                            <a href=""><AiFillFacebook /></a>
                            <a href=""><BsPinterest /></a>
                            <a href=""><AiFillTwitterCircle /></a>
                        </div>
                    </div>

                    <motion.ul style={{ opacity: scrollYProgress }}>
                        <h3>consist of: </h3>
                        <div className='ml-4'>
                            <li>2 Bamboo Straws</li>
                            <li>1 Plant Based Reusable Cup with 2 lids</li>
                            <li>1 Natural Loofah</li>
                            <li>1 box of 50 Bamboo Cotton Eartips</li>
                            <li>1 Bamboo Toothbrush</li>
                        </div>
                    </motion.ul>


                    {/* About product */}
                    <motion.div style={{ opacity: scrollYProgress }}>
                        <h3>Features</h3>
                        <ul>
                            <div className='ml-4'>
                                <li>Govt Approved, Tested, and approved in TUV Rhineland, Germany</li>
                                <li>100% recyclable and non-toxic</li>
                                <li>Leak-Proof</li>
                                <li>Odorless tasteless and doesn’t react with hot beverages</li>
                                <li>Lightweight</li>
                                <li>Microwavable</li>
                            </div>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Product