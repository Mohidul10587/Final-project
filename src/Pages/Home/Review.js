import React from 'react';

const Review = ({review}) => {
    return (
    <div className='border border-black rounded-lg p-5'>

    <p>this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph this is a paragraph</p>
    <div className='flex items-center mt-3'>
        <img className='w-16' src={review.img} alt="" />
        <div className='ml-2'>
            <p>{review.name}</p>
            <p>{review.location}</p>
        </div>
    </div>
</div>
    );
}

export default Review;
