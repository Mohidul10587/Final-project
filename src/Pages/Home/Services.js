import React from 'react'

import fluoride  from '../../assets/images /fluoride.svg'
import cavity   from '../../assets/images/cavity.svg'
import whitening  from '../../assets/images/whitening.svg'

import Service from './Service'

const Services  = () => {
  
  
  const services =[
    {
      _id:1,
      name:'Dental Care',
      description :'',
      img:fluoride
      
    },
{
  _id: 2,
  name: 'Health Life',
  description: '',
  img: cavity

},
{
  _id: 3,
  name: '',
  description: 'Health good',
  img: whitening

}
    ]
  
  
    return (  
    <>
 <p className='my-4'> Our Servic</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
      
      
      {services.map(service=>{
        
        <Service key={service._id} service={service} />
      })}
      </div>
      
    </>
    );
}

export default Services;
