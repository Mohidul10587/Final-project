import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({date}) => {
    const [treatment , setTreatment]= useState(null)
const [services ,setServices] = useState([])
useEffect(()=>{
fetch('services.json')
.then(res=>res.json())
.then(data=>setServices(data))

},[])

    return (
        <div>
            <h1 className='text-center text-2xl my-6 text-primary'>Available Appointment on {format (date,'PP')}</h1>

<div className='grid grid-cols-3 gap-4'>
    {services.map(service=><Service 
    key={service._id}
    service={service}
    setTreatment={setTreatment}
    >      
    </Service>)}
</div>
{treatment && <BookingModal treatment={treatment} 
date={date}></BookingModal>}
        </div>
    );
}

export default AvailableAppointment;
