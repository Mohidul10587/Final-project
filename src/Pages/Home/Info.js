import React from 'react';
import InfoCard from './InfoCard.js'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-4'>
          <InfoCard cardTitle='Opening Hours' img={clock} />
          <InfoCard cardTitle='xxxxxxxxxxxxx' img={marker} />
          <InfoCard cardTitle='yyyyyyyyuyyuy' img={phone} />
        </div>
    );
}

export default Info;
