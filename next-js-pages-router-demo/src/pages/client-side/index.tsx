import {MyComponent} from "@/components/my-component";
import { FeaturesFlowProvider } from "@featuresflow/sdk-react";

const ffConfig= {
    authenticationKey: 'YOUR_AUTHENTICATION_KEY',
    identifier: 'YOUR_USER_ID',
}

export default function ClientSide() {

    return (
        <FeaturesFlowProvider config={ffConfig}>
            <MyComponent />
        </FeaturesFlowProvider>
    )
}
