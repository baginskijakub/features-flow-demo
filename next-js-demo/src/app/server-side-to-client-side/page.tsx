import { getFeatures, FeaturesFlowConfig } from '@featuresflow/sdk-base'
import React from 'react'
import {FeaturesFlowProvider} from "@featuresflow/sdk-react";
import {MyComponent} from "@/components/my-component";

const ffConfig: FeaturesFlowConfig = {
    authenticationKey: 'YOUR_AUTHENTICATION_KEY',
    trafficType: 'session',
    identifier: 'YOUR_USER_ID',
}

export default async function ServerSideToClientSide() {
    const res = await getFeatures(ffConfig)

    const treatments = res.status === 'success' ? res.features : {}

    return (
        <FeaturesFlowProvider config={{
            authenticationKey: 'YOUR_AUTHENTICATION_KEY',
            identifier: 'YOUR_USER_ID',
            options: {
                prefetchedFeatures: treatments
            }
        }}>
            <MyComponent />
        </FeaturesFlowProvider>
    )
}