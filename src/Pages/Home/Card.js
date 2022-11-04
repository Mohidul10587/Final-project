import React from 'react';
import treatment from '../../assets/images/treatment.png'
const Card = () => {
    return (
       <div className="card lg:card-side bg-base-100 shadow-xl mt-24 border border-gray-400">
         <figure><img className='w-56' src={treatment} alt="Album"/></figure>
         <div className="card-body">
           <h2 className="card-title">New album is released!</h2>
           <p>Click the button to listen on Spotiwhy app.</p>
           <div className="card-actions justify-end">
             <button className="btn btn-primary">Listen</button>
           </div>
         </div>
       </div>
    );
}

export default Card;
