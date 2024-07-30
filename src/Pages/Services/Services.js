import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServicesCard from './ServicesCard';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://quick-eat-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center mb-2'>
                <h2 className='text-5xl font-semibold text-orange-600'>Our Services</h2>
                <p>Orders your healthy & desire food..</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServicesCard
                        key={service._id} service={service}
                    ></ServicesCard>)
                }
            </div>
            <div className='text-center mx-2 my-4'> <button className="btn btn-warning bg-orange-500"><Link className='text-white  text-decoration-none' to='/services'>See All</Link></button></div>
        </div>
    );
};

export default Services;