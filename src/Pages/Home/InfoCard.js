import React from 'react';


const InfoCard = ({ img, cardTitle }) => {
  return (
    <div className="card lg:card-side bg-accent shadow-xl text-white mt-12">
      <figure className='ml-4'>
        <img src={img} alt="Album" />
        </figure>
      <div className="card-body">
        <h2 className="card-title">{cardTitle}</h2>
        <p>Click the button to listen on Spotiwhy app.</p>

      </div>
    </div>
  );
}

export default InfoCard;
