
import React, { useState } from 'react';
import { format } from 'date-fns'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const BookingModal = ({ treatment, date, setTreatment ,refetch}) => {
    const [user] = useAuthState(auth);
    const formateData = format(date, 'PP')
    const { _id, name, slots } = treatment;


    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.select.value
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formateData,
            slot: slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        }
        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.success) {
                    toast(`Appointment is set ${formateData} at ${slot}`)
                } else {
                    toast.error(`Have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
                }

                refetch()
                setTreatment(null)
            })

    }

    return (

        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking}>
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="select" className="select select-bordered w-full max-w-xs">
                            {slots.map(singleSlot => <option value={singleSlot} key={singleSlot}>{singleSlot}</option>)}
                        </select>
                        <input name='name' type="text" disabled value={user.displayName || ''} className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" disabled value={user.email || ''} className="input input-bordered w-full max-w-xs" />
                        <input type='number' placeholder="Phone" name='phone' className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default BookingModal;
