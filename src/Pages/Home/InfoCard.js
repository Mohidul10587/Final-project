import React from 'react';


const InfoCard = ({img}) => {
    return (
     <div className="card lg:card-side bg-accent shadow-xl">
  <figure><img src={img} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      
    </div>
  </div>
</div>
    );
}

export default InfoCard;
