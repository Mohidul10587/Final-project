import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {

  const { data: doctors, isLoading } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
    headers: {
      authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
  }).then(res => res.json()));




  if (isLoading) return <Loading></Loading>

  console.log(doctors)
  return (
    <div>Manage Doctors {doctors.length}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Specialist</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {doctors.map(doctor => <DoctorRow doctor={doctor} key={doctor._id}></DoctorRow> )}

          </tbody>
        </table>
      </div>
    </div>
  )
}









export default ManageDoctors