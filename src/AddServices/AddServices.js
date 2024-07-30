import React from 'react';
import { toast } from 'react-toastify';
const AddServices = () => {
    const handleAddServices = event => {
        event.preventDefault()
        const form = event.target;
        const serviceName = form.serviceName.value;
        const Price = form.Price.value;
        const img = form.img.value;
        const details = form.details.value;
        const service = { serviceName, Price, img, details }
        fetch('https://quick-eat-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)


        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success('Successfully Added', { autoClose: 3000 })
            })

    }
    return (
        <div className='mt-8 px-20 mx-10'>

            <form onSubmit={handleAddServices}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name='serviceName' type="text" placeholder="Title" className="input input-bordered w-full  " />
                    <input name='Price' type="text" placeholder="Price" className="input input-bordered w-full " />
                    <input name='img' type="text" placeholder="imgUrl" className="input input-bordered w-full " />
                </div>
                <textarea name='details' className="textarea textarea-bordered mt-2 w-full h-24" placeholder="Description" required></textarea>
                <input className='btn btn-warning bg-orange-600 text-white my-4' type="submit" value="Add Review " />
            </form>
        </div>
    );
};

export default AddServices;