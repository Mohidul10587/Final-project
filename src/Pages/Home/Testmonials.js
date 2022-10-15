import React from 'react';
import quotes from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';


const Testmonials = () => {

    const reviews = [

        {
            _id: 1,
            name: 'Winson haerry',
            review: 'this is a reviews',
            location:'california',
            img: people1
        },

        {
            _id: 2,
            name: 'Winson haerry',
            review: 'this is a reviews',
            location:'california',
            img: people2
        },

        {
            _id: 3,
            name: 'Winson haerry',
            review: 'this is a reviews',
            location:'california',
            img: people3
        }
    ]

    return (
        <div className='mt-24'>
            <div className='flex justify-between'>
                <div >
                    <h1 className='text-primary font-bold text-xl'>Testimonial</h1>
                    <h1 className='text-3xl '>What Our Patients Says</h1>
                </div>
                <div className='w-32'>
                    <img src={quotes} alt="" />
                </div>
            </div>

            <div className='grid grig-cols-1 lg:grid-cols-3 gap-4 mt-4 '>
                {reviews.map(review => <Review key={review._id} review={review}></Review>)}


            </div>
        </div>
    );
}

export default Testmonials;
