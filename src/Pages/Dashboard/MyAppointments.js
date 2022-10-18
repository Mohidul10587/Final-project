import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointment, setAppointment] = useState([])
    const [user] = useAuthState(auth)
    useEffect(() => {
       if(user){

        console.log(user.email)
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res => res.json())
        .then(data => setAppointment(data))

}
       }, [user])


    return (
        <div>
            this is a appointment{appointment.length}
        </div>
    )
}

export default MyAppointments