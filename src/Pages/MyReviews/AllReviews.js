import React from 'react';

const AllReviews = ({ review, handleDelete, handleStatusUpdate }) => {
    const { _id, imgUrl, email, reviewMsg, customer, rating, status } = review;

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='btn btn-ghost'>X</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            <img className='w-20' src={imgUrl} alt='' />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm "></div>
                    </div>
                </div>
            </td>
            <td>
                {email}
                <br />
                {/* <span className="badge badge-ghost badge-sm">${reviewMsg}</span> */}
            </td>
            <td>{reviewMsg}</td>
            <th>
                <button
                    onClick={() => handleStatusUpdate(_id)}
                    className="btn btn-ghost btn-xs">{status ? status : 'Update'}</button>
            </th>
        </tr>
    );
};

export default AllReviews;