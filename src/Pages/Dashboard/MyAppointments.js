
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {
  const [appointments, setAppointments] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    if (user) {

      fetch(`https://secure-wildwood-98183.herokuapp.com/booking?patient=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
      })
        .then(res => {
          console.log('res', res)
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/')

          }

          return res.json()
        })
        .then(data => setAppointments(data))

    }
  }, [user,navigate])


  return (
    <div className='mt-4'>
   
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className='border-[1px] border-gray-800'>Name</th>
              <th className='border-[1px] border-gray-800'>Date</th>
              <th className='border-[1px] border-gray-800'>Time</th>
              <th className='border-[1px] border-gray-800'>Treatment</th>

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