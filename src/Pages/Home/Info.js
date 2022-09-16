import React from 'react';
import InfoCard from './InfoCard.js'
import clock from '../../assets/icons/clock.svg'
const Info = () => {
    return (
        <div>
          <InfoCard img={clock} />
          <InfoCard img={clock} />
          <InfoCard img={clock} />
        </div>
    );
}

export default Info;
