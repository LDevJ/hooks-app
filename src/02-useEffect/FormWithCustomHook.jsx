import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm} = useForm ({
        username: '',
        email: '',
        password: ''
    });

    const {username, email, password } = formState;

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
    //   console.log('Form cambio!');
    }, [formState]);

    useEffect(() => {
    // console.log('email cambio!');
    }, [email]);

  return (
    <>
        <h1>Formulario con custom Hook</h1>
        <hr />

        <input 
            type="text" 
            className='form-control'
            placeholder='Username'
            name='username'
            value={username}
            onChange={onInputChange}
        />

        <input 
            type="email" 
            className='form-control mt-3'
            placeholder='lg@gmail.com'
            name='email'
            value={email}
            onChange={onInputChange}
        />

            <input 
            type="password" 
            className='form-control mt-3'
            placeholder='***********'
            name='password'
            value={password}
            onChange={onInputChange}
        />

        <button onClick={onResetForm} className='btn btn-primary mt-2 mx-2'> Borrar </button>
    </>
  )
}
