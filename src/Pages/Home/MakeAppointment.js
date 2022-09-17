import React from 'react'
import doctor from '../../assets/images/doctor.png'
import Appointment from '../../assets/images/appointment.png'
import Button from '../Shared/Button'

const MakeAppointment = () => {
  return (
    <section  style={{
      background:`url(${Appointment})`
    }} className="flex justify-center items-center mt-44">
        <div className='flex-1 -mt-[159px]'>
            <img src={doctor} alt="" />
        </div>
<div className='flex-1'>
<h3 className="text-xl text-primary">Appointment</h3>
<h2 className='text-3xl text-white'>Make an appointment</h2>
<p className='text-white'>H Hello doctor please help me Hello doctor please help me Hello doctor please help me Hello doctor please help me Hello doctor please help me Hello doctor please help me Hello doctor please help me Hello doctor please help meello doctor please help me Hello doctor please help me Hello doctor please help me Hello doctor please help me</p>

<Button> Appointment</Button>
</div>

    </section>
  )
}

export default MakeAppointment