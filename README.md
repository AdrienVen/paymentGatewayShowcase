# paymentGatewayShowcase
Showcase of my previous work using Vue.js, Node.js and Pug to implement a payment gateway using authorize.net.

The .js files were adapted from the [authorize.net sdk](https://github.com/AuthorizeNet/sdk-node/tree/master/test) to be used as standalone functions inside a component. The functions simply need to be imported and given the required arguments, allowing to seamlessly include them in a form checking function. Please note that in order for the functions to work, the API Login Key and the Transaction key provided in the constants.js file must be replaced with fresh ones from [authorize.net](https://www.authorize.net).

The .vue files were part of a much larger ecosystem of views and components, as such they will not render in their current state. I am working to bring them online by including them in a basic Vue app.
