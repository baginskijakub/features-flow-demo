# FeaturesFlow Next.js Pages Router Demo

This project contains a simple demo of a Next.js application that demonstrates the use of the FeaturesFlow SDK depending on you rendering strategy.

### Client-side fetch

The client-side fetch is the simplest way to use the FeaturesFlow SDK. It might add a delay to the page rendering process, so we recommend using it when you don't need the feature toggles to be available immediately. An example of that would be when you need your features to be toggled below the fold. You can control the behaviour of rendering/awaiting the features through `config.options.awaitFeatures` prop.

You can find an example of that under `src/pages/client-side`

### Server-side fetch

The server-side fetch is the recommended way to use the FeaturesFlow SDK in a Next.js application. It is a perfect fit when you can toggle features on page level.

You can find an example of that under `src/pages/server-side`

### Server-side -> Client-side fetch

Since you can rarely toggle on page level, we came up with a solution that allows to provide the server-side fetched features to the client-side.

You can fetch the features on the server-side and pass them to the client-side through the `config.prefetchedFeatures` prop. This way you can use the features in your client-side code without the need to fetch them again.

You can find an example of that under `src/pages/server-side-to-client-side`
