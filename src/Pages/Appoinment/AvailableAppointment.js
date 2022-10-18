import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import BookingModal from './BookingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null)
    // const [services, setServices] = useState([])

    const formattedDate = format(date, 'PP')

    const { isLoading, error, refetch, data: services } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if (isLoading) return <Loading></Loading>

    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))

    // }, [formattedDate])

    return (
        <div>
            <h1 className='text-center text-2xl my-6 text-primary'>Available Appointment on {format(date, 'PP')}</h1>

            <div className='grid grid-cols-3 gap-4'>
                {services?.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                >
                </Service>)}
            </div>
            {treatment && <BookingModal
refetch={refetch}
                treatment={treatment}
                setTreatment={setTreatment}
                date={date}>

            </BookingModal>}
        </div>
    );
}

export default AvailableAppointment;
