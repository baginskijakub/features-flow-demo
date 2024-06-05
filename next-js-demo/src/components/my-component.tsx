'use client'
import React from 'react'
import {VariantA} from "@/components/VariantA";
import {VariantB} from "@/components/VariantB";
import { useFeatureToggle } from '@featuresflow/sdk-react';

export const MyComponent = () => {
    const treatment = useFeatureToggle('demo-feature-toggle')


    return (
        <main className='flex h-screen w-screen justify-center items-center'>
            <div className='fixed top-0 left-0 px-4 py-2 bg-indigo-700 text-white rounded-br-md'>{treatment}</div>

            {treatment === 'VariantA' && <VariantA />}

            {treatment === 'VariantB' && <VariantB />}
        </main>
    )
}