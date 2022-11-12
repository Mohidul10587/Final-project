import React from 'react'
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {


  const { isLoading, data: users ,refetch} = useQuery('users', () =>
    fetch(`https://secure-wildwood-98183.herokuapp.com/user`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => res.json())
  )

  if (isLoading) return <Loading></Loading>

  return (
    <div className='mt-10'>
      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead className='border-[1px] border-gray-800'>
            <tr >
              <th className='border-[1px] border-gray-800 text-center'>User Email</th>
              <th className='border-[1px] border-gray-800 text-center'>User Roll</th>
              <th className='border-[1px] border-gray-800 text-center'>Remove</th>


            </tr>
          </thead>
          <tbody>

            {users.map(user => <UserRow key={user._id} user={user} refetch={refetch}></UserRow>)}

          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Users