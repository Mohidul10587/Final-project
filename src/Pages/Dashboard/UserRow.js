import React from 'react'
import { toast } from 'react-toastify';


const UserRow = ({ user, refetch }) => {
  const { email, roll } = user;

  const makeAdmin = () => {

    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res => {
      if (res.status === 403){
        toast.error('Failed to make an error')
      }
      return res.json()})
      .then(data => {
        if (data.modifiedCount > 0) {
          toast.success('Successfully added user as admin')
          refetch()
        }

      })
  }


  return (
    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>{roll !== 'admin' && <button onClick={makeAdmin}>Make Admin</button>} </td>
      <td><button>Remove User</button></td>

    </tr>
  )
}

export default UserRow