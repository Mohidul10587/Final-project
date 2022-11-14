const DoctorRow = ({ doctor }) => {

    return (
        <tr>
            <th>1</th>
            <td><div className="avatar">
                <div className="w-12 rounded">
                    <img src={doctor.img} alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{doctor.name}</td>
            <td>{doctor.specialization}</td>
            <td>Delete</td>
        </tr>
    )

}

export default DoctorRow