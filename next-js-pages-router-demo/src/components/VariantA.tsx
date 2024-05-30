import React from 'react'

export const VariantA = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            <h1 className='text-4xl font-bold tracking-tight'>Shipping features made easy.</h1>
            <p className='text-slate-700 mb-4 text-center'>Our platform provides a simple solution for controlling and experimenting with your features.</p>
            <button className='p-4 rounded-md bg-black text-white w-32 flex justify-center'>Get started</button>
        </div>
    )
}