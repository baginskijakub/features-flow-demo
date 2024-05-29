import { getFeatures, FeaturesFlowConfig as BaseFeaturesFlowConfig } from '@featuresflow/sdk-base'
import React from 'react'
import {MyComponent} from "@/components/my-component";
import { FeaturesFlowProvider, FeaturesFlowConfig } from '@featuresflow/sdk-react';

const ffConfig: BaseFeaturesFlowConfig = {
    authenticationKey: 'YOUR_AUTHENTICATION_KEY',
    identifier: 'YOUR_USER_ID',
    trafficType: 'session',
}

export default function ServerSideToClientSide({ treatments } : { treatments: Record<string, string> }) {

    const ffConfigExtended: FeaturesFlowConfig= {
        authenticationKey: 'YOUR_AUTHENTICATION_KEY',
        identifier: 'YOUR_USER_ID',
        options: {
            prefetchedFeatures: treatments
        }
    }

    return (
        <FeaturesFlowProvider config={ffConfigExtended}>
            <MyComponent/>
        </FeaturesFlowProvider>
    );
}

export async function getServerSideProps() {

    const res = await getFeatures(ffConfig)

    const treatments = res.status === 'success' ? res.features : {}

    return { props: { treatments:  treatments} }
}

