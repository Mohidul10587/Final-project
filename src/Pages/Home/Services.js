import React from 'react'

import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service'

const Services = () => {


  const services = [
    {
      _id: 1,
      name: 'Dental Care',
      description: '',
      img: fluoride

    },
    {
      _id: 2,
      name: 'Health Life',
      description: '',
      img: cavity

    },
    {
      _id: 3,
      name: 'Happy life',
      description: 'Health good',
      img: whitening

    }
  ]


  return (
    <div className='mt-24'>
      <p className='my-4 text-center text-3xl font-bold'> Our Servic</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>


        {services.map(service => <Service key={service._id} service={service}></Service> )}
      </div>

    </div>
  );
}

export default Services;
