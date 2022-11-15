import { toast } from "react-toastify"

const DoctorRow = ({ doctor, index, refetch }) => {

    const handleDelete = email => {

        fetch(`http://localhost:5000/doctor/${email}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    toast.success(`${doctor.name} is deleted`)
                    refetch()
                }
            })


    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div className="avatar">
                <div className="w-8 rounded">
                    <img src={doctor.img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{doctor.name}</td>
            <td>{doctor.specialization}</td>
            <td onClick={() => handleDelete(doctor.email)}>Delete</td>
        </tr>
    )

}

export default DoctorRow