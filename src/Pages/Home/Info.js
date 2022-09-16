import React from 'react';
import InfoCard from './InfoCard.js'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import  from '../../assets/icons/.svg'
const Info = () => {
    return (
        <div>
          <InfoCard img={clock} />
          <InfoCard img={marker} />
          <InfoCard img={clock} />
        </div>
    );
}

export default Info;
