import { getFeatures, FeaturesFlowConfig } from '@featuresflow/sdk-base'
import React from 'react'
import {ClientSide} from "@/app/server-side-to-client-side/ClientSide";

const ffConfig: FeaturesFlowConfig = {
    authenticationKey: 'YOUR_AUTHENTICATION_KEY',
    trafficType: 'session',
    identifier: 'YOUR_USER_ID_10',
}

export async function Page() {
    const res = await getFeatures(ffConfig)

    const treatments = res.status === 'success' ? res.features : {}

    return (
        <ClientSide treatments={treatments}/>
    )
}

export default Page