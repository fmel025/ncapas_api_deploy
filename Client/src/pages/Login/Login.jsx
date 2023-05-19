import React from 'react'
import Layout from '../../components/Layout/Layout'
import { UimGoogle } from '@iconscout/react-unicons-monochrome'

function Login() {
  return (
    <Layout>
    <h1 className="text-5xl my-6 font-bold text-main mb-10 mt-20">EventMate</h1>
    <div className="rounded-md w-2/3 flex-col justify-center p-10 bg-white">
        <h1 className='font-semibold text-2xl text-center'>Incio de sesion</h1>
        <p className='font-semibold'>Correo electronico:</p>
        <input type='text' className='rounded-md border-2 border-gray-300 w-full p-2 my-2 bg-slate-200' placeholder='example@gmail.com'></input>
        <p className='font-semibold'>Contraseña:</p>
        <input type='password' className='rounded-md border-2 border-gray-300 w-full p-2 my-2 bg-slate-200' placeholder='********'></input>
        <div className='flex flex-col justify-center items-center my-5'>
            <button className='rounded-md border-2 border-gray-300 w-2/3 p-2 my-2 bg-main text-white font-semibold'>Iniciar sesion</button>
            <div className="border-t border-gray-300 my-2 w-4/5"></div>
        </div>
        {/* Google login button */}
        <div className='flex flex-col justify-center items-center my-5'>
            <button className='rounded-md border-2 border-gray-300 w-2/3 p-2 bg-white text-black font-semibold'>
              <UimGoogle className='mr-2 text-main'/>
              Iniciar sesion con Google
            </button>
        </div>
    </div>
    </Layout>
  )
}

export default Login