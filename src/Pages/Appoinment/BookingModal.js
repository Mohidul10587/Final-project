import React from 'react';

const BookingModal = ({ treatment }) => {
    const {name} =treatment
    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="font-bold text-lg">{name}</h3>
                    <form>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="submit" placeholder="Type here" className="btn btn-secondary w-full max-w-xs" value ='Submit' />
                    </form>
                    
                </div>
            </div>
        </div>
    );
}

export default BookingModal;
