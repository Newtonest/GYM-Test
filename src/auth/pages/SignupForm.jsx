import React from 'react'
import useForm from '../../hooks/useForm'


const SignupForm = () => {

    const {onInputChange} = useForm({})

    return (
        <form className='form'>
            <input
                type="text"
                placeholder='Name'
                name='name'
                onChange={onInputChange}
            />
            <input
                type="text"
                placeholder='Username'
                name='username'
                onChange={onInputChange}
            />
            <input
                type="email"
                placeholder='Email'
                name='email'
                onChange={onInputChange}
            />
            <input
                type="password"
                placeholder='Password'
                name='username'
                onChange={onInputChange}
            />
            <button type='submit'>Create account</button>

    </form>
    )
}

export default SignupForm
