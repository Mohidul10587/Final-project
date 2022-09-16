import React from 'react'

import fluoride  from '../../assets/images /fluoride.svg'
import cavity   from '../../assets/images/cavity.svg'
import whitening  from '../../assets/images/whitening.svg'

import Service from './Service'

const Services  = () => {
  
  
  const services =[
    {
      _id:1,
      name:'',
      service :'',
      img:fluoride
      
    },
{
  _id: 2,
  name: '',
  service: '',
  img: cavity

},
{
  _id: 3,
  name: '',
  service: '',
  img: whitening

}
    ]
  
  
    return (  
    <>
 <p className='my-4'> Our Servic</p>
      <div>
      
      
      {services.map(service=>{
        
        <Service service={service} />
      })}
      </div>
      
    </>
    );
}

export default Services;
