'use client'
import { FeaturesFlowProvider } from '@featuresflow/sdk-react';
import {MyComponent} from "@/components/my-component";

const ffConfig= {
    authenticationKey: 'YOUR_AUTHENTICATION_KEY',
    identifier: 'YOUR_USER_ID',
}

export default function ServerSide() {

    return (
        <FeaturesFlowProvider config={ffConfig}>
            <MyComponent />
        </FeaturesFlowProvider>
    )
}
