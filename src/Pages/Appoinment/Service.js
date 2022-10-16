import React from 'react';

const Service = ({ service, setTreatment }) => {

    const { name, slots } = service
    return (
        <div className='border border-black rounded-lg p-6'>

            <p className='text-secondary text-2xl'>{name}</p>
            {slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-600'>No slots Available</span>}
            <p className='mb-3'>{slots.length} space Available</p>

            <label
                disabled={slots.length === 0}
                onClick={() => setTreatment(service)}
                htmlFor="booking-modal"
                className="btn btn-secondary px-3 py-1 border border-black rounded-lg disabled:bg-slate-600 hover:bg-green-600">Book Appointment</label>

        </div>
    );
}

export default Service;
