import React from 'react'
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';


const AddDoctor = () => {

    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

    const imageStorageKey = '6c0277e2286d8c4a1059080d1574e2a7'

    const onSubmit = async data => {
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        fetch(url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(result => {
                if (result.success) {

                    const imgUrl = result.data.url

                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialization: data.specialization,
                        img: imgUrl
                    }

                    fetch('http://localhost:5000/doctor', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    }).then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                toast.success('Doctor added successfully')
                                reset()
                            } else {
                                toast.error('Failed to added')
                            }
                        })
                }
            })
    }

    if (isLoading) return <p>Loading</p>

    return (
        <div className='pt-24'>
            <h1>add a doctor</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>

                    </label>
                    <input

                        type="text"
                        placeholder="Name"
                        className="input input-bordered border-black w-full max-w-xs"

                        {...register("name", {
                            required: {
                                value: true,
                                message: 'This is required field'
                            }

                        })} />

                    <label className="label">

                        {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name?.message}</span>}

                    </label>

                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>

                    </label>
                    <input

                        type="email"
                        placeholder="Email"
                        className="input input-bordered border-black w-full max-w-xs"

                        {...register("email", {
                            required: {
                                value: true,
                                message: 'This is required field'
                            },
                            pattern: {
                                value: /[A-Za-z]{3}/,
                                message: 'This is wrong email'
                            }
                        })} />

                    <label className="label">

                        {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email?.message}</span>}
                        {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email?.message}</span>}
                    </label>

                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Specialization</span>

                    </label>

                    <select   {...register("specialization")} className="input input-bordered border-black w-full max-w-xs">
                        {services.map(service => <option
                            key={service._id}
                            value={service.name}>
                            {service.name}
                        </option>)}

                    </select>


                </div>


                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Photo</span>

                    </label>
                    <input
                        type="file"

                        {...register("image", {
                            required: {
                                value: true,
                                message: 'This is required field'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name?.message}</span>}
                    </label>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline w-80">Add</button>


            </form>
        </div>
    )
}

export default AddDoctor