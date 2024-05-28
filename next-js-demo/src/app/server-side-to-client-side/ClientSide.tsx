'use client'
import { FeaturesFlowConfig, FeaturesFlowProvider } from '@featuresflow/sdk-react'
import React from 'react'
import {MyComponent} from "@/components/my-component";

interface Props {
    treatments: Record<string, string>
}



export const ClientSide = (props: Props) => {

    const ffConfig: FeaturesFlowConfig = {
        authenticationKey: 'YOUR_AUTHENTICATION_KEY',
        identifier: 'YOUR_USER_ID',
        options: {
            prefetchedFeatures: props.treatments
        }
    }

    return (
        <FeaturesFlowProvider config={ffConfig}>
            <MyComponent />
        </FeaturesFlowProvider>
    )
}