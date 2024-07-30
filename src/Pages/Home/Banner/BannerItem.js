import React from 'react';
import './BannerItem.css'

const BannerItem = ({slide}) => {
    const {image,id,prev,next}=slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
        <div className='carousel-img'>
        <img src={image} alt='' className="w-full " />
        </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-14  top-1/4 ">
          <h1 className='text-xl text-xs sm:text-xl md:text-3xl lg:text-6xl font-bold text-white'>
           Delivered<br/>
           in 30 minutes <br/>
           Servicing
          </h1>
         </div>
         <div className="absolute w-2/5 flex justify-end transform -translate-y-1/2 left-14  top-1/2 ">
         <p className='md:text-sm text-sm text-xs text-xl lg:text-xl text-white'>The best services from us and best healthy foodies for you and your family...</p>
         </div>
         <div className="absolute w-2/5 flex justify-start transform -translate-y-1/2 left-14  top-3/4 ">
         <button className="btn btn-warning mr-5">Our Services</button>
         <button className="btn btn-outline btn-warning">Orders Now</button>
         </div>
         <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
           <a href={`#slide${prev}`} className="btn btn-circle mr-5 ">❮</a> 
           <a href={`#slide${next}`} className="btn btn-circle">❯</a>
         </div>
       </div> 
    );
};

export default BannerItem;