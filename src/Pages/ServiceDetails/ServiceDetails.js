import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import MyReviews from '../MyReviews/MyReviews';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import AllReviews from '../MyReviews/AllReviews';
// import { PhotoProvider, PhotoView } from 'react-photo-view';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceDetails = () => {
  const services = useLoaderData();
  const { user } = useContext(AuthContext)
  const { _id, img, price, serviceName, details, rating } = services;

  const handlePlaceReview = event => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.name.value}`;
    const email = user?.email || 'unregistered';
    const imgUrl = form.imgUrl.value
    const reviewMsg = form.reviewMsg.value

    const myreview = {
      service: _id,
      serviceName: serviceName,
      price,
      customer: name,
      email,
      imgUrl,
      reviewMsg
    }
    fetch('https://quick-eat-server.vercel.app/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(myreview)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          toast.success('Review added', { autoClose: 3000 })
          form.reset();
        }
        console.log(data)
      })
      .catch(err => console.error(err))

  }
  return (
    <div className="hero w-full  ">
      <div className=" gap-20 grid md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">

          <div className="card hero-content w-full bg-base-100 shadow-xl">
            <PhotoProvider>
              <PhotoView src={img}>
                <figure className='h-1/2'><img className='h-1/2 w-1/2' src={img} alt="Shoes" /></figure>
              </PhotoView>
              <div className="card-body">
                <h2 className="card-title text-3xl font-semibold  ">{serviceName}</h2>
                <p className='text-xl '>
                  {details}

                </p>
                <div className='flex mb-2'>
                  <p className='text-2xl text-orange-600 font-semibold'>Price: $ {price}</p>
                  <p className='text-2xl text-gray-600 font-semibold'><div className='flex justify-end text-warning align-top'>{rating}<FaStar></FaStar><FaStar></FaStar><FaStarHalfAlt></FaStarHalfAlt> </div></p>
                </div>

                <div className="card-actions justify-end">
                  <button className="btn btn-block btn-warning bg-orange-600"><Link className='text-white  text-decoration-none'>Go to Checkout page</Link></button>
                </div>
              </div>
            </PhotoProvider>
          </div>

        </div>

        <div className='mt-6 px-10'>
          <form onSubmit={handlePlaceReview}>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
              <input name='name' type="text" placeholder="Name" className="input input-bordered w-full  " />
              <input name='imgUrl' type="text" placeholder="imgUrl" className="input input-bordered w-full " />
              <input name='email' type="text" placeholder="Email" className="input input-bordered w-full" />

            </div>
            <textarea name='reviewMsg' className="textarea textarea-bordered mt-2 w-full h-24" placeholder="Add Your Review" required></textarea>
            <input className='btn btn-warning bg-orange-600 text-white' type="submit" value="Add Review " />
          </form>
        </div>
      </div>

    </div>

  );
};

export default ServiceDetails;