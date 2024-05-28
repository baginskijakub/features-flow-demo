import {VariantA} from "@/components/VariantA";
import {VariantB} from "@/components/VariantB";
import { FeaturesFlowClient, FeaturesFlowConfig } from '@featuresflow/sdk-js';

export default async function ServerSide() {

    const ffConfig: FeaturesFlowConfig = {
        authenticationKey: 'YOUR_AUTHENTICATION_KEY',
        trafficType: 'session',
        identifier: 'YOUR_USER_ID',
    }

    const client = new FeaturesFlowClient()

    await client.init(ffConfig)

    const treatment = client.getFeatureToggle('demo-feature-toggle')

    return (
        <main className='flex h-screen w-screen justify-center items-center'>
            <div className='fixed top-0 left-0 px-4 py-2 bg-indigo-700 text-white rounded-br-md'>{treatment}</div>

            {treatment === 'VariantA' && <VariantA />}

            {treatment === 'VariantB' && <VariantB />}
        </main>
    )
}
