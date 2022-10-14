
import React from 'react';
import { format } from 'date-fns'
const BookingModal = ({ treatment, date, setTreatment }) => {
    const { _id, name, slot } = treatment;

    const handleBooking = (event) => {
        event.preventDefault();
        const selectedValue = event.target.select.value
        console.log(_id, name, selectedValue)
        setTreatment(null)
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
                            {slot.map(singleSlot => <option value={singleSlot} key={singleSlot}>{singleSlot}</option>)}
                        </select>
                        <input name='name' type="text" placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <input name='email' type="email" placeholder='email' className="input input-bordered w-full max-w-xs" />
                        <input type='number' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" value='Submit' />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default BookingModal;
