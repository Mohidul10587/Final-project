import React from 'react';
import Button from '../Shared/Button';

const ContactForm = () => {
    return (
        <div className='text-center block mt-24'>
            <p>Contact Us</p>
            <p>Stay Connected Width Us</p>
            <div className='flex justify-center'>
                <div className='w-1/2'>
                    <input className='block border border-black my-2 rounded w-full pl-8' placeholder='Email' />
                    <input className='block border border-black my-2 rounded w-full pl-8' placeholder='Subject' />
                    <textarea className='block border border-black my-2 rounded w-full pl-8' placeholder='Your Massage' />
                    <div className='flex justify-center'><Button><input type='submit' value='Submit' /></Button></div>
                </div>
            </div>

        </div>
    );
}

export default ContactForm;
