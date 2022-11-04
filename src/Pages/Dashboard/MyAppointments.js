
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [user] = useAuthState(auth)
  useEffect(() => {
    if (user) {

      console.log(user.email)
      fetch(`http://localhost:5000/booking?patient=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
        .then(res => {
          console.log('res', res)
if(res.status === 401 || res.status=== 403){

  
}

          return res.json()
        })
        .then(data => setAppointments(data))

    }
  }, [user])


  return (
    <div>
      this is a appointment{appointments.length}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatment</th>

            </tr>
          </thead>

          <tbody>

            {
              appointments.map((a, index) => <tr key={index}>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>

              </tr>)
            }



          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyAppointments