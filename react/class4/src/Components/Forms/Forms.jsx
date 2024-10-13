import React, { useState } from 'react'

export default function Forms() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        Phone: '',
        email: ''
    })
    function handleChange(e) {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    function dataJaRahaHa(e) {
        e.preventDefault()
        console.log(form)
    }


    return (
        <div>
            <form onSubmit={dataJaRahaHa}>
                <div>
                    <label htmlFor="">Name:</label>
                    <input type="text"
                        name='firstName'
                        onChange={handleChange}
                        value={form.firstName}
                    /> <br /> <br />
                    <label htmlFor="">LastName</label>
                    <input type="text"
                        name='lastName'
                        onChange={handleChange}
                        value={form.lastName}
                    /> <br /> <br />
                    <label htmlFor="">Phone</label>
                    <input type="no"
                        name='Phone'
                        onChange={handleChange}
                        value={form.Phone}
                    /> <br /> <br />
                    <label htmlFor="">Email</label>
                    <input type="email"
                        name='email'
                        onChange={handleChange}
                        value={form.email}
                    />
                    
                    <button type='submit' >send data</button>


                </div>
            </form>
            

        </div>
    )
}
