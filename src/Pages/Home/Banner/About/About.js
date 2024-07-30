import React from 'react';
import person from '../../../../assets/images/about/person.jpg'
import parts from '../../../../assets/images/about/pizza.jpg'

const About = () => {
    return (
        <div className="hero my-20">
        <div className="hero-content flex-col lg:flex-row">
         <div className='w-1/2 relative'>
         <img src={person}alt='' className="w-4/5 h-full  rounded-full shadow-2xl" />
         <img src={parts} alt='' className=" absolute right-5 top-1/2 w-2/4 border-8 rounded-full shadow-2xl" />
         </div>
          <div className=' w-1/2'>
            <p className=' text-2xl text-orange-500 font-bold'> Why people choose us</p>
            <h1 className="my-5 text-4xl font-bold">
               Convenient ,Quick
            <br/> & Freshly Picked 
            <br/> A wide range of products</h1>
            <p className="py-6">No waiting in traffic, no haggling, no worries carrying groceries, they're delivered right at your door. </p>
           <p className="py-2">Our fresh produce is sourced every morning, you get the best from us. </p>
           <p className="py-2">With 4000+ Products to choose from, forget scouring those aisles for hours.</p>
            <button className="btn btn-warning">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;