import React from 'react'
import useForm from '../../hooks/useForm'

const LoginForm = () => {

  const {onInputChange} = useForm({})

  return (
    <form className='form'>
      <input
        type="text"
        placeholder='Username'
        name='username'
        onChange={onInputChange}
      />
      <input
        type="password"
        placeholder='Password'
        name='username'
        onChange={onInputChange}
      />
      <button type='submit'>Sign in</button>

    </form>
  )
}

export default LoginForm
